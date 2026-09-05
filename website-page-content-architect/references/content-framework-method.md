# Content Framework Method

在使用 `website-page-content-architect` 时始终读取。它定义通用方法，不规定所有页面必须采用同一个模块顺序。

## 1. 两个借鉴视角

本方法吸收但不依赖两个外部 Skill：

- [Landing Page Copy](https://github.com/rampstackco/claude-skills/blob/main/skills/landing-page-copy/SKILL.md)：重点借鉴 Offer、Audience、Objection、Conversion Goal，以及 Hero、早期证据、问题、解决机制、深度证据、异议处理和最终 CTA。
- [StoryBrand Messaging](https://github.com/wondelai/skills/blob/main/storybrand-messaging/SKILL.md)：重点借鉴客户是主角、品牌是向导、问题、计划、行动、失败代价和成功结果。

这些是诊断视角，不是固定七段式。B2B 页面可能需要让采购、工程、质量和管理者在不同深度获得答案，也可能需要把证据放在首屏附近，而不是只放到页面后半段。

## 2. 先定义页面任务

### Page Brief（内部分析）

```text
PAGE NAME / SLUG:
MODE: New Page / Existing Page / Page Family
PAGE TYPE:
AUDIENCE / DECISION ROLES:
ENTRY INTENT:
CURRENT AWARENESS:
OFFER:
PRIMARY CONVERSION:
TRANSITIONAL CONVERSION: none / <action>
UNIQUE PAGE JOB:
RELATED PAGES:
```

一个页面可以服务多个决策角色，但必须有一个主要页面任务和一个主要转化动作。若需要多个同等重要且无关联的目标，优先拆分页面或明确主次。

### Evidence Inventory（内部分析）

按四类整理：

- **Verified**：用户确认或可从权威项目资料验证的事实。
- **Available Asset**：案例、数据、证书、图片、表格、客户语言和技术资料。
- **Evidence Gap**：框架需要但当前不存在的证据。
- **Forbidden / Risky Claim**：不可证明、合规风险或超出业务边界的主张。

研究得到的同行模式属于 `Reference Pattern`，不能升级为企业事实。

证据库存用于控制主张真实性，不用于替代信息架构判断。默认可以规划后续准备的产品、认证、设备、工厂、检测、团队等素材；先判断模块对页面任务是否必要，再记录它需要什么证据。

## 3. 建立访客决策链

用访客问题而不是组件名称组织页面。常见问题包括：

1. 这是什么，是否与我有关？
2. 它能解决我的具体问题吗？
3. 为什么这种解决方式可信或更合适？
4. 能力、范围、限制和流程是什么？
5. 有什么真实证据？
6. 风险、成本、时间或实施顾虑如何处理？
7. 下一步是什么？

删除与主要任务无关的问题，按目标受众的实际决策顺序重排。页面不需要为了“完整”回答所有问题。

模块优先级按决策价值标记：

- **Core**：缺少后页面无法完成主要任务；
- **Recommended**：明显增强匹配、信任或转化，建议规划并由用户决定当前阶段是否启用；
- **Optional**：只在特定业务条件或内容充分时使用。

Case Study、Testimonials、客户 Logo、认证、设备和数据模块不得因为素材尚未整理就自动删除，也不得因为常见就自动加入。它们是否存在取决于目标客户问题和整页闭环。

## 4. 选择叙事策略

可以组合以下策略：

- **Problem-led**：访客已感知痛点但不清楚解决方式。
- **Outcome-led**：目标结果明确，适合在首屏快速匹配需求。
- **Mechanism-led**：方案陌生或容易与替代方案混淆，需要解释工作机制。
- **Proof-led**：高风险、高客单或品牌陌生，需要提前降低不信任。
- **Comparison-led**：访客正在比较供应商、模式或产品。
- **Process-led**：交付路径和协作风险是主要顾虑。
- **Category-led**：聚合页需要帮助用户进入正确子路径。

默认推荐一个策略。只有不同策略会实质改变内容顺序或页面重点时，才先输出两个轻量候选：

```text
STRATEGY NAME:
BEST WHEN:
OPENING LOGIC:
SECTION FLOW:
STRENGTH:
RISK:
RECOMMENDATION:
```

用户确认后只展开一个完整框架。

## 5. 建立 Section Map

每个 Section 必须拥有不同的决策任务。以下字段用于内部检查，不要求全部出现在最终文档：

| Field | Meaning |
| --- | --- |
| Section ID | Scope + 内容任务，不包含视觉 Form |
| Section Job | 它推动哪一步决策 |
| Visitor Question | 访客此时需要什么答案 |
| Key Message | 用户扫读后必须记住的一个信息 |
| Content Points | 必须覆盖的框架级内容 |
| Content Boundary | 不应在本模块展开的内容 |
| Proof | 支撑主张所需的真实证据、已有证据或待准备内容 |
| CTA | 当前决策阶段适合的下一步 |
| Preview / Detail | 是入口摘要还是完整回答 |
| Reuse | 通用、页面族共享或页面专属 |
| Asset Need | 下游需要的真实素材类型 |

企业事实充分时，框架应同时提供长度接近真实页面的 UI-ready 参考文案，让 UI 不必重新猜信息优先级或编写企业事实。该文案是可排版 Draft，不等于最终获准上线的精修文案。

最终文档默认压缩为：

```text
模块任务
页面文案（只保留实际需要的 Heading、Description、List/Data、CTA 等）
内容与素材要求
```

Visitor Question 和 Key Message 合并到模块任务与页面文案；Proof 与 Asset Need 合并为内容与素材要求。Content Boundary、Preview/Detail 和 Reuse 仅在确有跨模块或跨页面风险时出现。

### UI-ready 文案长度基线

- Eyebrow：通常 2–5 个英文词；
- Heading：优先 4–10 个英文词，直接说明主题；
- Description：通常 1–2 句、18–40 个英文词；
- Card title：通常 2–6 个英文词；
- Card description：通常 12–28 个英文词；
- List：优先 3–6 项，每项只表达一个意思；
- CTA：优先 2–5 个英文词。

长度是设计约束，不是机械字数限制。超出时必须有技术解释或转化需要；优先把文章式长段落改成短句、数据、列表或对比。Heading 应一眼可懂，避免用抽象口号或复杂隐喻替代页面信息。

不要为了显示分析完整度，重复输出 Evidence Inventory、Visitor Decision Chain、Section Order Summary、Duplication Review 和 Handoff 中已经出现的相同事实。内部完成检查，最终只呈现影响用户确认的结论。

## 6. Existing Page 审查

逐模块输出：

- `Keep`：任务清晰、证据匹配、顺序合理。
- `Improve`：保留任务但收紧信息、标题或证据。
- `Merge`：与其他模块承担同一决策任务。
- `Move`：内容正确但出现阶段不合理。
- `Remove`：无证据、无独立任务或造成重复。
- `Add`：决策链中存在关键缺口。
- `Unknown`：需要业务事实才能判断。

审查后必须给出一份收口后的新 Section Map，而不只列问题。逐模块诊断可以使用上述标签，但最终框架仍采用轻量字段。

## 7. Page Family 规则

页面族需要额外定义：

```text
SHARED PAGE JOB:
SHARED SECTIONS:
OPTIONAL SECTIONS:
PAGE-SPECIFIC SECTIONS:
SHARED DATA SOURCE:
REQUIRED UNIQUE EVIDENCE:
PREVIEW / DETAIL RELATIONSHIPS:
ANTI-DUPLICATION RULE:
```

同类页面可以共享结构，但不能只替换页面标题和关键词。每页至少需要明确的受众问题、业务边界、差异点或独有证据。

## 8. 最终检查

- 首屏能否快速说明页面与目标访客的关系？
- 信息是否沿着决策推进，而不是反复介绍公司？
- 相邻模块是否回答同一个问题？
- 重要主张是否有证据，证据是否出现在需要它的位置？
- 是否评估了案例、评价、认证、设备等信任模块的决策价值，而不是因素材状态直接删除或堆叠？
- Preview 是否越界成为百科，Detail 是否缺少入口？
- CTA 是否与当前内容和真实下一步一致？
- 模块是否与相关页面争抢同一职责？
- 下游 UI 是否能直接获得真实内容层级、排版长度和素材需求，而不必猜写企业事实？

## 9. 信息不足时的确认

以下未知项会实质改变模块选择或顺序时，先向用户确认：产品/服务范围、目标客户、页面核心任务、主要转化、关键差异、业务边界和相关详情页关系。优先一次提出 1–3 个问题。

普通素材是否已整理通常不是结构阻塞项。涉及案例内容、评价原文、客户身份、认证状态或数据主张时，可以先规划模块及所需内容，但不得生成虚构的访客可见事实。

确认后在简短 UI 移交中锁定页面顺序、Section ID、事实约束、文案状态和未解决缺口。视觉 Form、Surface 和 Canonical Module Slug 留给 `website-ui-architect`。
