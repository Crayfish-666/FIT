/**
 * 题库数据
 * 结构：章节 (chapters) -> 小节 (sections) -> 题目 (questions)
 */

window.QUESTION_BANK = {
  "title": "信息技术基础",
  "chapters": [
    {
      "id": "ch1",
      "module": "第一部分 · 基础模块",
      "number": "第一章",
      "title": "文档处理",
      "sections": [
        {
          "id": "ch1_s1",
          "number": "第一节",
          "title": "文档的基本知识",
          "questions": [
            {
              "id": "ch1_s1_1",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字处理软件，关于保存文件，下列操作不正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "单击快速访问工具栏中“保存”命令"
                },
                {
                  "key": "B",
                  "text": "单击“文件”菜单下的“保存”命令"
                },
                {
                  "key": "C",
                  "text": "按组合键 Ctrl+Z"
                },
                {
                  "key": "D",
                  "text": "按组合键 Ctrl+S"
                }
              ],
              "answer": "C",
              "explanation": "组合键 Ctrl+Z 用于撤销上一步操作。"
            },
            {
              "id": "ch1_s1_2",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字模板文件的扩展名是",
              "options": [
                {
                  "key": "A",
                  "text": "dot"
                },
                {
                  "key": "B",
                  "text": "doc"
                },
                {
                  "key": "C",
                  "text": "wps"
                },
                {
                  "key": "D",
                  "text": "wpt"
                }
              ],
              "answer": "D",
              "explanation": "WPS 文字模板文件的扩展名为 wpt。dot 是 Microsoft Word 97-2003 模板文件的扩展名，doc 是 Microsoft Word 97-2003 文件的扩展名，wps 是 WPS 文字文件的扩展名。"
            },
            {
              "id": "ch1_s1_3",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 自动保存可以改为 5 分钟。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，单击“文件”选项卡，在打开的下拉列表中选择“备份与恢复”→“备份中心”选项，打开“备份中心”对话框，单击“设置”按钮，在右侧窗格中选中“定时备份”选项可以设置定时备份的时间间隔。"
            },
            {
              "id": "ch1_s1_4",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字不可以保存成 Microsoft Word 模板文件。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，单击“文件”选项卡下的“另存为”按钮，可以将其保存为 Microsoft Word 能够识别和使用的模板文件。"
            },
            {
              "id": "ch1_s1_5",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字是",
              "options": [
                {
                  "key": "A",
                  "text": "文字编辑软件"
                },
                {
                  "key": "B",
                  "text": "语言处理程序"
                },
                {
                  "key": "C",
                  "text": "硬件"
                },
                {
                  "key": "D",
                  "text": "操作系统"
                }
              ],
              "answer": "A",
              "explanation": "WPS 文字是由中国金山软件公司开发的文字编辑软件。"
            },
            {
              "id": "ch1_s1_6",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "下列（　）是金山软件股份有限公司推出的一款软件。",
              "options": [
                {
                  "key": "A",
                  "text": "Microsoft Office"
                },
                {
                  "key": "B",
                  "text": "Microsoft Edge"
                },
                {
                  "key": "C",
                  "text": "WPS Office"
                },
                {
                  "key": "D",
                  "text": "Google"
                }
              ],
              "answer": "C",
              "explanation": "WPS Office 是金山软件股份有限公司自主研发的一款办公软件套件，可以实现文字、表格、演示等全场景办公，满足人们实际工作中不同场合的需求。"
            },
            {
              "id": "ch1_s1_7",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中打开文档的快捷键是",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl+O"
                },
                {
                  "key": "B",
                  "text": "Ctrl+S"
                },
                {
                  "key": "C",
                  "text": "Ctrl+N"
                },
                {
                  "key": "D",
                  "text": "Ctrl+V"
                }
              ],
              "answer": "A",
              "explanation": "Ctrl+O：打开；Ctrl+S：保存；Ctrl+N：新建；Ctrl+V：粘贴。"
            },
            {
              "id": "ch1_s1_8",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，第一次保存某文件时，出现的对话框为",
              "options": [
                {
                  "key": "A",
                  "text": "全部保存"
                },
                {
                  "key": "B",
                  "text": "另存文件"
                },
                {
                  "key": "C",
                  "text": "保存"
                },
                {
                  "key": "D",
                  "text": "保存为"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，第一次保存文件时，此时的保存命令相当于“另存为”命令，不论进行“保存”还是“另存为”操作，均会弹出“另存文件”对话框。"
            },
            {
              "id": "ch1_s1_9",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "如果用户想保存一个正在编辑的已有文档，但希望以不同文件名存储，可用（　）命令。",
              "options": [
                {
                  "key": "A",
                  "text": "保存"
                },
                {
                  "key": "B",
                  "text": "另存为"
                },
                {
                  "key": "C",
                  "text": "比较"
                },
                {
                  "key": "D",
                  "text": "限制编辑"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，如果想要以不同的文件名、存储路径、文件格式对文件进行存储，可以使用“文件”选项卡中的“另存为”命令。"
            },
            {
              "id": "ch1_s1_10",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，对于已有文档修改后，直接单击快速访问工具栏中的“保存”按钮将",
              "options": [
                {
                  "key": "A",
                  "text": "直接关闭"
                },
                {
                  "key": "B",
                  "text": "弹出“另存文件”对话框"
                },
                {
                  "key": "C",
                  "text": "保存在回收站中"
                },
                {
                  "key": "D",
                  "text": "以原路径和原文件名存盘"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字中，对已有文档修改后，单击“保存”按钮，文档将以原路径、原文件名、原格式进行保存。"
            },
            {
              "id": "ch1_s1_11",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "关闭当前文件而不退出 WPS Office 程序的组合键是",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl+C"
                },
                {
                  "key": "B",
                  "text": "Ctrl+W"
                },
                {
                  "key": "C",
                  "text": "Ctrl+N"
                },
                {
                  "key": "D",
                  "text": "Alt+F4"
                }
              ],
              "answer": "B",
              "explanation": "Ctrl+C：复制；Ctrl+N：新建；Ctrl+W：关闭相应的文档窗口而不退出 WPS Office 应用程序；Alt+F4：关闭文档并退出 WPS Office 应用程序。"
            },
            {
              "id": "ch1_s1_12",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，标题栏右侧可以同时显示的窗口控制按钮有",
              "options": [
                {
                  "key": "A",
                  "text": "最小化、向下还原和最大化"
                },
                {
                  "key": "B",
                  "text": "向下还原、最大化和关闭"
                },
                {
                  "key": "C",
                  "text": "最小化、向下还原和关闭"
                },
                {
                  "key": "D",
                  "text": "向下还原和最大化"
                }
              ],
              "answer": "C",
              "explanation": "最大化按钮和向下还原按钮不会同时显示。"
            },
            {
              "id": "ch1_s1_13",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，当前正在编辑的文档名称显示在",
              "options": [
                {
                  "key": "A",
                  "text": "任务栏"
                },
                {
                  "key": "B",
                  "text": "菜单栏"
                },
                {
                  "key": "C",
                  "text": "状态栏"
                },
                {
                  "key": "D",
                  "text": "标题栏"
                }
              ],
              "answer": "D",
              "explanation": "标题栏位于 WPS 文字窗口的最上方，会显示当前文档名称。"
            },
            {
              "id": "ch1_s1_14",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，标尺在（　）选项卡中可以设置显示或隐藏。",
              "options": [
                {
                  "key": "A",
                  "text": "开始"
                },
                {
                  "key": "B",
                  "text": "视图"
                },
                {
                  "key": "C",
                  "text": "插入"
                },
                {
                  "key": "D",
                  "text": "页面布局"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，利用“视图”选项卡中的“标尺”命令，可以显示或隐藏标尺。"
            },
            {
              "id": "ch1_s1_15",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "启动 WPS 文字后，默认情况下，新建的第 1 个空白文档的名字为",
              "options": [
                {
                  "key": "A",
                  "text": "新文稿"
                },
                {
                  "key": "B",
                  "text": "文字文稿 1"
                },
                {
                  "key": "C",
                  "text": "文字文稿"
                },
                {
                  "key": "D",
                  "text": "我的文稿"
                }
              ],
              "answer": "B",
              "explanation": "启动 WPS 文字后，新建的第一个空白文档名为“文字文稿 1”。在此后新建的 WPS 文字文档，系统会以“文字文稿 2”“文字文稿 3”……这样的顺序对新建文档进行命名。"
            },
            {
              "id": "ch1_s1_16",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字窗口中，（　）用于显示文档当前的状态信息，如页数、字数等信息。",
              "options": [
                {
                  "key": "A",
                  "text": "状态栏"
                },
                {
                  "key": "B",
                  "text": "任务栏"
                },
                {
                  "key": "C",
                  "text": "标题栏"
                },
                {
                  "key": "D",
                  "text": "工具栏"
                }
              ],
              "answer": "A",
              "explanation": "状态栏位于 WPS 文字窗口底端，可以显示当前文档的页数/总页数、字数和拼写检查等信息。"
            },
            {
              "id": "ch1_s1_17",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，“自动保存”功能可以每隔一定时间保存一次文档，自动保存以后",
              "options": [
                {
                  "key": "A",
                  "text": "可用于断电恢复，但不能代替正常的存盘"
                },
                {
                  "key": "B",
                  "text": "不需要再进行存盘操作"
                },
                {
                  "key": "C",
                  "text": "不用于断电恢复，可代替正常的存盘"
                },
                {
                  "key": "D",
                  "text": "可在原位置产生一个同名备份文件"
                }
              ],
              "answer": "A",
              "explanation": "在编辑文档的过程中，为了防止停电、死机等意外情况导致当前编辑的内容丢失，可以使用自动保存功能，每隔一段时间自动保存一次文档，从而最大限度地避免文档内容的丢失。自动保存的临时数据存储在软件默认的临时文件夹中，而非原文档位置。“自动保存”命令不能代替正常的存盘，即使启用了“自动保存”功能，编辑完文档后也需要通过“保存”命令进行存盘。"
            },
            {
              "id": "ch1_s1_18",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，若希望知道当前文档处于第几页，可查看",
              "options": [
                {
                  "key": "A",
                  "text": "功能区"
                },
                {
                  "key": "B",
                  "text": "状态栏"
                },
                {
                  "key": "C",
                  "text": "任务栏"
                },
                {
                  "key": "D",
                  "text": "标题栏"
                }
              ],
              "answer": "B",
              "explanation": "WPS 文字窗口的状态栏上显示当前所在页码、文档总页数、字数和拼写检查等内容。"
            },
            {
              "id": "ch1_s1_19",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "下列进入 WPS 文字的方法，不正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "单击桌面“开始”菜单，执行“WPS Office”→“W 文字”→“新建空白文档”"
                },
                {
                  "key": "B",
                  "text": "双击已有的 WPS 文字文档"
                },
                {
                  "key": "C",
                  "text": "双击 WPS Office 的快捷方式图标→“W 文字”→“新建空白文档”"
                },
                {
                  "key": "D",
                  "text": "右键双击 WPS Office 的快捷方式图标"
                }
              ],
              "answer": "D",
              "explanation": "A、B、C 选项均可进入 WPS 文字应用程序。"
            },
            {
              "id": "ch1_s1_20",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，当前已打开一个文件，若想打开另一个文件",
              "options": [
                {
                  "key": "A",
                  "text": "首先关闭原来的文件，才能打开新文件"
                },
                {
                  "key": "B",
                  "text": "打开新文件时，系统会自动关闭原文件"
                },
                {
                  "key": "C",
                  "text": "可直接打开，两个文件可以同时打开"
                },
                {
                  "key": "D",
                  "text": "新文件的内容将会加入原来打开的文件中"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，当前已经打开的文件并不会影响其他文件的打开，即两个文件可以同时打开。"
            },
            {
              "id": "ch1_s1_21",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，（　）用于控制文档在屏幕上的显示大小。",
              "options": [
                {
                  "key": "A",
                  "text": "全屏显示"
                },
                {
                  "key": "B",
                  "text": "显示比例"
                },
                {
                  "key": "C",
                  "text": "重排窗口"
                },
                {
                  "key": "D",
                  "text": "页面显示"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，显示比例区域用于更改正在编辑文档的显示比例，拖动其间的滑块即可调整显示比例，也可以单击百分比的数字按钮，在打开的级联菜单中进行调整。"
            },
            {
              "id": "ch1_s1_22",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，在打开的文档 d1.docx 的窗口中，单击该窗口的“最小化”按钮后",
              "options": [
                {
                  "key": "A",
                  "text": "不显示 d1.docx 文档内容，但 d1.docx 文档并未关闭"
                },
                {
                  "key": "B",
                  "text": "程序窗口和 d1.docx 文档都被关闭"
                },
                {
                  "key": "C",
                  "text": "d1.docx 文档未关闭，并继续显示其内容"
                },
                {
                  "key": "D",
                  "text": "关闭了 d1.docx 文档，但程序窗口并未关闭"
                }
              ],
              "answer": "A",
              "explanation": "单击“最小化”后，窗口缩小成任务栏上的一个图标，不显示 d1.docx 文档内容，但 d1.docx 文档并未被关闭，对应程序仍在后台运行。"
            },
            {
              "id": "ch1_s1_23",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "任意调整 WPS 文字窗口的垂直标尺或水平标尺",
              "options": [
                {
                  "key": "A",
                  "text": "对页边距无影响"
                },
                {
                  "key": "B",
                  "text": "对文档任何格式无影响"
                },
                {
                  "key": "C",
                  "text": "对段落格式无影响"
                },
                {
                  "key": "D",
                  "text": "对字符格式无影响"
                }
              ],
              "answer": "D",
              "explanation": "可以通过调整 WPS 文字中的标尺来修改文档的页边距，也可以通过标尺修改段落格式中的首行缩进、左缩进、右缩进、悬挂缩进等设置，但是不能修改字符格式。"
            },
            {
              "id": "ch1_s1_24",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，打开一个原有文档，编辑后执行“文件”选项卡中的“保存”命令，则",
              "options": [
                {
                  "key": "A",
                  "text": "将所有打开的文档存盘"
                },
                {
                  "key": "B",
                  "text": "只能将当前文档存储在已有的原文件夹内"
                },
                {
                  "key": "C",
                  "text": "可以将当前文档存储在已有的任意文件夹内"
                },
                {
                  "key": "D",
                  "text": "可以先建立一个新文件夹，再将文档存储在该文件夹内"
                }
              ],
              "answer": "B",
              "explanation": "执行“保存”命令只能以当前文档的文件名、文件类型、路径对文档进行保存，即用新文档覆盖旧文档。"
            },
            {
              "id": "ch1_s1_25",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字窗口中，用户不可以",
              "options": [
                {
                  "key": "A",
                  "text": "同时打开多个文档窗口"
                },
                {
                  "key": "B",
                  "text": "将正在编辑的文档另存为一个纯文本文件（.txt）"
                },
                {
                  "key": "C",
                  "text": "将所选择的文档内容直接另存为一个文档文件"
                },
                {
                  "key": "D",
                  "text": "在没有开启打印机时进行打印预览"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，可以将当前文档另存为一个文档文件，但是不能直接将所选择的文档内容另存为一个文档文件。"
            },
            {
              "id": "ch1_s1_26",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "下列关于 WPS 文字中标尺功能的描述，错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "可以显示当前页面的尺寸"
                },
                {
                  "key": "B",
                  "text": "能够设置制表位和调整栏宽度"
                },
                {
                  "key": "C",
                  "text": "在页面视图中可以用来调整页边距"
                },
                {
                  "key": "D",
                  "text": "可以直接在标尺上设置文档的字体颜色"
                }
              ],
              "answer": "D",
              "explanation": "标尺的主要功能在于布局和定位，如显示尺寸、设置制表位、调整缩进和页边距等。设置字体颜色属于字符格式设置，需要在“开始”选项卡或“字体”对话框中设置，无法通过标尺直接完成。"
            },
            {
              "id": "ch1_s1_27",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "下面关于 WPS 文字标题栏的叙述中，错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "双击标题栏，可以最大化或还原 WPS 文字窗口"
                },
                {
                  "key": "B",
                  "text": "拖拽标题栏，可将最大化窗口拖到新位置，并不改变其大小"
                },
                {
                  "key": "C",
                  "text": "拖拽标题栏，可将非最大化窗口拖到新位置"
                },
                {
                  "key": "D",
                  "text": "WPS 文字标题栏显示文档名称"
                }
              ],
              "answer": "B",
              "explanation": "窗口处于最大化时，不能在不改变窗口大小时移动窗口。"
            },
            {
              "id": "ch1_s1_28",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "WPS 文字文档页面视图中的标尺，除了能够调整左缩进、右缩进，还能调整的是",
              "options": [
                {
                  "key": "A",
                  "text": "左页边距"
                },
                {
                  "key": "B",
                  "text": "首行缩进"
                },
                {
                  "key": "C",
                  "text": "行间距"
                },
                {
                  "key": "D",
                  "text": "悬挂缩进"
                }
              ],
              "answer": [
                "A",
                "B",
                "D"
              ],
              "explanation": "WPS 文字中标尺的主要功能包括调整首行缩进、悬挂缩进、左缩进、右缩进、页边距等。行间距需要在“段落”对话框中调整。"
            },
            {
              "id": "ch1_s1_29",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "关于保存与另存为的说法，正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "在文件第一次保存时，两者功能相同"
                },
                {
                  "key": "B",
                  "text": "两者在任何情况下都相同"
                },
                {
                  "key": "C",
                  "text": "“另存为”命令可以将原文件以不同的路径或文件名另外保存一份"
                },
                {
                  "key": "D",
                  "text": "用“另存为”命令保存的文件不能与原文件同名"
                }
              ],
              "answer": [
                "A",
                "C"
              ],
              "explanation": "文件在第一次保存和另存为时，功能相同，选项 A 正确。文件非第一次保存时，“另存为”命令可以将文档以与当前文档不同的位置、不同的名称或不同的类型进行保存，选项 B 错误，选项 C 正确。当另存为的文档与原文档保存在位置不同时，可以与原文档同名。"
            },
            {
              "id": "ch1_s1_30",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "要保存一个文件，可以执行的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "单击快速访问工具栏上的“保存”按钮"
                },
                {
                  "key": "B",
                  "text": "选择“文件”→“保存”命令"
                },
                {
                  "key": "C",
                  "text": "利用组合键 Ctrl+S"
                },
                {
                  "key": "D",
                  "text": "利用组合键 Ctrl+O"
                }
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "保存文件的方法主要有以下三种：①单击快速访问工具栏的“保存”按钮；②执行“文件”→“保存”命令；③使用组合键 Ctrl+S 或 Shift+F12。组合键 Ctrl+O 的作用是打开“打开文件”对话框，不能实现保存。"
            },
            {
              "id": "ch1_s1_31",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "使用 WPS 文字编写的文档可以保存成（　）文件格式。",
              "options": [
                {
                  "key": "A",
                  "text": "pdf"
                },
                {
                  "key": "B",
                  "text": "txt"
                },
                {
                  "key": "C",
                  "text": "rtf"
                },
                {
                  "key": "D",
                  "text": "wma"
                }
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "wma 是音频文件格式，WPS 文字文档无法保存为这种格式。"
            },
            {
              "id": "ch1_s1_32",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字窗口中，可以同时打开多个文档窗口，被打开的窗口都是活动窗口。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，可以同时打开多个文档窗口，但只有可以接收用户的键盘和鼠标输入等操作的窗口是活动窗口，活动窗口只有一个。"
            },
            {
              "id": "ch1_s1_33",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字窗口中，可以同时打开多个文档窗口，但在屏幕上只能见到一个文档窗口。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，可以同时打开并显示多个文档窗口，但同一时间只能编辑一个文档窗口。"
            },
            {
              "id": "ch1_s1_34",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "使用“文件”选项卡的“另存为”命令不可以将文档以原来的文件名存储。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "“另存为”命令可以将文档以原来的文件名存储在其他位置。"
            },
            {
              "id": "ch1_s1_35",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，可以使用 Ctrl+S 快捷键新建一个文档。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "新建空白文档应该使用 Ctrl+N 快捷键。Ctrl+S 快捷键用于保存文档。"
            },
            {
              "id": "ch1_s1_36",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字窗口中的选项卡可由用户根据需要显示或隐藏。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "用户可以通过自定义功能区来显示或隐藏选项卡。"
            },
            {
              "id": "ch1_s1_37",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字中快速访问工具栏的位置是固定的，只能在功能区上方。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "快速访问工具栏可以放在功能区上方，也可以放在功能区下方。"
            },
            {
              "id": "ch1_s1_38",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "对已有的 WPS 文字文档编辑后，点击“保存”按钮可以改变存储类型。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "对于已有的文档可以点击“另存为”命令改变存储类型，“保存”命令不会改变文档的存储名称、存储类型和存储路径。"
            },
            {
              "id": "ch1_s1_39",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字窗口中，______ 位于窗口底端，用于显示当前文档的页数/总页数、字数和拼写检查等信息。",
              "answer": "状态栏",
              "acceptedAnswers": [
                "状态栏"
              ],
              "explanation": "状态栏位于 WPS 文字窗口底端，用于显示当前文档的页数/总页数、字数和拼写检查等信息。"
            },
            {
              "id": "ch1_s1_40",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，“打开”文件的快捷键是 ______。",
              "answer": "Ctrl+O",
              "acceptedAnswers": [
                "Ctrl+O",
                "ctrl+o",
                "CTRL+O",
                "Ctrl + O"
              ],
              "explanation": "在 WPS 文字中，“打开”文件的快捷键是 Ctrl+O。"
            },
            {
              "id": "ch1_s1_41",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，当前文档的文件名会在 ______ 中显示。",
              "answer": "标题栏",
              "acceptedAnswers": [
                "标题栏"
              ],
              "explanation": "标题栏位于 WPS 文字窗口的最上方，用于显示当前文档的文件名。"
            },
            {
              "id": "ch1_s1_42",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "退出 WPS 文字应用程序可以使用 ______ 组合键。",
              "answer": "Alt+F4",
              "acceptedAnswers": [
                "Alt+F4",
                "alt+f4",
                "ALT+F4",
                "Alt + F4"
              ],
              "explanation": "退出 WPS 文字应用程序可以使用 Alt+F4 组合键。"
            }
          ]
        },
        {
          "id": "ch1_s2",
          "number": "第二节",
          "title": "文档的编辑",
          "questions": [
            {
              "id": "ch1_s2_1",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字软件中，下列快捷键中能实现撤销操作的是",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl+B"
                },
                {
                  "key": "B",
                  "text": "Ctrl+Z"
                },
                {
                  "key": "C",
                  "text": "Ctrl+Y"
                },
                {
                  "key": "D",
                  "text": "Shift+Z"
                }
              ],
              "answer": "B",
              "explanation": "Ctrl+B：加粗；Ctrl+Z：撤销；Ctrl+Y：恢复。"
            },
            {
              "id": "ch1_s2_2",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字软件中，关于“查找替换”功能，下列说法不正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "“查找”可以快速定位要搜索的关键词"
                },
                {
                  "key": "B",
                  "text": "当查找内容是英文字母时，默认区分大小写"
                },
                {
                  "key": "C",
                  "text": "当查找内容是标点符号时，默认区分全角和半角"
                },
                {
                  "key": "D",
                  "text": "在查找时可以使用“*”“?”通配符进行模糊查找"
                }
              ],
              "answer": "B",
              "explanation": "在“查找和替换”对话框中进行查找时，对查找内容默认不区分大小写、区分全/半角、不忽略标点符号、不忽略空格等。通配符“?”代表任意一个字符，“*”代表0个或多个字符。选项B说法不正确。"
            },
            {
              "id": "ch1_s2_3",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中（　）有页眉页脚。",
              "options": [
                {
                  "key": "A",
                  "text": "页面视图"
                },
                {
                  "key": "B",
                  "text": "阅读版式视图"
                },
                {
                  "key": "C",
                  "text": "大纲视图"
                },
                {
                  "key": "D",
                  "text": "Web 版式视图"
                }
              ],
              "answer": "A",
              "explanation": "页面视图是 WPS 的默认视图，可以显示页眉、页脚、图形对象、分栏设置、页边距等元素。阅读版式视图、Web 版式视图和大纲视图都无法显示文档的页眉和页脚。"
            },
            {
              "id": "ch1_s2_4",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字处理软件，可以通过“查找替换”的“替换”功能，将文档中的“段落标记”改为“手动换行符”。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "“查找替换”功能不仅可以查找和替换普通文本，还可以利用对话框中的“特殊格式”按钮替换特殊标记，如段落标记、制表符、手动换行符等。"
            },
            {
              "id": "ch1_s2_5",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字处理软件，能使插入点快速切换到文档首部的快捷键是 Ctrl+Home。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，将光标移至文档开头的快捷键是 Ctrl+Home，将光标移至文档结尾的快捷键是 Ctrl+End。"
            },
            {
              "id": "ch1_s2_6",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文档处理中，______ 视图可以清楚地显示文档的目录，方便用户快速跳转到所需的章节。",
              "answer": "大纲",
              "acceptedAnswers": [
                "大纲",
                "大纲视图"
              ],
              "explanation": "大纲视图可以清楚地显示文档的目录，方便用户快速跳转到所需的章节。"
            },
            {
              "id": "ch1_s2_7",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字软件中，可以使用组合键 ______ 对文档内容进行剪切。",
              "answer": "Ctrl+X",
              "acceptedAnswers": [
                "Ctrl+X",
                "ctrl+x",
                "CTRL+X",
                "Ctrl + X"
              ],
              "explanation": "在 WPS 文字中，可以使用组合键 Ctrl+X 对文档内容进行剪切。"
            },
            {
              "id": "ch1_s2_8",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "打开 WPS 文字后，默认的显示方式是（　）视图。",
              "options": [
                {
                  "key": "A",
                  "text": "大纲"
                },
                {
                  "key": "B",
                  "text": "阅读版式"
                },
                {
                  "key": "C",
                  "text": "页面"
                },
                {
                  "key": "D",
                  "text": "Web 版式"
                }
              ],
              "answer": "C",
              "explanation": "页面视图可以显示 WPS 文字文档的打印结果外观，主要包括页眉、页脚、图形对象、分栏和页边距等元素，是最接近打印结果的视图，也是 WPS 文字的默认视图。"
            },
            {
              "id": "ch1_s2_9",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，要将选定区域的内容放到剪贴板上，可单击“开始”选项卡中的（　）按钮。",
              "options": [
                {
                  "key": "A",
                  "text": "剪切或替换"
                },
                {
                  "key": "B",
                  "text": "剪切或清除"
                },
                {
                  "key": "C",
                  "text": "剪切或复制"
                },
                {
                  "key": "D",
                  "text": "剪切或粘贴"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，“剪切”和“复制”按钮可以将选定区域的内容放到剪贴板，“粘贴”按钮可以将剪贴板中的内容复制到插入点所在位置。"
            },
            {
              "id": "ch1_s2_10",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字编辑的内容中，英文文字下面有波浪下划线表示",
              "options": [
                {
                  "key": "A",
                  "text": "已修改过的文档"
                },
                {
                  "key": "B",
                  "text": "对输入的确认"
                },
                {
                  "key": "C",
                  "text": "可能存在错误"
                },
                {
                  "key": "D",
                  "text": "可翻译"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，文字下方有波浪下划线表示可能存在错误。"
            },
            {
              "id": "ch1_s2_11",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "将插入点定位定于句子“小桥流水人家”中的“流”与“水”之间，按一下 Backspace 键，则该句子将（　）",
              "options": [
                {
                  "key": "A",
                  "text": "变为“小桥水人家”"
                },
                {
                  "key": "B",
                  "text": "变为“小桥流人家”"
                },
                {
                  "key": "C",
                  "text": "整句被删除"
                },
                {
                  "key": "D",
                  "text": "不变"
                }
              ],
              "answer": "A",
              "explanation": "将插入点定位到“流”与“水”之间，按一下 Backspace 键，会删除前面的“流”，句子就变为“小桥水人家”。（Backspace 键删除插入点前的字符，Delete 键删除插入点之后的字符。）"
            },
            {
              "id": "ch1_s2_12",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，按下（　）组合键可以将光标定位到文件末尾。",
              "options": [
                {
                  "key": "A",
                  "text": "Alt+Home"
                },
                {
                  "key": "B",
                  "text": "Ctrl+↓"
                },
                {
                  "key": "C",
                  "text": "Ctrl+Home"
                },
                {
                  "key": "D",
                  "text": "Ctrl+End"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字中，将光标移至文档开头的快捷键是 Ctrl+Home，将光标移至文档结尾的快捷键是 Ctrl+End。"
            },
            {
              "id": "ch1_s2_13",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，下列（　）键可以直接将光标移到当前行的开头。",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl+←"
                },
                {
                  "key": "B",
                  "text": "Home"
                },
                {
                  "key": "C",
                  "text": "Ctrl+Home"
                },
                {
                  "key": "D",
                  "text": "←"
                }
              ],
              "answer": "B",
              "explanation": "按 Home 键可以直接将光标移到当前行的开头，按 End 键可以直接将光标移到当前行的结尾。"
            },
            {
              "id": "ch1_s2_14",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字编辑状态下，若鼠标指针放在某行左侧的选定区，下列操作中可以仅选择光标所在行的是",
              "options": [
                {
                  "key": "A",
                  "text": "双击鼠标左键"
                },
                {
                  "key": "B",
                  "text": "单击鼠标左键"
                },
                {
                  "key": "C",
                  "text": "三击鼠标左键"
                },
                {
                  "key": "D",
                  "text": "单击鼠标右键"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，将鼠标指向文档编辑区左侧的选定区，单击可以选中一行，双击可以选中光标所在的段落，三击可以选中全文，右击可以弹出快捷菜单。"
            },
            {
              "id": "ch1_s2_15",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，Ctrl+A 快捷键的作用等效于用鼠标在文档选定区中",
              "options": [
                {
                  "key": "A",
                  "text": "单击一下"
                },
                {
                  "key": "B",
                  "text": "连击两下"
                },
                {
                  "key": "C",
                  "text": "连击三下"
                },
                {
                  "key": "D",
                  "text": "连击四下"
                }
              ],
              "answer": "C",
              "explanation": "Ctrl+A 快捷键的作用是选中整篇文档。用鼠标在文档左侧选定区连击三下也可以选中整篇文档。"
            },
            {
              "id": "ch1_s2_16",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在查找替换过程中，如果只替换当前被查找到的字符串，应单击“查找和替换”对话框中的（　）按钮。",
              "options": [
                {
                  "key": "A",
                  "text": "查找下一处"
                },
                {
                  "key": "B",
                  "text": "替换"
                },
                {
                  "key": "C",
                  "text": "全部替换"
                },
                {
                  "key": "D",
                  "text": "格式"
                }
              ],
              "answer": "B",
              "explanation": "在“查找和替换”对话框中，如果只替换当前被查找到的文字，可以单击“替换”按钮；如果要跳过当前被查找到的文字继续查找，可以单击“查找下一处”按钮；如果要全部替换，可以单击“全部替换”按钮。"
            },
            {
              "id": "ch1_s2_17",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，用鼠标拖动选定文本的同时按下 Ctrl 键，执行的是（　）操作。",
              "options": [
                {
                  "key": "A",
                  "text": "移动"
                },
                {
                  "key": "B",
                  "text": "复制"
                },
                {
                  "key": "C",
                  "text": "剪切"
                },
                {
                  "key": "D",
                  "text": "格式复制"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，直接用鼠标拖动选定文本到目标位置执行的是移动操作；在拖动选定文本的同时，按下 Ctrl 键，执行的是复制操作。"
            },
            {
              "id": "ch1_s2_18",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "以图书的分栏样式显示 WPS 文字且不能对文档内容进行编辑操作的视图是",
              "options": [
                {
                  "key": "A",
                  "text": "阅读版式"
                },
                {
                  "key": "B",
                  "text": "页面"
                },
                {
                  "key": "C",
                  "text": "大纲"
                },
                {
                  "key": "D",
                  "text": "Web 版式"
                }
              ],
              "answer": "A",
              "explanation": "阅读版式视图以图书的分栏样式显示 WPS 文字。在阅读版式视图下，不能对文档内容进行编辑操作。"
            },
            {
              "id": "ch1_s2_19",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字编辑状态下，若设置了标尺，则水平标尺和垂直标尺同时显示的视图方式为",
              "options": [
                {
                  "key": "A",
                  "text": "阅读版式视图"
                },
                {
                  "key": "B",
                  "text": "页面视图"
                },
                {
                  "key": "C",
                  "text": "Web 版式视图"
                },
                {
                  "key": "D",
                  "text": "大纲视图"
                }
              ],
              "answer": "B",
              "explanation": "页面视图、写作模式可以同时显示水平标尺和垂直标尺。其余视图均不显示，选项 B 正确。"
            },
            {
              "id": "ch1_s2_20",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字编辑过程中，从插入点开始选定到上一行同一位置之间的所有字符，组合键是（　）",
              "options": [
                {
                  "key": "A",
                  "text": "Shift+↑"
                },
                {
                  "key": "B",
                  "text": "Shift+↓"
                },
                {
                  "key": "C",
                  "text": "Shift+Home"
                },
                {
                  "key": "D",
                  "text": "Shift+End"
                }
              ],
              "answer": "A",
              "explanation": "Shift+↑ 组合键的作用是从插入点选定至上一行同一位置之间的所有字符；Shift+↓ 是选定至下一行同一位置；Shift+Home 是选定至行首；Shift+End 是选定至行尾。"
            },
            {
              "id": "ch1_s2_21",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字的编辑状态下，执行“剪切”命令后",
              "options": [
                {
                  "key": "A",
                  "text": "被选择的内容被复制到插入点处"
                },
                {
                  "key": "B",
                  "text": "被选择的内容被移动到剪贴板"
                },
                {
                  "key": "C",
                  "text": "插入点所在的段落内容被复制到剪贴板"
                },
                {
                  "key": "D",
                  "text": "被选择的内容被复制到剪贴板"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，执行“剪切”命令后，被选择的内容被移动到剪贴板；执行“复制”命令后，被选择的内容被复制到剪贴板。"
            },
            {
              "id": "ch1_s2_22",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字的“开始”选项卡中，如果“剪切”和“复制”命令呈灰色，说明",
              "options": [
                {
                  "key": "A",
                  "text": "剪贴板有内容，但不是 WPS 文字能使用的内容"
                },
                {
                  "key": "B",
                  "text": "“剪切”和“复制”命令永远不能被使用"
                },
                {
                  "key": "C",
                  "text": "只有执行了“粘贴”命令后，“剪切”命令才能被使用"
                },
                {
                  "key": "D",
                  "text": "只有对文档内容进行了选择之后，“剪切”和“复制”命令才可被使用"
                }
              ],
              "answer": "D",
              "explanation": "如果“剪切”和“复制”命令呈灰色，表示当前没有选中任何文档内容，无法进行“剪切”或“复制”操作。只有对文档内容进行了选择之后，这两个命令才可被激活使用。"
            },
            {
              "id": "ch1_s2_23",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，按 PgDn 键，则屏幕显示向后移动",
              "options": [
                {
                  "key": "A",
                  "text": "一行"
                },
                {
                  "key": "B",
                  "text": "一页"
                },
                {
                  "key": "C",
                  "text": "一节"
                },
                {
                  "key": "D",
                  "text": "一屏"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字中，按 PgDn 键，屏幕显示向后滚动一屏；按 PgUp 键，屏幕显示向上滚动一屏。"
            },
            {
              "id": "ch1_s2_24",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，文档的视图模式会影响字符在屏幕上的显示方式，为了保证字符格式的显示与打印完全相同，应使用",
              "options": [
                {
                  "key": "A",
                  "text": "大纲视图"
                },
                {
                  "key": "B",
                  "text": "全屏显示"
                },
                {
                  "key": "C",
                  "text": "页面视图"
                },
                {
                  "key": "D",
                  "text": "Web 版式视图"
                }
              ],
              "answer": "C",
              "explanation": "页面视图可以显示页眉、页脚、图形对象、分栏设置、页边距等元素。页面视图产生“所见即所得”的效果，是最接近打印结果的视图。"
            },
            {
              "id": "ch1_s2_25",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字文档编辑区中，把光标定位在某一字符处连续单击鼠标左键三次，将选定该字符所在的（　）",
              "options": [
                {
                  "key": "A",
                  "text": "一个词"
                },
                {
                  "key": "B",
                  "text": "一个句子"
                },
                {
                  "key": "C",
                  "text": "一行"
                },
                {
                  "key": "D",
                  "text": "一个段落"
                }
              ],
              "answer": "D",
              "explanation": "将鼠标置于文档内三击可以选中光标所在的段落；将鼠标置于文档左侧的文本选定区三击可以选中全文。"
            },
            {
              "id": "ch1_s2_26",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，实现“插入”和“改写”状态的切换，可使用鼠标（　）状态栏上的“改写”按钮。",
              "options": [
                {
                  "key": "A",
                  "text": "右击"
                },
                {
                  "key": "B",
                  "text": "单击"
                },
                {
                  "key": "C",
                  "text": "双击"
                },
                {
                  "key": "D",
                  "text": "拖动"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，文本有两种输入方式：插入和改写。在两种状态间切换，可在状态栏中单击“改写”按钮，或者按键盘上的 Insert 键。"
            },
            {
              "id": "ch1_s2_27",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字的编辑状态下，选择了当前文档中的一个段落，按 Delete 键后，则",
              "options": [
                {
                  "key": "A",
                  "text": "该段落被删除且不能恢复"
                },
                {
                  "key": "B",
                  "text": "该段落被移动到“回收站”内且不能恢复"
                },
                {
                  "key": "C",
                  "text": "该段落被删除，但能恢复"
                },
                {
                  "key": "D",
                  "text": "能利用“回收站”恢复被删除的该段落"
                }
              ],
              "answer": "C",
              "explanation": "选中一个段落按 Delete 键，该段落内容被删除，但可以通过快速访问工具栏的“撤销”按钮或按 Ctrl+Z 组合键将其恢复。"
            },
            {
              "id": "ch1_s2_28",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "如图 1 所示的 WPS 文字视图是",
              "image": "assets/images/ch1_s2_q21.png",
              "options": [
                {
                  "key": "A",
                  "text": "大纲视图"
                },
                {
                  "key": "B",
                  "text": "页面视图"
                },
                {
                  "key": "C",
                  "text": "Web 版式视图"
                },
                {
                  "key": "D",
                  "text": "普通视图"
                }
              ],
              "answer": "A",
              "explanation": "大纲视图主要用于设置和显示文档标题的层级结构，并可以方便地折叠和展开各种层级的文档。大纲视图广泛用于长文档的快速浏览和设置。"
            },
            {
              "id": "ch1_s2_29",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字的编辑状态下，单击“粘贴”按钮，可将剪贴板上的内容粘贴到插入点处，此时剪贴板上的内容",
              "options": [
                {
                  "key": "A",
                  "text": "完全消失"
                },
                {
                  "key": "B",
                  "text": "回退到前一次剪切的内容"
                },
                {
                  "key": "C",
                  "text": "不发生变化"
                },
                {
                  "key": "D",
                  "text": "是随机的，无法确定"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，进行了一次“粘贴”操作后，剪贴板中的内容不发生变化，可多次重复粘贴。"
            },
            {
              "id": "ch1_s2_30",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，要删除插入点之前的一个字符时可以按（　）键。",
              "options": [
                {
                  "key": "A",
                  "text": "Alt+Backspace"
                },
                {
                  "key": "B",
                  "text": "Alt+Delete"
                },
                {
                  "key": "C",
                  "text": "Backspace"
                },
                {
                  "key": "D",
                  "text": "Delete"
                }
              ],
              "answer": "C",
              "explanation": "要删除插入点之前的一个字符应按 Backspace 键，要删除插入点之后的一个字符应使用 Delete 键。"
            },
            {
              "id": "ch1_s2_31",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，可以通过按（　）键删除插入点后面的字符。",
              "options": [
                {
                  "key": "A",
                  "text": "Insert"
                },
                {
                  "key": "B",
                  "text": "Delete"
                },
                {
                  "key": "C",
                  "text": "Enter"
                },
                {
                  "key": "D",
                  "text": "Backspace"
                }
              ],
              "answer": "B",
              "explanation": "Delete 键用于删除插入点后面的字符，Backspace 键用于删除插入点前面的字符。"
            },
            {
              "id": "ch1_s2_32",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，若要选定整篇文档，最快捷的方法是使用（　）组合键。",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl+A"
                },
                {
                  "key": "B",
                  "text": "Ctrl+B"
                },
                {
                  "key": "C",
                  "text": "Ctrl+C"
                },
                {
                  "key": "D",
                  "text": "Ctrl+X"
                }
              ],
              "answer": "A",
              "explanation": "Ctrl+A：全选；Ctrl+B：加粗；Ctrl+C：复制；Ctrl+X：剪切。"
            },
            {
              "id": "ch1_s2_33",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，如果操作出现失误，可以使用（　）功能取消最近的编辑行为。",
              "options": [
                {
                  "key": "A",
                  "text": "撤销"
                },
                {
                  "key": "B",
                  "text": "恢复"
                },
                {
                  "key": "C",
                  "text": "删除"
                },
                {
                  "key": "D",
                  "text": "重启应用程序"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，如果操作失误，可以使用撤销功能取消最近的编辑行为，也可以通过 Ctrl+Z 快捷键来执行撤销命令。"
            },
            {
              "id": "ch1_s2_34",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "打开一篇较长的 WPS 文字文档后，若要直接编辑修改第 125 页的内容，首先应选择的操作是（　）",
              "options": [
                {
                  "key": "A",
                  "text": "单击“文件”选项卡中的“导航”命令"
                },
                {
                  "key": "B",
                  "text": "单击“开始”选项卡中的“定位”命令"
                },
                {
                  "key": "C",
                  "text": "单击“插入”选项卡中的“定位”命令"
                },
                {
                  "key": "D",
                  "text": "单击“开始”选项卡中的“导航”命令"
                }
              ],
              "answer": "B",
              "explanation": "导航窗格要在“视图”选项卡中打开。单击“开始”选项卡中的“查找替换”下拉按钮，在打开的下拉菜单中选择“定位”命令，打开“查找和替换”对话框，在“定位”选项卡中可以输入页号进行快速定位。"
            },
            {
              "id": "ch1_s2_35",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字的“字数统计”命令，在（　）选项卡下。",
              "options": [
                {
                  "key": "A",
                  "text": "视图"
                },
                {
                  "key": "B",
                  "text": "插入"
                },
                {
                  "key": "C",
                  "text": "审阅"
                },
                {
                  "key": "D",
                  "text": "开发工具"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，利用“审阅”选项卡中的“字数统计”命令，可以统计字数、页数、段落数、字符数等。"
            },
            {
              "id": "ch1_s2_36",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，视图方式包括",
              "options": [
                {
                  "key": "A",
                  "text": "页面视图"
                },
                {
                  "key": "B",
                  "text": "阅读版式视图"
                },
                {
                  "key": "C",
                  "text": "Web 版式视图"
                },
                {
                  "key": "D",
                  "text": "大纲视图"
                }
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "WPS 文字视图方式有页面视图、阅读版式视图、Web 版式视图、大纲视图、全屏显示和写作模式六种。"
            },
            {
              "id": "ch1_s2_37",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，能够选定整个段落的方法是",
              "options": [
                {
                  "key": "A",
                  "text": "在段首单击，然后按 Shift 键不放单击段尾"
                },
                {
                  "key": "B",
                  "text": "在段内双击"
                },
                {
                  "key": "C",
                  "text": "在段内任意处快速三击"
                },
                {
                  "key": "D",
                  "text": "按下 Ctrl 键并在段内任意处单击"
                }
              ],
              "answer": [
                "A",
                "C",
                "D"
              ],
              "explanation": "在段内双击可以选择一个英文单词或中文词组。A、C、D 选项均可选中整个段落。"
            },
            {
              "id": "ch1_s2_38",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，若要移动选中的文本，可进行的操作有",
              "options": [
                {
                  "key": "A",
                  "text": "在选中的文本处右击，选择“剪切”命令，再移动光标至指定位置，单击“粘贴”按钮"
                },
                {
                  "key": "B",
                  "text": "将鼠标指针指向选中的文本，按住鼠标左键，拖动所选文本至指定位置"
                },
                {
                  "key": "C",
                  "text": "将鼠标指针指向选中的文本，按住 Ctrl 键的同时，用鼠标左键拖动所选文本至指定位置"
                },
                {
                  "key": "D",
                  "text": "单击“开始”选项卡中的“复制”命令，移动光标至指定位置，再单击“粘贴”命令"
                }
              ],
              "answer": [
                "A",
                "B"
              ],
              "explanation": "选项 C、D 是复制文本的操作，A、B 是移动文本的操作。"
            },
            {
              "id": "ch1_s2_39",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，“开始”选项卡中包括（　）命令。",
              "options": [
                {
                  "key": "A",
                  "text": "剪切"
                },
                {
                  "key": "B",
                  "text": "目录"
                },
                {
                  "key": "C",
                  "text": "查找替换"
                },
                {
                  "key": "D",
                  "text": "复制"
                }
              ],
              "answer": [
                "A",
                "C",
                "D"
              ],
              "explanation": "“开始”选项卡包括剪切、复制、粘贴、格式刷、查找替换等命令。“目录”命令在“引用”选项卡中。"
            },
            {
              "id": "ch1_s2_40",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "用 WPS 文字中的“字数统计”功能可统计",
              "options": [
                {
                  "key": "A",
                  "text": "字数"
                },
                {
                  "key": "B",
                  "text": "页数"
                },
                {
                  "key": "C",
                  "text": "字符数"
                },
                {
                  "key": "D",
                  "text": "段落数"
                }
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "在 WPS 文字中，利用“审阅”选项卡中的“字数统计”命令，可以统计字数、页数、字符数、段落数等。"
            },
            {
              "id": "ch1_s2_41",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，若要将一些文本内容设置为黑体，则首先应该选定文本内容。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，所有对文本的格式设置与操作都是在选定文本的基础上进行的。"
            },
            {
              "id": "ch1_s2_42",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，大纲视图下能显示文档的页眉和页脚。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "页眉和页脚只在页面视图、全屏显示模式和写作模式中显示，大纲视图下不显示。"
            },
            {
              "id": "ch1_s2_43",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中编辑文档时，Ctrl+C 组合键是执行复制操作，Ctrl+V 组合键是执行粘贴操作，Ctrl+X 组合键是执行剪切操作。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，Ctrl+C：复制；Ctrl+V：粘贴；Ctrl+X：剪切。"
            },
            {
              "id": "ch1_s2_44",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，默认情况下，文档处于插入状态，可以通过按 Insert 键将其转换为改写状态。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，默认情况下文档处于插入状态，可以通过按 Insert 键将其转换为改写状态，也可以单击状态栏上的“改写”按钮进行转换。"
            },
            {
              "id": "ch1_s2_45",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，剪贴板上的内容可粘贴到文档的多处。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "剪贴板中的内容可以粘贴至文档的多处，不因一次粘贴而消失。"
            },
            {
              "id": "ch1_s2_46",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中进行查找操作时，可以按 Esc 键取消正在进行的操作。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，正在进行查找操作时，可以单击“查找和替换”对话框的“关闭”按钮或者按 Esc 键取消查找操作。"
            },
            {
              "id": "ch1_s2_47",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "WPS 文字中，在文档左侧选定区 ______ 鼠标左键可以选中一行文本。",
              "answer": "单击",
              "acceptedAnswers": [
                "单击",
                "单击一下"
              ],
              "explanation": "在文档左侧选定区单击鼠标左键可以选中一行文本。"
            },
            {
              "id": "ch1_s2_48",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，如果用户误删了文本，可用快速访问工具栏中的 ______ 按钮取消误删操作。",
              "answer": "撤销",
              "acceptedAnswers": [
                "撤销"
              ],
              "explanation": "可用快速访问工具栏中的“撤销”按钮取消误删操作。"
            },
            {
              "id": "ch1_s2_49",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "WPS 文字提供了两种文本输入状态：插入和改写，按键盘上的 ______ 键可以在两种输入方式之间进行切换。",
              "answer": "Insert",
              "acceptedAnswers": [
                "Insert",
                "insert",
                "INSERT"
              ],
              "explanation": "按键盘上的 Insert 键可以在插入和改写两种输入方式之间进行切换。"
            },
            {
              "id": "ch1_s2_50",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字文档中编辑文本，为了能互换两段不相邻文字的位置，可以使用 ______ 和粘贴操作。",
              "answer": "剪切",
              "acceptedAnswers": [
                "剪切"
              ],
              "explanation": "为了能互换两段不相邻文字的位置，可以使用剪切和粘贴操作。"
            },
            {
              "id": "ch1_s2_51",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，要选择一段文本，则需要按住 ______ 键不放的同时利用鼠标单击需要选中的段落的任意位置。",
              "answer": "Ctrl",
              "acceptedAnswers": [
                "Ctrl",
                "ctrl",
                "CTRL"
              ],
              "explanation": "按住 Ctrl 键不放的同时利用鼠标单击需要选中的段落的任意位置可以选中整个段落。"
            },
            {
              "id": "ch1_s2_52",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字的编辑状态下，如果输入的字符覆盖了当前光标位置后面的字符，表明处于 ______ 状态。",
              "answer": "改写",
              "acceptedAnswers": [
                "改写"
              ],
              "explanation": "如果输入的字符覆盖了当前光标位置后面的字符，表明处于改写状态。"
            },
            {
              "id": "ch1_s2_53",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，选择垂直文本时，首先按住 ______ 键不放，然后按住鼠标左键拖出一块矩形区域。",
              "answer": "Alt",
              "acceptedAnswers": [
                "Alt",
                "alt",
                "ALT"
              ],
              "explanation": "在 WPS 文字中，按住 Alt 键不放，然后按住鼠标左键，可以拖出一块矩形区域，选择垂直文本。"
            },
            {
              "id": "ch1_s2_54",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，不能将剪贴板上的内容粘贴到插入点处的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "利用“开始”选项卡中的“粘贴”命令"
                },
                {
                  "key": "B",
                  "text": "在插入点处右击，选择“粘贴”命令"
                },
                {
                  "key": "C",
                  "text": "按 Ctrl+C 组合键"
                },
                {
                  "key": "D",
                  "text": "按 Ctrl+V 组合键"
                }
              ],
              "answer": "C",
              "explanation": "Ctrl+C 组合键是将选择的内容复制到剪贴板上，不是粘贴操作。"
            },
            {
              "id": "ch1_s2_55",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在文档的插入状态下修改文档时，要在输入新的文字的同时替换原有文字，最简便的操作是（　）",
              "options": [
                {
                  "key": "A",
                  "text": "直接输入新内容"
                },
                {
                  "key": "B",
                  "text": "选定需替换的内容，直接输入新内容"
                },
                {
                  "key": "C",
                  "text": "先利用 Delete 键删除需替换的内容，再输入新内容"
                },
                {
                  "key": "D",
                  "text": "无法同时实现"
                }
              ],
              "answer": "B",
              "explanation": "选中一部分文本后直接输入新的文本内容，原有的内容会被新输入的内容直接替换。"
            },
            {
              "id": "ch1_s2_56",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "一个 WPS 文字文档共有 200 页，要定位至 112 页，下列选项中最快的是（　）",
              "options": [
                {
                  "key": "A",
                  "text": "用垂直滚动条快速移动文档至第 112 页"
                },
                {
                  "key": "B",
                  "text": "利用“查找和替换”对话框“定位”选项卡中的命令，快速定位至第 112 页"
                },
                {
                  "key": "C",
                  "text": "用向下或向上箭头定位至第 112 页"
                },
                {
                  "key": "D",
                  "text": "用 PgDn 键或 PgUp 键定位至第 112 页"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，利用“查找和替换”对话框中的“定位”命令，可以输入目标页码进行最快速的定位。"
            },
            {
              "id": "ch1_s2_57",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，“查找和替换”对话框可以选择搜索范围“查找上一处”或“查找下一处”，若选择“全部替换”按钮，则",
              "options": [
                {
                  "key": "A",
                  "text": "从插入点开始向上查找并替换匹配到的内容"
                },
                {
                  "key": "B",
                  "text": "从插入点开始向下查找并替换选中的内容"
                },
                {
                  "key": "C",
                  "text": "从插入点开始向下查找并替换匹配到的内容"
                },
                {
                  "key": "D",
                  "text": "对整篇文档查找并替换匹配到的内容"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字的“查找和替换”对话框中按“全部替换”按钮，会对整篇文档查找并替换匹配到的内容。"
            },
            {
              "id": "ch1_s2_58",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，执行“开始”选项卡中的“替换”命令，在对话框内指定“查找内容”，但在“替换为”框内未输入任何内容，此时单击“全部替换”，则（　）",
              "options": [
                {
                  "key": "A",
                  "text": "不能执行"
                },
                {
                  "key": "B",
                  "text": "只能查找，不做任何替换"
                },
                {
                  "key": "C",
                  "text": "把所查找到的内容全部删除"
                },
                {
                  "key": "D",
                  "text": "每查找到一个，就询问用户，让用户指定替换内容"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，执行“替换”操作时，如果在“替换为”框内未输入任何内容，则会把所查找到的内容全部替换为空（即全部删除）。"
            },
            {
              "id": "ch1_s2_59",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "下列关于 WPS 文字的叙述，错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "选定区是位于文档窗口左侧至文本之间的空白区域"
                },
                {
                  "key": "B",
                  "text": "标尺只有水平标尺"
                },
                {
                  "key": "C",
                  "text": "要选定一行，可在该行的选定区单击"
                },
                {
                  "key": "D",
                  "text": "要选定整个文档，可用鼠标左键三击选定区"
                }
              ],
              "answer": "B",
              "explanation": "标尺不仅有水平标尺，还有垂直标尺，在页面视图和写作模式下可以同时显示水平标尺和垂直标尺。选项 B 错误。"
            },
            {
              "id": "ch1_s2_60",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，以下文本的选定方法正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "鼠标单击开始位置，然后按住 Ctrl 键的同时，单击结束位置，可选定从开始位置到结束位置之间的文本"
                },
                {
                  "key": "B",
                  "text": "按 Ctrl+S 组合键可选定全文"
                },
                {
                  "key": "C",
                  "text": "在一行内任意位置单击鼠标可选定该行"
                },
                {
                  "key": "D",
                  "text": "按 Ctrl+Shift+Home 组合键可以从当前位置扩展选定到文档开头"
                }
              ],
              "answer": "D",
              "explanation": "选项 A 应按住 Shift 键；选项 B 中 Ctrl+S 是保存；选项 C 中应在选定区单击；选项 D 正确。"
            },
            {
              "id": "ch1_s2_61",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字文档中，按（　）键的同时拖动鼠标，可纵向选定一个矩形文本区域。",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl"
                },
                {
                  "key": "B",
                  "text": "Esc"
                },
                {
                  "key": "C",
                  "text": "Shift"
                },
                {
                  "key": "D",
                  "text": "Alt"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字中，按住 Alt 键不放，然后按住鼠标左键，可以拖出一块矩形区域，选择完成后释放 Alt 键和鼠标左键即可。"
            },
            {
              "id": "ch1_s2_62",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "以下选项中，选定一行文本的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "将鼠标指向该段落左边的空白区域双击"
                },
                {
                  "key": "B",
                  "text": "将鼠标指向该段落中的任意处三击"
                },
                {
                  "key": "C",
                  "text": "在该段落中的任意位置双击"
                },
                {
                  "key": "D",
                  "text": "鼠标指针在该段落左边的空白区域单击"
                }
              ],
              "answer": "D",
              "explanation": "鼠标指针在该段落左边的空白区域（选定区）单击可以选中一行文本，双击可以选中一段文本，三击可以选中整篇文档。"
            },
            {
              "id": "ch1_s2_63",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，下列有关“查找和替换”的说法中，错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "查找替换时可以区分大小写字母"
                },
                {
                  "key": "B",
                  "text": "查找替换时可以使用通配符“*”和“?”"
                },
                {
                  "key": "C",
                  "text": "可以对段落标记、分页符等进行查找替换"
                },
                {
                  "key": "D",
                  "text": "只能从光标处向下查找替换"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字中，可以从光标处向下、光标处向上或对全部内容进行查找替换。选项 D 错误。"
            },
            {
              "id": "ch1_s2_64",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "关于 WPS 文字的定位功能，下列说法错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "可以定位到书签"
                },
                {
                  "key": "B",
                  "text": "可以定位到页号"
                },
                {
                  "key": "C",
                  "text": "可以定位到图形编号"
                },
                {
                  "key": "D",
                  "text": "可以定位到超链接"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字中，定位功能可以定位的目标有页、书签、图形、批注、表格、对象等，不包括超链接。"
            },
            {
              "id": "ch1_s2_65",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字的编辑状态下，打开“剪贴板”窗格，执行两次“剪切”操作，在剪贴板中（　）",
              "options": [
                {
                  "key": "A",
                  "text": "仅保存第一次被剪切的内容"
                },
                {
                  "key": "B",
                  "text": "仅保存第二次被剪切的内容"
                },
                {
                  "key": "C",
                  "text": "保存这两次被剪切的内容"
                },
                {
                  "key": "D",
                  "text": "无内容"
                }
              ],
              "answer": "C",
              "explanation": "WPS 文字“剪贴板”窗格中可以保存多次剪切或复制的内容。"
            },
            {
              "id": "ch1_s2_66",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "通过（　）操作可以方便地将一个 WPS 文字文档中的所有数字设置为红色。",
              "options": [
                {
                  "key": "A",
                  "text": "查找"
                },
                {
                  "key": "B",
                  "text": "替换"
                },
                {
                  "key": "C",
                  "text": "定位"
                },
                {
                  "key": "D",
                  "text": "样式"
                }
              ],
              "answer": "B",
              "explanation": "使用“替换”功能不仅可以替换文本，还可以进行文本格式的替换，如更改字体颜色等。"
            },
            {
              "id": "ch1_s2_67",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，按下（　）组合键，可以恢复撤销操作。",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl+C"
                },
                {
                  "key": "B",
                  "text": "Ctrl+Y"
                },
                {
                  "key": "C",
                  "text": "Ctrl+G"
                },
                {
                  "key": "D",
                  "text": "Ctrl+B"
                }
              ],
              "answer": "B",
              "explanation": "Ctrl+Y 快捷键的作用是恢复撤销操作；Ctrl+C 是复制；Ctrl+G 是定位；Ctrl+B 是加粗。"
            },
            {
              "id": "ch1_s2_68",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，要在文档当前段落中换行但不形成一个段落，新行的格式与当前段落格式相同，应按（　）组合键。",
              "options": [
                {
                  "key": "A",
                  "text": "Shift+Enter"
                },
                {
                  "key": "B",
                  "text": "Ctrl+Enter"
                },
                {
                  "key": "C",
                  "text": "Enter"
                },
                {
                  "key": "D",
                  "text": "Alt+Enter"
                }
              ],
              "answer": "A",
              "explanation": "Shift+Enter 组合键的作用是换行但不分段（产生手动换行符）。Ctrl+Enter 是分页符。"
            },
            {
              "id": "ch1_s2_69",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "下列有关 WPS 文字替换操作的叙述，正确的有",
              "options": [
                {
                  "key": "A",
                  "text": "能替换文档中带格式的文本"
                },
                {
                  "key": "B",
                  "text": "能替换文档中的段落标记"
                },
                {
                  "key": "C",
                  "text": "能替换文档中的分节符"
                },
                {
                  "key": "D",
                  "text": "不能替换文档中的制表符"
                }
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "WPS 文字中的替换功能可以替换文档中的特殊符号，比如段落标记、制表符、分栏符、分节符等。选项 D 错误。"
            },
            {
              "id": "ch1_s2_70",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，使用“查找和替换”对话框可以实现",
              "options": [
                {
                  "key": "A",
                  "text": "全部替换"
                },
                {
                  "key": "B",
                  "text": "有选择的替换"
                },
                {
                  "key": "C",
                  "text": "查找文字"
                },
                {
                  "key": "D",
                  "text": "查找文档位置"
                }
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "查找文档位置可以通过文件资源管理器右上角的搜索框或状态栏中的搜索框进行，查找和替换对话框不可以查找文档存储位置。"
            },
            {
              "id": "ch1_s2_71",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字文本编辑中，选定文本后，直接输入新的内容，则新输入的内容会插入到文本前。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "选定文本后，直接输入新的内容，则新内容将直接替换选定文本。"
            },
            {
              "id": "ch1_s2_72",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，只能选定连续文本。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，按下 Ctrl 键的同时拖动鼠标左键可以选择不连续的文本。"
            },
            {
              "id": "ch1_s2_73",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，撤销命令只能执行一次。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "撤销命令可以执行多次，其快捷键是 Ctrl+Z。"
            }
          ]
        },
        {
          "id": "ch1_s3",
          "number": "第三节",
          "title": "文档的格式化",
          "questions": [
            {
              "id": "ch1_s3_1",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字软件中，若要将选定的文本内容设置为加粗，则在“字体”功能区用鼠标单击 B 按钮即可。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "选中文本后，单击“开始”选项卡“字体”功能区中的“B”按钮或按 Ctrl+B 组合键，均可以将选定文本设置为加粗。"
            },
            {
              "id": "ch1_s3_2",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字处理软件中，选中已设置好格式的文本，双击“格式刷”按钮，能够对多个目标文本进行格式复制。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "格式刷是一种快速应用格式的工具，能够将某文本对象的格式应用到其他对象上。双击“格式刷”按钮，可以使鼠标指针一直呈刷子形状。当不再需要使用格式刷时，可以再次单击“格式刷”按钮或按 Esc 键退出格式刷。"
            },
            {
              "id": "ch1_s3_3",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "WPS 文字处理软件中，在“字体”对话框中，单击 ______ 可以实现 H₂O 中数字 2 的显示效果。",
              "answer": "下标",
              "acceptedAnswers": [
                "下标"
              ],
              "explanation": "在“字体”对话框中勾选“下标”可以实现下标效果。"
            },
            {
              "id": "ch1_s3_4",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "WPS 文字处理软件中，提供了两种字号系统：中文字号和阿拉伯数字字号，中文字号的数字越大，文本越 ______。",
              "answer": "小",
              "acceptedAnswers": [
                "小"
              ],
              "explanation": "中文字号越大，字体越小；阿拉伯数字字号越大，字体越大。"
            },
            {
              "id": "ch1_s3_5",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字文档编辑中，将一部分内容改为四号楷体，然后紧接着在这部分内容后输入新的文字，则新输入的文字的字号和字体为",
              "options": [
                {
                  "key": "A",
                  "text": "四号楷体"
                },
                {
                  "key": "B",
                  "text": "五号楷体"
                },
                {
                  "key": "C",
                  "text": "五号宋体"
                },
                {
                  "key": "D",
                  "text": "四号宋体"
                }
              ],
              "answer": "A",
              "explanation": "设置字符格式不仅对所选文本有效，对在该处后续输入的文本也有效，故选 A。"
            },
            {
              "id": "ch1_s3_6",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，对于一段两端对齐的文字，只选定其中的几个字符，用鼠标单击“居中”按钮，则",
              "options": [
                {
                  "key": "A",
                  "text": "整个段落均变成居中格式"
                },
                {
                  "key": "B",
                  "text": "只有被选定的文字变成居中格式"
                },
                {
                  "key": "C",
                  "text": "整个文档变成居中格式"
                },
                {
                  "key": "D",
                  "text": "操作无效，格式不变"
                }
              ],
              "answer": "A",
              "explanation": "“居中”是段落的对齐方式，针对的是整个段落。"
            },
            {
              "id": "ch1_s3_7",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，下列关于字符格式化的说法，正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "只能格式化字号的大小"
                },
                {
                  "key": "B",
                  "text": "只能格式化字体、字号的大小"
                },
                {
                  "key": "C",
                  "text": "适用于从单个字母到整个文档中的任何内容"
                },
                {
                  "key": "D",
                  "text": "加下划线不属于字符格式化"
                }
              ],
              "answer": "C",
              "explanation": "字符格式化包括设置字体、字号、字形、字符颜色、下划线类型等，适用于从单个字母到整个文档。"
            },
            {
              "id": "ch1_s3_8",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字的“字体”对话框中，不能设置",
              "options": [
                {
                  "key": "A",
                  "text": "下划线"
                },
                {
                  "key": "B",
                  "text": "字符边框"
                },
                {
                  "key": "C",
                  "text": "字体颜色"
                },
                {
                  "key": "D",
                  "text": "字符间距"
                }
              ],
              "answer": "B",
              "explanation": "设置字符边框，需要利用“边框和底纹”对话框或“开始”选项卡中的“字符边框”命令。"
            },
            {
              "id": "ch1_s3_9",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "关于 WPS 文字中的项目符号和编号，下列说法错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "可以使用“引用”选项卡插入项目符号和编号"
                },
                {
                  "key": "B",
                  "text": "可以设置编号的起始号码与编号样式"
                },
                {
                  "key": "C",
                  "text": "可以自定义项目符号的字符样式"
                },
                {
                  "key": "D",
                  "text": "可以自定义项目符号和编号的字体颜色"
                }
              ],
              "answer": "A",
              "explanation": "插入项目符号和编号应使用“开始”选项卡。"
            },
            {
              "id": "ch1_s3_10",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字编辑文档时，正在输入的文字添加在",
              "options": [
                {
                  "key": "A",
                  "text": "文件末尾"
                },
                {
                  "key": "B",
                  "text": "当前行的末尾"
                },
                {
                  "key": "C",
                  "text": "鼠标指向处"
                },
                {
                  "key": "D",
                  "text": "插入点所在的位置"
                }
              ],
              "answer": "D",
              "explanation": "在使用 WPS 文字编辑文档时，正在输入的文字添加到插入点所在的位置，用户可以利用鼠标或键盘调整插入点的位置。"
            },
            {
              "id": "ch1_s3_11",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字文档编辑状态下，若要设置文档行间距，其功能按钮位于（　）选项卡中。",
              "options": [
                {
                  "key": "A",
                  "text": "开始"
                },
                {
                  "key": "B",
                  "text": "文件"
                },
                {
                  "key": "C",
                  "text": "插入"
                },
                {
                  "key": "D",
                  "text": "视图"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，可以在“开始”选项卡中设置文档的字符间距、行间距、段前段后间距等。"
            },
            {
              "id": "ch1_s3_12",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中建立一个新文档时，默认的文档对齐方式为",
              "options": [
                {
                  "key": "A",
                  "text": "居中"
                },
                {
                  "key": "B",
                  "text": "左对齐"
                },
                {
                  "key": "C",
                  "text": "两端对齐"
                },
                {
                  "key": "D",
                  "text": "右对齐"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中新建文档，默认的对齐方式是两端对齐。"
            },
            {
              "id": "ch1_s3_13",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，若要将文档中的所有字符格式恢复至默认状态，应选择（　）选项卡中的命令。",
              "options": [
                {
                  "key": "A",
                  "text": "审阅"
                },
                {
                  "key": "B",
                  "text": "开始"
                },
                {
                  "key": "C",
                  "text": "引用"
                },
                {
                  "key": "D",
                  "text": "视图"
                }
              ],
              "answer": "B",
              "explanation": "利用“清除格式”功能可以将设置的格式恢复到默认状态。选择要清除格式的文本，切换到“开始”选项卡，单击“清除格式”按钮即可。"
            },
            {
              "id": "ch1_s3_14",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "下列选项中无法调整文档段落缩进量的是",
              "options": [
                {
                  "key": "A",
                  "text": "拖动水平标尺中的滑块"
                },
                {
                  "key": "B",
                  "text": "使用“字体”对话框设置"
                },
                {
                  "key": "C",
                  "text": "通过“段落”对话框设置"
                },
                {
                  "key": "D",
                  "text": "通过“开始”选项卡中的命令设置"
                }
              ],
              "answer": "B",
              "explanation": "“字体”对话框针对的是文档中字符格式的设置，无法设置文档段落缩进量。"
            },
            {
              "id": "ch1_s3_15",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字编辑状态下，使选定的文本倾斜的组合键是",
              "options": [
                {
                  "key": "A",
                  "text": "Ctrl+H"
                },
                {
                  "key": "B",
                  "text": "Ctrl+I"
                },
                {
                  "key": "C",
                  "text": "Ctrl+B"
                },
                {
                  "key": "D",
                  "text": "Ctrl+U"
                }
              ],
              "answer": "B",
              "explanation": "Ctrl+H 组合键的作用是打开“替换”对话框；Ctrl+I 组合键的作用是使字体倾斜；Ctrl+B 组合键的作用是使字体加粗；Ctrl+U 组合键的作用是为文本添加下划线。"
            },
            {
              "id": "ch1_s3_16",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "要将 WPS 文字文档中的一段文字设置为黑体，第一步操作是",
              "options": [
                {
                  "key": "A",
                  "text": "选定这一段文字"
                },
                {
                  "key": "B",
                  "text": "单击“开始”选项卡中的“字体”列表框"
                },
                {
                  "key": "C",
                  "text": "鼠标单击“开始”选项卡中的 B 按钮"
                },
                {
                  "key": "D",
                  "text": "打开“字体”对话框"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，改变字体的第一步操作是要选定要改变字体的文本。"
            },
            {
              "id": "ch1_s3_17",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，段落格式应用于",
              "options": [
                {
                  "key": "A",
                  "text": "插入点所在的段落"
                },
                {
                  "key": "B",
                  "text": "段落中所选定的部分文本"
                },
                {
                  "key": "C",
                  "text": "文档中的所有节"
                },
                {
                  "key": "D",
                  "text": "插入点所在的节"
                }
              ],
              "answer": "A",
              "explanation": "将插入点定位到段落中、选中段落中的部分文字或选中整个段落后设置段落格式，均会作用于当前段落。"
            },
            {
              "id": "ch1_s3_18",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，设置字符的“底纹”需选择",
              "options": [
                {
                  "key": "A",
                  "text": "“插入”选项卡中的“文字效果”按钮"
                },
                {
                  "key": "B",
                  "text": "“开始”选项卡中的“文字效果”按钮"
                },
                {
                  "key": "C",
                  "text": "“插入”选项卡中的“字符底纹”按钮"
                },
                {
                  "key": "D",
                  "text": "“开始”选项卡中的“字符底纹”按钮"
                }
              ],
              "answer": "D",
              "explanation": "在 WPS 文字中，利用“开始”选项卡中的“字符底纹”命令，可以为选中的文字添加字符底纹。"
            },
            {
              "id": "ch1_s3_19",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，如果选定的文字含有不同的字体，那么在“开始”选项卡“字体”框中将",
              "options": [
                {
                  "key": "A",
                  "text": "显示所选文字中第一种字体的名称"
                },
                {
                  "key": "B",
                  "text": "显示所选文字中最后一种字体的名称"
                },
                {
                  "key": "C",
                  "text": "空白显示"
                },
                {
                  "key": "D",
                  "text": "显示所选文字中的全部字体的名称"
                }
              ],
              "answer": "C",
              "explanation": "如果选定的文字含有不同的字体，则“字体”框中无法显示字体的名称，即空白显示。"
            },
            {
              "id": "ch1_s3_20",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字编辑状态下，被编辑文档的文字字号有“四号”“五号”“16”“18”4种，下列关于所设定字号大小的比较中，正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "“四号”小于“五号”"
                },
                {
                  "key": "B",
                  "text": "“四号”大于“五号”"
                },
                {
                  "key": "C",
                  "text": "“16”大于“18”"
                },
                {
                  "key": "D",
                  "text": "文字的大小一样，字体不同"
                }
              ],
              "answer": "B",
              "explanation": "在设置字体大小时，可以通过中文字号和数字字号调整字体的大小。“18”大于“16”，“四号”大于“五号”，故选 B。"
            },
            {
              "id": "ch1_s3_21",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字文档常用工具栏中，若要将选中的文本或段落格式重复应用多次，则最有效的操作方法是（　）“格式刷”按钮。",
              "options": [
                {
                  "key": "A",
                  "text": "单击"
                },
                {
                  "key": "B",
                  "text": "双击"
                },
                {
                  "key": "C",
                  "text": "右击"
                },
                {
                  "key": "D",
                  "text": "三击"
                }
              ],
              "answer": "B",
              "explanation": "若想要多次使用格式刷，可双击“格式刷”按钮，当不需要使用格式刷时可再次单击“格式刷”按钮或按 Esc 键退出格式刷。"
            },
            {
              "id": "ch1_s3_22",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "使用（　）可以进行快速格式复制操作。",
              "options": [
                {
                  "key": "A",
                  "text": "样式"
                },
                {
                  "key": "B",
                  "text": "“粘贴”命令"
                },
                {
                  "key": "C",
                  "text": "格式刷"
                },
                {
                  "key": "D",
                  "text": "“复制”命令"
                }
              ],
              "answer": "C",
              "explanation": "格式刷主要用于将已设定好的文本的格式快速应用到文档中需设置此格式的其他部分，使其与源文本格式保持一致。"
            },
            {
              "id": "ch1_s3_23",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，不能通过“段落”对话框实现的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "设置行间距"
                },
                {
                  "key": "B",
                  "text": "设置段落缩进"
                },
                {
                  "key": "C",
                  "text": "设置字符间距"
                },
                {
                  "key": "D",
                  "text": "设置段落间距"
                }
              ],
              "answer": "C",
              "explanation": "通过“段落”对话框可以设置行间距、段落缩进和段落间距等，不能设置字符间距。字符间距可在“字体”对话框中进行设置。"
            },
            {
              "id": "ch1_s3_24",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "下列选项中，属于 WPS 文字缩进效果的是",
              "options": [
                {
                  "key": "A",
                  "text": "两端缩进"
                },
                {
                  "key": "B",
                  "text": "分散缩进"
                },
                {
                  "key": "C",
                  "text": "左缩进"
                },
                {
                  "key": "D",
                  "text": "右缩进"
                }
              ],
              "answer": [
                "C",
                "D"
              ],
              "explanation": "WPS 文字缩进效果包括首行缩进、悬挂缩进、左缩进、右缩进。"
            },
            {
              "id": "ch1_s3_25",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "以下调整（　）的操作属于 WPS 文字中的段落格式。",
              "options": [
                {
                  "key": "A",
                  "text": "对齐方式"
                },
                {
                  "key": "B",
                  "text": "缩进方式"
                },
                {
                  "key": "C",
                  "text": "字体大小"
                },
                {
                  "key": "D",
                  "text": "行距"
                }
              ],
              "answer": [
                "A",
                "B",
                "D"
              ],
              "explanation": "字体大小属于字符格式。对齐方式、缩进方式和行距属于段落格式。"
            },
            {
              "id": "ch1_s3_26",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，若要对选中的文字设置上下标效果，正确的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "在“段落”对话框中设置"
                },
                {
                  "key": "B",
                  "text": "在“页面设置”对话框中设置"
                },
                {
                  "key": "C",
                  "text": "在“开始”选项卡中设置"
                },
                {
                  "key": "D",
                  "text": "在“字体”对话框中设置"
                }
              ],
              "answer": [
                "C",
                "D"
              ],
              "explanation": "上下标效果可以使用“开始”选项卡中的“上标”和“下标”命令，或在“字体”对话框中设置。"
            },
            {
              "id": "ch1_s3_27",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "修改字体的方法是",
              "options": [
                {
                  "key": "A",
                  "text": "在右键快捷菜单中选择“字体”命令"
                },
                {
                  "key": "B",
                  "text": "选择“开始”→“字体”命令"
                },
                {
                  "key": "C",
                  "text": "选择“视图”→“字体”命令"
                },
                {
                  "key": "D",
                  "text": "选择“引用”→“字体”命令"
                }
              ],
              "answer": [
                "A",
                "B"
              ],
              "explanation": "修改字体可在右键快捷菜单中选择“字体”命令，或在“开始”选项卡的字体功能区选择。"
            },
            {
              "id": "ch1_s3_28",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，边框可以应用到",
              "options": [
                {
                  "key": "A",
                  "text": "文字"
                },
                {
                  "key": "B",
                  "text": "段落"
                },
                {
                  "key": "C",
                  "text": "表格"
                },
                {
                  "key": "D",
                  "text": "页面"
                }
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "在 WPS 文字中，可以为文字、段落、表格、页面等添加边框。"
            },
            {
              "id": "ch1_s3_29",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字中“格式刷”按钮有单击和双击两种用法。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，单击“格式刷”可以使用一次，双击“格式刷”可以使用多次。"
            },
            {
              "id": "ch1_s3_30",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "当需要连续使用格式刷时，双击“格式刷”按钮即可。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "格式刷是一种快速应用格式的工具，双击“格式刷”按钮即可进行多次格式应用。"
            },
            {
              "id": "ch1_s3_31",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字操作中，按 Enter 键的结果是产生一个行结束符。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，按 Enter 键会产生一个段落结束符（段落标记）。Shift+Enter 产生手动换行符。"
            },
            {
              "id": "ch1_s3_32",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中选择某句话后，双击“字体”组中的 B 按钮后，这句话的格式不变。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "选择某句话后，单击“字体”组中的 B 按钮，将实现加粗的字体效果；再次单击，即可取消该效果，文本格式与原来一致。"
            },
            {
              "id": "ch1_s3_33",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，使用格式刷可以快速应用选定文本的字体格式和段落格式。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "格式刷可以快速复制选中文本的字符格式与段落格式。"
            },
            {
              "id": "ch1_s3_34",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，可以在“段落”对话框中设置字形。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "设置字形利用的是“字体”对话框或“开始”选项卡中的命令。"
            },
            {
              "id": "ch1_s3_35",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "利用 WPS 文字可以给已经输入的段落添加编号，当在已编号的列表中添加、删除或重新排列项目时，会自动更新编号。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "项目符号和编号属于段落格式。为段落添加编号后，删除、插入或重新排列某一段落，其余的段落编号会自动更改，不必人工干预。"
            },
            {
              "id": "ch1_s3_36",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字中一个段落可同时设置为居中且两端对齐。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "WPS 文字中一个段落只能设置一种对齐方式。"
            },
            {
              "id": "ch1_s3_37",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字文档中一个段落可以使用多种汉字字体和字号。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "一个段落中的文本可以设置不同的字体和字号等格式。"
            },
            {
              "id": "ch1_s3_38",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字中，在启用项目符号或编号的列表中，按 Enter 键后会默认自动延续该格式。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，项目符号和编号作用于光标所在的段落和该段落后的新增段落。因此，如果使用了项目符号或编号，则项目符号或编号在按 Enter 键后会自动出现。"
            },
            {
              "id": "ch1_s3_39",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，设置好一部分字符格式后，如果其他字符也需要使用相同的字符格式，则可以使用 ______ 将字符格式快速应用到其他字符上。",
              "answer": "格式刷",
              "acceptedAnswers": [
                "格式刷"
              ],
              "explanation": "格式刷可以将字符格式快速应用到其他字符上。"
            },
            {
              "id": "ch1_s3_40",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "WPS 文字若要创建一个自然段可按 ______ 键。",
              "answer": "Enter",
              "acceptedAnswers": [
                "Enter",
                "回车",
                "回车(Enter)",
                "回车键",
                "enter",
                "ENTER"
              ],
              "explanation": "WPS 文字中按 Enter（回车）键可产生段落标记，创建一个自然段。"
            },
            {
              "id": "ch1_s3_41",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，通过设置段落的 ______ 缩进可以实现图 2 所示的效果；通过设置段落的 ______ 缩进可以实现图 3 所示的效果。",
              "image": "assets/images/ch1_s3_q3.png",
              "answer": "首行、悬挂",
              "acceptedAnswers": [
                "首行、悬挂",
                "首行 悬挂",
                "首行，悬挂",
                "首行缩进、悬挂缩进",
                "首行缩进 悬挂缩进"
              ],
              "explanation": "图 2 中段落第一行向右缩进，为首行缩进；图 3 中除第一行外其余行向右缩进，为悬挂缩进。"
            },
            {
              "id": "ch1_s3_42",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中要将选定的文本设置为“斜体”，可使用快捷键 ______。",
              "answer": "Ctrl+I",
              "acceptedAnswers": [
                "Ctrl+I",
                "ctrl+i",
                "CTRL+I",
                "Ctrl + I"
              ],
              "explanation": "使选中文本倾斜的快捷键为 Ctrl+I。"
            },
            {
              "id": "ch1_s3_43",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，默认的段落对齐方式是 ______。",
              "answer": "两端对齐",
              "acceptedAnswers": [
                "两端对齐"
              ],
              "explanation": "WPS 文字中默认的段落对齐方式为两端对齐。"
            },
            {
              "id": "ch1_s3_44",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，段落首行第一个字符的起始位置距离段落其他行左侧的缩进量叫作 ______。",
              "answer": "首行缩进",
              "acceptedAnswers": [
                "首行缩进"
              ],
              "explanation": "首行第一个字符的起始位置距离段落其他行左侧的缩进量叫作首行缩进。"
            },
            {
              "id": "ch1_s3_45",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中有一个段落的最后一行只有一个字符，若想把该字符合并到上一行，下述方法中无法达到该目的的是",
              "options": [
                {
                  "key": "A",
                  "text": "减小页的左右边距"
                },
                {
                  "key": "B",
                  "text": "减小该段落文字的字号"
                },
                {
                  "key": "C",
                  "text": "减小该段落文字间距"
                },
                {
                  "key": "D",
                  "text": "减小该段落的行间距"
                }
              ],
              "answer": "D",
              "explanation": "减小段落行间距只能将行与行之间的间距缩小，但不会影响字符之间的排列，不能将最后一行中的字符合并到上一行。"
            },
            {
              "id": "ch1_s3_46",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，在没有自动添加编号的状态下，单击“开始”选项卡中的“编号”按钮，则（　）自动添加编号。",
              "options": [
                {
                  "key": "A",
                  "text": "可在所有段落前"
                },
                {
                  "key": "B",
                  "text": "可在所有行前"
                },
                {
                  "key": "C",
                  "text": "仅在插入点所在段落后的新增段落前"
                },
                {
                  "key": "D",
                  "text": "可在插入点所在段落和以后新增的段落前"
                }
              ],
              "answer": "D",
              "explanation": "项目符号和编号针对的是段落，如果没有选中段落，则对插入点所在的段落有效。对某一段落添加项目符号和编号后，该段落后新增加的段落也会自动添加项目符号和编号。"
            },
            {
              "id": "ch1_s3_47",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，有关“格式刷”的使用正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "格式刷可以将字符格式和段落格式多次应用到其他对象上"
                },
                {
                  "key": "B",
                  "text": "将选定格式应用到多个位置的方法是单击“格式刷”按钮"
                },
                {
                  "key": "C",
                  "text": "双击“格式刷”按钮只能将选定格式应用到一个位置"
                },
                {
                  "key": "D",
                  "text": "不再使用格式刷时可以按 Ctrl 键退出格式刷"
                }
              ],
              "answer": "A",
              "explanation": "当需要把一种格式应用到多个文本对象时，需要连续使用格式刷，此时可以双击“格式刷”按钮。当不再需要使用格式刷时，可以再次单击“格式刷”按钮或按 Esc 键退出格式刷。"
            },
            {
              "id": "ch1_s3_48",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字文档中关于“段落”的叙述正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "段落是由一句或多个句子组成的文档内容，最后一句必须以句号“。”或“.”结束"
                },
                {
                  "key": "B",
                  "text": "段落是由一行或多行组成的文档内容，最后一行必须以回车键结束"
                },
                {
                  "key": "C",
                  "text": "一个段落中，各行的首行缩进、悬挂缩进、右缩进可以不同"
                },
                {
                  "key": "D",
                  "text": "一个段落中的汉字必须使用同一种字体"
                }
              ],
              "answer": "B",
              "explanation": "一个段落中的汉字可以使用不同字体、字号。段落以段落标记符结束，段落标记符通过按回车键（Enter）产生。首行缩进、悬挂缩进、右缩进是段落格式，针对的是整个段落，而不是段落中的每一行。"
            },
            {
              "id": "ch1_s3_49",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "利用“带圈字符”命令可以给字符加上",
              "options": [
                {
                  "key": "A",
                  "text": "圆形"
                },
                {
                  "key": "B",
                  "text": "矩形"
                },
                {
                  "key": "C",
                  "text": "菱形"
                },
                {
                  "key": "D",
                  "text": "三角形"
                }
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "“带圈字符”命令的圈号形状有圆形、矩形、菱形和三角形。"
            },
            {
              "id": "ch1_s3_50",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "以下关于“项目符号”的说法，正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "可以使用“项目符号”按钮来添加"
                },
                {
                  "key": "B",
                  "text": "可以自己设计项目符号的样式"
                },
                {
                  "key": "C",
                  "text": "可以设置特殊符号为项目符号"
                },
                {
                  "key": "D",
                  "text": "可以使用格式刷来应用项目符号"
                }
              ],
              "answer": [
                "A",
                "B",
                "C",
                "D"
              ],
              "explanation": "在“开始”选项卡中单击“项目符号”下拉按钮，在下拉列表中选择“自定义项目符号”命令，打开“项目符号和编号”对话框，在该对话框中，A、B、C 选项中的操作都可以实现。通过“格式刷”也可以将某个段落的项目符号应用到其他段落中。"
            },
            {
              "id": "ch1_s3_51",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "WPS 文字中，“段落”对话框可以设置的有",
              "options": [
                {
                  "key": "A",
                  "text": "首行缩进"
                },
                {
                  "key": "B",
                  "text": "对齐方式"
                },
                {
                  "key": "C",
                  "text": "分栏"
                },
                {
                  "key": "D",
                  "text": "文字方向"
                }
              ],
              "answer": [
                "A",
                "B"
              ],
              "explanation": "分栏和文字方向均在“页面布局”选项卡下设置。"
            },
            {
              "id": "ch1_s3_52",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "WPS 文字中，要对一个文档中多个不连续的段落设置相同的格式，可以使用的操作方法是",
              "options": [
                {
                  "key": "A",
                  "text": "选用同一个“样式”来格式化这些段落"
                },
                {
                  "key": "B",
                  "text": "选用同一个“模板”来格式化这些段落"
                },
                {
                  "key": "C",
                  "text": "选中一个样板段落，双击“格式刷”按钮，再将鼠标指针拖过其他多个需格式化的不连续段落"
                },
                {
                  "key": "D",
                  "text": "选中一个样板段落，单击“格式刷”按钮，再将鼠标指针拖过其他多个需格式化的不连续段落"
                }
              ],
              "answer": [
                "A",
                "C"
              ],
              "explanation": "“模板”针对的是整篇文档，选项 B 错误；选项 D 中，单击“格式刷”按钮，只能将格式应用到其他对象上一次，不能将多个不连续的段落设置为相同格式。"
            }
          ]
        },
        {
          "id": "ch1_s4",
          "number": "第四节",
          "title": "文档排版",
          "questions": [
            {
              "id": "ch1_s4_1",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字软件中，下列可以设置“奇偶页不同”的选项卡是",
              "options": [
                {
                  "key": "A",
                  "text": "页面布局"
                },
                {
                  "key": "B",
                  "text": "引用"
                },
                {
                  "key": "C",
                  "text": "审阅"
                },
                {
                  "key": "D",
                  "text": "视图"
                }
              ],
              "answer": "A",
              "explanation": "在“页面布局”选项卡中，单击“页面设置”对话框启动器按钮，在打开的“页面设置”对话框中切换到“版式”选项卡，勾选“奇偶页不同”复选框。"
            },
            {
              "id": "ch1_s4_2",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文件处理软件中，设置纸张方向的选项卡是",
              "options": [
                {
                  "key": "A",
                  "text": "页面布局"
                },
                {
                  "key": "B",
                  "text": "插入"
                },
                {
                  "key": "C",
                  "text": "引用"
                },
                {
                  "key": "D",
                  "text": "审阅"
                }
              ],
              "answer": "A",
              "explanation": "在“页面布局”选项卡中，可以将纸张方向设置为纵向或横向。"
            },
            {
              "id": "ch1_s4_3",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字软件中，分栏操作最多只能分为三栏。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，默认情况下文档可以分为 11 栏。"
            },
            {
              "id": "ch1_s4_4",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在“页面设置”对话框中可以设置分栏。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "B",
              "explanation": "分栏操作需在“页面布局”选项卡的“分栏”命令中设置，常规“页面设置”对话框中无分栏选项。"
            },
            {
              "id": "ch1_s4_5",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，为了防止版式错乱，一般在文档的编辑、排版和打印等操作之前对（　）进行设置，因为它对许多操作都将产生影响。",
              "options": [
                {
                  "key": "A",
                  "text": "页面设置"
                },
                {
                  "key": "B",
                  "text": "打印预览"
                },
                {
                  "key": "C",
                  "text": "字体设置"
                },
                {
                  "key": "D",
                  "text": "页码设定"
                }
              ],
              "answer": "A",
              "explanation": "通常情况下，为了防止版式错乱，一般先进行页面设置，再编辑文档内容。"
            },
            {
              "id": "ch1_s4_6",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "要为一个 WPS 文字文档中设置多个不同的页面格式应先对页面进行（　）",
              "options": [
                {
                  "key": "A",
                  "text": "分页"
                },
                {
                  "key": "B",
                  "text": "分栏"
                },
                {
                  "key": "C",
                  "text": "设置页眉页脚"
                },
                {
                  "key": "D",
                  "text": "分节"
                }
              ],
              "answer": "D",
              "explanation": "节是独立的编辑单位，每一节都可以设置成不同的格式。插入分节符即可将文档分成多节，然后根据需要设置每节的格式。"
            },
            {
              "id": "ch1_s4_7",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，页眉和页脚的默认作用范围是",
              "options": [
                {
                  "key": "A",
                  "text": "全文"
                },
                {
                  "key": "B",
                  "text": "行"
                },
                {
                  "key": "C",
                  "text": "页"
                },
                {
                  "key": "D",
                  "text": "段"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，页眉和页脚的默认作用范围是全文。"
            },
            {
              "id": "ch1_s4_8",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，若需要将某个图形元素（如图片、文本）以半透明效果设置为文档所有页的页面背景，这种特殊的页面背景效果被称为",
              "options": [
                {
                  "key": "A",
                  "text": "图形"
                },
                {
                  "key": "B",
                  "text": "艺术字"
                },
                {
                  "key": "C",
                  "text": "图片"
                },
                {
                  "key": "D",
                  "text": "水印"
                }
              ],
              "answer": "D",
              "explanation": "水印是指添加在文档、图片、视频等数字内容中，用于标识版权、来源、状态或保密级别等信息的标记。利用“插入”选项卡中的“水印”命令，可以在文档页面背景中添加虚影文字或图片。"
            },
            {
              "id": "ch1_s4_9",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，“纸张大小”命令在（　）选项卡下。",
              "options": [
                {
                  "key": "A",
                  "text": "插入"
                },
                {
                  "key": "B",
                  "text": "开发工具"
                },
                {
                  "key": "C",
                  "text": "页面布局"
                },
                {
                  "key": "D",
                  "text": "视图"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，利用“页面布局”或“章节”选项卡中的“纸张大小”命令，可以修改纸张大小。"
            },
            {
              "id": "ch1_s4_10",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "WPS 文字中，通过“页面设置”对话框可进行（　）操作。",
              "options": [
                {
                  "key": "A",
                  "text": "设置段落格式"
                },
                {
                  "key": "B",
                  "text": "设置行距"
                },
                {
                  "key": "C",
                  "text": "设置页面颜色"
                },
                {
                  "key": "D",
                  "text": "设置纸张方向"
                }
              ],
              "answer": "D",
              "explanation": "在“页面设置”对话框中，可以设置页面的页边距、纸张方向、纸张大小、纸张来源、每行字符数、每页行数等。行距和段落格式需要在“段落”对话框中设置。页面颜色可以通过“页面布局”选项卡中的“背景”命令进行设置。"
            },
            {
              "id": "ch1_s4_11",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，为了确保一个文档中段落格式的一致性，可以使用",
              "options": [
                {
                  "key": "A",
                  "text": "替换"
                },
                {
                  "key": "B",
                  "text": "样式"
                },
                {
                  "key": "C",
                  "text": "交叉引用"
                },
                {
                  "key": "D",
                  "text": "页面设置"
                }
              ],
              "answer": "B",
              "explanation": "样式是指一组已经设定好的字符和段落的格式。它规定了文档中标题、题注和正文等各个文本元素的格式。在编辑文档过程中，正确设置和使用样式可以极大地提高工作效率。"
            },
            {
              "id": "ch1_s4_12",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，插入一个人工分页符，可在要分页的位置按（　）键。",
              "options": [
                {
                  "key": "A",
                  "text": "Esc"
                },
                {
                  "key": "B",
                  "text": "Alt+Enter"
                },
                {
                  "key": "C",
                  "text": "Ctrl+Enter"
                },
                {
                  "key": "D",
                  "text": "Enter"
                }
              ],
              "answer": "C",
              "explanation": "WPS 文字中，可以插入手动分页符强制分页。将光标定位到要分页的位置，切换到“页面布局”选项卡单击“分隔符”按钮，在弹出的下拉列表中选择“分页符”命令即可，或使用 Ctrl+Enter 组合键也可以插入一个人工分页符，开始新的一页。"
            },
            {
              "id": "ch1_s4_13",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，插入分节符应该选择（　）选项卡下的“分隔符”命令。",
              "options": [
                {
                  "key": "A",
                  "text": "开始"
                },
                {
                  "key": "B",
                  "text": "页面布局"
                },
                {
                  "key": "C",
                  "text": "插入"
                },
                {
                  "key": "D",
                  "text": "引用"
                }
              ],
              "answer": "B",
              "explanation": "在 WPS 文字中，通过“页面布局”选项卡中的“分隔符”命令可以插入分节符、分页符、分栏符和换行符。"
            },
            {
              "id": "ch1_s4_14",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "以下说法错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "在使用“字数统计”对话框时，可以对任意选定的内容进行字数统计"
                },
                {
                  "key": "B",
                  "text": "创建页眉和页脚不需要为每一页都进行设置"
                },
                {
                  "key": "C",
                  "text": "用户在使用 WPS 文字的内置样式时，无法对不符合自己排版要求的样式进行修改"
                },
                {
                  "key": "D",
                  "text": "在“分栏”对话框中可以设置栏数"
                }
              ],
              "answer": "C",
              "explanation": "对于内置的样式，用户可以根据需要进行修改。选项 C 说法错误。"
            },
            {
              "id": "ch1_s4_15",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字编辑状态下，不可以进行的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "对选定的段落进行页眉、页脚设置"
                },
                {
                  "key": "B",
                  "text": "在选定的段落内进行查找、替换"
                },
                {
                  "key": "C",
                  "text": "对选定的段落进行拼写检查"
                },
                {
                  "key": "D",
                  "text": "对选定的段落进行字数统计"
                }
              ],
              "answer": "A",
              "explanation": "页眉和页脚是指在每一页顶部和底部加入的信息，插入对象是页面。WPS 文字不能对选定的段落进行页眉、页脚设置，故选 A。"
            },
            {
              "id": "ch1_s4_16",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中无法实现的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "在页眉中插入图片"
                },
                {
                  "key": "B",
                  "text": "建立奇偶页内容不同的页眉"
                },
                {
                  "key": "C",
                  "text": "在页眉中插入分页符"
                },
                {
                  "key": "D",
                  "text": "在页眉中插入日期"
                }
              ],
              "answer": "C",
              "explanation": "在页眉和页脚中可以插入页码、日期和时间、图片、艺术字和形状等，可以设置页眉和页脚首页不同、奇偶页不同，但无法在页眉中插入分页符。"
            },
            {
              "id": "ch1_s4_17",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，利用页面设置功能可以进行的操作包括",
              "options": [
                {
                  "key": "A",
                  "text": "调整纸张大小"
                },
                {
                  "key": "B",
                  "text": "设置页边距"
                },
                {
                  "key": "C",
                  "text": "插入批注"
                },
                {
                  "key": "D",
                  "text": "字数统计"
                }
              ],
              "answer": [
                "A",
                "B"
              ],
              "explanation": "在 WPS 文字中，页面设置可以设置页边距、纸张方向、纸张大小、版式、文档网格、分栏等。插入批注和字数统计在“审阅”选项卡中。"
            },
            {
              "id": "ch1_s4_18",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中进行页面设置时，下列操作可以实现的是",
              "options": [
                {
                  "key": "A",
                  "text": "对奇偶页设置不同的页眉页脚"
                },
                {
                  "key": "B",
                  "text": "自定义纸张的大小"
                },
                {
                  "key": "C",
                  "text": "将左右页边距的值设置为负值"
                },
                {
                  "key": "D",
                  "text": "指定每行的字符数和每页的行数"
                }
              ],
              "answer": [
                "A",
                "B",
                "D"
              ],
              "explanation": "左右页边距的值最小为0，不能设置为负值。"
            },
            {
              "id": "ch1_s4_19",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字“页面布局”选项卡下，可以实现的操作有",
              "options": [
                {
                  "key": "A",
                  "text": "设置主题"
                },
                {
                  "key": "B",
                  "text": "自定义页边距"
                },
                {
                  "key": "C",
                  "text": "插入分节符"
                },
                {
                  "key": "D",
                  "text": "添加目录"
                }
              ],
              "answer": [
                "A",
                "B",
                "C"
              ],
              "explanation": "添加目录的相关命令在“引用”选项卡下。"
            },
            {
              "id": "ch1_s4_20",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "关于 WPS 文字中的样式，说法正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "用户可以自己新建样式"
                },
                {
                  "key": "B",
                  "text": "可以为样式指定快捷键"
                },
                {
                  "key": "C",
                  "text": "可以删除正文样式"
                },
                {
                  "key": "D",
                  "text": "可以修改正文样式"
                }
              ],
              "answer": [
                "A",
                "B",
                "D"
              ],
              "explanation": "WPS 文字允许用户新建样式，为样式指定快捷键和修改样式，但是不允许用户删除正文样式。系统的内置样式可以修改，但不能被删除。"
            },
            {
              "id": "ch1_s4_21",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "下列关于页眉和页脚的描述，正确的有",
              "options": [
                {
                  "key": "A",
                  "text": "页眉、页脚的字体、字号为固定值，不能修改"
                },
                {
                  "key": "B",
                  "text": "奇偶页、首页可以设置不同的页眉、页脚"
                },
                {
                  "key": "C",
                  "text": "页眉、页脚不能与文档的内容同时编辑"
                },
                {
                  "key": "D",
                  "text": "可以向页眉、页脚中插入图片"
                }
              ],
              "answer": [
                "B",
                "C",
                "D"
              ],
              "explanation": "设置页眉、页脚后，双击页眉、页脚区可以修改其中的内容，也可以修改页眉、页脚的字体和字号。"
            },
            {
              "id": "ch1_s4_22",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "以下关于 WPS 文字中“样式”的说法，正确的有",
              "options": [
                {
                  "key": "A",
                  "text": "用户只能使用 WPS 文字提供的内置样式"
                },
                {
                  "key": "B",
                  "text": "使用 WPS 文字提供的样式，可以对文档格式进行统一控制"
                },
                {
                  "key": "C",
                  "text": "使用样式格式化后，用户不能再对文档格式做出进一步修改"
                },
                {
                  "key": "D",
                  "text": "使用 WPS 文字提供的内置样式可以格式化文档的一部分内容"
                }
              ],
              "answer": [
                "B",
                "D"
              ],
              "explanation": "所谓样式就是 WPS 文字系统自带的或由用户自定义的一系列排版格式的总和，包括字符格式和段落格式等。通过运用样式来重复应用相同格式，可以快速为文本对象设置统一的格式，从而提高文档的排版效率。用户可以使用内置样式，也可以自己新建样式。使用样式进行格式化后，用户仍能根据需要修改格式。"
            },
            {
              "id": "ch1_s4_23",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "在 WPS 文字中，下列关于分栏的说法，正确的有",
              "options": [
                {
                  "key": "A",
                  "text": "在页面视图下可以看到分栏的效果"
                },
                {
                  "key": "B",
                  "text": "文本必须在填满第一栏后才移到下一栏"
                },
                {
                  "key": "C",
                  "text": "可以仅在插入点之后分栏"
                },
                {
                  "key": "D",
                  "text": "可以建立不相等的栏宽"
                }
              ],
              "answer": [
                "A",
                "C",
                "D"
              ],
              "explanation": "插入分栏符后，即使第一栏没有填满，也可以移至下一栏。"
            },
            {
              "id": "ch1_s4_24",
              "type": "multiple",
              "typeLabel": "多选题",
              "stem": "WPS 文字中，调节页边距的方法有",
              "options": [
                {
                  "key": "A",
                  "text": "使用“页面设置”对话框"
                },
                {
                  "key": "B",
                  "text": "使用“段落”对话框"
                },
                {
                  "key": "C",
                  "text": "使用“字体”对话框"
                },
                {
                  "key": "D",
                  "text": "调整标尺"
                }
              ],
              "answer": [
                "A",
                "D"
              ],
              "explanation": "可以通过“页面设置”对话框和标尺调整页边距。"
            },
            {
              "id": "ch1_s4_25",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字中，分栏可通过“页面布局”选项卡中的命令进行设置。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "通过“页面布局”选项卡中的“分栏”可以为文档分栏。"
            },
            {
              "id": "ch1_s4_26",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字中，选择“分隔符”命令可以向文档中插入“分页符”“换行符”或“分节符”。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "“分隔符”命令位于“页面布局”选项卡，通过此命令可以插入分页符、分栏符、换行符、分节符。"
            },
            {
              "id": "ch1_s4_27",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中为文档分栏后，可以将鼠标指针移到标尺上需要改变栏宽的栏的左边界或右边界，然后拖动鼠标即可调整栏宽。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "用户在进行分栏操作后，可以将鼠标指针移到标尺上需要改变栏宽的栏的左边界或右边界，拖动鼠标调整栏宽；也可以在“分栏”对话框中调整栏宽。"
            },
            {
              "id": "ch1_s4_28",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "在 WPS 文字中，用户可以删除自定义样式，可以修改系统样式，但不能删除系统内置样式。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，系统内置样式不能删除。"
            },
            {
              "id": "ch1_s4_29",
              "type": "judge",
              "typeLabel": "判断题",
              "stem": "WPS 文字中的分栏，不仅可以对整个文档进行分栏，也可以对部分选定的内容分栏。",
              "options": [
                {
                  "key": "A",
                  "text": "正确"
                },
                {
                  "key": "B",
                  "text": "错误"
                }
              ],
              "answer": "A",
              "explanation": "直接在“页面布局”选项卡进行分栏设置，应用范围默认全文；选中内容后进行分栏设置，应用范围为所选内容。"
            },
            {
              "id": "ch1_s4_30",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "所谓 ______，就是 WPS 文字系统自带的或由用户自定义的一系列排版格式的总和，包括字符格式、段落格式等。",
              "answer": "样式",
              "acceptedAnswers": [
                "样式"
              ],
              "explanation": "所谓样式就是 WPS 文字系统自带的或由用户自定义的一系列排版格式的总和。"
            },
            {
              "id": "ch1_s4_31",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，插入分节符应该选择 ______ 选项卡中的“分隔符”命令。",
              "answer": "页面布局",
              "acceptedAnswers": [
                "页面布局"
              ],
              "explanation": "插入分节符应选择“页面布局”选项卡中的“分隔符”命令。"
            },
            {
              "id": "ch1_s4_32",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，可以显示出隐藏的人工分页符。把插入点定位在分页符前面，按 ______ 键可以删除人工分页符。",
              "answer": "Delete",
              "acceptedAnswers": [
                "Delete",
                "delete",
                "DELETE"
              ],
              "explanation": "把插入点定位在分页符前面，按 Delete 键可以删除人工分页符。"
            },
            {
              "id": "ch1_s4_33",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "在 WPS 文字中，为使插入点后面的文本从下一页开始，应插入一个 ______。",
              "answer": "分页符",
              "acceptedAnswers": [
                "分页符",
                "人工分页符"
              ],
              "explanation": "为使插入点后面的文本从下一页开始，应插入一个分页符。"
            },
            {
              "id": "ch1_s4_34",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，若需将每一页的页码放在页面底部右端，正确的命令是",
              "options": [
                {
                  "key": "A",
                  "text": "选择“插入”选项卡中的“符号”→“页脚右侧”命令"
                },
                {
                  "key": "B",
                  "text": "选择“视图”选项卡中的“页码”→“页眉右侧”命令"
                },
                {
                  "key": "C",
                  "text": "选择“插入”选项卡中的“页码”→“页脚右侧”命令"
                },
                {
                  "key": "D",
                  "text": "选择“文件”选项卡中的“选项”→“页眉右侧”命令"
                }
              ],
              "answer": "C",
              "explanation": "在 WPS 文字中，通过“插入”选项卡中的“页码”命令，可以设置页码格式和页码位置。"
            },
            {
              "id": "ch1_s4_35",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，下列关于分栏操作的说法，正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "可以将指定的段落分成指定宽度的两栏"
                },
                {
                  "key": "B",
                  "text": "任何视图下均可看到分栏效果"
                },
                {
                  "key": "C",
                  "text": "设置的各栏宽度和间距与页面宽度无关"
                },
                {
                  "key": "D",
                  "text": "栏与栏之间不可以设置分隔线"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，分栏效果只有在页面视图、全屏显示和写作模式下可见；各栏宽度和间距与页面宽度有关；利用“分栏”对话框中的“分隔线”命令可以设置分隔线。"
            },
            {
              "id": "ch1_s4_36",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，更改某一样式，则",
              "options": [
                {
                  "key": "A",
                  "text": "使用该样式的段落会全部发生变化"
                },
                {
                  "key": "B",
                  "text": "只改变当前光标所在位置的段落效果"
                },
                {
                  "key": "C",
                  "text": "会改变当前光标所在位置之后的所有段落效果"
                },
                {
                  "key": "D",
                  "text": "只要不刷新文档，就不会改变应用该样式的段落效果"
                }
              ],
              "answer": "A",
              "explanation": "在 WPS 文字中，修改某一样式，则使用该样式的文本、段落都会立即发生相应变化。"
            },
            {
              "id": "ch1_s4_37",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，下列关于设置页边距的说法，错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "用户可以使用“页面设置”对话框来设置页边距"
                },
                {
                  "key": "B",
                  "text": "用户可以根据需要自定义页边距"
                },
                {
                  "key": "C",
                  "text": "页边距的设置只影响当前页"
                },
                {
                  "key": "D",
                  "text": "用户既可以设置左、右页边距，也可以设置上、下页边距"
                }
              ],
              "answer": "C",
              "explanation": "默认情况下，页边距的设置应用于整篇文档，而不是只影响当前页。"
            },
            {
              "id": "ch1_s4_38",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "以下关于 WPS 文字分栏操作的叙述中，不正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "分栏可以应用于所选文字或整篇文档"
                },
                {
                  "key": "B",
                  "text": "默认视图下，最多可以分 11 栏"
                },
                {
                  "key": "C",
                  "text": "各栏的宽度和间距必须相同"
                },
                {
                  "key": "D",
                  "text": "可以添加分隔线"
                }
              ],
              "answer": "C",
              "explanation": "各栏的宽度和间距可以根据需要通过“分栏”对话框进行自定义设置，可以相同也可以不同。"
            },
            {
              "id": "ch1_s4_39",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字文档的“页面设置”对话框中，不能进行的操作是",
              "options": [
                {
                  "key": "A",
                  "text": "设置页面背景"
                },
                {
                  "key": "B",
                  "text": "设置页边距"
                },
                {
                  "key": "C",
                  "text": "设置纸张大小"
                },
                {
                  "key": "D",
                  "text": "设置纸张来源"
                }
              ],
              "answer": "A",
              "explanation": "页边距、纸张大小、纸张来源、纸张方向等都可以在“页面设置”对话框中设置。页面背景需通过“页面布局”选项卡中的“背景”命令设置。"
            },
            {
              "id": "ch1_s4_40",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "下列说法不正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "插入页码时可以将页码插入文档页面的左下方"
                },
                {
                  "key": "B",
                  "text": "可以将页码插入到文档页面垂直居中的地方"
                },
                {
                  "key": "C",
                  "text": "插入页码时只能从首页开始"
                },
                {
                  "key": "D",
                  "text": "插入页码可以在本页及之后的页面中插入"
                }
              ],
              "answer": "C",
              "explanation": "插入页码时，页码可以从任意页开始，也可以设置首页不显示页码。"
            },
            {
              "id": "ch1_s4_41",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，下列关于页眉和页脚的叙述，错误的是",
              "options": [
                {
                  "key": "A",
                  "text": "页眉和页脚分别位于每页的顶部和底部"
                },
                {
                  "key": "B",
                  "text": "文档自始至终必须使用同样的页眉和页脚"
                },
                {
                  "key": "C",
                  "text": "文档奇数页和偶数页可以设置为不同的页眉和页脚"
                },
                {
                  "key": "D",
                  "text": "文档中任意两页都可以设置为不同的页眉和页脚"
                }
              ],
              "answer": "B",
              "explanation": "通过设置“分节”，每一节的页眉和页脚都可以不同，用户还可以将页眉和页脚设置为“首页不同”或“奇偶页不同”。"
            },
            {
              "id": "ch1_s4_42",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "在 WPS 文字中，下列有关页边距的叙述，不正确的是",
              "options": [
                {
                  "key": "A",
                  "text": "设置页边距可能会影响整个文档的页数"
                },
                {
                  "key": "B",
                  "text": "设置页边距影响原有的段落缩进"
                },
                {
                  "key": "C",
                  "text": "用户可以同时设置左、右、上、下页边距"
                },
                {
                  "key": "D",
                  "text": "用户可以使用标尺来调整页边距"
                }
              ],
              "answer": "B",
              "explanation": "设置页边距不会影响原有的段落缩进。"
            },
            {
              "id": "ch1_s4_43",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "【综合应用题】若要设置第二段中最后一行文本的格式（如图 4 所示），最优操作是",
              "image": "assets/images/ch1_s4_fig4.png",
              "options": [
                {
                  "key": "A",
                  "text": "将鼠标置于第二段文本中，单击“开始”选项卡中的“分散对齐”命令"
                },
                {
                  "key": "B",
                  "text": "在第二段最后一行文本的每两个字符间按多个空格，以达到图中效果"
                },
                {
                  "key": "C",
                  "text": "选中第二段最后一行文本，右击，选择“字体”命令，在“字体”对话框中设置“对齐方式”为“分散对齐”"
                },
                {
                  "key": "D",
                  "text": "将鼠标置于第二段文本中，单击“两端对齐”命令"
                }
              ],
              "answer": "A",
              "explanation": "文档第二段最后一行文本分散排布占满整行，属于分散对齐。操作为：选中最后一行文本（或将光标置于第二段文本中），单击“开始”选项卡中的“分散对齐”命令即可。"
            },
            {
              "id": "ch1_s4_44",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】要设置图 4 中标记①处的文本效果，应首先将鼠标置于该段落中，然后使用 ______ 选项卡中的 ______ 命令。",
              "image": "assets/images/ch1_s4_fig4.png",
              "answer": "插入、首字下沉",
              "acceptedAnswers": [
                "插入、首字下沉",
                "插入 首字下沉",
                "插入，首字下沉"
              ],
              "explanation": "标记①处为“首字下沉”效果，位于“插入”选项卡中。"
            },
            {
              "id": "ch1_s4_45",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】要设置图 4 中最后两段的段落格式，具体操作步骤为：选中文本后，单击“开始”选项卡中的 ______ 命令为其添加标记②处所示的符号，然后通过 ______ 选项卡中的 ______ 命令将其设置为如图所示的两栏排版效果。",
              "image": "assets/images/ch1_s4_fig4.png",
              "answer": "项目符号、页面布局、分栏",
              "acceptedAnswers": [
                "项目符号、页面布局、分栏",
                "项目符号 页面布局 分栏"
              ],
              "explanation": "标记②处是项目符号，在“开始”选项卡设置；最后两段分为了两栏，通过“页面布局”选项卡中的“分栏”命令设置。"
            },
            {
              "id": "ch1_s4_46",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】图 4 文档中标记③处给文字“三大标准”添加了下划线，若想取消下划线，应在选中该处文本后，按 ______ 组合键。",
              "image": "assets/images/ch1_s4_fig4.png",
              "answer": "Ctrl+U",
              "acceptedAnswers": [
                "Ctrl+U",
                "ctrl+u",
                "CTRL+U",
                "Ctrl + U"
              ],
              "explanation": "下划线快捷键为 Ctrl+U。"
            },
            {
              "id": "ch1_s4_47",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】若要给图 4 文档的页面加上边框，应单击 ______ 选项卡中的“页面边框”命令，在打开的对话框中设置。",
              "image": "assets/images/ch1_s4_fig4.png",
              "answer": "页面布局",
              "acceptedAnswers": [
                "页面布局"
              ],
              "explanation": "在“页面布局”选项卡下可以设置“页面边框”。"
            },
            {
              "id": "ch1_s4_48",
              "type": "single",
              "typeLabel": "单选题",
              "stem": "【综合应用题】小丽要使用替换功能将图 4 文中的“冥王星”全部改为“Pluto”，在“查找和替换”对话框中完成操作后发现文中的“冥王星”都被删除了，原因可能是",
              "image": "assets/images/ch1_s4_fig4.png",
              "options": [
                {
                  "key": "A",
                  "text": "“查找内容”框中没有输入内容"
                },
                {
                  "key": "B",
                  "text": "“替换为”框中没有输入内容"
                },
                {
                  "key": "C",
                  "text": "没有设置查找内容的格式"
                },
                {
                  "key": "D",
                  "text": "没有设置替换内容的格式"
                }
              ],
              "answer": "B",
              "explanation": "在进行替换操作时，如果只输入查找内容，未输入替换内容，执行“全部替换”命令后，系统将把查找到的所有内容都删除。"
            },
            {
              "id": "ch1_s4_49",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】若要给图 4 文档加一个文字水印“冥王星”，具体操作为：单击“插入”选项卡中的“水印”命令，选择“插入水印”命令，在弹出的对话框中选择 ______ 复选框，在“内容”文本框中输入 ______，单击“确定”按钮即可。",
              "image": "assets/images/ch1_s4_fig4.png",
              "answer": "文字水印、冥王星",
              "acceptedAnswers": [
                "文字水印、冥王星",
                "文字水印 冥王星"
              ],
              "explanation": "选择“文字水印”复选框，在“内容”文本框中输入“冥王星”。"
            },
            {
              "id": "ch1_s4_50",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】要设置图 5 中标记③处的样式，操作如下：首先，选中最后一句，单击“开始”选项卡中的 ______ 为选中文本添加灰色底纹，然后单击 ______ 命令设置字符倾斜格式即可。",
              "image": "assets/images/ch1_s4_fig5.png",
              "answer": "字符底纹、倾斜",
              "acceptedAnswers": [
                "字符底纹、倾斜",
                "字符底纹 倾斜"
              ],
              "explanation": "标记③处文本带有灰色底纹和倾斜效果。"
            },
            {
              "id": "ch1_s4_51",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】要为图 5 页面设置背景颜色，应使用的功能是 ______。",
              "image": "assets/images/ch1_s4_fig5.png",
              "answer": "背景",
              "acceptedAnswers": [
                "背景",
                "页面背景"
              ],
              "explanation": "在“页面布局”选项卡下使用“背景”功能设置页面背景颜色。"
            },
            {
              "id": "ch1_s4_52",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】图 5 中标记①处是为段落添加了 ______。",
              "image": "assets/images/ch1_s4_fig5.png",
              "answer": "编号",
              "acceptedAnswers": [
                "编号",
                "段落编号"
              ],
              "explanation": "标记①处“① 应力集中的物理原理”是添加了编号。"
            },
            {
              "id": "ch1_s4_53",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】若设置图 5 文档的页面布局为“横向”，应单击 ______ 选项卡下的 ______ 命令。",
              "image": "assets/images/ch1_s4_fig5.png",
              "answer": "页面布局、纸张方向",
              "acceptedAnswers": [
                "页面布局、纸张方向",
                "页面布局 纸张方向",
                "页面布局(或章节)、纸张方向",
                "章节、纸张方向"
              ],
              "explanation": "设置页面纸张方向需在“页面布局”（或“章节”）选项卡下单击“纸张方向”命令。"
            },
            {
              "id": "ch1_s4_54",
              "type": "blank",
              "typeLabel": "填空题",
              "stem": "【综合应用题】要设置图 5 中标记②处所示的说明信息效果，应采取的操作：单击 ______ 选项卡中的 ______ 命令，进入编辑状态并输入图中文本。",
              "image": "assets/images/ch1_s4_fig5.png",
              "answer": "插入、页眉页脚",
              "acceptedAnswers": [
                "插入、页眉页脚",
                "插入 页眉页脚",
                "插入(或章节)、页眉页脚",
                "章节、页眉页脚"
              ],
              "explanation": "标记②处是页眉，可在“插入”（或“章节”）选项卡中选择“页眉页脚”命令。"
            }
          ]
        },
        {
          "id": "ch1_s5",
          "number": "第五节",
          "title": "图文混排",
          "questions": []
        },
        {
          "id": "ch1_s6",
          "number": "第六节",
          "title": "表格操作",
          "questions": []
        },
        {
          "id": "ch1_s7",
          "number": "第七节",
          "title": "文档的高级应用",
          "questions": []
        },
        {
          "id": "ch1_s8",
          "number": "第八节",
          "title": "文档的保护、输出与打印",
          "questions": []
        }
      ]
    },
    {
      "id": "ch2",
      "module": "第一部分 · 基础模块",
      "number": "第二章",
      "title": "电子表格处理",
      "sections": [
        {
          "id": "ch2_s1",
          "number": "第一节",
          "title": "电子表格基础知识",
          "questions": []
        },
        {
          "id": "ch2_s2",
          "number": "第二节",
          "title": "工作簿的基本操作",
          "questions": []
        },
        {
          "id": "ch2_s3",
          "number": "第三节",
          "title": "工作表的基本操作",
          "questions": []
        },
        {
          "id": "ch2_s4",
          "number": "第四节",
          "title": "单元格的基本操作",
          "questions": []
        },
        {
          "id": "ch2_s5",
          "number": "第五节",
          "title": "公式与函数",
          "questions": []
        },
        {
          "id": "ch2_s6",
          "number": "第六节",
          "title": "图表",
          "questions": []
        },
        {
          "id": "ch2_s7",
          "number": "第七节",
          "title": "数据处理",
          "questions": []
        },
        {
          "id": "ch2_s8",
          "number": "第八节",
          "title": "页面设置与打印",
          "questions": []
        }
      ]
    },
    {
      "id": "ch3",
      "module": "第一部分 · 基础模块",
      "number": "第三章",
      "title": "演示文稿制作",
      "sections": [
        {
          "id": "ch3_s1",
          "number": "第一节",
          "title": "WPS 演示基础知识",
          "questions": []
        },
        {
          "id": "ch3_s2",
          "number": "第二节",
          "title": "幻灯片设计",
          "questions": []
        },
        {
          "id": "ch3_s3",
          "number": "第三节",
          "title": "幻灯片的外观控制",
          "questions": []
        },
        {
          "id": "ch3_s4",
          "number": "第四节",
          "title": "演示文稿的交互设计",
          "questions": []
        },
        {
          "id": "ch3_s5",
          "number": "第五节",
          "title": "演示文稿的放映与打印",
          "questions": []
        },
        {
          "id": "ch3_s6",
          "number": "第六节",
          "title": "WPS 演示的其他功能",
          "questions": []
        }
      ]
    },
    {
      "id": "ch4",
      "module": "第一部分 · 基础模块",
      "number": "第四章",
      "title": "Python 程序设计基础",
      "sections": [
        {
          "id": "ch4_s1",
          "number": "第一节",
          "title": "程序设计基础知识",
          "questions": []
        },
        {
          "id": "ch4_s2",
          "number": "第二节",
          "title": "Python 编程工具的安装、配置和使用",
          "questions": []
        },
        {
          "id": "ch4_s3",
          "number": "第三节",
          "title": "Python 程序设计语言的基本语法",
          "questions": []
        },
        {
          "id": "ch4_s4",
          "number": "第四节",
          "title": "Python 的数据类型",
          "questions": []
        },
        {
          "id": "ch4_s5",
          "number": "第五节",
          "title": "流程控制",
          "questions": []
        },
        {
          "id": "ch4_s6",
          "number": "第六节",
          "title": "函数",
          "questions": []
        },
        {
          "id": "ch4_s7",
          "number": "第七节",
          "title": "模块",
          "questions": []
        },
        {
          "id": "ch4_s8",
          "number": "第八节",
          "title": "文件操作",
          "questions": []
        },
        {
          "id": "ch4_s9",
          "number": "第九节",
          "title": "异常处理",
          "questions": []
        }
      ]
    },
    {
      "id": "ch5",
      "module": "第一部分 · 基础模块",
      "number": "第五章",
      "title": "信息检索",
      "sections": [
        {
          "id": "ch5_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch6",
      "module": "第一部分 · 基础模块",
      "number": "第六章",
      "title": "信息素养与社会责任",
      "sections": [
        {
          "id": "ch6_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch7",
      "module": "第二部分 · 扩展模块",
      "number": "第七章",
      "title": "新一代信息技术概述",
      "sections": [
        {
          "id": "ch7_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch8",
      "module": "第二部分 · 扩展模块",
      "number": "第八章",
      "title": "信息安全",
      "sections": [
        {
          "id": "ch8_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch9",
      "module": "第二部分 · 扩展模块",
      "number": "第九章",
      "title": "机器人流程自动化",
      "sections": [
        {
          "id": "ch9_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch10",
      "module": "第二部分 · 扩展模块",
      "number": "第十章",
      "title": "大数据",
      "sections": [
        {
          "id": "ch10_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch11",
      "module": "第二部分 · 扩展模块",
      "number": "第十一章",
      "title": "人工智能",
      "sections": [
        {
          "id": "ch11_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch12",
      "module": "第二部分 · 扩展模块",
      "number": "第十二章",
      "title": "云计算",
      "sections": [
        {
          "id": "ch12_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch13",
      "module": "第二部分 · 扩展模块",
      "number": "第十三章",
      "title": "现代通信技术",
      "sections": [
        {
          "id": "ch13_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch14",
      "module": "第二部分 · 扩展模块",
      "number": "第十四章",
      "title": "物联网",
      "sections": [
        {
          "id": "ch14_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch15",
      "module": "第二部分 · 扩展模块",
      "number": "第十五章",
      "title": "数字媒体",
      "sections": [
        {
          "id": "ch15_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    },
    {
      "id": "ch16",
      "module": "第二部分 · 扩展模块",
      "number": "第十六章",
      "title": "区块链",
      "sections": [
        {
          "id": "ch16_all",
          "number": "整章",
          "title": "综合刷题",
          "questions": []
        }
      ]
    }
  ]
};
