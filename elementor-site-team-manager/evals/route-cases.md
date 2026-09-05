# Route Cases

## 1. 全新项目

请求：“我什么都不懂，帮我从零做一套 Elementor 自定义模块。”

期望：先进入 `elementor-site-initialize`；路径/Profile 确认后，按完整目标继续页面内容框架与 Design System，二者确认后进入 UI 和 Pipeline。适用的五个门禁均不得跳过。

## 2. 现有基础上的模块设计

请求：插件与有效 Design System 已存在，用户提供模块截图、真实内容和明确的模块任务，要求设计新模块。

期望：直接进入 `website-ui-architect`，不强制创建整页内容框架，也不重做初始化或 Design System。

## 3. 直接实现确认版 HTML

请求：用户提供确认版 HTML、Canonical Module Slug 和现有插件路径。

期望：直接进入 `elementor-widget-pipeline`，先输出最小字段卡并停顿。

## 4. HTML 已确认但插件不存在

请求：用户要把确认版 HTML 做成 Widget，但没有插件骨架。

期望：先进入 `elementor-site-initialize`；完成后直接回 Pipeline，不重做 Design System 或 UI。

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

期望：说明不属于五个核心 Skill 并推荐外围流程；不误用专项 Skill 执行。

## 12. 持续接管

请求：用户在总控提出的门禁处回复“确认”。

期望：沿用原始目标和当前阶段继续，不要求用户再次手动调用专项 Skill；仍只加载下一阶段所需规则。

## 13. 直接实现确认版 HTML

请求：页面内容框架未知，但用户已提供确认版 HTML、Canonical Module Slug 和现有插件路径。

期望：直接进入 `elementor-widget-pipeline`；不强迫重做内容框架、Design System 或 UI。

## 14. 完整页面双路径设计

请求：用户提供已确认的页面内容框架和 Design System，希望完成包含多个模块的页面。

期望：总控先判断是否需要整页图片方向稿，再允许选择整页优先或模块优先路径。整页优先可以直接生成整页 HTML；模块优先逐个确认后拼接。两者完成整页 QA 后都按顺序交给 Pipeline。

## 15. 多 Widget 顺序开发

请求：确认版页面包含多个待实现模块。

期望：一次只向 Pipeline 派发一个模块；每个 Widget 分别输出最小字段卡并等待确认，不用一次批准跳过后续 Widget 的字段门禁。

## 16. 人工整页验收

请求：用户明确由自己在 Elementor 中组装整页，并对照确认版页面 HTML 做最终视觉检查。

期望：把它视为已定义的用户责任和最终门禁，不评价为 Pipeline 或 Skill 体系的缺口，不自动新增页面组装 Skill。

## 17. Delivery Contract 为可选

请求：普通静态模块已有用户确认的 current HTML 和 Canonical Module Slug，但没有独立 Delivery Contract。

期望：可正常进入 Pipeline 的字段确认门禁；不把 Delivery Contract 当作强制前置。只有复杂交互、锁定 DOM 或跨会话交接时才建议使用。

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

## 23. 长页面 Overview 与分段稿

请求：确认版 Architecture Map 包含超过约 6 个模块。

期望：总控继续采用 `website-ui-architect` 的 Overview + 分段稿路径，完成 Visual Direction Review 后才进入用户方向确认门禁；不把设计师自查表述为浏览器 QA。

## 24. 单模块路由不增加整页门禁

请求：用户只设计一个任务、内容、素材与上下文都已明确的模块。

期望：总控直接路由到 `website-ui-architect` 的单模块路径，不强制生成 Page UI Architecture Map。
