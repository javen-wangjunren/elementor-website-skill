# Workflow Contract

在多阶段任务启动或恢复、跨阶段、进入用户门禁、更新 `docs/workflow-status.md`，或根据失败执行定向回退时读取。本文定义跨阶段执行合同，不替代专项 Skill 的内部规则。

## 任务模式

从用户目标判断模式，不额外增加例行问卷：

- **正式交付（默认）**：用户要完成可继续实施的整页、全站或 Widget，适用下文全部必要门禁；资料不全或用户说“快一点”本身不构成跳过门禁的授权。
- **快速视觉测试**：用户明确只测视觉/布局，并允许暂缓完整定位、深度研究或真实商品资料。先复用并确认最少上下文：页面/产品、受众、希望采取的行动、测试范围、素材与文案真假；缺口确实影响测试时才询问。
- **局部修正**：采用当前有效输入，只重开受影响设计或实现；不因修正页头、裁切或切换入口而要求完整业务定位。

快速测试可以用用户确认测试用途的演示内容、临时视觉规则和紧凑 UI Brief 代替正式内容/设计包，不强制完整 Company Intake、研究或覆盖全站的方向图；本轮未要求的资料和页面保持未验证。交接仍要明确模块任务、构图、文案和媒体边界，不让 HTML 临时猜设计。不省略与目标尺寸相称的字号、反差、裁切、遮挡、自然操作和键盘检查；浏览器不可用时如实披露，不能宣称已通过。生成素材与演示价格/政策不变成业务事实。

测试产物在说明或文档中标明测试用途和未验证范围，不自动标成正式 Confirmed / Active Baseline，也不直接进入 Widget Pipeline。用户要正式采用时，补齐该产物所需事实与确认门禁、验证当前版本，不强制从零重做已有有效工作。以下完整路径与门禁用于正式交付。

## 1. 完整页面与 Widget 路径

```text
确认公司事实
→ 按条件形成或复用 Visual Reference Brief
→ 确认 Page Content 与 Design System
→ 若目标进入 Elementor，确认 Elementor Style Contract
→ UI Architect 明确当前范围的模块任务与候选方案
→ 按需参考粗方向图，综合用户反馈与 AI 独立评估（图片可选）
→ 确认 Page UI Architecture Map / 当前模块方案、锁定决定与 HTML 可细化范围（显式采用 Layer 2/3 时才含 Motion Budget / Intent）
→ 按设计成熟度进入整页或模块 HTML，主动细化真实排版与交互
→ HTML Design Review 与 Browser / Implementation QA
→ 确认整页设计、Section 边界与当前实现源
→ Pipeline 一次实现一个 Widget
→ 每个 Widget 独立确认字段卡、实现并验证
→ 用户在 Elementor 中组装整页并完成最终视觉验收
```

- UI Architect 负责 Module Design Solution、UI Map、媒体契约、可选 Motion 建议、视觉方向和 Canonical Module Slug；只有用户确认采用显式 Layer 2/3 时才形成 Page Motion Budget 与 Section Motion Intent。
- Prototyper 保留确认的模块任务、主要布局与交互目的，主动细化未锁定的比例、排版、密度、留白、裁切和实际反馈；主要表达改变先由 UI Architect 更新方案，不强制重画图片。整页优先只维护整页源，模块优先保留模块源，组合预览不另行独立修改。
- Pipeline 可使用独立模块 HTML，或确认整页 HTML 中边界明确的当前 Section；两者同时存在时先确认最终版本。
- Prototype Handoff 只在跨会话、复杂交互或 DOM 结构需要锁定时按需生成。
- 用户承担 Elementor 整页组装与最终视觉验收，这是保留的人工门禁，不是 Pipeline 缺口。

## 粗方向图到 HTML

### 图片与确认的含义

- 粗方向参考：辅助了解模块、主次、大致构图和风格，不锁定具体字号、间距或生成素材。对其不满意的意见先转成模块方案，方案明确就可做 HTML。
- 明确要求还原的设计稿：保留用户指定的比例、排版和视觉细节；只做必要的内容适配、可访问性及跨尺寸修正，显著偏离先说明。
- 局部风格参考：仅消费用户指定的色彩关系、表格处理或媒体气质，不继承其业务数据或整段结构。

用户明确说是粗图时采用粗参考；既有精细稿及用户明确锁定的部分继续有效。用途不明且会改变执行范围时只确认这一点，不能把文件存在或认可颜色推断成认可布局。图片不是业务事实或动效行为的证明。粗图中的比例和尺寸属于建议，除非用户明确锁定；HTML可在保持媒体用途、主次和最小可用查看面积的前提下细化。

### 综合评估后再分流

