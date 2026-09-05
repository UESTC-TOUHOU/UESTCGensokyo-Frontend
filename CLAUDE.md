## Conventions

### Visual recognition — delegate to subagents

The main agent has no visual recognition capability. **All visual-requirement tasks must be delegated to a subagent**: analyzing screenshots, judging whether a design matches an aesthetic (e.g. Touhou style), verifying rendered pages.

### PR workflow — never push directly

Company-standard development flow: **no direct pushes to `main`**. All work goes through a feature branch and a Pull Request:

1. Create a feature branch off `main` (`git checkout -b feat/...`)
2. Commit and push the branch (`git push -u origin feat/...`)
3. Open a PR via the `gh` CLI (`gh pr create`), target base `main`
4. Wait for CI to pass before merging

This applies to both repos (frontend and backend). The environment has `gh` configured — use it.

## Agent skills

### Issue tracker

Issues and specs live as GitHub issues in this repo, used via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Five canonical labels: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context layout — `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
