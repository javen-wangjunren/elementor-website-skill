---
name: website-ui-architect
description: Explore and design implementation-agnostic website pages or modules from an approved Design System, confirmed page content, real assets, and optional references. Use for full-page image directions, flexible page-first or module-first HTML drafts, module confirmation, and final page review; do not use for content strategy, Elementor Controls, WordPress templates, React components, Shopify sections, or other platform implementation.
---

# Website UI Architect

把已确认的页面内容与视觉规则转化为可审核的 UI Architecture Map、视觉方向和 HTML 设计稿。

## 输入与上游

- 必须读取已确认的 `docs/design-system/design-system.md`；缺失或冲突时返回 `website-design-system-architect`。
- 完整页面读取 `docs/page-content/<page-slug>.md`；单模块有同等明确 Brief 时可不强制页面文件。内容不足时返回 `website-page-content-architect`。
- 按需读取已确认的 Style Board、与当前主张有关的公司事实、真实素材、截图、URL、Figma 或现有 HTML 以及相邻模块；不默认扫描全项目。公司事实不足时返回总控 Company Intake。
- Design System 是规则来源；Style Board 和参考只是视觉辅助。默认使用原生 HTML/CSS/JS，用户或项目明确要求时才更换技术。

## 主流程

1. 从确认输入中提取页面任务、信息顺序、证据、媒体重点和品牌约束。
2. 完整页面先生成 Page UI Architecture Map，再执行 Module Design Review；明确问题自动修正一轮，用户确认后才生成整页方向稿。确认版 Map 可直接复用，单模块不强制整页 Map。
3. 方向稿按 Visual Direction 生成，并再次用 Module Design Review 验证设计假设。A 类结构问题回写 Map，且只重生受影响分段一轮；B 类记录为 HTML Correction Notes；C 类噪声不阻塞 HTML。
4. 用户确认方向后，根据页面成熟度选择整页优先或逐模块优先，用真实内容生成 HTML First Draft。
5. 先执行 HTML Design Review 和一轮明确问题修正，再用 Browser / Implementation QA 验证断点与溢出、真实长内容和素材替换、资源加载、键盘与 Focus、交互、reduced motion 和实现级无障碍。

## 阶段门禁

- 完整页面 Map 未经用户确认，不生成整页方向稿或 HTML。
- 方向稿只需足以判断构图、证据与主次、大致比例、密度和节奏；不追求设计师终稿精度。
- 只有会导致 HTML 明显返工的结构问题阻塞进入 HTML；可由 CSS 控制的偏差留给 Correction Notes。
- HTML Design Review 完成后才进入 Browser / Implementation QA，两者不合并。

## Reference 路由

| 当前任务 | 读取 |
| --- | --- |
| 完整页面 Map | [Page UI Architecture Map](references/page-ui-architecture-map.md) + [Module Design Review](references/module-design-review.md) |
| 整页或模块图片方向 | [Visual Direction](references/visual-direction.md) |
| B2B、企业站或证据驱动模块 | [证据驱动设计](references/evidence-led-design.md) |
| 方向不明确、需要比较 | [设计探索](references/design-exploration.md) |
| HTML First Draft 审查 | [HTML Design Review](references/html-design-review.md) |
| 逐模块命名与整页拼接 | [模块命名](references/module-naming.md) + [整页拼接](references/page-composition.md) |
| 复杂交互、锁定 DOM 或跨会话交接 | 用户明确要求后读取 [可选交付契约](references/delivery-contract.md) |
| 验证路径、门禁或回归行为 | [行为用例](evals/design-workflow-cases.md) |

## HTML 路径

### 整页优先

方向稿成熟、模块关系清楚或用户希望快速查看整页时使用：

- 只维护 `设计稿/pages/<page-slug>.html`，不增加逐模块用户门禁。
- 整页确认后为各 Section 确认 Canonical Module Slug。
- Pipeline 可直接使用整页 HTML 中边界明确的当前 Section。
- 只在需要复用或单独打磨时抽取模块 HTML。

### 逐模块优先

页面复杂、局部方向尚未确定、模块会跨页复用或用户希望逐段确认时使用：

- 每次只维护一个 `设计稿/modules/<module-slug>.html`。
- 生成前只向用户展示模块目的、核心信息与证据、参考方向、推荐 Layout 和需确认方向。
- 当前模块完成 Design Review 和 Browser QA，并经用户确认后再处理下一个。
- 用户中途要求查看整页时可更新临时预览，但不批量生成尚未设计的模块。
- 全部计划模块确认后再拼接整页。

用户可切换路径。整页与模块稿并存时，进入 Pipeline 前必须确定当前模块的最终实现源。

## 用户沟通

- Review 默认是内部步骤，不输出评分表、命名卡或独立 QA 报告。
- 只报告阻塞问题、已自动修正的主要问题和仍需用户判断的方向；多个合理方案才请用户选择。
- 用户已明确接受当前方向时，不为追求“更完美”重开设计门禁。

## 交付与边界

- 按任务交付确认版 Map、按需生成的方向稿、当前整页或模块 HTML，以及下游所需 Canonical Module Slug。
- 参考只提取结构、构图和扫读逻辑，不复制外站品牌语言。生成图只用于方向或明确占位，不得冒充真实企业证据。
- 本 Skill 不规划 Elementor 字段，不实现 Widget、WordPress 模板、React 组件、Shopify Section 或其他平台代码。下游不得为数据接线擅自改变已确认设计。
冲突时按“可访问性与硬约束 > Design System > 品牌、业务与内容事实 > 用户确认方向 > 页面上下文”处理。
