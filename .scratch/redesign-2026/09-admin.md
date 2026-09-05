# 09 — 管理后台前端（/admin 登录 + 活动/成员 CRUD）

**What to build:** 非开发维护者使用的管理面板：`/admin` 密码登录（Bearer 存 localStorage）、活动列表 CRUD 表单、成员列表 CRUD 表单；与公开页同款换肤；提交即写库，刷新即见。

**Blocked by:** 01, 03

**Status:** ready-for-agent

- [ ] `/admin/login` 登录表单 → token 持久化
- [ ] 活动 CRUD（列表/新增/编辑/删除）
- [ ] 成员 CRUD（列表/新增/编辑/删除）
- [ ] 登出 + 401 处理（token 失效回登录）
- [ ] 移动端可用（响应式表单）
- [ ] 组件测试覆盖登录/CRUD 主路径（fetch stub）

