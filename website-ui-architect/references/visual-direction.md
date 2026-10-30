# 图片方向稿

用于在 HTML 前低成本确认 Section 构图、视觉语言、媒体比例、密度和相邻节奏。方向图是设计决策工具，不是业务事实或最终实现来源。

## 前置与门禁

- 本文件只在需要图片时读取。粗方向探索可从已明确的页面模块范围和候选 Map 开始；精细方向按已确认方案生成。两者都不能虚构业务事实或跨越内容与设计规范边界。
- 方向稿必须从 Map 的 Module Design Solution、Layout、媒体关系和证据归属编译，不重新猜测设计。
- 单模块可使用同等完整的 Brief；强参考且方向无歧义时可经用户确认跳过生图。
- 生成素材只能是明确占位，不得冒充真实工厂、设备、人员、证书、客户或结果。
- 进入 HTML 要确认当前范围的模块方案；不要求全部 Section 有 Structure Approved 图片。图中错误结构不可采用，但可由用户确认的文字方案修正，无需强制重画。

## 使用目的

默认将粗图用于模块顺序、大致构图、主次与风格沟通，不把尺寸、换行、留白和生成素材当作锁定规范。用户明确要求精确还原时记录其约束；仅参考某种风格时不要继承整个结构。反馈优先变成 Map 中的具体设计决定，只在用户要求或主要构图难以文字判断时再出图。

