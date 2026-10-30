# Page Composition

用于整页优先实现，或把已确认的模块 HTML 组合为唯一整页设计稿。拼接保留 Architect 已确认的主要设计，在浏览器中主动细化尚未锁定的比例、排版与相邻节奏；不机械复制粗图。

## 整页优先

1. 按确认的 Page Content、Design System、Architecture Map/模块方案及可选图片参考生成 `设计稿/pages/<page-slug>.html`。
2. 模块方案决定结构、主次、媒体用途和交互；图片按记录用途提供参考或精确约束。粗图的尺寸、密度和换行不自动锁定，主动在真实页面细化。局部修正仅作用于指定 Section，Composite Preview 只作浏览。
3. 执行 HTML Design Review，再执行 Browser / Implementation QA。
4. 整页确认前只维护一个整页实现源，不默认抽取独立模块文件。
5. 确认后记录每个 Section 的边界和继承的 Canonical Module Slug。

## 模块优先

1. 按 Page Content 的确认顺序读取各模块最终 HTML。
2. 生成或更新唯一整页预览 `设计稿/pages/<page-slug>.html`。
3. 保留每个模块的 Section Job、信息关系、响应式叙事和 Canonical Module Slug。
4. 整页发现 B 类问题时回到对应模块源修正并重新同步，避免模块文件与整页预览漂移。
5. 需要改变核心设计时返回 `website-ui-architect`；不得只在整页文件中静默重设模块。

## 真相源规则

- 同一阶段只指定一个最终 HTML 实现源。
- 若整页与模块文件并存，进入下游前明确哪个文件和哪个 Section 是 current source。
- 不因拼接重复创建 QA 报告、设计文档或平台字段契约。
- 整页确认不授权下游一次实现全部组件；Widget Pipeline 仍按用户选择的单个 Section 处理。
