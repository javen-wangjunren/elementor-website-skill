# Research Routing Cases

用于人工或独立评估 `website-design-system-architect` 的研究路由、产物范围和门禁。评估真实行为，不要求逐字匹配措辞。

## New Site

1. **触发研究且无 Brief**：返回总控并路由 `website-reference-researcher`；本 Skill 不自行建立候选池。
2. **已有适用 Brief**：只消费 Art Direction、Visual System 与迁移边界，不重复浏览原始案例。
3. **普通轻量页面且方向清晰**：允许跳过 Researcher，直接提出符合项目事实的文字方向。
4. **用户提供 URL**：传给 Researcher 判断为种子或最终名单；本 Skill 不直接把 URL 样式写成项目规则。
5. **公司事实不足**：行业、目标客户或主要转化无法判断时，返回总控 Company Intake。
6. **DESIGN.md 输入**：没有真实页面观察与 Visual Reference Brief 时不能直接成为项目规则；即使进入 Brief 也只作辅助证据。
7. **方向门禁**：先输出 2–3 个简短文字方向，不生成 HTML；用户未选择时不整理临时规则草稿。
8. **Site Mode**：完全新站记录 `greenfield`；从零重建旧站记录 `rebuild`，两者均以 Project Design System 为视觉权威。
9. **主题上下文**：GeneratePress、父主题或子主题的存在不触发视觉冲突扫描，也不改变 Project Design System 的权威；真实异常留给后续专项诊断。
10. **历史行业文件**：`industry-ui-research.md` 不再作为跨阶段权威，也不要求强制迁移。

## Existing Site

1. 直接采集现站代表页面证据，不触发同行候选池。
2. 桌面、移动和关键交互使用共享浏览器协议，DOM/CSS 只抽查关键规则。
3. 有多个改进方向时先给文字方向供用户选择，最后只生成一个 Proposed Baseline Board。
4. 用户要求保持老站风格时必须有可访问 URL 或足量替代视觉证据；只有文本抓取不能完成风格提炼。
5. 最终渲染、推测来源和需要后台验证的 Elementor Token 必须分开记录。
6. 只有 URL 时仍可完成 Existing Design System；不得声称识别了后台 Global Token，平台映射交给 Style Adapter。

## Board and Design System Gates

1. 未确认文字方向时不生成 Board；确认后只生成一个方向。
2. Board 只展示 Color、Typography、Grid、Spacing、Shape、Button、Link、Chip、Icon、Card、List、Tabs、Accordion、Table；只有明确确认运动方向时才附加紧凑 Motion Preview Strip。不出现 Media、Responsive、Form、Header、Footer、Hero、完整 Gallery、CTA Section、页面 Signature 或其他业务模块。
3. Board 不出现方向切换 Tabs、重复 CSS 系统或多套组件副本。
4. 公司名称、Logo 和品牌来自已确认输入，不用主题名、仓库名或模板名代替公司。
5. 不虚构质量数据、认证、交期、客户数量、VR 参观或工厂能力。
6. 用户未确认 Board 时，不生成 `docs/design-system/design-system.md`。
7. 正式文件标记 `Status: Active Baseline`，保留 `Locked / Flexible / Open`。
8. Board 使用单文件 HTML，只用于用户查看风格；设计师自查可使用用户整页截图或一次 Ego Browser 桌面整页渲染，但不执行窄屏、响应式、兼容性或生产实现 QA，也不输出验收等级。
9. 对用户统一称为 Design Board，`style-board.html` 只作为兼容文件名。
10. 默认 Button 有柔和圆角和完整状态；Card 为三张并排、4:3 图片与圆角；List 仅 Bullet、Numbered、Semantic Icon；Table 有完整边框、内部单元格分隔、圆角和品牌主色派生表头。
11. 完整 Gallery 业务模块被排除，但三张并排 Gallery Cards 是允许且推荐的 Card 组件示例。

## Designer Review

1. Board 交付前执行设计师自查。用户提供完整截图时直接基于截图；否则使用 Ego Browser 桌面整页证据；浏览器不可用时降级为 HTML/CSS 静态检查并披露限制。
2. 自查只判断专业度、统一性、组件覆盖和对后续模块设计的指导能力，不等同实现 QA。
3. 发现卡片过大、强调色竞争、黑色重表头、方框序号、缺失状态或范围越界等明确问题时，只自动修正一轮。
4. 一轮后仍涉及品牌气质或业务优先级时停止自动调整，把具体选择交给用户。
5. 交付表述为“已完成设计自查”，不产生任何验收等级。
6. Board 经用户确认并生成 Active Baseline 后，执行第二次设计师自查：检查追溯性、规则一致性、完整的 `Locked / Flexible / Open` 和已否决模式回退。
7. 未在 Board 确认的 Media、Responsive、Accessibility 和页面级 Motion 细节在正式系统中保持 `Flexible` 或 `Open`；基础组件状态或可选 Preview Strip 只确认基础 Motion Foundation。
8. 正式系统不包含页面布局、业务模块、Elementor 控件、PHP 类名或 CSS Selector，UI Architect 可直接据此设计模块。
9. 正式系统包含 Site Mode 与 Style Authority Intent，但不包含 Elementor Site Settings 映射。

## Brand Override

1. 有明确品牌规范时，品牌色、字体与形状覆盖 B2B 默认示例值。
2. 覆盖后仍保留真实网站结构、统一状态、可复用组件和单一区域单一实心强调等原则。
3. 不因参考资产使用工程蓝，就把深海军蓝或工程蓝写成所有项目的固定主色。

## Internal Status

1. 本 Skill 不创建专项状态文件。
2. 由总控调度时，在关键门禁变化后返回最小状态信号，由总控更新唯一的 `docs/workflow-status.md`。
3. 独立调用本 Skill 时不强制创建总控状态文件；不能因文件存在自行判断已确认。
4. New Site 顾问按默认条件调用；明确方向或轻量请求可以跳过。Existing Site 在改版、视觉冲突，或老站扩展要求保持风格但尚无确认基线时调用。顾问不可用不阻塞流程。

## Controlled Evolution

输入：页面实践发现新设计需求。

预期：

- 单页面或单模块特例留在 UI 阶段；
- 跨页面基础规则变更先说明影响范围，经用户确认后更新 Active Baseline；
- 只有可见基础规则、基础组件或媒体规则明显变化时才同步 Board。

## Motion Foundation

1. New Site / Rebuild 未提动效偏好时，Active Baseline 默认 `Motion Level: Restrained`，但不自动为全部 Section 指定 Reveal。
2. 默认 Board 不单独增加 Motion Preview Strip；Layer 1 由基础组件状态表达。用户明确确认运动方向时，可选 Strip 只包含 Layer 1、Layer 2 和状态切换，并支持 Reduced Motion，不包含视频或页面 Signature。
3. Existing Site 只有静态截图时，具体 Motion 标为 `Unknown / Open`，不凭层叠构图推断视差或自动轮播。
4. 用户要求更活跃但仍为企业站时，先调整 Motion Level/Token 的跨页面基线；具体 Section 和 Signature 仍交给 UI Architect。
5. 旧 Design System 缺少 Motion Foundation 时不阻塞既有 HTML；用户要求升级或页面重设计时再受控补齐。

## Degradation

1. Ego Browser 可用时优先使用；不可用时按协议降级并披露限制。
2. 网站受登录、地区或付费限制时请求用户截图或接管，不伪造视觉观察。
3. 只有内容抓取时不得宣布完整视觉规则。
4. 研究截图只作为内部证据，不作为最终网站资产。