有图时须执行[方向稿综合评估](module-design-review.md#方向稿综合评估)：把用户意见、实际画面的独立观察和最终采用决定综合起来，不把生图结果自动变成实现方案；没有被用户指出的问题也要主动识别。评估不要求重画图片。

## Segment-first 生成策略（仅适用于已决定生图的范围）

- 完整页面默认只生成 Segment，不生成 AI Overview。
- 按叙事关系划分边界，通常每张覆盖 2–4 个 Section；复杂或高媒体重量 Section 可独占一张，不为减少图片数量压缩模块。
- 每个 Segment 默认只生成一个推荐候选。生图前先向用户说明预计图片数量、Section 范围和文件名；不得无提示追加变体或重试图。
- 默认文件名反映真实范围：

```text
设计稿/directions/<page-slug>/page-segment-01-s1-s4.png
设计稿/directions/<page-slug>/page-segment-02-s5-s8.png
```

- 用户明确需要整页图片预览时，才运行 `scripts/compose_segments.py` 把已确认 Segment 按比例缩放、不裁切地纵向拼接为 `page-composite-preview.png`。拼接不调用生图、不改变顺序，也不成为设计权威。

## Image Generation Prompt Contract

每个 Segment 的提示词必须包含：

```text
Segment ID and covered Sections:
Section job and customer question:
Communication objective and single takeaway:
Confirmed content list:
Information hierarchy and evidence mapping:
Recommended scan path:
Visual narrative:
UI composition and visual anchor:
Layout and rejected layouts:
Visual weight and density:
Media Display Contract:
  Asset count and media role
  Target ratio per image
  Image / text visual weight
  Desktop visible items
  Crop / contain
  Real assets / placeholders / forbidden evidence
Desktop and mobile presentation:
Motion Intent summary (text authority; image does not prove timing or trigger):
Success criteria:
```

- `Confirmed content list` 锁定条目、名称和数量；不得擅自替换服务、产品、证书、数据或 Section Job。
- `Target ratio` 必须与媒体面积和同屏数量一起说明；只写 `4:3` 不算完成。
- 无媒体 Section 明确写 `Media Display Contract: None`，并使用 Map 指定的替代视觉装置。
- 不得自行拆分 KPI、制造卡片、添加图标或改变证据归属。
- 有 Style Board、真实素材或已确认视觉语言参考时可附加，但必须声明其用途是 `Visual Language Reference`、`Structure Reference` 或两者，防止错误结构被继承。
- 方向图片只能表达静态构图、层次与媒体状态，不能确认 Trigger、duration、scroll behavior、视频播放规则或 Reduced Motion。上述内容必须继续来自 Map 的 Motion Intent。

## 双重确认状态

每张方向稿和每个 Section 分别记录两种状态：

### Structure Fidelity

检查 Section 身份、内容类型、条目数量、信息主次、媒体关系、证据归属和扫读路径。状态使用：

```text
Generated
Structure Approved
Needs Section Correction
Rejected / Reference Only
Final
```

### Visual Language Approval

检查配色、字体气质、留白、卡片处理、图片风格、密度和整体设计感。状态使用：

```text
Generated
Visual Language Approved
Rejected / Reference Only
Final
```

- 用户可以认可视觉语言而拒绝结构；不得把“看起来满意”自动解释为 Section 结构已确认。
- 错换整个模块、改变条目类型或数量、虚构证据、改变信息关系属于 A 类 Structure Failure。
- 生成文字拼写错误、轻微对齐误差和不影响判断的近似比例属于 C 类噪声；真实实现仍服从 Page Content 与 Map。

## 局部修正协议

发现 A 类问题时：

1. 停止继续调用生图工具，报告受影响 Section、可保留部分和建议修正方式。
2. 等待用户确认修正。
3. 默认先在 Map/Brief 修正受影响设计并确认；若不再需要图片即可直接 HTML。只有用户要求看图或主要构图仍难判断时，才生成 `section-<section-id>-direction-v<nn>.png`，不重生其他正确 Section。
4. 只有该 Section 必须依赖相邻上下文才能判断时，才在用户明确同意后重生原 Segment。
5. 未采用候选不得列入最终视觉输入；若其视觉语言被认可，只作为 `Visual Language Reference` 记录。

局部权威顺序：

```text
Page Content / Design System
→ Architecture Map
→ 已确认 Section Correction
→ 原 Segment
→ 可选 Composite Preview
```

当存在 Correction、B 类修正、被保留的视觉语言参考或跨会话交接时，`visual-direction-notes.md` 至少记录：

```text
FINAL SEGMENT SET:
SECTION STRUCTURE STATUS:
VISUAL LANGUAGE SOURCE:
SECTION CORRECTION SCOPE:
REJECTED / REFERENCE-ONLY CANDIDATES:
HTML VISUAL INPUT SET:
HTML CORRECTION NOTES:
```

只有当前页面已确认显式 Layer 2/3 时，才附加一行 `MOTION CONTEXT: <Map/Notes source>`；普通页面与 Layer 1 省略。

失败候选可以说明“视觉语言被采用”，但不得出现在 `FINAL SEGMENT SET` 或 `HTML VISUAL INPUT SET`。

## 密度、比例与停止条件

- Hero 与核心证据模块获得合理高度；不为塞入一张画布压小文字或把普通图片改成窄横条。
- 方向稿只需判断构图、主次、媒体方向、Surface、密度和相邻节奏；精确比例、换行、裁切和断点由 HTML Prototyper 修正。
- Structure Fidelity 全部通过、视觉语言已被用户确认、A 类问题归零时停止生图。
- B 类实现细节写入 HTML Correction Notes；C 类噪声接受。不得为了美化、拼写或像素级比例继续生成变体。

## Visual Direction Notes

存在 Correction、B 类修正、视觉语言参考与结构状态不一致，或需要跨会话交接时，生成 `visual-direction-notes.md`，至少记录：

```text
FINAL SEGMENT SET:
SECTION STRUCTURE STATUS:
VISUAL LANGUAGE REFERENCE:
SECTION CORRECTIONS AND COVERAGE:
REJECTED / REFERENCE-ONLY CANDIDATES:
HTML CORRECTION NOTES:
FINAL VISUAL INPUTS FOR HTML:
```

只有当前页面已确认显式 Layer 2/3 时，才附加一行 `MOTION CONTEXT: <Map/Notes source>`。

同一文件不得同时出现在 `FINAL VISUAL INPUTS` 与 `REJECTED`。可选 Composite 只能列为 preview，不能列入权威输入。

## 确认与交付

交付当前确认方案、锁定决定与 HTML 可细化范围；有图片时才列适用 Segment/Correction、图片用途和双重审查状态，不把失败候选作为结构依据。模块方案确认后即可生成 Canonical Module Slug 并在原目标内继续 Prototyper，不以再次生图为条件。
