---
name: website-design-system-architect
description: Create or evolve an implementation-agnostic website design system from existing-site evidence or new-site brand and industry research. Use to compare text directions, validate one selected baseline with a compact Design Board, or update shared visual rules before page/module design. Do not use for page layouts, full-page mockups, module design, Elementor controls, or production implementation.
---

# Website Design System Architect

先提出文字方向，再把用户选中的方向整理成临时规则草稿；用单方向 Design Board 验证规则，确认后才写入可继续演进的正式 Design System。

## 标准生命周期

```text
行业与品牌输入
→ 2–3 个文字方向
→ 用户选择一个方向
→ 对话中形成 Design System 规则草稿
→ 生成单方向 Design Board
→ 设计师视角自查并自动修正一轮明确问题
→ 用户查看、微调并确认
→ 写入 Active Baseline Design System
→ 一致性与可用性自查并自动修正一轮明确问题
→ 页面实践中按需受控更新
```

临时规则草稿只保留在对话中，不创建 `design-system-draft.md`。Design Board 是规则的可视化验证工具，不是页面设计稿、模块方案或组件大全。

统一使用名称 **Design Board**；为兼容既有项目，文件路径仍保留为 `设计稿/design-system/style-board.html`。

## 路由

1. 先判断任务：
   - **New Site**：无可靠现站视觉基线，读取 [New Site 工作流](references/new-site-workflow.md)。
   - **Existing Site**：已有线上站、主题或页面视觉，读取 [Existing Site 工作流](references/existing-site-workflow.md)。
2. 涉及网页证据采集时，读取 [共享浏览器研究协议](references/browser-research.md)。
3. 两条路径都遵守 [Design System 标准](references/design-system-standard.md)。
4. 生成 Design Board 时读取 [B2B Design Board 默认模式](references/design-board-pattern.md)。
5. 交付 Design Board 或 Active Baseline 前读取并执行 [设计师自查](references/design-review.md)。

## 强制门禁

1. New Site 同行研究名单未经用户确认，不开展深度视觉研究。
2. 未提供并确认文字方向，不生成 Design Board。
3. 用户未选择方向，不整理临时规则草稿。
4. Design Board 只展示一个已选方向，只验证基础规则与基础组件。
5. 用户未确认 Design Board，不生成正式 `design-system.md`。
6. 正式文件标记为 `Active Baseline`，不是不可修改的终稿。

设计师自查不是门禁状态或实现 QA：不检查响应式、溢出、浏览器兼容与生产实现，也不输出验收等级。它只用于发现设计语言、组件示例与正式规则中的明显瑕疵；明确问题最多自动修正一轮，主观方向仍交给用户决定。

## 职责边界

- 本 Skill 定义基础视觉语言、基础组件规则，以及正式 Design System 中的平台中立媒体、响应式、动效与可访问性基线。
- `website-ui-architect` 负责页面构图、模块表达、完整模块、页面级视觉节奏，以及模块 HTML 与整页 HTML 的实现 QA。
- 实现 Skill 负责平台字段、模板、CSS、JS 和验收。
- Form 默认由插件负责，不进入首版基础组件规则；只有用户明确要求统一定制时才补充。
- 禁止在本文档中写平台专属控件、Widget slug、PHP 类名或 CSS selector。
