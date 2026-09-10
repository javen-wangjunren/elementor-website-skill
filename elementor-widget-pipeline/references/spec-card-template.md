# 最小字段确认卡

在对话中填写并交给用户微调。它只用于确认哪些内容需要在 Elementor 中编辑，不是 DOM Contract，也不默认保存为文件。

```text
MODULE TITLE:
MODULE SLUG:
PLUGIN:
WIDGET NAME: <same as MODULE SLUG>
WIDGET TITLE:
DESIGN SOURCE:
SOURCE MODE: confirmed-html / strong-reference-fast-path
SITE MODE: greenfield / rebuild / existing-extension
STYLE AUTHORITY: project-design-system / existing-site / isolated-local-exception
STYLE CONTRACT: <path and Confirmed status> / Not applicable with explicit reason
STYLE INHERITANCE:
- Fonts:
- Colors:
- Button / Surface / Border:
- Confirmed Elementor variables:
- Design System fallbacks:

REFERENCE INTERPRETATION:（仅 Fast Path）
- 保留：
- 页面适配：
- 移动端降级：
- 不复刻：

CONTENT FIELDS:
- field key / label / control type / default / empty behavior

REPEATER:
- 是否需要：No / Yes
- 子字段：
- 默认数量：
- 是否允许增减：

OPTIONAL STYLE CONTROLS:
- None（默认）

FIXED IN CODE:
- 结构性背景、间距、圆角、阴影；字体和颜色仅限合同确认的继承与 fallback
- 布局结构与响应式
- 装饰性元素

INTERACTION: None / Native — <interaction or reveal inherited from confirmed HTML> / Advanced Motion

ADVANCED MOTION:（仅确认的 Layer 3 使用第三方库时追加）
- Library + version:
- Required capability:
- Loading / cleanup:
- Mobile / reduced-motion fallback:
ASSETS:
```

## 输出规则

- Confirmed HTML Path 的 `MODULE SLUG` 继承确认版设计稿；Fast Path 缺少 Slug 时只提出一个稳定候选。两者都必须经字段卡确认，`WIDGET NAME` 与最终 Slug 完全一致。
- 如果 Slug 与设计稿文件名不一致或发生冲突，先确认名称；不得发明临时版本名。
- 先给一份克制的字段初稿，并简短说明为什么这些内容需要编辑。
- 明确列出保持固定的内容，让用户看得出 AI 没有把所有元素都字段化。
- 用户可以删除、增加或合并字段，也可以要求某一组内容改为 Repeater。
- 输出后停止；用户确认前不创建或修改 Widget 文件。
- Fast Path 的字段卡同时确认参考解释、固定结构、响应式降级和 Slug，不额外创建 HTML 或设计合同。
- Site Style Contract 必需但缺失时，不得用字段卡临时创造全局 Token；先返回 Style Adapter。
- 默认只在当前对话保留确认结果；用户明确要求时才写 Markdown。

## Control 选择

- 单行短文本使用 `TEXT`；多行纯文本优先 `TEXTAREA`，确需富文本时才用 `WYSIWYG`。
- 图片使用 `MEDIA`；按钮目标使用 `URL`，按钮文字单独使用 `TEXT`。
- 数量稳定且不需要运营增减的项目保持固定，不自动使用 Repeater。
- 使用 Repeater 时只加入运营真正需要修改的子字段，并填写真实默认内容和默认数量。
- 不自动添加 `TAB_STYLE`。颜色、Typography、padding、margin、radius、shadow 和背景保持固定，除非用户明确确认开放。
- 增加 Style Control 时，默认值绑定合同确认的 Elementor Global Style；不得仅为暴露颜色选择器而复制整套视觉系统。
- 不为了“以后可能有用”增加开关、对齐、列数、动画或响应式控制。动画速度、位移、缓动与 Layer 默认固定在代码中，不新增 Controls。
- 普通模块、Layer 1/2 和原生 Layer 3 省略 `ADVANCED MOTION`；第三方库只继承确认 HTML/Handoff，字段卡不得临时选择动画库或插件。
