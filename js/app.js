/**
 * FIT 刷题软件核心逻辑（Vue 3 · 瑞士极简架构）
 */

const STORAGE_KEY = "fit_quiz_clean_v2";
const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      bank: window.QUESTION_BANK || { title: "信息技术基础", chapters: [] },
      allQuestions: [],
      questionMap: {},
      currentTab: "home", // home | mistakes | search | stats | quiz
      activeChapters: ["ch1"],

      // 持久化数据
      records: {},
      mistakes: [],
      favorites: [],
      lastSession: null,
      settings: {
        darkMode: false,
        autoNextOnCorrect: false,
        autoRemoveMistake: false
      },

      // 错题本三级筛选
      mistakeFilter: {
        chapterId: "all",
        sectionId: "all",
        type: "all"
      },

      // 搜题与收藏
      search: {
        keyword: "",
        scope: "all" // all | fav
      },

      // 小节练习模式面板
      sectionSheet: {
        open: false,
        chapter: null,
        section: null,
        launchMode: "practice" // practice | memorize
      },

      // 练习会话状态
      quiz: {
        title: "",
        mode: "practice", // practice | memorize
        queue: [],
        currentIndex: 0,
        tempMultiSelected: [],
        tempBlankText: "",
        sessionResults: {},
        showSheet: false
      },

      // 辅助浮层状态
      toastMessage: "",
      toastTimer: null,
      lightboxSrc: "",
      confirmModal: {
        open: false,
        title: "",
        message: "",
        onConfirm: null
      },
      backupModal: {
        open: false,
        mode: "export", // export | import
        text: ""
      }
    };
  },

  computed: {
    navTitle() {
      const titles = {
        home: "章节题库",
        mistakes: "错题本",
        search: "检索与收藏",
        stats: "统计与设置"
      };
      return titles[this.currentTab] || "章节题库";
    },

    stats() {
      const totalCount = this.allQuestions.length;
      const answeredIds = Object.keys(this.records).filter((id) => !!this.questionMap[id]);
      const answeredCount = answeredIds.length;
      const correctCount = answeredIds.filter((id) => this.records[id] && this.records[id].isCorrect).length;
      const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
      return { totalCount, answeredCount, correctCount, accuracy };
    },

    currentQuestion() {
      return this.quiz.queue[this.quiz.currentIndex] || null;
    },

    currentSessionResult() {
      if (!this.currentQuestion) return null;
      return this.quiz.sessionResults[this.currentQuestion.id] || null;
    },

    isQuestionRevealed() {
      if (!this.currentQuestion) return false;
      return this.quiz.mode === "memorize" || !!this.currentSessionResult;
    },

    quizProgressPercent() {
      if (!this.quiz.queue.length) return 0;
      return Math.round(((this.quiz.currentIndex + 1) / this.quiz.queue.length) * 100);
    },

    multiSubmitBtnText() {
      const selected = this.quiz.tempMultiSelected;
      if (!selected || selected.length === 0) {
        return "确认提交";
      }
      return "确认提交 (" + selected.join("") + ")";
    },

    mistakeObjects() {
      return this.mistakes.map((id) => this.questionMap[id]).filter(Boolean);
    },

    mistakeChapterOptions() {
      const opts = [{ text: "全部章节 (" + this.mistakeObjects.length + ")", value: "all" }];
      this.bank.chapters.forEach((ch) => {
        const count = this.mistakeObjects.filter((q) => q.chapterId === ch.id).length;
        opts.push({
          text: ch.number + " (" + count + ")",
          value: ch.id
        });
      });
      return opts;
    },

    mistakeSectionOptions() {
      const chId = this.mistakeFilter.chapterId;
      const baseList =
        chId === "all"
          ? this.mistakeObjects
          : this.mistakeObjects.filter((q) => q.chapterId === chId);

      const opts = [{ text: "全部小节 (" + baseList.length + ")", value: "all" }];

      this.bank.chapters.forEach((ch) => {
        if (chId !== "all" && ch.id !== chId) return;
        ch.sections.forEach((sec) => {
          const count = this.mistakeObjects.filter((q) => q.sectionId === sec.id).length;
          opts.push({
            text: sec.number + " " + sec.title + " (" + count + ")",
            value: sec.id
          });
        });
      });
      return opts;
    },

    mistakeTypeOptions() {
      return [
        { text: "全部题型", value: "all" },
        { text: "单选题", value: "single" },
        { text: "多选题", value: "multiple" },
        { text: "判断题", value: "judge" },
        { text: "填空题", value: "blank" }
      ];
    },

    filteredMistakes() {
      return this.mistakeObjects.filter((q) => {
        if (this.mistakeFilter.chapterId !== "all" && q.chapterId !== this.mistakeFilter.chapterId) {
          return false;
        }
        if (this.mistakeFilter.sectionId !== "all" && q.sectionId !== this.mistakeFilter.sectionId) {
          return false;
        }
        if (this.mistakeFilter.type !== "all" && q.type !== this.mistakeFilter.type) {
          return false;
        }
        return true;
      });
    },

    mistakeSectionSummary() {
      const map = {};
      this.filteredMistakes.forEach((q) => {
        if (!map[q.sectionId]) {
          map[q.sectionId] = {
            chapterId: q.chapterId,
            chapterNumber: q.chapterNumber,
            chapterTitle: q.chapterTitle,
            sectionId: q.sectionId,
            sectionNumber: q.sectionNumber,
            sectionTitle: q.sectionTitle,
            count: 0
          };
        }
        map[q.sectionId].count++;
      });
      return Object.values(map);
    },

    searchedQuestions() {
      const kw = (this.search.keyword || "").trim().toLowerCase();
      return this.allQuestions.filter((q) => {
        if (this.search.scope === "fav" && !this.favorites.includes(q.id)) {
          return false;
        }
        if (!kw) return true;
        const text = [
          q.stem,
          q.explanation,
          ...(q.options || []).map((o) => o.key + "." + o.text)
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return text.includes(kw);
      });
    },

    typeStats() {
      const defs = [
        { type: "single", label: "单选题" },
        { type: "multiple", label: "多选题" },
        { type: "judge", label: "判断题" },
        { type: "blank", label: "填空题" }
      ];
      return defs.map((d) => {
        const list = this.allQuestions.filter((q) => q.type === d.type);
        const doneList = list.filter((q) => !!this.records[q.id]);
        const rightList = doneList.filter((q) => this.records[q.id] && this.records[q.id].isCorrect);
        const accuracy = doneList.length > 0 ? Math.round((rightList.length / doneList.length) * 100) : 0;
        return {
          ...d,
          total: list.length,
          done: doneList.length,
          accuracy
        };
      });
    }
  },

  created() {
    this.buildQuestionIndex();
    this.loadState();
    this.applyTheme();
    this.bindKeyboardEvents();
  },

  methods: {
    buildQuestionIndex() {
      const list = [];
      const map = {};
      (this.bank.chapters || []).forEach((ch) => {
        (ch.sections || []).forEach((sec) => {
          (sec.questions || []).forEach((q, idx) => {
            const item = {
              ...q,
              chapterId: ch.id,
              chapterNumber: ch.number,
              chapterTitle: ch.title,
              sectionId: sec.id,
              sectionNumber: sec.number,
              sectionTitle: sec.title,
              seq: idx + 1
            };
            list.push(item);
            map[q.id] = item;
          });
        });
      });
      this.allQuestions = list;
      this.questionMap = map;
    },

    loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        this.records = parsed.records || {};
        this.mistakes = (parsed.mistakes || []).filter((id) => !!this.questionMap[id]);
        this.favorites = (parsed.favorites || []).filter((id) => !!this.questionMap[id]);
        this.lastSession = parsed.lastSession || null;
        this.settings = Object.assign({}, this.settings, parsed.settings || {});
      } catch (e) {
        console.warn("Load state error:", e);
      }
    },

    saveState() {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            records: this.records,
            mistakes: this.mistakes,
            favorites: this.favorites,
            lastSession: this.lastSession,
            settings: this.settings
          })
        );
      } catch (e) {
        console.warn("Save state error:", e);
      }
    },

    applyTheme() {
      const isDark = !!this.settings.darkMode;
      document.documentElement.classList.toggle("dark", isDark);
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute("content", isDark ? "#0E0E0D" : "#F7F7F5");
      }
    },

    showToast(msg) {
      this.toastMessage = msg;
      if (this.toastTimer) clearTimeout(this.toastTimer);
      this.toastTimer = setTimeout(() => {
        this.toastMessage = "";
      }, 2000);
    },

    toggleDarkMode() {
      this.settings.darkMode = !this.settings.darkMode;
      this.applyTheme();
      this.saveState();
    },

    toggleSetting(key) {
      this.settings[key] = !this.settings[key];
      this.saveState();
    },

    toggleChapter(chId) {
      const idx = this.activeChapters.indexOf(chId);
      if (idx === -1) {
        this.activeChapters.push(chId);
      } else {
        this.activeChapters.splice(idx, 1);
      }
    },

    openFavoritesTab() {
      this.search.scope = "fav";
      this.currentTab = "search";
    },

    getChapterTotalCount(chId) {
      return this.allQuestions.filter((q) => q.chapterId === chId).length;
    },

    getChapterDoneCount(chId) {
      return this.allQuestions.filter((q) => q.chapterId === chId && !!this.records[q.id]).length;
    },

    getSectionDoneCount(secId) {
      return this.allQuestions.filter((q) => q.sectionId === secId && !!this.records[q.id]).length;
    },

    getSectionRemainingCount(secId) {
      return this.allQuestions.filter((q) => q.sectionId === secId && !this.records[q.id]).length;
    },

    getSectionMistakeCount(secId) {
      return this.mistakeObjects.filter((q) => q.sectionId === secId).length;
    },

    getSectionProgress(secId) {
      const list = this.allQuestions.filter((q) => q.sectionId === secId);
      if (list.length === 0) return 0;
      const done = list.filter((q) => !!this.records[q.id]).length;
      return Math.round((done / list.length) * 100);
    },

    getSectionAccuracy(secId) {
      const done = this.allQuestions.filter((q) => q.sectionId === secId && !!this.records[q.id]);
      if (done.length === 0) return 0;
      const right = done.filter((q) => this.records[q.id] && this.records[q.id].isCorrect).length;
      return Math.round((right / done.length) * 100);
    },

    countByType(secId, type) {
      return this.allQuestions.filter((q) => q.sectionId === secId && q.type === type).length;
    },

    openSectionSheet(ch, sec) {
      if (!sec || !sec.questions || sec.questions.length === 0) return;
      this.sectionSheet = {
        open: true,
        chapter: ch,
        section: sec,
        launchMode: "practice"
      };
    },

    launchSection(filterType) {
      const sec = this.sectionSheet.section;
      const launchMode = this.sectionSheet.launchMode || "practice";
      if (!sec) return;
      this.sectionSheet.open = false;
      this.startSectionQuiz(sec.id, filterType, launchMode);
    },

    startQuiz(payload) {
      const title = payload.title;
      const questions = payload.questions;
      const startIndex = payload.startIndex || 0;
      const mode = payload.mode || "practice";

      if (!questions || questions.length === 0) {
        this.showToast("当前无可用题目");
        return;
      }

      this.quiz = {
        title: title,
        mode: mode,
        queue: questions,
        currentIndex: Math.min(Math.max(0, startIndex), questions.length - 1),
        tempMultiSelected: [],
        tempBlankText: "",
        sessionResults: {},
        showSheet: false
      };

      this.lastSession = {
        title: title,
        queueIds: questions.map((q) => q.id),
        index: this.quiz.currentIndex
      };

      this.currentTab = "quiz";
      this.saveState();
      window.scrollTo({ top: 0 });
    },

    startSectionQuiz(secId, filterType, mode = "practice") {
      const secQuestions = this.allQuestions.filter((q) => q.sectionId === secId);
      if (secQuestions.length === 0) return;

      let list = secQuestions;
      let label = "顺序练习";
      if (filterType === "unanswered") {
        list = secQuestions.filter((q) => !this.records[q.id]);
        label = "仅刷未做";
      } else if (filterType === "mistakes") {
        list = secQuestions.filter((q) => this.mistakes.includes(q.id));
        label = "本节错题";
      } else if (filterType === "single") {
        list = secQuestions.filter((q) => q.type === "single");
        label = "单选题";
      } else if (filterType === "multiple") {
        list = secQuestions.filter((q) => q.type === "multiple");
        label = "多选题";
      } else if (filterType === "judge") {
        list = secQuestions.filter((q) => q.type === "judge");
        label = "判断题";
      } else if (filterType === "blank") {
        list = secQuestions.filter((q) => q.type === "blank");
        label = "填空题";
      } else if (filterType === "random") {
        list = [...secQuestions].sort(() => Math.random() - 0.5);
        label = "随机乱序";
      }

      if (list.length === 0) {
        this.showToast("该分类下暂无题目");
        return;
      }

      let startIdx = 0;
      if (filterType === "all") {
        const firstUnanswered = list.findIndex((q) => !this.records[q.id]);
        if (firstUnanswered > 0) startIdx = firstUnanswered;
      }

      const first = secQuestions[0];
      const title = first.sectionNumber + " " + first.sectionTitle + " · " + label;
      this.startQuiz({ title: title, questions: list, startIndex: startIdx, mode: mode });
    },

    resumeLastSession() {
      if (!this.lastSession || !this.lastSession.queueIds) return;
      const list = this.lastSession.queueIds.map((id) => this.questionMap[id]).filter(Boolean);
      if (list.length === 0) return;
      this.startQuiz({
        title: this.lastSession.title || "继续练习",
        questions: list,
        startIndex: this.lastSession.index || 0
      });
    },

    exitQuiz() {
      this.currentTab = "home";
      window.scrollTo({ top: 0 });
    },

    getOptionClass(key) {
      const q = this.currentQuestion;
      if (!q) return "";
      const isMulti = q.type === "multiple";

      if (!this.isQuestionRevealed) {
        if (isMulti && this.quiz.tempMultiSelected.includes(key)) {
          return "selected";
        }
        return "";
      }

      const correctSet = new Set(Array.isArray(q.answer) ? q.answer : [q.answer]);
      const res = this.currentSessionResult;
      const userSet = new Set(
        res ? (Array.isArray(res.userAnswer) ? res.userAnswer : [res.userAnswer]) : []
      );

      if (this.quiz.mode === "memorize" || !res) {
        return correctSet.has(key) ? "correct" : "";
      }

      if (correctSet.has(key) && userSet.has(key)) {
        return "correct";
      }
      if (correctSet.has(key) && !userSet.has(key)) {
        return isMulti ? "missed" : "correct";
      }
      if (!correctSet.has(key) && userSet.has(key)) {
        return "wrong";
      }
      return "";
    },

    getOptionStatusLabel(key) {
      if (!this.isQuestionRevealed) return "";
      const cls = this.getOptionClass(key);
      if (cls === "correct") return "正确";
      if (cls === "wrong") return "错选";
      if (cls === "missed") return "漏选";
      return "";
    },

    onSelectOption(key) {
      const q = this.currentQuestion;
      if (!q || this.isQuestionRevealed) return;

      if (q.type === "single" || q.type === "judge") {
        const isCorrect = key === q.answer;
        this.commitAnswer(q, key, isCorrect);
      } else if (q.type === "multiple") {
        const pos = this.quiz.tempMultiSelected.indexOf(key);
        if (pos === -1) {
          this.quiz.tempMultiSelected.push(key);
          this.quiz.tempMultiSelected.sort();
        } else {
          this.quiz.tempMultiSelected.splice(pos, 1);
        }
      }
    },

    submitMultipleAnswer() {
      const q = this.currentQuestion;
      if (!q || q.type !== "multiple") return;
      if (this.quiz.tempMultiSelected.length === 0) {
        this.showToast("请至少选择一个选项");
        return;
      }
      const userStr = [...this.quiz.tempMultiSelected].sort().join("");
      const ansStr = (Array.isArray(q.answer) ? [...q.answer] : [q.answer]).sort().join("");
      const isCorrect = userStr === ansStr;
      this.commitAnswer(q, [...this.quiz.tempMultiSelected], isCorrect);
    },

    submitBlankAnswer() {
      const q = this.currentQuestion;
      if (!q || q.type !== "blank" || this.isQuestionRevealed) return;
      const raw = (this.quiz.tempBlankText || "").trim();
      if (!raw) {
        this.showToast("请输入填空答案");
        return;
      }
      const normUser = raw.replace(/\s+/g, "").toLowerCase();
      const accepted = (q.acceptedAnswers || [q.answer]).map((a) =>
        String(a).replace(/\s+/g, "").toLowerCase()
      );
      const isCorrect = accepted.includes(normUser);
      this.commitAnswer(q, raw, isCorrect);
    },

    revealBlankAnswerDirectly() {
      const q = this.currentQuestion;
      if (!q || q.type !== "blank") return;
      this.commitAnswer(q, "未填（查看答案）", false);
    },

    commitAnswer(q, userAnswer, isCorrect) {
      this.quiz.sessionResults[q.id] = {
        userAnswer: userAnswer,
        isCorrect: isCorrect
      };

      this.records[q.id] = {
        userAnswer: userAnswer,
        isCorrect: isCorrect,
        updatedAt: Date.now()
      };

      if (!isCorrect) {
        if (!this.mistakes.includes(q.id)) {
          this.mistakes.push(q.id);
        }
      } else if (this.settings.autoRemoveMistake) {
        const idx = this.mistakes.indexOf(q.id);
        if (idx !== -1) this.mistakes.splice(idx, 1);
      }

      this.saveState();

      if (isCorrect && this.settings.autoNextOnCorrect) {
        setTimeout(() => {
          if (this.currentTab === "quiz" && this.quiz.currentIndex < this.quiz.queue.length - 1) {
            this.nextQuestion();
          }
        }, 550);
      }
    },

    resetCurrentQuestion() {
      const q = this.currentQuestion;
      if (!q) return;
      delete this.quiz.sessionResults[q.id];
      this.quiz.tempMultiSelected = [];
      this.quiz.tempBlankText = "";
    },

    prevQuestion() {
      if (this.quiz.currentIndex > 0) {
        this.jumpToQuestion(this.quiz.currentIndex - 1);
      }
    },

    nextQuestion() {
      if (this.quiz.currentIndex < this.quiz.queue.length - 1) {
        this.jumpToQuestion(this.quiz.currentIndex + 1);
      }
    },

    jumpToQuestion(idx) {
      if (idx < 0 || idx >= this.quiz.queue.length) return;
      this.quiz.currentIndex = idx;
      this.quiz.tempMultiSelected = [];
      this.quiz.tempBlankText = "";
      this.quiz.showSheet = false;
      if (this.lastSession) {
        this.lastSession.index = idx;
        this.saveState();
      }
      window.scrollTo({ top: 0 });
    },

    isFavorited(qid) {
      return !!qid && this.favorites.includes(qid);
    },

    toggleFavorite(qid) {
      if (!qid) return;
      const idx = this.favorites.indexOf(qid);
      if (idx === -1) {
        this.favorites.push(qid);
        this.showToast("已收藏");
      } else {
        this.favorites.splice(idx, 1);
        this.showToast("已取消收藏");
      }
      this.saveState();
    },

    removeMistake(qid) {
      const idx = this.mistakes.indexOf(qid);
      if (idx !== -1) {
        this.mistakes.splice(idx, 1);
        this.saveState();
        this.showToast("已移出错题本");
      }
    },

    startFilteredMistakesQuiz() {
      if (this.filteredMistakes.length === 0) return;
      this.startQuiz({
        title: "错题重刷",
        questions: [...this.filteredMistakes],
        startIndex: 0
      });
    },

    startMistakesBySection(secId) {
      const list = this.mistakeObjects.filter((q) => q.sectionId === secId);
      if (list.length === 0) return;
      const first = list[0];
      this.startQuiz({
        title: first.chapterNumber + "·" + first.sectionNumber + " 错题专练",
        questions: list,
        startIndex: 0
      });
    },

    openMistakeQuestion(idx) {
      this.startQuiz({
        title: "错题本练习",
        questions: [...this.filteredMistakes],
        startIndex: idx
      });
    },

    formatAnswer(val) {
      if (val === undefined || val === null) return "";
      return Array.isArray(val) ? val.join("") : String(val);
    },

    openConfirm(title, message, onConfirm) {
      this.confirmModal = {
        open: true,
        title: title,
        message: message,
        onConfirm: onConfirm
      };
    },

    executeConfirm() {
      const fn = this.confirmModal.onConfirm;
      this.confirmModal.open = false;
      if (typeof fn === "function") fn();
    },

    clearRecords() {
      this.openConfirm(
        "清空做题记录",
        "确定清空所有已做题目的答题进度与最近练习状态吗？（错题本与收藏将保留）",
        () => {
          this.records = {};
          this.lastSession = null;
          this.saveState();
          this.showToast("已清空做题记录");
        }
      );
    },

    clearMistakes() {
      this.openConfirm(
        "清空错题本",
        "确定清空错题本中收录的所有题目吗？此操作不可撤销。",
        () => {
          this.mistakes = [];
          this.saveState();
          this.showToast("已清空错题本");
        }
      );
    },

    buildBackupPayload() {
      return JSON.stringify(
        {
          app: "FIT",
          version: 1,
          exportedAt: new Date().toISOString(),
          records: this.records,
          mistakes: this.mistakes,
          favorites: this.favorites,
          settings: this.settings
        },
        null,
        2
      );
    },

    exportBackupFile() {
      const payload = this.buildBackupPayload();
      const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const filename = "fit-backup-" + stamp + ".json";
      try {
        const blob = new Blob([payload], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        this.showToast("已触发文件导出：" + filename);
      } catch (e) {
        this.openBackupTextModal("export");
      }
    },

    openBackupTextModal(mode) {
      this.backupModal = {
        open: true,
        mode: mode,
        text: mode === "export" ? this.buildBackupPayload() : ""
      };
    },

    switchBackupModalMode(mode) {
      this.backupModal.mode = mode;
      this.backupModal.text = mode === "export" ? this.buildBackupPayload() : "";
    },

    copyBackupText() {
      const text = this.backupModal.text;
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => this.showToast("备份内容已复制到剪贴板"))
          .catch(() => this.fallbackCopyText(text));
      } else {
        this.fallbackCopyText(text);
      }
    },

    fallbackCopyText(text) {
      try {
        const el = document.createElement("textarea");
        el.value = text;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.showToast("备份内容已复制");
      } catch (e) {
        this.showToast("复制失败，请手动全选文本框复制");
      }
    },

    triggerFileImport() {
      if (this.$refs.backupFileInput) {
        this.$refs.backupFileInput.value = "";
        this.$refs.backupFileInput.click();
      }
    },

    onImportBackupFile(e) {
      const file = e.target && e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        this.applyBackupPayload(ev.target.result);
      };
      reader.onerror = () => {
        this.showToast("读取备份文件失败");
      };
      reader.readAsText(file, "utf-8");
    },

    applyBackupText() {
      this.applyBackupPayload(this.backupModal.text);
    },

    applyBackupPayload(rawText) {
      try {
        const parsed = JSON.parse((rawText || "").trim());
        if (!parsed || typeof parsed !== "object" || typeof parsed.records !== "object") {
          this.showToast("备份格式无效：缺少做题记录字段");
          return;
        }
        const nextRecords = {};
        Object.keys(parsed.records || {}).forEach((qid) => {
          if (this.questionMap[qid]) {
            nextRecords[qid] = parsed.records[qid];
          }
        });
        const nextMistakes = Array.isArray(parsed.mistakes)
          ? parsed.mistakes.filter((id) => !!this.questionMap[id])
          : [];
        const nextFavorites = Array.isArray(parsed.favorites)
          ? parsed.favorites.filter((id) => !!this.questionMap[id])
          : [];

        this.records = nextRecords;
        this.mistakes = [...new Set(nextMistakes)];
        this.favorites = [...new Set(nextFavorites)];
        if (parsed.settings && typeof parsed.settings === "object") {
          this.settings = Object.assign({}, this.settings, parsed.settings);
          this.applyTheme();
        }
        this.saveState();
        this.backupModal.open = false;
        this.showToast(
          "已恢复 " + Object.keys(this.records).length + " 条记录、" + this.mistakes.length + " 道错题"
        );
      } catch (err) {
        this.showToast("JSON 解析失败，请检查备份内容是否完整");
      }
    },

    bindKeyboardEvents() {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          if (this.lightboxSrc) {
            this.lightboxSrc = "";
            return;
          }
          if (this.confirmModal.open) {
            this.confirmModal.open = false;
            return;
          }
          if (this.backupModal.open) {
            this.backupModal.open = false;
            return;
          }
          if (this.sectionSheet.open) {
            this.sectionSheet.open = false;
            return;
          }
          if (this.quiz.showSheet) {
            this.quiz.showSheet = false;
            return;
          }
        }

        if (this.currentTab !== "quiz" || this.quiz.showSheet || this.lightboxSrc) return;
        if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) return;

        const key = e.key.toUpperCase();
        if (["A", "B", "C", "D"].includes(key)) {
          this.onSelectOption(key);
        } else if (e.key === "ArrowLeft") {
          this.prevQuestion();
        } else if (e.key === "ArrowRight") {
          this.nextQuestion();
        } else if (e.key === "Enter") {
          const q = this.currentQuestion;
          if (q && q.type === "multiple" && !this.isQuestionRevealed) {
            this.submitMultipleAnswer();
          }
        }
      });
    }
  }
});

app.mount("#app");
