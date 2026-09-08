---
name: website-reference-researcher
description: Research 3–5 confirmed same-industry or cross-industry websites and translate their brand narrative, page architecture, art direction, and visual-system evidence into one reusable Visual Reference Brief. Use when strong references are scarce, a site needs brand-led or premium positioning, a page lacks a narrative spine, or a key module lacks a credible design precedent. Do not create page content, a Design System, UI directions, HTML, or a permanent brand gallery.
---

# Website Reference Researcher

把真实网站参考转化为可迁移的设计证据。目标不是复刻品牌外观，而是解释某种叙事、构图、素材或视觉规则为什么适合当前设计问题，并将结论分别交给 Page Content、Design System 和 UI Architecture。

## 触发与跳过

满足任一条件时使用：

- 同行业缺少高质量或有设计深度的参考；
- 用户要求品牌型、体验型、议题型或“大牌感”官网；
- Page Content 缺少中心命题、叙事主线或内容取舍依据；
- Design System 方向持续模板化，缺少 Art Direction 证据；
- UI Architecture 的关键页面或模块缺少合理表达方式；
- 用户明确要求研究参考网站。

普通转化页任务清晰、单模块已有强参考、或现有 Visual Reference Brief 仍覆盖当前目标时跳过。Existing Site 为保持原站风格而提取当前站点基线，属于 `website-design-system-architect`，不由本 Skill 接管。

## 输入

优先读取：

1. 已确认的公司资料、受众、业务边界和素材清单；
2. 页面或模块目标、目标转化与当前设计问题；
3. 用户指定 URL、截图或第三方 `DESIGN.md`；
4. 现有 `docs/research/*-visual-reference-brief.md`，用于判断是否可复用。

公司事实不足以判断参考对象时返回总控 Company Intake。参考研究不能补造企业定位、能力或证据。

## 唯一流程

1. 定义 Research Scope、触发原因和当前待解决的设计问题；站点、页面和模块研究不得混成无边界的案例集合。
2. 读取 [跨行业分析方法](references/cross-industry-analysis.md)，根据设计问题相似性建立 5–8 个候选。用户已明确给出最终限定名单时直接使用；否则请用户确认最终 3–5 个后才深度研究。
3. 使用真实浏览器查看确认网站的首页或与范围直接相关的代表页面。记录 URL、查看日期、可见内容、截图或渲染观察；单一网站只查看解决当前问题所需的最少页面。
4. 按六层分析参考：Brand Narrative、Narrative Architecture、Content Editing、Page / Module Architecture、Art Direction、Visual System / `DESIGN.md`。
5. 将每项结论标记为 `Observed / Inferred / Transferable / Not Transferable`，说明跨行业相似点、迁移理由和适用边界。
6. 按 [共享简报合同](references/visual-reference-brief-contract.md) 写入一份 Visual Reference Brief，并执行证据、职责和反复刻自查。
7. 把同一简报的最小相关部分分别交给 Page Content、Design System 或 UI Architecture；简报本身不是新的确认门禁。

## 路径

- 站点级：`docs/research/site-visual-reference-brief.md`
- 页面或模块级：`docs/research/<scope-slug>-visual-reference-brief.md`

`scope-slug` 使用当前已确认的页面 slug 或 Section ID；若两者均存在，使用 `<page-slug>-<section-id>`。每次研究只维护当前 Scope 的一份简报，不为每家公司创建独立档案。

## 证据规则

- 真实页面观察高于第三方 `DESIGN.md`、图库摘要或营销说明。
- `DESIGN.md` 只在 1–2 个核心参考确有帮助时作为视觉系统辅助证据；不能直接复制为项目 Design System。
- 静态截图不能证明 Hover、Focus、动效、响应式或完整交互；无法观察时标记缺口。
- 外站事实、品牌命题、专属视觉资产、Logo、角色、摄影和文案不得成为当前企业事实或可直接复制资产。
- 相似色值、圆角或组件不是跨行业迁移的充分理由；必须说明共享的用户任务、决策成本、证据类型或素材角色。
- 无法访问的网站保留为 `Unavailable`，不根据记忆补写观察结论。

## 交付边界

- 本 Skill 只交付研究证据与迁移建议，不选择最终品牌方向，不生成 Page Content、Design Board、Design System、Architecture Map、方向图或 HTML。
- Page Content 只消费品牌命题、叙事、内容取舍和证据策略；Design System 只消费 Art Direction、Visual System 和迁移边界；UI Architecture 只消费页面/模块结构、媒体、构图和响应式模式。
- 用户不需要单独确认研究简报。所有最终取舍仍由下游原有门禁确认。

需要验证触发、证据和跨阶段边界时读取 [行为用例](evals/reference-research-cases.md)。
