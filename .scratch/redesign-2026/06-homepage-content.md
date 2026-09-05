# 06 — 主页内容：真实介绍 + 活动/成员接后端

**What to build:** Homepage 从占位文案改为真实社团内容：介绍（UESTC幻想乡 = 电子科技大学东方同好会，自 club-facts/团本文案）＋ 活动列表（接 `GET /api/activities`）＋ 成员/部门架构（接 `GET /api/members`）；三语 i18n 全量更新。

**Blocked by:** 01, 03

**Status:** ready-for-agent

- [ ] 主页三区块结构（介绍/活动/成员）渲染真实数据
- [ ] 活动与成员数据来自后端 API，加载/错误状态有降级
- [ ] zh/en/ja 三语 i18n 键覆盖全部新增文案
- [ ] 占位文案（"在这里介绍贵组织的使命和愿景"等）全数清除
- [ ] 子代理截图确认主页版式无破版

