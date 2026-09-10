# New Site 工作流

## 目标

用业务事实、按需的跨行业参考证据和一个可验证方向建立视觉基线，不让 AI 直接跳到页面或一次制作多套高保真方案。

## 1. 建立设计简报

优先读取已确认的 `docs/company/about-company.md`、Logo、品牌色，以及与当前范围匹配的 `docs/research/*-visual-reference-brief.md`。若业务、目标客户或主要转化不足以判断设计方向，返回总控 Company Intake，不用视觉假设补齐业务事实。

至少确认：

- 业务、产品或服务及差异化；
- 核心受众与网站首要转化；
- 已有品牌资产和限制；
- 希望与不希望给人的感觉；
- 语言、地区、可访问性和性能等硬约束。

同时确认 Site Mode：完全新站使用 `greenfield`；已有网站但视觉从零重做使用 `rebuild`。两者的 `Style Authority Intent` 默认均为 `Project Design System`。主题或子主题只作技术底座，不通过主题文件扫描决定视觉方向，也不预判与 Elementor 的样式冲突。

## 2. 读取或路由 Visual Reference Brief

先检查站点级 `docs/research/site-visual-reference-brief.md`，再检查当前页面或模块级 `docs/research/<scope-slug>-visual-reference-brief.md`。只有 Scope、受众、Site Communication Mode、待解决的设计问题和素材假设仍适用于当前任务时才复用；文件较旧本身不是失效理由。

满足下列任一条件且没有适用简报时，返回总控并路由 `website-reference-researcher`：

- 同行业缺少高质量参考；
- 用户要求品牌型、体验型或“大牌感”官网；
- 内容缺少中心叙事；
- Design System 方向持续模板化；
- 关键模块缺少合理表达方式；
- 用户明确提供参考网站。

普通转化页、目标清晰的轻量任务或已有可靠参考时可跳过研究。用户提供的 URL 交给 Researcher 判断为候选或最终名单；用户明确限定最终名单时不再重复确认候选。

存在适用简报时，本 Skill 只读取 `Art Direction`、`Visual System / DESIGN.md`、项目可采用原则与禁止照搬内容。Brief 是参考证据，不是项目 Design System；其中的颜色、字体、间距、组件和品牌手法都必须重新经过项目约束、Design Board 与用户确认。

历史 `docs/research/industry-ui-research.md` 不再作为跨阶段权威，也不要求迁移。只有其观察仍可验证且被新 Brief 明确吸收时，才继续使用相关结论。

## 3. 只提出文字方向

第一轮输出两个或三个简短文字方向，不生成 HTML。每个方向只包含：

```text
DIRECTION:
希望给人的感觉：
不希望给人的感觉：
配色关系：
字体倾向：
页面密度：
图片方式：
适合原因：
风险：
```

方向之间应有有依据的差异，但不得为了制造反差而提出不符合业务的极端方案。等待用户选择一个方向；未确认时停止在此门禁。

## 4. 在对话中形成临时规则草稿

只针对已选方向整理临时规则，覆盖：

- 项目身份与设计意图；
- 颜色、字体、间距、容器和形状；
- 图片处理；
- 基础组件及状态；
- 初步 `Locked / Flexible / Open`；
- 按 [Motion System Standard](motion-system-standard.md) 采用或调整 `Motion Level: Restrained`、三层职责与默认 Token。

草稿只保留在对话中，不创建 `design-system-draft.md`，也不称为正式 Design System。

## 5. 生成单方向 Design Board

按 [Design System 标准](design-system-standard.md) 和 [B2B Design Board 默认模式](design-board-pattern.md) 写入 `设计稿/design-system/style-board.html`：

- 只展示用户选中的一个方向；
- 只展示基础规则与规定的基础组件；
- 不展示 Form、完整模块或页面 Layout；
- 公司名称、Logo 和品牌必须来自已确认输入；
- 示例事实必须已验证，否则使用明显中性的演示文字；
- 不设置方向切换，不复制多套 CSS 或组件。
- Layer 1 默认通过现有基础组件状态表达，不单独增加 Motion 区块。只有用户明确要求查看运动方向，或项目已确认 Layer 2 跨页基线时，才附加紧凑 Motion Preview Strip；不设计页面级 Signature。

## 6. 设计师自查、用户查看与确认

交付前按 [设计师自查](design-review.md) 审查 Board。优先使用用户提供的整页截图，否则用 Ego Browser 获取一次桌面整页视觉证据；明确问题最多自动修正一轮。仍涉及品牌气质或主观方向时不继续猜测，清楚列给用户决定。

Design Board 只用于判断设计风格与基础组件组合，不承担实现质量验收。交付时只说明“已完成设计自查”；不执行窄屏、响应式、溢出、兼容性或生产实现 QA，也不输出验收等级。用户要求调整时同步更新临时规则和 Board；用户未明确确认时不生成正式 Design System。

## 7. 写入 Active Baseline

用户确认 Board 后，生成或更新 `docs/design-system/design-system.md`：

- 标记 `Status: Active Baseline`；
- 记录当前已确认规则；
- 写明 `Locked / Flexible / Open`；
- 保留媒体、真实性、响应式与可访问性基线；
- 写入 Motion Foundation、Token、三层职责、移动端与 Reduced Motion 基线；
- 说明首版已知限制。
- 记录 `Site Mode` 与 `Style Authority Intent: Project Design System`。

交付前再次按 [设计师自查](design-review.md) 审查 Active Baseline 的追溯性、一致性与可用性。明确遗漏、冲突或规则回退最多自动修正一轮；未确认的品牌或业务决定保留为 `Open`。

后续页面实践按 [Design System 标准](design-system-standard.md) 的受控演进规则更新，不把当前版本视为永久终稿。

当原始目标包含 Elementor 实现时，把确认的 Design System、Board、Site Mode 和 Style Authority Intent 交给 `elementor-site-style-adapter`；本 Skill 不自行编写 Elementor Site Settings。

由总控调度时，在研究、方向选择、Board 用户确认或交接状态变化后返回最小状态信号，由总控更新 `docs/workflow-status.md`。
