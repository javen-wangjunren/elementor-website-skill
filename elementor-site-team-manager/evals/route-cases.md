# Route Cases

## 1. 全新项目

请求：“我什么都不懂，帮我从零做一套 Elementor 自定义模块。”

期望：先进入 `elementor-site-initialize`；路径/Profile 确认后，按完整目标继续页面内容框架与 Design System。Design System 确认后由 Style Adapter 建立项目合同，再进入 UI Architect、HTML Prototyper 和 Pipeline。适用门禁均不得跳过。

## 2. 现有基础上的模块设计

请求：插件与有效 Design System 已存在，用户提供模块截图、真实内容和明确的模块任务，要求设计新模块。

期望：直接进入 `website-ui-architect`，不强制创建整页内容框架，也不重做初始化或 Design System。

## 3. 直接实现确认版 HTML

请求：用户提供确认版 HTML、Canonical Module Slug、现有插件路径和 Confirmed Style Contract。

期望：直接进入 `elementor-widget-pipeline`，先输出最小字段卡并停顿。

## 4. HTML 已确认但插件不存在

请求：用户要把确认版 HTML 做成 Widget，但没有插件骨架。

期望：先进入 `elementor-site-initialize`；完成后检查 Style Contract。已确认或用户明确记录 isolated local exception 时回 Pipeline，否则先转 Style Adapter；不重做已经确认的 Design System 或 UI。

## 5. 模块设计缺少 Design System

请求：用户要求设计模块，项目中没有有效 Design System。

期望：先进入 `website-design-system-architect`；Style Board 和 Design System 确认后继续 UI。

## 6. 完整页面缺少内容框架

请求：用户希望设计完整服务页，Design System 已确认，但页面只存在零散想法。

期望：先进入 `website-page-content-architect`；确认页面叙事、Section Map 和内容边界后继续 UI。

## 7. 文件存在但确认状态未知

请求：发现页面内容框架、Style Board 或多个 HTML 文件，用户只说“继续”。

期望：展示证据并询问哪个版本已确认；不能因文件存在直接越过门禁。

## 8. 单一内容框架任务

请求：“只帮我规划这个页面应该讲什么、有哪些模块。”

期望：仅进入 `website-page-content-architect`，确认内容框架后停止，不自动建立 Design System 或设计页面。

## 9. 单一 Design System 任务

请求：“只帮我把老站设计风格整理成 Design System。”

期望：仅进入 `website-design-system-architect`，完成后收口并把 UI 作为可选下一步。

## 10. 页面内容与 Design System 并行前置

请求：新页面既没有内容框架也没有 Design System，用户目标是完成整页设计。

期望：分别完成并确认两项前置；顺序根据现有证据决定。两者都确认后才进入 UI。

## 11. 范围外任务

请求：发布插件、排查旧 Widget、修改主题 `functions.php` 或安装 Elementor。

期望：说明不属于八个核心 Skill 并推荐外围流程；不误用专项 Skill 执行。

## 12. 持续接管

请求：用户在总控提出的门禁处回复“确认”。

期望：沿用原始目标和当前阶段继续，不要求用户再次手动调用专项 Skill；仍只加载下一阶段所需规则。

## 13. 直接实现确认版 HTML

请求：页面内容框架未知，但用户已提供确认版 HTML、Canonical Module Slug、现有插件路径和适用的 Confirmed Style Contract。

期望：直接进入 `elementor-widget-pipeline`；不强迫重做内容框架、Design System 或 UI。

## 14. 完整页面双路径设计

请求：用户提供已确认的页面内容框架和 Design System，希望完成包含多个模块的页面。

期望：总控先由 UI Architect 完成 Map、覆盖全部 Section 的 Segment Set 及结构/视觉确认，再交给 Prototyper 选择整页优先或模块优先 HTML 路径。AI Overview 不是门禁。

## 15. 多 Widget 顺序开发

请求：确认版页面包含多个待实现模块。

期望：一次只向 Pipeline 派发一个模块；每个 Widget 分别输出最小字段卡并等待确认，不用一次批准跳过后续 Widget 的字段门禁。

## 16. 人工整页验收

请求：用户明确由自己在 Elementor 中组装整页，并对照确认版页面 HTML 做最终视觉检查。

期望：把它视为已定义的用户责任和最终门禁，不评价为 Pipeline 或 Skill 体系的缺口，不自动新增页面组装 Skill。

## 17. Prototype Handoff 为可选

请求：普通静态模块已有用户确认的 current HTML 和 Canonical Module Slug，但没有独立 Prototype Handoff。

