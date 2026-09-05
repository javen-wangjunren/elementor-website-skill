# Optional Delivery Contract

设计决定默认留在对话中。只有用户明确确认需要持久化时，才在模块 HTML 旁创建同名 Markdown，例如：

```text
设计稿/modules/shared-process-timeline.html
设计稿/modules/shared-process-timeline.md
```

复杂、交互明显、DOM 必须锁定或需要跨 Skill/跨会话交接的模块，可以提醒用户一次；未经确认不得自动创建。

## Contract

```text
MODULE TITLE:
MODULE SLUG:
SCOPE:
CONTENT:
FORM:
VARIANT:
INFORMATION GOAL:
DELIVERY FORM:
DESIGN SYSTEM:
HTML FILE:
CSS FILE:
JS FILE:
SELECTED DIRECTION:
VISUAL DIRECTION FILE:
DESIGN RATIONALE:
PRIMARY EVIDENCE:
AVAILABLE ASSETS:
MISSING ASSETS:
PLACEHOLDER / TRUTH BOUNDARY:
LOCKED DOM:
SURFACE CONTRACT:
RESPONSIVE RULES:
INTERACTION:
CONTENT CANDIDATES:
OPEN QUESTIONS:
```

只填写对下游实现真正有约束力的内容。没有独立 CSS/JS 文件时写 `embedded in HTML`；没有交互或未决问题时写 `None`，不要为填满模板发明内容。

图片方向稿只约束经用户确认的构图、视觉重点、媒体比例与节奏；不得把其错误文字、虚构细节或精确像素当作实现合同。素材缺口和生成占位的真实性边界必须传递给下游。

## Delivery Form

支持声明：

- `static-draft`
- `elementor-widget`
- `child-theme-module`
- `react-component`
- `shopify-section`

Delivery Form 只改变设计交付的说明重点，不授权本 Skill 实现对应平台代码。

### Elementor Widget

记录稳定 DOM、响应式状态、交互、Surface 依赖以及可能需要编辑的内容。`CONTENT CANDIDATES` 只是设计侧建议；Controls、Sections、Tabs、Repeater、默认值、动态标签和字段边界由 `elementor-widget-pipeline` 决定。

### Child Theme Module

记录 DOM、Scope、响应式、交互和页面 Surface，不规划 PHP、ACF、template-parts 或主题接线。

### React Component

记录视觉状态、内容变化和交互结果，不设计 Props、State、组件树或数据请求。

### Shopify Section

记录视觉结构、可变内容和状态，不规划 Liquid Schema、Blocks、Theme Settings 或平台数据映射。

## Locked DOM

只锁定经用户确认、且改变后会破坏视觉或交互的部分：

- 关键层级与阅读顺序；
- Overview 与 Detail 等结构关系；
- 交互目标与可访问名称的对应；
- 响应式重排所依赖的容器；
- 必须与 Surface Contract 协同的最外层边界。

不要把每一个装饰 wrapper 都写成不可改变。下游可以调整实现语法，但不得改变锁定结构所表达的信息关系。

## Handoff Check

交付前确认：

- HTML current draft 与契约指向同一个版本；
- HTML basename、`MODULE SLUG` 与已确认的 Canonical Module Slug 一致；
- 真实内容、长内容和窄屏已验证；
- 交互状态和 reduced-motion 行为明确；
- Surface Contract 与 stitched preview 一致；
- 图片方向确认的构图、视觉重点和媒体比例已在 HTML 中验证，或已记录经用户确认的例外；
- 真实素材、缺失素材和生成占位的边界清楚；
- Open Questions 不包含本可在设计阶段解决的问题；
- 契约没有越权决定平台字段或工程架构。
