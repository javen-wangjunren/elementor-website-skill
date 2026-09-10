# 路由用例

## 应触发

- “这是确认版 HTML，帮我做成 Elementor Widget。”
- “在现有组件插件里新增一个可拖拽模块。”
- “把这个已经确认的主题内模块迁移成插件式 Elementor Widget。”
- “先帮我分析这个设计稿最少需要哪些 Elementor 字段，我确认后再实现。”
- “这个模块有 Tab 交互，做成支持 Elementor 编辑器和多实例的 Widget。”
- “原网站已经用 Elementor 搭好，照这张明确的 CTA 图片直接补一个简单 Widget，文案和按钮链接都在这里。”
- “这个简单提示条不需要单独 HTML，我确认按当前 Figma 直接实现成 Widget。”
- “老站 Existing Design System 和 Elementor Style Contract 已确认，把这个 CTA Widget 继承现有 Global Style。”

## 不应触发

- “这个模块应该怎么设计？”或“给我三个布局方案。” → `website-ui-architect`
- “网站还没有自定义 Widget 插件，帮我初始化整套目录和配置。” → `elementor-site-initialize`
- “旧 Widget 在面板里搜不到、白屏或点击无响应。” → 故障排查流程，而不是本 Skill
- “把插件上传到服务器并清缓存。” → 发布流程
- “修改主题 functions.php、页面模板或全站字体。” → 主题或站点级任务
- “根据 Design System 帮我规划 Elementor Global Colors 和 Fonts。” → `elementor-site-style-adapter`
- 纯文案、运营策略或与 Elementor 无关的后台逻辑

## 边界用例

- 只有截图/Figma且方向未确认，并需要布局或信息策略判断：转 `website-ui-architect`。
- 老站要求保持现有风格但缺少 Existing Design System：转 `website-design-system-architect`；只有 URL 不能进入 Fast Path。
- 老站已有 Design System 但缺少 Confirmed Style Contract：转 `elementor-site-style-adapter`。
- 用户明确要求完全隔离的一次性模块且不继承站点样式：字段卡记录 `isolated-local-exception` 后可继续，不修改全局规则。
- 已有确认 Map、方向图和 Canonical Module Slug，但没有 HTML：转 `website-html-prototyper`。
- 既有 Elementor 页面 + 简单独立模块 + 强参考 + 真实内容完整 + 用户明确批准：进入 Fast Path 字段确认卡，不强制生成 HTML。
- 用户虽要求“直接做”，但参考存在多个合理布局、媒体策略、复杂交互或页面关系：Fast Path 不成立，转 `website-ui-architect`；设计已确认只缺 HTML 时转 `website-html-prototyper`。
- 简单 CTA 图片只有视觉外观但缺少真实文案、链接或页面背景上下文：只询问影响实现的缺口，补齐前不进入字段确认。
- Fast Path 没有既有 Slug：随字段卡提出一个语义化候选并等待确认；不得自动生成版本号。
- 同时提供多个 HTML 版本：先确认最终版本，不自行选择。
- 提供确认版整页 HTML、当前 Section 边界和 Canonical Module Slug：允许直接进入字段确认卡，不强制另建模块 HTML。
- 整页 HTML 包含多个 Section：一次只实现用户指定的当前 Section，相邻模块仅作为视觉上下文。
- 设计稿已有 Canonical Module Slug：Widget 完整继承；Slug 缺失、不一致或冲突时先确认，不自行增加版本号。
- 目标插件不存在：停止 Widget 实现，转 `elementor-site-initialize`；初始化完成后再继续。
- 无交互模块：只生成 PHP/CSS，不创建空 JS 或 `get_script_depends()`。
- 确认 HTML 含原生 Motion：字段卡只在 `INTERACTION: Native` 中简述已确认行为，不增加 Source、Layer、Runtime 或动画 Controls；只有第三方 Layer 3 追加 Advanced Motion。
- 用户只说“让 Widget 更有动感”但确认 HTML/Map 没有 Motion Intent：返回 `website-ui-architect`，不在 Pipeline 临时设计。

## 快速通道行为不变量

- Fast Path 是单模块实现路径，不承担整页设计，也不批量实现多个 Widget。
- Fast Path 不绕过 Existing Site 的风格继承门禁。
- 不创建独立 HTML、设计方案文档或交付合同；参考解释保留在字段确认卡。
- 用户确认字段卡前不写 PHP/CSS/JS；确认后仍执行注册、命名空间、静态检查和 Elementor 手动验证。
- 实现中暴露出需要重新设计的问题时停止，不用 CSS 小修掩盖结构歧义。
- 同页多个动态 Widget：每个实例独立状态；编辑器重渲染和 DOM 移除时清理或自终止 Observer、Timer、RAF、视频与全局监听。
- Reduced Motion 或无 JavaScript：核心内容和操作保持可用，滚动绑定、自动轮播和自动视频停用。
- 确认 HTML 的 Layer 3 使用 GSAP + ScrollTrigger：字段卡才追加 Advanced Motion，固定依赖版本与 cleanup；插件级只加载一次，编辑器重渲染不残留 Trigger。
- Confirmed HTML 未批准第三方库但 Widget 阶段想临时增加 GSAP：停止并返回 HTML Prototyper确认 Advanced Motion Runtime，不由 Pipeline 换库。
- 当前模块是 Carousel：可继承确认的 Swiper 依赖，但不把轮播自动升级为 Layer 3 或同时叠加 GSAP。
- 普通静态模块、Layer 1/2 或原生 Layer 3：字段卡只写 `INTERACTION: None / Native`，不展示 Runtime、版本、Loading 或 Cleanup 字段。
