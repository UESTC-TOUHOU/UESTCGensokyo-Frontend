# 02 — 前端：测试基建 + CI

**What to build:** 前端仓库可跑 vitest 组件测试（含 i18n/memory-router/fetch-stub 工具），并有 GitHub Actions CI 跑 lint + test + build，PR 全绿。

**Blocked by:** None — can start immediately（脚本/配置/测试文件已写好，待跑通）

**Status:** ready-for-agent

- [ ] `pnpm test` 全绿（navigation 3 例 + contact 3 例）
- [ ] pnpm 依赖干净（esbuild allowBuilds 白名单正确、无 IGNORED_BUILDS 警告）
- [ ] `.github/workflows/ci.yml`：lint + test + build on PR
- [ ] 提交为 PR 合并 main（不直推）