期望：可正常进入 Pipeline 的字段确认门禁；不把 Prototype Handoff 当作强制前置。只有复杂交互、锁定 DOM 或跨会话交接时才建议使用。

## 18. 内部流程状态

请求：恢复一个跨多个 Skill、确认状态不清晰的建站任务。

期望：优先读取 `docs/workflow-status.md`，再用当前对话和项目证据核验。状态文件只在关键节点覆盖更新，不形成日志；专项 Skill 不各自创建状态文件。

## 19. 用户状态说明

请求：普通模块设计对话，没有跨阶段或阻塞。

期望：不展示固定状态卡。只有启动、恢复、跨阶段、阻塞或用户询问时，才按需说明“当前阶段、已确认、待确认、下一步”。

## 20. 整页 Section 直接进入 Pipeline

请求：整页 HTML 已确认，当前 Hero Section 边界与 Canonical Module Slug 清楚，用户不需要保存独立模块稿。

期望：直接把整页中的 Hero Section 派发给 Pipeline；不强制创建 `modules/*.html`，但仍一次只开发一个 Widget 并确认字段卡。

## 21. Company Intake 是共享输入

请求：新站同时需要页面内容框架和 Design System，但公司业务、目标客户与证据资料不完整。

期望：先执行一次轻量 Company Intake；确认 `docs/company/about-company.md` 后，按原始目标将它提供给 Page Content、Design System 或两者，不固定先进入 Page Content。

## 22. 完整页面不跳过 Architecture Map

请求：用户已确认 Page Content 与 Design System，要求生成完整首页视觉方向。

期望：总控路由到 `website-ui-architect` 生成 Page UI Architecture Map，等待用户确认后才生成图片方向；不从内容框架直接跳到生图或 HTML。

## 23. 长页面 Segment Set

请求：确认版 Architecture Map 包含超过约 6 个模块。

期望：总控采用 `website-ui-architect` 的 Segment-first 路径，生图前说明数量和范围；不默认生成 AI Overview。全部 Section 的 Structure Fidelity 与视觉语言确认后才通过门禁。

## 24. 单模块路由不增加整页门禁

请求：用户只设计一个任务、内容、素材与上下文都已明确的模块。

期望：总控直接路由到 `website-ui-architect` 的单模块路径，不强制生成 Page UI Architecture Map。

## 25. 已确认设计但缺少 HTML

请求：完整页面已有确认 Map、覆盖全部 Section 的 Segment Set 和 Canonical Module Slug，但尚未生成 HTML。

期望：直接进入 `website-html-prototyper`；不重新生成方向图，也不直接进入 Pipeline。

## 26. 完整页面视觉尚未确认

请求：Map 已确认但 Segment Set 尚未完整确认，用户要求做 HTML。

期望：继续采用 `website-ui-architect` 完成视觉方向确认；不得让 Prototyper 绕过门禁。

## 27. 端到端同任务切换

请求：用户最初要求从页面设计一直做到确认版 HTML。

期望：UI Architect 的视觉方向经用户确认后，总控在同一任务中加载 Prototyper 继续，不要求用户重新调用 Skill。

## 28. 可选整页拼接预览

请求：完整页面的 Segment Set 已确认，用户只想快速看整页效果。

期望：路由 UI Architect 使用确定性脚本拼接 `page-composite-preview.png`，不调用生图工具；拼接图不成为 Prototyper 门禁或权威来源。

## 29. 局部方向错误

请求：用户认可 Segment 的视觉风格，但其中一个 Section 被生成为错误模块。

期望：记录视觉语言认可与结构拒绝；先报告并等待用户确认，再只生成该 Section Correction，不自动重生整段。

## 30. 新站进入 Elementor 实现

请求：新站 Design System 和 Board 已确认，准备开始做 Widgets。

期望：先路由 `elementor-site-style-adapter`，确认项目 Global Style 与继承合同后再进入 Pipeline；不直接修改 Elementor。

## 31. 完全重建旧站

请求：旧站不要保留原视觉，从零重建 Elementor 网站。

期望：Site Mode 为 `rebuild`，Style Authority 为 Project Design System；不错误路由 Existing Site 风格继承。

## 32. 老站保持风格，只有 URL

请求：给现有站增加一个页面，保持现在的设计，这是 URL。

期望：先路由 Design System Architect 提取 Existing Design System 与 Board；不能凭 URL 直接进入 Pipeline。

## 33. 老站已有视觉基线但缺后台证据

请求：Existing Design System 已确认，请让 Widget 精确继承 Elementor Global Style，但没有 Site Settings 截图或 Kit。

期望：路由 Style Adapter，合同最多为 `Observed Only`，请求最小后台证据后才能提出精确映射。

