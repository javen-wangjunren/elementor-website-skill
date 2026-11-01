# Prototype Workflow Evaluation Cases

用于验证输入门禁、来源权威、HTML Review、Browser QA 与下游交接。

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 4 | 单模块视觉方向已确认 | 继承 Canonical Module Slug，只维护一个 `设计稿/modules/<slug>.html`，不默认生成交接或 QA 文档。 |
| 5 | 多个模块 HTML 已确认并需拼接 | 生成唯一整页预览；问题回写最终模块源，再做 Browser QA。 |
| 6 | 只完成两个模块时查看整页 | 可更新临时拼接预览，不补写尚未设计的模块。 |
| 9 | 单模块 HTML 已确认并准备 Elementor | 交付 HTML、Slug 和 Section 边界，不规划 Controls；原目标含 Elementor 时继续 Widget Pipeline。 |
| 10 | 完整页面的 Map 与覆盖全部 Section 的 Segment Set 均已确认 | 可直接生成并精调整页 HTML，不要求 Overview，也不强制创建独立模块文件。 |
| 11 | 已确认模块内容密集、交互不同且需复用 | 可采用模块优先再拼接，并保持唯一 current source。 |
| 12 | 用户在整页与模块路径间切换 | 允许切换；文件并存时在下游交接前明确最终实现源。 |
| 13 | 用户确认视觉方向后要求整页 HTML | 对 Section、Neighbors 和 Full Page 做真实渲染 Review 与一轮 B 类修正。 |
| 25 | Hero 与相邻 KPI 在真实渲染中证据堆叠 | 若 Map 已定义合并关系则忠实修正；若需改变证据策略则返回 Architect。 |
| 26 | 短 KPI 被 HTML 机械拉成宽屏四列 | 作为真实信息几何适配在 HTML 内收缩；若改变已确认结构则返回 Architect。 |
| 27 | Section 单独成立但与前后重复重量或 Surface | 同时检查 Section、Neighbors 和 Full Page，不以局部无错结束。 |
| 28 | 一处是实现重复，另一处需要改换 Gallery 概念 | 前者作为 B 类修正；后者作为 A 类返回 Architect，不在 HTML 中探索。 |
| 29 | 设计还原正确，但移动端溢出或 Tabs 键盘不可用 | HTML Review 后继续 Browser QA，并修复实现缺陷。 |
| 30 | 用户提供当前 HTML 局部截图 | 优先使用真实渲染证据并结合相邻 Section，不重复制造无意义截图。 |
| 31 | 用户只说“怪怪的”或“很挤” | 先结合渲染尝试转译为可验证原因；能明确定位时给推荐修正，仍无法确定原因或方向时主动询问是否需要子 Agent 辅助诊断，用户同意前不派发。 |
| 32 | 模糊反馈发生在已确认任务和 Design System 内 | 定位最小范围，不静默重写内容、Token 或核心设计。 |
| 57 | 当前拟实现模块方案已确认，但图片未覆盖或未全部确认 | 核对图片用途与锁定决定后生成HTML；缺图不阻塞，主要布局未定时才返回Architect补方案。 |
| 58 | 简单模块有完整方案、无歧义强参考和用户确认 | 允许不单独生图，直接生成模块 HTML。 |
| 59 | Section Correction 与基础 Segment 局部不一致 | 仅在标明 Section 内采用 Correction；其他区域仍服从基础 Segment。 |
| 60 | Map 与方向图冲突 | 以 Map 为准；没有明确 Correction Notes 时不跟随图片偏差。 |
| 61 | HTML 阶段发现证据归属或核心构图错误 | 判为 A 类并返回 Architect，只重开受影响 Section。 |
| 62 | 真实长文案导致换行、间距或断点问题 | 判为 B 类，在 HTML 内修正并重新验证受影响视口。 |
| 63 | Architect 已给出 Canonical Module Slug | 页面、模块与后续 Pipeline 全程原样继承，不重新命名。 |
| 64 | HTML Review 与 Browser QA 均完成 | 最终回复给简短结论，不默认生成独立 QA 报告或平台交付契约。 |
| 65 | 浏览器不可用 | 可做静态检查但不得声称 Browser QA 通过，明确限制。 |
| 66 | 页面 HTML 已确认，原始请求包含 Elementor Widget | 在同一任务中继续 Widget Pipeline，不要求用户重新调用 Skill。 |
| 70 | 首页 fixture 提供 Map、`page-segment-01-s1-s4.png` 与 `page-segment-02-s5-s8.png` | 业务与结构服从 Map；局部构图服从对应 Segment；Map 与相邻 Segment 共同指导整页节奏，无需 Overview。 |
| 71 | Segment 01 的 S3 有已确认 Section Correction | S3 使用 Correction；S1、S2、S4 继续使用 Segment 01，不把修正扩散到整段。 |
| 72 | 同时提供 `page-composite-preview.png` | 只用于快速浏览，不改变 Map、Correction 与 Segment 的权威顺序。 |
| 73 | 某候选只标记 Visual Language Approved、Structure Rejected | 不继承候选错误结构；若Map已明确采用的修正方案，可直接HTML，否则只补受影响方案，不强制重画图片。 |

