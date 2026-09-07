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
| 31 | 用户只说“怪怪的”或“很挤” | 转译为 1–3 个可验证原因；B 类直接给最小修正，A 类带证据返回 Architect。 |
| 32 | 模糊反馈发生在已确认任务和 Design System 内 | 定位最小范围，不静默重写内容、Token 或核心设计。 |
| 57 | 完整页面只有已确认 Map，但 Segment Set 未覆盖或未确认全部 Section | 不生成 HTML，返回 `website-ui-architect` 完成结构与视觉确认。 |
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
| 73 | 某候选只标记 Visual Language Approved、Structure Rejected | 不作为 HTML 输入，返回 Architect 补齐结构确认。 |
