# GSAP Layer 3 Runtime

只在已确认 Layer 3 且 Advanced Motion Runtime 明确选择 `GSAP` 时读取。它是按需路由与生命周期清单，不是 GSAP 教程，也不授权安装 Skill、依赖或插件。

## 官方资料按需路由

官方来源：`https://github.com/greensock/gsap-skills`

- Simple tween：只查 `skills/gsap-core`。
- Multi-stage choreography：查 `skills/gsap-core` 与 `skills/gsap-timeline`。
- Scroll-linked Signature：再查 `skills/gsap-scrolltrigger`。
- Performance-sensitive：再查 `skills/gsap-performance`。

只读取当前实现需要的部分，不安装四个顶层 Skill，不读取 React/Vue/Svelte 或无关插件资料。可访问官方来源时以当次内容为 API 依据；不可访问时继续遵守本地合同，但不得声称已核对最新官方资料。

## 最小实现合同

- GSAP 与插件在当前页面或项目运行时只注册一次；每个模块根节点建立独立 scope，禁止无范围的全局选择器。
- 每个实例保存自己的 context、timeline、ScrollTrigger 与 cleanup；重初始化、DOM 移除或页面生命周期结束时 `revert/kill`。
- Core/Timeline 是默认上限；只有确认的滚动联动才加载 ScrollTrigger，其他插件必须说明必要性并获得确认。
- 离屏、页面隐藏、移动端降级或 `prefers-reduced-motion: reduce` 时不建立或停止滚动绑定和连续任务。
- 不劫持滚轮，不使用无业务理由的长距离 Pin，不让动画推迟核心文案、证据或 CTA。
- HTML 原型记录依赖来源与版本；Elementor/WordPress 的统一注册、实例重渲染和销毁由下游实现合同继续约束。
