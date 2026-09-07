---
name: website-html-prototyper
description: Build, review, and browser-test static website page or module HTML from a confirmed UI Architecture Map and visual direction. Use for HTML First Drafts, full-page or module-first prototypes, rendered design review, responsive and interaction QA, page composition, and implementation handoff. Do not use for design exploration, unconfirmed visual direction, content strategy, Design Systems, Elementor controls, CMS templates, or framework components.
---

# Website HTML Prototyper

把已确认的视觉设计包转化为可浏览、可审查、可交给下游的静态 HTML 设计稿。本 Skill 实现设计，不重新决定设计。

## 输入门禁

- 完整页面必须具有已确认的 Page Content、Design System、Page UI Architecture Map，以及覆盖全部 Section 的 Structure Approved Segment Set；受影响 Section 可由已确认 Section Correction 覆盖。AI Overview 或 Composite Preview 均不是门禁。方向未确认时返回 `website-ui-architect`。
- 单模块必须有完整 Module Design Solution，以及已确认方向图或无歧义的强参考。仅有截图/Figma 但内容任务不清时返回 `website-page-content-architect`；任务清楚但方向未确认时返回 `website-ui-architect`。
- Design System 缺失或冲突时返回 `website-design-system-architect`。
- Canonical Module Slug 由 `website-ui-architect` 在视觉确认后生成，本 Skill 原样继承，不擅自重命名。

## 输入权威

| 决策 | 权威来源 |
| --- | --- |
| 业务事实与文案 | Page Content |
| 颜色、字体、间距、组件基线 | Design System |
| 结构、主次、证据归属、媒体和响应式叙事 | Architecture Map |
| 明确的实现修正 | `visual-direction-notes.md` |
| 当前 Section 的已确认局部修正 | Section Correction |
| 局部构图、密度和视觉重量 | Segment |
| 整页 Surface、顺序和节奏 | Architecture Map + 相邻 Segment |

- Section Correction 只在标明的 Section 范围内优先于基础 Segment；不得扩散到相邻模块。
- 方向图与 Architecture Map 冲突时以 Map 为准；只有明确 Correction Notes 可覆盖方向图中的已知偏差。可选 Composite Preview 只用于浏览，不作为实现权威。
- 可访问性与硬约束高于所有视觉参考。

## 唯一流程

1. 执行输入门禁，确认整页或单模块路径、最终源文件、Section 边界和 Canonical Module Slug。
2. 按输入权威顺序编写真实内容的 HTML First Draft。默认使用原生 HTML/CSS/按需 JS，CSS/JS 内嵌在单一 HTML 文件；用户明确指定技术时才调整。
3. 读取 [HTML Design Review](references/html-design-review.md)，在真实渲染中检查 Section、Neighbors 和 Full Page，并自动修正一轮明确的实现层问题。
4. 读取 [Browser / Implementation QA](references/browser-implementation-qa.md)，验证桌面/移动断点、溢出、真实长内容、资源、键盘与 Focus、交互、reduced motion 和基础兼容。
5. 用户确认 HTML 后，交付最终实现源、Section 边界、Slug 和简短 QA 结论。原始目标包含 Elementor Widget 时，在同一任务中继续采用 `elementor-widget-pipeline`。

## 问题边界

- A 类：Section Job、信息主次、证据归属、核心构图或媒体契约需要变更。停止重新设计，返回 `website-ui-architect`。
- B 类：真实文案适配、尺寸、间距、换行、对齐、精确裁切、断点或可访问性实现。在 HTML 内修正。
- C 类：不影响任务、可读性、交互或响应式的轻微差异。不阻塞交付。

## 路径与 References

- 整页优先或逐模块拼接时读取 [整页拼接](references/page-composition.md)。
- 默认只维护 `设计稿/pages/<page-slug>.html` 或当前 `设计稿/modules/<module-slug>.html`，不同时制造多个真相源。
- 只有用户明确要求、需跨会话交接或 DOM/交互必须锁定时，才读取 [可选原型交接](references/prototype-handoff.md)。
- 需验证路由、输入权威或质量行为时读取 [行为用例](evals/prototype-workflow-cases.md)。

## 交付与排除

- 默认不生成独立 QA 报告或平台交付契约；只报告阻塞问题、已修正的主要问题和最终验证结果。
- 不重新规划内容、Design System、Module Design Solution 或视觉方向。
- 不规划 Elementor Controls，不编写 WordPress/PHP、React 组件、Shopify Section 或 CMS 模板；这些交给对应实现 Skill。
