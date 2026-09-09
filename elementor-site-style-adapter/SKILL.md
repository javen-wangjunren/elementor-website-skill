---
name: elementor-site-style-adapter
description: Map a confirmed platform-neutral website Design System to a local Elementor Site Settings and Widget inheritance contract. Use for a new or rebuilt Elementor site that needs Global Style setup guidance, or an existing site that must preserve its current visual system. Do not redesign the site, implement Widgets, or modify WordPress, Elementor, themes, or remote data.
---

# Elementor Site Style Adapter

把已确认的 Design System 转译为 Elementor 平台实施契约。只生成本地 `docs/elementor/elementor-style-contract.md`，不连接或修改 WordPress。

## 输入门禁

必须确认：

- `docs/design-system/design-system.md` 为当前 Active Baseline；
- `设计稿/design-system/style-board.html` 已由用户确认；
- Site Mode 为 `greenfield`、`rebuild` 或 `existing-extension`；
- Style Authority 为 `project-design-system` 或 `existing-site`。

`existing-extension` 且用户要求保持现站风格时，还必须具备：

- 网站 URL 与真实渲染审计；
- Elementor Site Settings 截图、可信 Kit 导出或等价后台证据。

URL 只能证明最终视觉，不能证明后台 Global Token。缺少后台证据时可以整理 `Observed Only` 合同，但不得进入精确继承确认门禁。

## 执行

1. 读取 [Style Contract](references/style-contract.md)，确定模式、证据状态和样式权威。
2. 建立 Elementor Site Settings Mapping，确认 Global Colors、Global Fonts、Theme Style 与 Layout 的角色和值。
3. 映射 Typography、Buttons、Form Fields 与 Layout；只映射 Design System 已确认的规则。
4. 定义 Widget 的继承、fallback、局部覆盖和禁止修改规则。Motion 不映射为 Elementor Global Style；只记录它继续由确认 HTML、UI Motion Intent 与 Widget 交互合同负责。
5. 在对话中展示 Mapping Proposed 摘要，等待用户确认；确认前不写成 `Confirmed`。
6. 生成或更新 `docs/elementor/elementor-style-contract.md`，并同步 `elementor-project.json.siteStyle` 状态；合同的 `Pending Evidence / Mapping Proposed` 对应项目 `pending`，`Observed Only` 对应 `observed`，`Confirmed` 对应 `confirmed`。目标文件已有人工内容时保留并做最小更新。
7. 完成合同一致性检查，返回总控或原始任务。

## 状态

- `Pending Evidence`：缺少 Active Baseline、Board、URL 或必要证据。
- `Observed Only`：已观察最终渲染，但无法确认 Elementor Token 或覆盖来源。
- `Mapping Proposed`：证据足够，已提出平台映射，等待用户确认。
- `Confirmed`：用户明确确认当前映射，可交给 Widget Pipeline。

## 模式规则

### Greenfield / Rebuild

- Style Authority 固定为 `project-design-system`。
- 项目 Design System 决定 Elementor Site Settings；Elementor Site Settings 是 Widget 的平台执行层。
- GeneratePress、子主题或其他主题只作技术底座，不进行默认视觉冲突扫描，也不因主题文件存在改变 Style Authority。
- 仅当真实页面出现与已确认 Site Settings 不一致的可观察异常时，才把主题 CSS、页面 Custom CSS 或其他覆盖层记录为专项诊断线索；该诊断不阻塞正常映射。
- `rebuild` 不继承旧站历史视觉，除非用户明确把某条旧规则加入新 Design System。

### Existing Extension

- Style Authority 默认 `existing-site`。
- Elementor Site Settings、可信 Kit 或等价后台证据用于确认可绑定的 Global Token；最终渲染用于验证这些设置是否真实生效。
- 不默认扫描主题或子主题。只有后台设置与真实渲染出现明确偏差时，才按需检查页面局部设置、Custom CSS 或用户提供的主题代码。
- 不借新增模块批量清理、规范化或覆盖老站 Site Settings。
- 渲染结果与后台设置不一致时，记录实际生效值、已知证据与待诊断项；无法访问相关代码时不得声称已定位来源。

## 边界

- 不创建或修改 Design System、Design Board、页面设计或 HTML。
- 不实现 Widget，不决定业务字段。
- 不调用 REST API、MCP、WP-CLI，不上传 Kit，不写线上 Site Settings。
- 不把手动设置完成等同于已验证；只记录用户提供的确认与证据。

需要验证路由与合同状态时，读取 [工作流用例](evals/workflow-cases.md)。
