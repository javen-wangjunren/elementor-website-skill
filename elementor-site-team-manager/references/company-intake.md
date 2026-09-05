# Company Intake

仅当企业站内容规划或新站视觉方向缺少可靠公司资料时使用。目标是用轻量访谈把用户已有知识整理成 Page Content 与 Design System 共用的事实来源，不做市场研究、品牌定位、页面策划或视觉设计。

## 1. 是否需要 Intake

先检查用户提供的公司介绍、产品资料、旧站文案和 `docs/company/about-company.md`。满足以下条件时跳过或只补缺口：

- 已有资料能说明公司是谁、提供什么、服务谁、具备什么能力；
- 关键数字和质量主张的来源状态清楚；
- 当前任务需要的产品、服务、证据和素材信息足够。

不要因为模板字段为空而要求用户重复已经提供的信息。单模块已有真实内容和上下文时，不强制建立完整公司资料。

## 2. 轻量访谈

一次只问一组最多 3 个相关问题，优先问会阻塞当前目标的内容。根据已有证据跳过已知项，建议顺序为：

1. **Company Basics**：公司名称、地点、业务类型、经营年限、主要市场。
2. **Products and Services**：主营产品、材料或服务、加工与定制能力、MOQ、交期。
3. **Target Buyers**：买家角色、行业、典型采购需求和常见顾虑。
4. **Strengths and Evidence**：优势及其数据、文件、案例或现场证据；区分事实和愿望。
5. **Quality and Documentation**：认证、质检、报告、适用标准和追溯文件。
6. **Available Assets**：Logo、产品、工厂、设备、人员、检测、证书、包装、发货和 Brochure 素材。
7. **Conversion**：希望访客采取的行动、联系方式、响应时间和询价所需信息。

用户不知道某项时记录为 `Missing / Pending`，不要阻塞其他可以继续的部分。不要追问与当前页面或原始目标无关的企业百科信息。

## 3. 事实状态

整理时明确区分：

- **Verified**：有文件、公开页面、证书、数据或用户明确确认支持；
- **User-provided**：用户提供但当前没有外部材料验证，可作为内部事实继续使用；
- **Pending**：缺失、冲突或等待确认；
- **Restricted Claim**：证据不足，不应直接用于公开营销的绝对化主张。

不要自行补出客户数量、工厂面积、认证、交期、MOQ、出口地区或“行业领先”等内容。

## 4. 唯一产物

默认写入 `docs/company/about-company.md`。项目已经存在用户指定的等价公司资料文件时，优先更新该文件或询问是否迁移，不并行创建两个事实源。

保持文件便于人阅读，第一版只需包含当前已知内容：

```markdown
# About Company

## Company Basics

## Products and Services

## Target Buyers

## Company Strengths

## Quality and Documentation

## Verified Numbers

## Available Assets

## Conversion

## Missing / Pending

## Restricted Claims
```

每个部分使用短段落或简短列表。不要创建分析报告、评分、Persona 档案、品牌策略或页面模块方案。

## 5. 确认门禁

展示一段简洁摘要并请用户确认事实、缺口和 Restricted Claims。文件存在不代表已确认；只有当前对话或可靠记录能证明用户确认时，才把它作为后续阶段的已确认输入。

确认后返回总控，按用户原始目标路由到 `website-page-content-architect`、`website-design-system-architect` 或两者，不固定进入某一阶段。最小传递：

```text
CONFIRMED COMPANY SOURCE:
RELEVANT FACTS:
EVIDENCE STATUS:
AVAILABLE ASSETS:
MISSING / PENDING:
RESTRICTED CLAIMS:
TARGET PAGE OR MODULE:
TARGET STAGE: Page Content / Design System / both
```