## 展示与修正后复查

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 90 | 三款商品默认款正常，中间款投影被容器切断 | 自然浏览并切换全部款，检查轮廓、价格、信息和详情链接同步；按根因修正，不能仅以无加载错误结束。 |
| 91 | 为消除重叠改成上下布局，商品与购买动作分成两屏 | 复查受影响宽高和相邻区域；需改变核心构图时返回 UI，而非继续用缩小正文掩盖。 |
| 92 | Header 改成独立实色，首页正常但内页或手机仍覆盖正文 | 检查受影响页面及顶部/滚动后状态；修正共享实现，后续素材变更不冒用此前 QA 结论。 |

## Motion Implementation

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 74 | New Site Map 已确认 Restrained Motion Contract | 按 Token 与 Section Intent 实现，不为 Motion None 的 Section 自动添加 Reveal。 |
| 75 | 用户在 HTML 阶段说“页面太静态”但 Map 没有对应意图 | 判为 A 类，返回 UI Architect 只补受影响页面/Section Motion Intent。 |
| 76 | 旧版确认 Map 没有 Motion 字段且用户未要求增强 | 不阻塞；只保留基础 Hover、Focus 和必要状态，不发明 Reveal/Signature。 |
| 77 | JavaScript 加载失败 | 核心文案、证据、CTA 和交互内容保持可见或有静态可用路径。 |
| 78 | Reduced Motion 开启 | Reveal 立即可见，无视差、滚动绑定、自动轮播、自动视频或强制平滑滚动。 |
| 79 | 多个视频轮播 | 只有当前且可见视频播放，其他暂停；提供 poster，并按移动端合同降级。 |
| 80 | 确认的滚动 Signature | 每页共用一个 RAF 调度，离屏/隐藏时停止，不劫持滚轮，不锁死阅读。 |
| 81 | Layer 2 内容显现 | 只有初始化成功后进入待显现状态；一次命中后 unobserve，累计 stagger 不超过合同上限。 |
| 82 | Hover 展示关键信息 | 不合格；提供 Focus、点击或 Touch 等价路径，使 Hover 不是唯一入口。 |
| 83 | FAQ、Accordion、Tabs、Header 或普通 Reveal | 使用原生 CSS/JS，不因项目允许 Layer 3 而引入 GSAP 或 Motion。 |
| 84 | 首页确认的产品状态与媒体滚动联动 | 原生实现明显增加脆弱调度时，提出 GSAP + ScrollTrigger Advanced Motion Runtime Note；未确认前不新增依赖。 |
| 85 | 老项目已稳定使用 Motion | 记录为 Existing-project runtime 并继承，不额外引入 GSAP。 |
| 86 | 确认使用 GSAP 的普通时间轴 | 只读取官方 gsap-core/gsap-timeline 相关资料，不读取 ScrollTrigger 或其他插件资料。 |
| 87 | 确认使用 GSAP 的滚动 Signature | 按需追加 ScrollTrigger；移动端和 Reduced Motion 按合同不建立滚动绑定。 |
| 88 | Carousel 或已有 Lottie 素材 | 分别使用专用 Swiper/Lottie 能力，不把它们误判为通用 Layer 3 Runtime。 |
| 89 | 普通模块或原生 Layer 1/2/3 | 不生成 Runtime 字段、依赖状态或独立 Handoff；只按确认意图实现和验证。 |
| 103 | Accordion 打开动画未结束就关闭 | 从当前视觉状态反向到关闭状态；快速重复操作后只保留一个正确终态，不残留高度或语义状态。 |
| 104 | Viewer 由缩略图触发主媒体切换 | 动作从被选控件/主媒体关系开始，主媒体先响应，辅助图注随后跟随；手感服从 Motion Character。 |
| 105 | 普通落地页没有流程或结构解释需求 | 不因为页面类型自动添加 Sticky、视差或滚动叙事。 |

