# Existing Site 工作流

## 目标

从网站真实使用的视觉语言中提炼并改善可复用基线。默认目标是理解和规范，不是未经授权地重新设计。

## 1. 建立证据集

读取 [浏览器证据协议](browser-research.md)，用真实渲染页面采集当前站点证据；Existing Site 不建立同行候选池。若真实浏览器不可用，按协议降级并披露可信度。

用户要求新页面或新模块继承现站风格时，网站 URL 是第一阶段必要输入。URL 无法访问时必须取得足以覆盖代表页面的用户截图或浏览器接管；只有零散截图或文本抓取时不得宣布已形成可靠 Existing Design System。

优先收集：

- 网站 URL 与 3–5 个代表页面；
- 桌面和移动端截图；
- 已确认品牌色、Logo、字体许可和必须保留的资产；
- 用户对现状“喜欢、不能改、不满意、不确定”的意见。

截图只作研究证据，DOM/CSS 只抽查关键规则。URL 与截图是页面事实，用户品牌资料是品牌事实；两者冲突时记录冲突，不擅自裁决。

每条关键视觉发现还要区分：

- **Observed Rendering**：浏览器最终看到的值或关系；
- **Probable Source**：从 DOM/CSS 推测的主题、Elementor、页面局部或 Custom CSS 来源；
- **Backend Verification Required**：只有 Site Settings、Kit 或等价后台证据才能确认的 Elementor Token。

公开页面不能证明后台 Global Token 名称、ID 或当前 Kit 配置。本阶段不要求用户提供后台证据，也不因此阻塞 Existing Design System；平台映射由后续 Style Adapter 处理。

## 2. 盘点并分类

观察颜色、字体、内容宽度、间距、形状、层次、基础组件、图片、图标、动效、响应式和可访问性。每条发现归入：

- **Preserve**：稳定、有效且有品牌或业务价值；
- **Normalize**：方向正确但页面之间不一致；
- **Retire**：有证据表明损害品牌、可用性或与确认方向冲突；
- **Unknown**：证据不足或需要用户决定。

分类必须附页面、截图或用户意见作为依据。

## 3. 先确认 Proposed Baseline 方向

只有一个明确改进方向时，直接用简短文字说明；存在多个合理方向时，先提出两个或三个文字方向，每个仅包含：

- 希望与不希望给人的感觉；
- 配色关系；
- 字体倾向；
- 页面密度；
- 图片方式；
- 适合原因与风险。

用户选择一个方向后再继续。不得在 Board 中并列多个 Proposed Baseline，也不得为了制造差异而提出无业务依据的极端方案。

## 4. 在对话中形成临时规则草稿

将选定方向与现站证据合并成对话内草稿，并标记：

- `Preserve / Normalize / Retire / Unknown`；
- 初步 `Locked / Flexible / Open`。

不创建 `design-system-draft.md`。

## 5. 生成一个 Proposed Baseline Board

按 [Design System 标准](design-system-standard.md) 和 [B2B Design Board 默认模式](design-board-pattern.md) 生成 `设计稿/design-system/style-board.html`：

- 只可视化一个已选 Proposed Baseline；
- 只展示基础规则和基础组件，不展示 Form、完整模块或页面 Layout；
- 可用简短标注说明规则来自哪些现站证据，但不复制一套 `Current Evidence` UI；
- 项目身份和示例事实必须真实；
- 不设置多方向切换或多套组件副本。

## 6. 设计师自查、用户确认与写入

交付 Board 前按 [设计师自查](design-review.md) 进行一次设计审查：优先使用用户整页截图，否则用 Ego Browser 获取一次桌面整页视觉证据；明确问题最多自动修正一轮。交付时说明“已完成设计自查”，不输出验收等级，也不执行响应式、兼容性或生产实现 QA。用户未确认时不生成正式 Design System。

确认后生成或更新 `docs/design-system/design-system.md`：

- 标记 `Status: Active Baseline`；
- 保留 `Preserve / Normalize / Retire / Unknown`；
- 明确 `Locked / Flexible / Open`；
- 写入媒体、真实性、响应式和可访问性基线。
- 记录 `Site Mode: existing-extension`、`Style Authority Intent: Existing Site`、代表 URL、查看日期和渲染证据可信度。
- 保留关键规则的 Observed Rendering、Probable Source 与 Backend Verification Required 状态，但不写 Elementor 字段或 Token 映射。

正式交付前再次按 [设计师自查](design-review.md) 检查规则追溯、`Locked / Flexible / Open`、内部一致性与已否决模式回退。明确问题最多自动修正一轮；仍需品牌或业务决定的项目保留为 `Open`。

页面实践中的更新遵循 [Design System 标准](design-system-standard.md) 的受控演进规则。

原始目标包含 Elementor 实现时，将 URL、渲染证据、确认的 Existing Design System 与 Board 交给 `elementor-site-style-adapter`。精确继承必须在该阶段补充 Site Settings 截图、可信 Kit 或等价后台证据。

由总控调度时，在证据采集、方向选择、Board 用户确认或交接状态变化后返回最小状态信号，由总控更新 `docs/workflow-status.md`。

## 7. 降级规则

- 站点受登录、地区或付费限制时，请求用户截图或浏览器接管。
- 只有 HTML 或内容抓取时，只能报告结构与可见内容，不能伪造完整视觉结论。
- 证据不足的规则标为 `Unknown`，不强行标准化。
