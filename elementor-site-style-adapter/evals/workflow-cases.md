# Workflow Cases

结构化状态 fixture 见 [Contract Cases](fixtures/contract-cases.json)。

## Greenfield / Rebuild

1. 新站已有确认 Design System 和 Board：生成 `Mapping Proposed`，覆盖 Colors、Fonts、Layout、Typography、Button、Form；不连接 WordPress。
2. 新站使用 GeneratePress 或子主题：不执行默认视觉冲突扫描；直接依据 Design System 提出 Elementor Site Settings Mapping，Style Authority 仍为 `project-design-system`。
3. 完全重建旧站：Site Mode 为 `rebuild`，不得自动继承旧站视觉。
4. Design System 中 Form 未定义：合同标记 `Open`，不得临时设计一套表单。

## Existing Extension

1. 只有 URL 和真实渲染审计：允许 `Observed Only`，不得声明已识别 Elementor Token。
2. URL、Existing Design System、Board 与清晰 Site Settings 截图齐全：可提出 Mapping，用户确认后状态为 `Confirmed`。
3. 可信 Kit 导出可读取：作为后台证据；不能读取或来源不明时不得提升可信度。
4. 后台 Primary 为蓝色，但真实页面显示为绿色：记录声明值与渲染偏差，再按需检查页面局部设置、Custom CSS 或可访问的主题代码；证据不足时来源保持 `Unknown`。
5. 用户要求新增模块使用独立新风格：记录局部例外，不修改 Existing Design System 或 Site Settings。

## Boundaries

1. 用户要求设计新品牌视觉：转 `website-design-system-architect`。
2. 用户要求实现 Elementor Widget：转 `elementor-widget-pipeline`。
3. 用户要求直接修改线上 Site Settings：说明本 Skill 只生成本地合同，不执行远程写入。
4. 只有截图但缺少 Active Baseline：保持 `Pending Evidence`，先返回 Design System 阶段。
5. 文件存在但无法证明用户确认：不得写成 `Confirmed`。
6. 只有子主题目录和 CSS 文件、没有可观察样式异常：不得生成“潜在冲突”结论，也不得阻塞 Style Mapping。
