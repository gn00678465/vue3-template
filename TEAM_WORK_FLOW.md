# Team Work Flow

## Github Flow and Branches

### Branch

- 主分支：main
- 開發分支：development，基於 main 創建，用 pull request 併入 main
- 功能分支：feature，基於 development 創建，用 pull request 併入 development
- 錯誤分支
  - hotfix，基於 main 創建，用 pull request 併入 main
  - feature/fix-xxx，基於 development 創建，用 pull request 併入 development

### Commits

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: 持續整合 (Continuous integration)
- **docs**:文件（documentation）
- **feat**: 新增或修改功能（feature）
- **fix**: 修補 bug（bug fix）
- **perf**: 改善效能 (Optimization/performance improvement)
- **refactor**: 重構
  - 不是新增功能，也非修補 bug 的程式碼變動
- **test**: Adding missing tests or correcting existing tests
- **style**: 與格式有關
  - 不影響程式碼運行的變動，例如：white-space, formatting, missing semi colons
- **chore**: 不包含 `src` 或 `test` 檔案的相關變動
- **types**: 改變檔案的類型定義 (Type definition file changes)
- **revert**: Reverts a previous commit