## 34. 老站证据完整

请求：URL、渲染审计、Existing Design System、Board 和 Site Settings 截图均已确认。

期望：Style Adapter 提出 Elementor Site Settings Mapping 和继承规则；用户确认后把 Confirmed Contract 交给 Pipeline。

## 35. 纯设计任务

请求：只整理 Design System 和方向图，不进入 Elementor。

期望：不强制调用 Style Adapter。

## 36. 明确隔离模块

请求：老站新增一次性活动条，不继承当前样式，也不要改 Site Settings。

期望：记录 isolated local exception，可跳过 Style Adapter；所有样式限制在当前 Widget Wrapper。

## 37. 同行业参考普通但目标要求品牌感

请求：PCB 行业网站都很模板化，希望跨行业找更有设计感的参考。

期望：条件路由 `website-reference-researcher`；按设计问题相似性建立 5–8 个候选，用户确认 3–5 个后研究，再把同一 Brief 分领域交给 Page Content、Design System 与 UI Architect。

## 38. 用户已指定最终参考 URL

请求：只研究用户列出的四个网站。

期望：把明确名单视为候选确认，直接进入真实浏览器研究，不补充网站、不再次要求确认。

## 39. 已有适用 Brief

请求：继续同一站点的首页 Design System，站点级 Brief 已存在且 Scope 仍匹配。

期望：复用 Brief 并只传 Design System 所需字段，不重复研究。

## 40. 普通内容页目标清晰

请求：为已有成熟内容模板的隐私政策页写内容框架。

期望：跳过 Reference Researcher，直接采用原目标 Skill。

## 41. 老站原样扩展

请求：保持现有站风格增加页面，并提供现站 URL。

期望：路由 Existing Design System 提炼，不把现站 URL 误判为跨行业参考研究。

## 42. 单模块持续怪异

请求：Applications 模块多轮方案仍不合理，需要跨行业寻找媒体浏览范式。

期望：只生成模块级 Visual Reference Brief；不重做站点级研究，不直接产出 UI Map。

## 43. Brief 不新增最终门禁

请求：参考研究已完成，继续页面内容与视觉方向。

期望：Brief 作为证据直接进入原流程；Page Content、Design Board 与 UI Architecture 仍分别执行自己的确认门禁。

## 44. 明确单阶段不加载完整路由

请求：插件、Style Contract、确认版 HTML 和 Slug 都已明确，只实现当前 Widget。

期望：总控直接读取 `elementor-widget-pipeline`，不为形式读取完整 Routing Playbook 或 Workflow Contract；Pipeline 的字段门禁仍保留。

## 45. 恢复任务按需加载路由

请求：继续上次的整站任务，但当前阶段不清楚。

期望：先读取 `docs/workflow-status.md`，再读取 Routing Playbook 核验依赖和确认依据；不能只凭候选文件恢复为 Confirmed。

## 46. 跨阶段加载工作流合同

请求：用户刚确认完整页面视觉方向，原目标还包含 HTML 与 Widget 实现。

期望：读取 Workflow Contract，更新总状态并用最小派工包进入 HTML Prototyper；不重新读取无关阶段规则，也不同时派发多个 Widget。

## 47. 新站默认克制动效

请求：新建 B2B 企业站，用户没有特别说明动画。

期望：Design System 默认建立 `Motion Level: Restrained`；UI Architect 仍逐 Section 判断 Motion Intent，不给全页机械添加 Reveal，也不新增独立 Motion 门禁。

## 48. 页面太静态

请求：确认方向图后、HTML 前，用户说页面太静态，希望增加一点活力。

期望：路由 UI Architect，只补受影响页面/Section 的 Page Motion Budget 与 Motion Intent；不让 Prototyper自行发明，也不重开 Page Content。

## 49. 已确认动效的实现问题

请求：Map 已确认 Reveal，但 HTML 中内容闪烁、Reduced Motion 仍有位移。

期望：路由 HTML Prototyper 做实现层修正和复验，不返回 Design System 或重新生图。

## 50. 动态 Widget 重复运行

请求：同页两个 Widget 状态串台，Elementor 编辑后计时器重复。

期望：路由 Widget Pipeline，修正实例作用域、重初始化和 cleanup；不改变 Motion Purpose。

## 51. 旧版 Map 无 Motion 字段

请求：继续一个已经确认的旧项目，Map 没有 Motion Contract，用户没有要求增强动态。

期望：不阻塞原流程；Prototyper 只保留 Hover、Focus 和必要状态。只有用户要求升级时才返回 UI Architect 补 Motion Intent。
