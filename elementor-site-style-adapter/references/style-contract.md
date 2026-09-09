# Elementor Style Contract

仅在生成或审查 `docs/elementor/elementor-style-contract.md` 时读取。

## 合同结构

```markdown
# Elementor Style Contract

Status: Pending Evidence | Observed Only | Mapping Proposed | Confirmed
Site Mode: greenfield | rebuild | existing-extension
Style Authority: project-design-system | existing-site
Policy: initialize-global-style | inherit-existing
Confirmed By:
Confirmed Date:

## Confirmed Inputs
## Evidence Confidence
## Style Ownership
## Elementor Site Settings Mapping
## Global Colors Mapping
## Global Fonts Mapping
## Elementor Theme Style Mapping
### Typography
### Buttons
### Form Fields
### Images
## Layout Mapping
## Widget Inheritance Contract
## Allowed Local Overrides
## Design System Fallbacks
## Exceptions and Unknowns
## Manual Elementor Setup Checklist
## Validation Checklist
```

## 证据与权威

### Greenfield / Rebuild

```text
用户最新确认
→ Active Baseline Design System
→ 已确认 Design Board
→ Elementor Style Contract
→ Elementor Site Settings
```

合同列出应由人工在 Elementor Site Settings 中配置或检查的项目，但不执行设置。主题与子主题不是默认视觉证据，不需要在映射前扫描，也不得反向成为项目 Design System。

### Existing Extension

```text
用户明确保留决定
→ Elementor 后台证据
→ 已确认 Existing Design System / Board
→ 浏览器真实渲染验证
```

Elementor Site Settings、可信 Kit 或等价后台证据用于识别 Global Token 与继承入口；浏览器结果用于确认这些设置的实际表现。两者不一致时不得静默改写，记录偏差和验证缺口；只有出现这种可观察偏差时才进入覆盖来源诊断。

## Elementor Site Settings Mapping

每个关键规则至少记录：

```text
Rule / Role:
Observed Value:
Declared Value:
Elementor Setting / Token:
Evidence:
Confidence: confirmed / probable / unknown
Widget Action: inherit / Elementor variable + fallback / approved local override / open
```

不得仅凭公开 URL 写出 Elementor Global Token 名称或 ID。Site Settings 截图必须能看清角色和值；Kit 只在来源可信且内容可读取时作为后台证据。

## 异常驱动诊断

- 不以 GeneratePress、父主题或子主题的存在推断冲突。
- 不在初始化或正常映射阶段扫描主题 CSS 来证明最终视觉来源。
- 只有 Site Settings 声明值与真实渲染明显不一致时，才记录页面局部设置、Custom CSS、子主题 CSS 或其他覆盖层为待检查对象。
- 能访问的证据不足时写 `Unknown`，不得把猜测写成已定位的覆盖来源。
- 异常诊断只解释偏差，不改变 Design System 或 Elementor Site Settings 的既定权威。

## 映射规则

- Global Colors：优先映射 Primary、Secondary、Text、Accent，再映射确有复用价值的 Surface、Muted、Border、Success、Warning、Error。
- Global Fonts：映射 Primary/Heading、Secondary、Text/Body、Accent/Label；不要为每个字号创建一个字体 Token。
- Elementor Theme Style：只包含确认的 Typography、Button、Form、Image fallback，不把业务模块写入全局规则。
- Layout：记录 Content Width、Container Padding、Widget Gap 和已确认断点；未知项保持 `Open`。
- Form 在 Design System 未定义时保持 `Open` 或继承现站，不临时发明。
- Lightbox、Page Transition、Background 等仅在项目明确需要时加入人工清单。
- Motion Token、Section Motion Intent 和 Signature 不映射为 Elementor Global Style。合同只注明它们由 Design System、UI Map、确认 HTML 与 Widget Pipeline 继续传递；若 Elementor 没有对应全局能力，不创建伪 Global Token。

## Widget Inheritance Contract

至少定义：

- 字体、颜色、按钮、Surface、Border 和 Layout 分别继承哪个确认角色；
- 可直接继承的属性是否使用 `inherit`；
- 固定 CSS 可使用哪些已确认 Elementor CSS Variables；
- 每个 fallback 对应哪个 Design System Token；
- 哪些局部差异允许由 Widget Controls 覆盖；
- 哪些全局修改被禁止。

默认规则：

- Widget CSS 只作用于自身 Wrapper；
- 不写 `:root`、`body`、裸 `h1-h6/p/a/button` 或 `.elementor-*`；
- 不在 Widget 内重复加载全站字体；
- Style Controls 默认不创建；确有运营覆盖需求并经用户确认时，使用 Elementor Global Style 作为默认值；
- Existing Extension 不因新 Widget 修改现站 Global Style；
- 独立新风格必须作为局部例外记录，不升级为站点规则。

## 状态转换

```text
输入不足 → Pending Evidence
只有 URL/渲染证据 → Observed Only
Active Baseline + Board + 足够平台证据 → Mapping Proposed
用户明确确认 Mapping → Confirmed
```

不能因文件存在、人工清单已生成或用户说“继续”而推断 Mapping 已确认。

## 验证

- 所有映射都可追溯到 Design System、Board 或 Elementor 后台证据；渲染证据用于验证实际效果；
- 没有把推测写成 Elementor Token 事实；
- 没有把主题存在、子主题目录或静态 CSS 扫描写成默认冲突结论；
- 没有平台写入、主题修改或 Widget 实现；
- `elementor-project.json.siteStyle` 与合同 Mode、Authority、Policy、Status 一致；
- 状态映射固定为：`Pending Evidence` 或 `Mapping Proposed` → `pending`，`Observed Only` → `observed`，`Confirmed` → `confirmed`；
- Pipeline 无需重新判断应该继承哪套样式。
