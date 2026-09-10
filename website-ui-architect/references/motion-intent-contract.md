# Motion Intent Contract

用于把 Active Baseline 的运动性格转化为页面级 Motion Budget 和逐 Section 的 Motion Intent。它决定为什么动、哪里动和如何降级，不锁定 DOM 或实现库。

## Motion Opportunity Check

Motion 是可选增强。UI Architecture 在不改变 Section 设计的前提下检查是否存在能改善反馈、扫读、解释或品牌记忆的机会；没有明确价值时不输出建议。存在机会时，用一行或短列表作为可选建议随 Map 原门禁交给用户，不新增独立确认流程：

```text
Optional Motion Suggestions: <Section ID + Layer + value> / None
```

用户未选择显式 Layer 2/3 时，页面只继承 Design System 的 Layer 1 基础反馈，不建立 Page Motion Budget 或逐 Section Motion Contract。

## Page Motion Budget（按需）

只有用户确认采用显式 Layer 2/3 时，完整页面 Map 才记录：

```text
Motion Level: <Design System value>
Signature Moment: <Section ID + purpose> / None
Sections using content reveal: <Section IDs> / None
Continuous / autoplay media: <Section IDs + reason> / None
Page-level rejected motion:
```

- New Site / Rebuild 默认继承 `Restrained` 的基础反馈性格，不代表必须添加 Layer 2/3。
- Layer 2 建议只覆盖约 30%–50% 的 Section；以内容价值为准，不机械凑比例。
- 首页或核心产品页通常最多一个 Layer 3；普通内页默认 `Signature Moment: None`。
- 多个高动态候选竞争时，只保留最能解释核心价值或建立品牌记忆的一项，其余降为 Layer 1/2 或静态。
- 首页、品牌型 About Us、活动页和专题页只是 Layer 3 候选，不因页面类型自动获得 Signature。普通服务页、产品列表页、联系页和内容页默认没有 Layer 3；核心产品详情页只有在工作原理、流程或产品状态确需联动解释时才进入候选。

## Section Motion Intent（按需）

Motion 是可选增强，不为每个 Section 创建表单。普通静态 Section 省略 Motion 字段；Layer 1 直接继承 Design System 的基础反馈，也不重复记录。只有确有内容显现或 Signature 时追加：

```text
Motion: Layer 2 — <purpose>; <trigger + affected elements>; <mobile / reduced fallback>
```

Layer 3 才展开最小 Signature 合同：

```text
Signature purpose:
Required behavior: timeline / scroll-linked / SVG / media-state-sync
Mobile / reduced-motion fallback:
```

## 决策顺序

```text
Section Job
→ 信息与证据关系
→ 是否需要状态、顺序、承接或解释
→ Motion Purpose
→ Layer 与 Trigger
→ Mobile / Reduced fallback
→ Recommended Layout
```

- 动效不得先于内容关系和构图被选择。
- Layer 1 只增强操作反馈；Hover 不能成为查看关键信息的唯一方式。
- Layer 2 只有在显现顺序帮助扫读、理解或数据表达时采用；同质卡片不默认逐一淡入。
- Layer 3 必须有一句可验证理由，例如“滚动时让四步工艺与对应设备证据同步，减少来回比对”，不能只写“更高级”。
- Layer 3 默认值永远是 `None`，也不是页面完成条件。只有 Layer 2 无法表达确认的解释关系时才采用；UI Architecture 只确认体验需求，不指定 GSAP、Motion 或其他实现库。
- 方向图片只能表达构图与静态视觉，不证明时间、触发、顺序或移动端降级；Motion Intent 以 Map 和必要 Notes 为唯一设计权威。

## 分流

- 全站 Motion Level、Token 或共享禁用规则不成立：返回 `website-design-system-architect`。
- Section 为什么动、强度、Trigger、Signature 或移动端叙事需要改变：留在 `website-ui-architect`。
- 已确认意图的时间、位移、性能、键盘、Touch 或浏览器实现偏差：交给 `website-html-prototyper`。
- Elementor 多实例、编辑器重渲染和运行时清理：交给 `elementor-widget-pipeline`。

## 旧产物兼容

旧版 Map 缺少 Motion 字段时不自动判失败。若用户未要求增强动态，Prototyper 只实现基础 Hover、Focus 和必要状态；若用户反馈“太静态”或新增 Signature，先为受影响页面或 Section 补 Motion Intent，不重开无关内容与视觉门禁。
