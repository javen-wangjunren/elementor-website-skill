# 路由用例

## 应触发

- “这是确认版 HTML，帮我做成 Elementor Widget。”
- “在现有组件插件里新增一个可拖拽模块。”
- “把这个已经确认的主题内模块迁移成插件式 Elementor Widget。”
- “先帮我分析这个设计稿最少需要哪些 Elementor 字段，我确认后再实现。”
- “这个模块有 Tab 交互，做成支持 Elementor 编辑器和多实例的 Widget。”

## 不应触发

- “这个模块应该怎么设计？”或“给我三个布局方案。” → `website-ui-architect`
- “网站还没有自定义 Widget 插件，帮我初始化整套目录和配置。” → `elementor-site-initialize`
- “旧 Widget 在面板里搜不到、白屏或点击无响应。” → 故障排查流程，而不是本 Skill
- “把插件上传到服务器并清缓存。” → 发布流程
- “修改主题 functions.php、页面模板或全站字体。” → 主题或站点级任务
- 纯文案、运营策略或与 Elementor 无关的后台逻辑

## 边界用例

- 只有截图/Figma且方向未确认：转 `website-ui-architect`。
- 只有截图/Figma但用户明确确认可直接实现：允许进入字段确认卡。
- 同时提供多个 HTML 版本：先确认最终版本，不自行选择。
- 提供确认版整页 HTML、当前 Section 边界和 Canonical Module Slug：允许直接进入字段确认卡，不强制另建模块 HTML。
- 整页 HTML 包含多个 Section：一次只实现用户指定的当前 Section，相邻模块仅作为视觉上下文。
- 设计稿已有 Canonical Module Slug：Widget 完整继承；Slug 缺失、不一致或冲突时先确认，不自行增加版本号。
- 目标插件不存在：停止 Widget 实现，转 `elementor-site-initialize`；初始化完成后再继续。
- 无交互模块：只生成 PHP/CSS，不创建空 JS 或 `get_script_depends()`。