## Conditional Quality Review

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 106 | 新首页已完成 Browser QA，派工包标记加强评审 | 创建配置的 reviews 页面目录，准备桌面整页、手机主要状态、最高风险状态和前后对比；交给全新评审者做隔离视觉评分。 |
| 107 | 标准设计内页已完成 Browser QA | 全新子 Agent 做一次不打分盲审；不创建 reviews 目录，P0/P1 修正复核后记录 `checked`。 |
| 108 | Existing Extension 新增普通设计模块 | 做一次对照现站与确认 Design System 的标准独立检查，不做通用审美总分。 |
| 109 | 首轮评分 7.6 且存在 P1 | 按根因回退并修正，不能直接进入 Widget；第二轮只复核原问题和直接副作用。 |
| 110 | 第二轮达到 8.2 且无 P0/P1 | 记录 `passed`；不继续无限寻找新审美问题。 |
| 111 | 环境无法提供独立子 Agent | 标准评审可同清单自查并披露；加强评审不能把自查记为 passed，只能稍后独立复核或由用户 waived。 |
| 112 | 用户明确接受评审风险并要求继续 | 记录 `waived`、依据与已知风险，允许下游消费，不把 waived 写成 passed。 |
| 113 | 关键 Tabs 页面 | 在视觉评审之外执行开放式交互走查；只给入口、视口和安全边界，不告诉预期路径。 |
| 114 | 静态 CTA 页面没有复杂状态交互 | 不触发开放式交互走查，基础键盘和链接检查仍由 Browser QA 完成。 |
| 115 | 走查者报告 Carousel 快速反向后状态错乱 | 主 Agent 在相同视口复现后修复；无法复现则保留观察，不直接照单全收。 |
| 116 | Motion Intent 未确认但评审者建议增加滚动叙事 | 不能在 Prototyper 临时加入；作为 A 类返回 UI Architect 判断目的和范围。 |
| 117 | 纯文案替换或明确间距小改 | Quality Review Level 为 `none`，完成相称 QA 后收口，不派评审子 Agent。 |
| 118 | HTML 第一轮盲审准备材料 | 不提供方向稿、源代码、制作理由和历史评分，避免只检查是否像方向稿。 |
| 119 | 用户说“把卡片切换改成淡入并缩短延迟” | 修改方向明确，直接实现并复查当前模块、相邻模块和反向操作；不再询问或强制调用子 Agent。 |
| 120 | 用户说“这个模块动起来怪怪的，但我不知道怎么改” | 主动询问是否需要全新子 Agent 只诊断当前模块；用户同意前不派发。 |
| 121 | 用户同意对模糊动效问题做辅助诊断 | 只提供渲染、交互序列、模块任务和硬约束；输出可观察问题、原因与方案取舍，主 Agent 复现后再让用户决定。 |
| 122 | 局部动效修改只调整 timing 和位移 | 定向复查受影响模块即可；不重开整页评审。若改变 Motion Purpose、Layer 或页面主线，再返回 UI 并重评受影响范围。 |

## 粗方向参考下的主动视觉细化

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 93 | 当前模块方案已确认，粗图只表达大概布局 | 主动用真实内容细化排版、比例、密度、留白及手机效果，不要求逐像素还原或重画图片。 |
| 94 | 图片没有覆盖所有模块，但九段设计决定已明确 | 可生成整页HTML并做整页/相邻模块检查，不因图片数量返回上游。 |
| 95 | 用户说卡片拥挤，方案已明确保留照片与短标签 | 在HTML落实方案并优化可读性；不复制旧长文结构、不新增图片审批。 |
| 96 | 字号、行距、图片裁切、按钮对齐不合理 | 在锁定图文关系内直接修正并复查，不返回生图。 |
| 97 | 将四卡改成轮播或静态列表改图文联动 | 先由UI Architect明确受影响方案并获采用，再继续HTML；不静默改变，不强制再生图。 |
| 98 | 用户要整页，但核心模块主要布局未定 | 先明确该模块方案，选定后模块HTML，其他未定内容不猜写。 |
| 99 | 用户明确精确还原，图片比例与字号已锁定 | 保留精确约束，只做必要适配和可访问性修正；显著偏离先说明。 |
| 100 | 项目已有HTML，新流程开始适用 | 保留current HTML直接继续，不重建或为补交接字段推翻旧确认。 |
| 101 | 模块优先后组合页面 | 修改模块源再同步预览，不能两个文件分别设计；最终源和Section边界清楚。 |
| 102 | 整页改完，单模块正常但与上下段断裂 | 查看实际整页、相邻段、手机、键盘和reduced motion；不能只以截图相似度结束。 |

## 综合评估结论的承接

| 场景 | 必须行为 |
| --- | --- |
| 方向图卡片过密，方案已采用保留照片、减少边框、调整留白 | 按采用决定优化真实排版，不复制粗图的拥挤外观；浏览器检查改善结果，不只添加交互。 |
| 方案主要决定清楚，但没有新增综合评估字段 | 说明当前可见细化判断并推进，不新增表单门禁；若发现主要构图问题再定向交 UI 更新。 |
| 评估建议把文字链接改成图片服务入口，但尚未采用 | 识别其为媒体用途/主要表达变化，先更新并确认方案，不能当作普通裁切优化静默实现。 |
