# 验证清单

## 自动或静态检查

- 对新增和修改的 PHP 执行 `php -l`。
- 有 JS 时执行语法检查；无交互时确认没有 JS 文件、script handle 和 `get_script_depends()`。
- 普通模块和原生 Motion 不应出现 Runtime 字段。有 `ADVANCED MOTION` 时才核对 Library/version、Capability、Loading/cleanup 和 Mobile/reduced fallback 均来自确认 HTML/Handoff，没有新增动画 Controls、插件或临时改动目的。
- 核对入口中的资源 handle、文件路径、`require_once`、类名和注册语句。
- Confirmed HTML Path 核对设计稿 basename；Fast Path 核对已确认字段卡。两条路径都要确保 `MODULE SLUG`、Widget `get_name()`、PHP/CSS/可选 JS 文件名一致。
- 核对 Widget 的 `get_name()`、Elementor `element_ready` hook 与 JS 选择器一致。
- 核对项目分类、marker class、角标 CSS 和 `get_keywords()` 与 `elementor-project.json` 一致，且编辑器 CSS 不在网站前台加载。
- 核对 `siteStyle`、Confirmed Style Contract、字段卡与实现中的 inherit、Elementor Variables 和 fallbacks 一致。
- 检查 CSS 只使用模块命名空间，没有通用模板遗留的固定背景、padding 或全局选择器。
- 确认没有修改 Elementor Site Settings、主题 `functions.php`、主题资源、模板或全局 CSS。

## Elementor 手动验证

1. 启用目标插件，确认 Widget 只出现在项目专属分类，卡片右上角显示统一角标；分别用 `get_title()`、`custom` 和模块关键词搜索，确认搜索结果仍显示角标。
2. 拖入页面：Confirmed HTML Path 比较确认版 HTML；Fast Path 比较确认的参考解释与现有页面上下文。检查结构、内容顺序、视觉重点、背景、padding、Typography 和响应式降级。
3. 修改每一个 Content Control，确认前台内容正确更新。
4. 验证空值、长标题、长正文、无图片，以及 Repeater 的 0、1、默认数量和较多条目（仅适用时）。
5. 在桌面、平板和移动端确认无裁切或意外横向滚动。
6. 同页放入多个实例，确认样式和状态互不串台。
7. 有交互时，在前台和 Elementor 编辑器重新渲染后验证鼠标、键盘、Touch、ARIA 状态和 reduced-motion。
8. 同一 Widget 重复编辑、删除、重新拖入并切换预览，确认 Observer、监听、Timer、RAF、GSAP context/timeline/ScrollTrigger 和视频不会重复运行或继续占用；无可靠销毁 Hook 的任务会在根节点断开后自终止。
9. 存在 Advanced Motion 且使用 GSAP 时，确认依赖只由插件级 handle 加载一次，多个 Widget 不重复注册；未使用 ScrollTrigger 时不加载它。
10. 禁用 JavaScript 时核心内容仍可见；移动端按合同简化/移除，视频离屏暂停且非当前视频不播放。
11. 确认浏览器控制台无新增错误。
12. 新站确认项目 Global Style 生效；老站确认 Widget 在代表页面继承现有字体、颜色、按钮与 Surface，且没有改变其他模块。

## 交付结果

- 返回创建和修改的文件清单。
- 返回已通过的静态检查及无法在当前环境执行的检查。
- 给出上述 Elementor 手动验证步骤，不声称未实际执行的浏览器验证已经通过。
