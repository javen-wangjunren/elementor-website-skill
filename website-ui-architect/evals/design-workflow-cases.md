# Design Workflow Evaluation Cases

用于验证设计方案、媒体契约、生图与视觉交接；HTML 实现行为已迁移到 `website-html-prototyper`。

## 输入、Map 与方向图

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 1 | 六模块页面已有 Page Content 和 Design System | 先完成 Map 与视觉方向，不编写 HTML。 |
| 2 | 用户提供参考图 | 说明保留结构与品牌转换，默认一个推荐方向。 |
| 3 | Hero、工厂等高视觉模块方向不明 | 按需生成模块方向图并等待确认。 |
| 7 | 工厂、质检、证书或发货只有文字 | 报告关键素材缺口，不用图标或生成图冒充真实证据。 |
| 8 | Design System、页面任务或真实内容不足 | 返回对应上游，不用通用模板填补。 |
| 14 | 十模块首页准备生成方向稿 | 先完成每个 Section 的 Module Design Solution、Map 与评审；Map 未确认不生图。 |
| 15 | 十个 Section 的 Map 已确认 | 按叙事生成覆盖全部 Section 的 Segment Set；默认不生成 AI Overview。 |
| 16 | 常规产品、材料、Gallery、设备和证书 | 使用媒体契约建议比例，并允许有理由地调整。 |
| 17 | 方形产品、竖向设备或细长证书不适合默认比例 | Map 记录源比例、建议比例、裁切方式与桌面/移动影响。 |
| 18 | 真实证书或设备无法合理裁切 | 优先 contain 或留白；仍不成立时调整 Layout 并解释。 |
| 19 | Section 被压缩、比例严重失真或出现虚构证据 | 判为 A 类并停止生图；先报告，用户确认后只生成对应 Section Correction。 |
| 20 | 五个 Section 的完整页 | 按叙事生成一个或多个 Segment；复杂 Section 可独占一张，不补 Overview。 |
| 21 | 只设计一个 Brief 明确的 Hero | 使用单模块 Brief，不强制整页 Map。 |
| 22 | Segment Set 已覆盖全部 Section 且结构和视觉均确认 | 停止生图，把实现精度交给 Prototyper。 |
| 23 | 方向图比例有轻微生成偏差但不影响判断 | 归为 C 类，不为像素精度重生。 |
| 24 | 准备为所有 Section 批量追加独立模块图 | 识别为过度执行；只有构图仍不清或用户要求时新增。 |

## 模块设计与媒体回归

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 33 | Map 字段完整但未检查任务、证据与优先级 | 用户确认前执行 Module Solution Qualification。 |
| 34 | 五张同级工厂图被设计为永久一大四小 | 识别虚假层级；改为等权 Grid、Carousel 或可切换同等大图的 Viewer。 |
| 35 | 辅助型服务 CTA 被评价为“单调” | 保持紧凑表达，不强制加背景图、卡片或复杂动效。 |
| 36 | 核心产品只用通用图 + 文字 List | 识别依赖图片时改为等权 Gallery，不把 Hover 当唯一查看方式。 |
| 37 | 细长真实证书被压成小拼贴 | 保持文件形态与可辨认尺寸，支持大图或 Lightbox。 |
| 38 | 同时存在错误主次、标题换行、近似比例和生成文字瑕疵 | 分为 A、B、C；A 先报告，获准后只补受影响 Section。 |
| 39 | 方向图精准还原 Map 的错误一大四小 | 仍不合格；同时检查 Map Fidelity 与 Module/Media Fitness。 |
| 40 | 只有第二段 Factory 结构错误 | 更新对应 Map，停止生图；用户确认后只生成 Factory Section Correction。 |
| 41 | 9 种 PCB、9 张可用 `4:3` 图 | 推荐图片主导等权 Gallery，记录视觉占比与桌面同屏数量。 |
| 42 | 9 种 PCB 只有低质量小图 | 可文字主导，但必须记录素材限制、最小尺寸和后续要求。 |
| 43 | 同组素材混有横、方、竖图 | 明确统一比例 + contain、分组或混用策略，不静默裁切。 |
| 44 | 5 张等权设备图 | 不形成永久一大四小。 |
| 45 | Map 写 `4:3`，方向图却把产品压成图标 | 判为 A 类 Media Fitness；先报告，再按确认生成该 Section Correction。 |
| 46 | 媒体布局有多个合理方向 | Product Design 可用时可 `ideate`；不可用时内部比较，不阻塞。 |
| 47 | Map 确认后真实素材审计发现比例冲突 | 只重新打开受影响 Section。 |
| 48 | S7 只有“四步横排 + 三个数据 + CTA” | 判定只有 Layout，在生图前补 Module Design Solution。 |
| 49 | S7 的 MOQ、报价、周期和检测证据绑定到节点 | 保持单一生产路径，不另建重复 KPI 行。 |
| 50 | 无图片流程模块 | 定义路径推进、数字层级或其他替代视觉装置。 |
| 51 | 信息很少的辅助模块 | 允许紧凑方案，但仍说明主次与表达理由。 |
| 52 | 从 Map 编译 Segment Prompt | 所有关键决定可追溯，无需临场决定卡片、证据或主次。 |
| 53 | 方向图还原 Layout 但丢失叙事或证据关系 | 判为 A 类 Solution Fidelity；只修受影响 Section，不自动重生整段。 |
| 54 | 相邻 Section 重复 KPI 或 CTA | 在 Map 阶段删除、合并、迁移或弱化。 |
| 55 | 完整页面有多个普通 Section | 方案紧凑写在同一 Map，不默认生成独立模块文档。 |
| 56 | 一个模块存在多个合理设计概念 | 比较信息策略、视觉叙事或 UI Composition，选定后回写 Map。 |

