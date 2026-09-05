# New Site 工作流

## 目标

用业务事实、行业研究和一个可验证方向建立视觉基线，不让 AI 直接跳到页面或一次制作多套高保真方案。

## 1. 建立设计简报

优先读取已确认的 `docs/company/about-company.md`、Logo、品牌色和用户参考网站。若业务、目标客户或主要转化不足以判断参考对象，返回总控 Company Intake，不用视觉假设补齐业务事实。

至少确认：

- 业务、产品或服务及差异化；
- 核心受众与网站首要转化；
- 已有品牌资产和限制；
- 希望与不希望给人的感觉；
- 语言、地区、可访问性和性能等硬约束。

## 2. 建立参考候选池

支持用户指定、AI 推荐和混合模式，默认混合模式。用户提供 2–3 个种子网站时，AI 补充 2–4 个；用户未提供时，AI 推荐候选；用户明确要求只研究指定网站时不擅自补充。

候选池默认 5–8 个，第一轮只展示：

| 网站 | 类型 | 一句推荐理由 |
| --- | --- | --- |

请用户确认最终 3–5 个。没有确认前不启动深度截图或 DOM/CSS 检查；用户明确给出最终限定名单时，该指令本身可视为确认。

## 3. 真实浏览器研究

读取 [浏览器证据协议](browser-research.md)，只研究已确认网站。默认写入一到两页的 `docs/research/industry-ui-research.md`：

```markdown
# Industry UI References

## Project Context
## Confirmed References
### Website
- URL / viewed date:
- 一句话印象：
- 我们可以参考：
- 不适合本项目：
## Repeated Patterns
## Initial Direction
```

外部或自动提取的 `DESIGN.md` 只在 1–2 个核心参考确有必要时辅助理解，不直接复制成项目 Design System，也不代替真实页面观察。

## 4. 只提出文字方向

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

## 5. 在对话中形成临时规则草稿

只针对已选方向整理临时规则，覆盖：

- 项目身份与设计意图；
- 颜色、字体、间距、容器和形状；
- 图片处理；
- 基础组件及状态；
- 初步 `Locked / Flexible / Open`。

草稿只保留在对话中，不创建 `design-system-draft.md`，也不称为正式 Design System。

## 6. 生成单方向 Design Board

按 [Design System 标准](design-system-standard.md) 和 [B2B Design Board 默认模式](design-board-pattern.md) 写入 `设计稿/design-system/style-board.html`：

- 只展示用户选中的一个方向；
- 只展示基础规则与规定的基础组件；
- 不展示 Form、完整模块或页面 Layout；
- 公司名称、Logo 和品牌必须来自已确认输入；
- 示例事实必须已验证，否则使用明显中性的演示文字；
- 不设置方向切换，不复制多套 CSS 或组件。

## 7. 设计师自查、用户查看与确认

交付前按 [设计师自查](design-review.md) 审查 Board。优先使用用户提供的整页截图，否则用 Ego Browser 获取一次桌面整页视觉证据；明确问题最多自动修正一轮。仍涉及品牌气质或主观方向时不继续猜测，清楚列给用户决定。

Design Board 只用于判断设计风格与基础组件组合，不承担实现质量验收。交付时只说明“已完成设计自查”；不执行窄屏、响应式、溢出、兼容性或生产实现 QA，也不输出验收等级。用户要求调整时同步更新临时规则和 Board；用户未明确确认时不生成正式 Design System。

## 8. 写入 Active Baseline

用户确认 Board 后，生成或更新 `docs/design-system/design-system.md`：

- 标记 `Status: Active Baseline`；
- 记录当前已确认规则；
- 写明 `Locked / Flexible / Open`；
- 保留媒体、真实性、响应式与可访问性基线；
- 说明首版已知限制。

交付前再次按 [设计师自查](design-review.md) 审查 Active Baseline 的追溯性、一致性与可用性。明确遗漏、冲突或规则回退最多自动修正一轮；未确认的品牌或业务决定保留为 `Open`。

后续页面实践按 [Design System 标准](design-system-standard.md) 的受控演进规则更新，不把当前版本视为永久终稿。

由总控调度时，在研究、方向选择、Board 用户确认或交接状态变化后返回最小状态信号，由总控更新 `docs/workflow-status.md`。
