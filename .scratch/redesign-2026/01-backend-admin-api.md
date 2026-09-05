# 01 — 后端：管理 API + 公开 API + 测试 + CI

**What to build:** 后端提供公开读接口（health/activities/members）与受密码保护的管理接口（活动/成员增删改），附单元+集成测试与 GitHub Actions 双任务 CI。非开发维护者可通过密码登录取得管理会话。

**Blocked by:** None — can start immediately（主体已实现，待提交）

**Status:** ready-for-agent

- [ ] `GET /api/health` 探活（含数据库状态）
- [ ] `GET /api/activities` / `GET /api/members` 公开列表
- [ ] `POST /api/admin/login`（bcrypt + 节流）→ Bearer token
- [ ] `POST/PUT/DELETE /api/admin/activities|members` 增改删，需鉴权
- [ ] `init.sql` 幂等（IF NOT EXISTS + 条件种子），启动自举 ensureSchema
- [ ] 单测 9 项 + 集成测试 2 项（TEST_DATABASE_URL 门控）全绿
- [ ] `.github/workflows/ci.yml` 双任务（unit / integration w/ postgres service）
- [ ] 提交为 PR 合并 main（不直推）