## 拆分与交接回归

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 67 | 完整页面 Map 已确认，但 Segment Set 未覆盖或未确认全部 Section | 必须先补齐结构确认，不允许交给 Prototyper；Overview 不是门禁。 |
| 68 | 简单模块有强参考、完整方案且构图无歧义 | 经用户确认可跳过单独生图，仍生成 Canonical Module Slug。 |
| 69 | 用户最初要求端到端页面与 HTML | 视觉确认后同一任务切换到 `website-html-prototyper`，不要求重新调用。 |

## Segment、确认状态与产物控制

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 70 | 八个 Section 可自然分成 S1–S4 与 S5–S8 | 生图前声明将生成两张及其文件名；默认实际只生成两张。 |
| 71 | 用户需要整页图片预览 | 只拼接已确认 Segment 为 `page-composite-preview.png`，不得调用生图工具。 |
| 72 | 用户认可某张图的设计感，但其中 S3/S4 被错换 | 记录 `Visual Language Approved / Structure Rejected`，不得进入 HTML。 |
| 73 | 一个 Segment 中只有 S3 错误 | 先报告并停止；获准后生成 `section-s3-<slug>-direction-v2.png`，保留原 Segment 其他部分。 |
| 74 | Section 无法脱离相邻上下文判断 | 解释原因并取得用户同意后才可重生原 Segment。 |
| 75 | 重试生成了结构漂移的新候选 | 标记 `Rejected / Reference Only`，不得替换更可靠的已选输入。 |
| 76 | 候选有拼写错误但结构、数量和证据归属正确 | 作为 C 类记录，使用真实 Page Content 进入 HTML，不继续生图。 |
| 77 | 交付视觉包 | Notes 列出最终 Segment、Section 状态、Correction 覆盖和唯一 HTML 输入集合，不列失败候选为 confirmed source。 |

## 跨行业参考接口

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 78 | 当前页面已有适用 Visual Reference Brief | 只消费 Page / Module Architecture、媒体策略与响应式迁移原则，不重复浏览原始案例。 |
| 79 | 同行业无合理模块范式且当前无 Brief | 返回总控并路由 `website-reference-researcher`，按当前页面或模块 Scope 研究。 |
| 80 | Brief 已研究站点级规律，单模块问题可由其回答 | 复用现有 Brief，不为同一问题创建重复模块研究。 |
| 81 | 外站模块结构看起来适用 | 仍用 Section Job、真实内容、Design System、素材能力和认知成本验证；不得直接复制完整模块。 |
| 82 | Brief 中包含颜色与字体观察 | UI Architect 不把它们当视觉权威；颜色和排版只服从已确认 Design System。 |

## Motion Contract 回归

| ID | 场景 | 必须行为 |
| --- | --- | --- |
| 83 | New Site / Rebuild 未特别说明动效 | 继承 Design System 的 `Restrained`，先写 Page Motion Budget；普通 Section 默认 Motion None，不自动全页淡入。 |
| 84 | 用户说页面太静态、希望增加一点活力 | 只为受影响页面/Section补 Motion Intent；不让 Prototyper 临时创造动画，也不重开无关内容门禁。 |
| 85 | 首页有三个高动态候选 | 选择最多一个能解释核心价值或建立品牌记忆的 Signature，其余降级或移除，并记录 Page-level rejected motion。 |
| 86 | 普通内页没有动态叙事需要 | `Signature Moment: None`，只保留基础交互 Feedback。 |
| 87 | 方向图看起来像视差或视频 | 不把静态图片当作 Trigger、时间和滚动行为证据；以 Map Motion Intent 为权威。 |
| 88 | Layer 2 Reveal 覆盖全部 Section | Motion Fitness 不通过；只保留有顺序、叙事或数据表达价值的 Section，约 30%–50% 只是校准目标。 |
| 89 | Desktop Signature 在移动端成本过高 | Map 明确 Simplify 或 Remove，并提供保留内容和 CTA 的静态 fallback。 |
| 90 | 旧版确认 Map 没有 Motion 字段 | 不阻塞既有流程；未要求增强时只交接基础 Hover、Focus 和必要状态。 |

## 覆盖核对

原设计用例 `1–3、7–8、14–24、33–56` 均保留；原 HTML 用例 `4–6、9–13、25–32` 已迁移到 Prototyper。两个 Skill 的职责用例不得重复定义所有权。
