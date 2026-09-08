# Design Exploration

方向模糊、没有强参考或用户希望比较方案时使用。它只帮助当前模块选择方向，不创建额外报告。

## 内部判断

先按以下顺序判断：

```text
模块任务 → 客户问题 → 沟通策略 → 信息层级 → 视觉叙事 → UI Composition → Layout
```

根据真实内容关系选择表达方式，例如流程强调先后与变化，规格强调比较，工厂能力强调现场与尺度，证书强调文件可信度。不能从条目数量直接跳到 Card Grid。

用户认为结果“简单、普通、怪异”时，先检查 Architecture Map 是否只有 Layout 而缺少合格的 Module Design Solution。缺失时先补齐客户问题、信息关联、视觉叙事、UI Composition 和成功标准，不直接重生图片。

## Visual Reference Brief 路由

若问题不是方案写得不完整，而是同行缺少高质量范式、关键模块没有合理表达方式，或用户明确要求跨行业参考，则先检查当前 Scope 的 Visual Reference Brief：

- 有适用 Brief：只读取 `Page / Module Architecture`、媒体策略、响应式迁移原则和禁止照搬内容，不重新浏览原站。
- 无适用 Brief：返回总控，路由 `website-reference-researcher` 生成站点级、页面级或当前模块级简报，再恢复本 Skill。
- 用户已给出最终 URL 清单：Researcher 可直接研究，不重复候选确认。
- 普通模块任务明确、内部已有可靠范式：跳过研究，继续内部候选方向。

Brief 只回答“哪些构图原理值得迁移”，不直接指定本项目 Layout。最终方案仍须通过 Section Job、真实内容、Design System、媒体能力与认知成本验证；不得照搬外站 DOM、完整模块、品牌素材或响应式行为。

## 候选方向

内部比较 2–3 个真实不同的方向，差异应来自沟通策略、信息顺序、视觉叙事、UI Composition、视觉焦点、媒体比例、浏览方式或移动端组织，而不只是换 Layout、颜色、圆角和阴影。

向用户只展示：

```text
推荐方向：
推荐原因：
客户问题与单一记忆点：
视觉叙事与 UI Composition：
参考与转化方式：
主要 Layout：
移动端：
需要确认：
```

AI 推荐一个方向，并简短说明第二选择在什么条件下更合适。用户确认前不生成多份高保真 HTML。

## Product Design 可选探索器

满足任一条件时，可调用已安装的 Product Design `ideate`，但不得把它写成必需依赖：

```text
存在两种以上合理的信息策略、视觉叙事、UI Composition 或媒体浏览方式
或用户明确认为结果简单、普通或怪异
或用户要求比较视觉方案
```

- 调用前提供当前 Section Brief，并附加可访问的真实截图、Style Board、Design System 与素材样例；不得声称附加了未实际传入的文件。
- 遵守 Product Design 自身流程，生成三个在结构、媒体尺寸、浏览方式或信息层级上真正不同的方向，并等待用户选择。
- 用户选定后，把选定的沟通策略、视觉叙事、UI Composition、Media Display Contract、推荐 Layout、移动端方式和 Rejected treatments 回写 Architecture Map，不默认新建独立模块方案文档，再返回本 Skill 的视觉方向流程。
- Product Design 未安装、不可访问或当前没有足够视觉输入时，退回本文件的内部 2–3 个候选方向；不阻塞本 Skill。
- 设计方案明确或只有一个合理视觉叙事的模块不调用 Product Design。文字主导不自动等于无需设计方案。

## 图片方向

Hero、媒体主导模块或文字不足以判断构图时读取 [图片方向稿](visual-direction.md)。已有明确参考或简单模块可以直接进入推荐方向确认。

## 内部质量底线

候选必须符合 Design System、真实内容和素材边界，并保证信息层级、可读性、响应式和基础可访问性。卡片必须代表真实分组；无法满足底线的方向不交给用户。
