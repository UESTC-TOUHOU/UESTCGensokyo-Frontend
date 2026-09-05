# 11 — 部署文档 & 冒烟

**What to build:** 双仓库 README 更新（admin 密码初始化 `--hash`、VITE_API_BASE、compose 起服、CI 说明）；docker compose 整体冒烟一次（前端可访问、后端 API 通、admin 登录可用）。

**Blocked by:** 01, 02, 08, 09

**Status:** ready-for-agent

- [ ] Backend README：环境变量表（DATABASE_URL/ADMIN_PASSWORD_HASH/TEST_DATABASE_URL）、`--hash` 用法、集成测试说明
- [ ] Frontend README：VITE_API_BASE、测试/构建命令
- [ ] compose 起服冒烟通过（或注明本机 Docker 不可用时以 CI 绿为凭）