有粗图时，UI Architect 先实际查看画面与必要的相邻模块，结合用户满意/不满意之处及明确约束，按[方向稿综合评估](../../website-ui-architect/references/module-design-review.md#方向稿综合评估)形成采用决定。不能只转述用户意见或 Map，也不能把没有反馈等同于设计无问题。

在现有 Map/Brief 或 Notes 中紧凑记录“用户意见、AI 观察、综合决定及理由”；决定区分保留、HTML 改善、重要方案待确认。没有问题的部分允许保留，不强行为每个模块找缺点。用户意见与 AI 建议不一致时说明取舍，遵守明确选择；未解决的重要分歧才集中询问。普通视觉细化在已授权范围内继续，不新增固定报告、打分表或逐模块审批。

先形成上述判断，再根据方案成熟度选择下列路径；评估本身不要求重新生图，也不把已定稿 HTML 重新打开设计。

### 成熟度分流

| 当前证据 | 下一步 |
| --- | --- |
| 内容、规范及全部模块主要设计已明确 | 直接整页 HTML，再检查整页与相邻模块 |
| 大体认可，部分模块不满意 | 默认路径：集中反馈，UI Architect 修改受影响模块方案；重要决定确认后直接 HTML，不必补图 |
| 核心模块存在不同主要构图或交互选择 | 只先明确该模块方案，选定后做单模块 HTML；已接受部分不重开，其他未定模块不猜写 |
| 单模块任务、内容与方案已明确 | 直接模块 HTML，不补整页方向图或 Map |

方案在现有 Map/Brief 内紧凑记录：任务、内容层级、主要布局、媒体用途、手机组织、必要交互、HTML 可细化内容。涉及重要改变时一次集中确认；用户已明确给定的决定及授权不得反复询问。不同主要构图确实难以用文字判断或用户要求看图时，才按需出图，不能用生图替代方案判断。

### 设计与实现边界

- 可在 HTML 内主动完成：未锁定的字号、行宽、换行、留白、卡片尺寸、按钮对齐、既定图文关系内的精确比例和裁切、断点及已确认交互的状态反馈与过渡。
- 先更新设计方案：模块增删/重排、任务/内容主次/媒体用途变化、卡片改轮播、平铺改图文联动、关键手机顺序或复杂动态目的变化。总控在同一任务内协调 UI Architect，用户采用后回到 HTML，不自动生图、不重开无关模块。
- 只要求当前实现范围的主要决定已明确；不能拿“无需全部图片”绕过内容、规范或布局选择。核心方案未定不能默认整页后置返工。
- 已有 HTML 保留并继续细化。整页优先不强制拆独立模块；模块优先修改模块源并同步预览，不能双向漂移。

不创建重复交接报告；在现有 Map/状态中补“图片用途、已锁定决定、HTML 可细化内容、当前路径与阻塞问题”。旧状态缺少这些字段不自动失效，按实际授权补充，不批量迁移旧项目。最终 Elementor 实现仍以用户确认后的 current HTML、Section 边界与样式合同为依据。

## 2. 不可跳过的门禁

1. 企业内容依赖公司事实且来源不足时，确认 Company Intake；
2. 条件触发参考研究时，深度研究前确认候选对象；用户提供最终 URL 清单视为已确认；
3. 需要插件时，确认本地路径与 `Flat / Grouped` 结构；
4. 完整页面或内容职责未确定时，确认页面内容框架；
5. Style Board 确认后才能形成有效 Design System；
6. 目标进入 Elementor 时，确认 Site Mode 与 Style Authority；需要继承全局样式时，Style Contract 必须为 Confirmed；
7. 老站保持风格时先确认 Existing Design System；精确继承还需要 URL 渲染与 Site Settings / Kit 后台证据；
8. 完整页面必须确认 Page UI Architecture Map；单模块不强制整页 Map；
9. 确认当前范围的模块设计决定及允许在 HTML 细化的部分；图片为可选参考，有图时检查其用途和结构偏差，不要求覆盖所有模块的确认图片；
10. HTML First Draft 交付用户前必须完成 HTML Design Review 与 Browser / Implementation QA；
11. 进入 Pipeline 前确认 Canonical Module Slug、Section 边界、最终 HTML 实现源、面板可发现性和 Site Style Context；
12. 每个 Widget 的最小 Elementor 字段卡确认后才能实现。

New Site / Rebuild 从 Design System 继承 `Motion Level: Restrained` 的基础反馈性格，但页面不强制生成 Motion 字段。可选建议随 UI Map 原门禁确认；只有用户选择显式 Layer 2/3 时才补 Motion Budget / Intent。旧产物缺少 Motion 字段不阻塞。

文件存在只能证明有候选产物，不能代替用户确认。内容框架与 Design System 可以并行，但进入完整页面 UI 前两者都必须确认。

## 3. 状态与恢复

总控唯一维护 `docs/workflow-status.md`。只在启动或恢复多阶段任务、跨阶段、进入新门禁、遇到阻塞或完成任务时覆盖更新；普通对话和单一产物任务不为形式更新。

```text
当前阶段：
当前 Skill：
原始目标：
已确认：
确认依据：
图片用途：
HTML 可细化内容：
当前路径与阻塞问题：
待确认：
当前产物：
锁定约束：
已知风险：
下一步：
Site Mode：
Style Authority：
Style Contract Status：
Backend Style Evidence：
更新时间：
```

- 状态文件只保存当前有效状态，不追加成长日志。
- 只有当前任务正在设计或实现显式 Layer 2/3 时，才追加一行 `Motion Context`；普通页面、继承的 Layer 1 和无动效任务不记录 Motion 状态。
- 专项 Skill 不各自创建状态文件。
- 恢复时用当前对话和实际产物核验状态；无法证明的确认不得继承。
- 默认不展示固定状态卡，只在启动、恢复、跨阶段、阻塞或用户主动询问时简要说明。

## 4. 最小派工包

```text
GOAL:
ACTIVE STAGE:
CONFIRMED INPUTS:
SOURCE FILE / CONVERSATION INPUT:
TARGET PLUGIN / OUTPUT:
LOCKED CONSTRAINTS:
EXPECTED DELIVERABLE:
NEXT USER GATE:
KNOWN RISKS:
```

- 只传当前专项工作所需信息，不复制其他 Skill 的完整规则。
- 只有当前任务存在显式 Layer 2/3 时，派工包才追加 `MOTION CONTEXT`；只有确认的 Layer 3 使用第三方库时，再追加 `ADVANCED MOTION RUNTIME`。
- 不把未确认推断包装成已确认输入。
- 页面内容交给 UI 时只传确认文件、Section ID、Section Job、顺序、内容边界、证据状态和开放问题，不提前决定视觉 Form。
- 设计交给 Prototyper 时传确认 Map/模块方案、已锁定决定、HTML 可细化内容、图片用途与适用范围（有图才传）、Slug、必要修正及素材真实性边界；只有用户采用显式 Layer 2/3 时才追加 Motion Context，不为普通模块创建 Motion/Runtime 状态，也不替 UI Architect 指定库。
- 进入 Pipeline 时一次只派发当前模块，并原样传递 Canonical Module Slug、Section 边界、最终实现源、适用的 Motion Intent、项目面板可发现性、`siteStyle`、Confirmed Style Contract 和必要页面上下文。只有确认使用第三方库的 Layer 3 才额外携带 Advanced Motion Runtime Note。

## 5. 定向回退

先描述可观察现象，再判断根因属于事实、共享规则、页面构图、浏览器实现或平台实现：

| 问题根因 | 返回位置 |
| --- | --- |
| 企业事实、叙事或内容职责 | Page Content；资料不足时先 Company Intake |
| 缺少合理参考范式 | Reference Researcher |
| 多处重复出现的颜色、排版、Surface、间距或共享组件规则问题 | Design System Architect |
| Section Job、核心构图、媒体关系或响应式叙事 | UI Architect |
| Motion Purpose、Layer、Signature 或移动端动态叙事 | UI Architect |
| 第三方库必要性、换行、尺寸、裁切、对齐、断点、timing、Observer、视频、性能、交互和可访问性实现 | HTML Prototyper；只有提议第三方库时确认 Advanced Motion Runtime Note |
| Elementor 字段、组件代码、多实例、编辑器重渲染或单 Widget 运行时清理 | Widget Pipeline |

回退遵循最小影响原则：单模块问题不重做整页；单页例外不升级为全局规则；上游修正后只让受影响的下游产物失效并复验。

## 6. 持续推进与收口

1. 专项阶段完成且用户通过当前门禁后，重新计算原始目标的缺失依赖。
2. 只读取下一阶段的完整 Skill 和必要 references，不同时加载八套规则。
3. 用户对门禁的确认、修改或否决视为总控任务继续，不要求重新调用 Skill。
4. 当前目标满足时停止；单一产物任务不扩展成完整流程。

只有原始目标、必要产物、用户门禁和相称验证全部满足时才能宣布完成。收口时说明已完成内容、验证证据、保留的人工责任和范围外事项。

## 7. 外围边界

- 发布、上传和缓存清理：核心流程在本地验证后停止，推荐独立发布流程；
- 旧 Widget 不可见、白屏或交互失效：转独立故障排查；
- 主题 `functions.php`、模板或全站字体修改：转主题或 WordPress 开发；
- Elementor 未安装或 WordPress 环境缺失：说明前置条件，不在本流程中安装；
- 直接写入 Elementor Site Settings：Style Adapter 只生成本地合同，远程修改需要独立授权。
