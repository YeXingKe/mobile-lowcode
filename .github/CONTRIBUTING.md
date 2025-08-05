# 贡献指南 (Contribution Guidelines)

感谢您对本项目感兴趣！以下是参与贡献的标准流程。

## 📜 行为准则
请先阅读并遵守我们的 [《社区行为准则》](./CODE_OF_CONDUCT.md)。
## 🚀 快速开始
### 准备工作
```bash
# 1. 基于develop进行Fork 本仓库
# 2. 克隆你的 Fork
git clone https://github.com/<你的用户名>/<项目名>.git
cd <项目名>

# 3. 设置上游仓库（可选）
git remote add upstream https://github.com/<原仓库>/<项目名>.git

# 4. 安装依赖
pnpm i
```
### 开发流程
- 创建分支命名（类型参考）：
```text
feat/     # 新功能（feature）
fix/      # bug修复
docs/     # 文档更新
chore/    # 维护性任务
style/    # 样式修改
```
- 提交规范
> <type>(<scope>): <description>
```bash
git commit -m "feat: 添加用户登录功能"
git commit -m "fix(api): 修复500错误"
git commit -m "fix(#123): 修复..." # 针对issue上的任务提交
```
```text
build 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
feature(feat)：新功能
update：更新某功能
fixbug(fix)：修补某功能的bug
refactor：重构某个功能
optimize: 优化构建工具或运行时性能
style：仅样式改动
docs：仅文档新增/改动
chore：构建过程或辅助工具的变动
```
- 代码要求
✅ 通过所有测试：pnpm test
✅ 遵循代码风格：pnpm lint
✅ 更新相关文档（如 README 或注释）
## 🔧 提交 Pull Request
- 同步最新代码：

```bash
git fetch upstream
git rebase upstream/main
```
- 推送分支：

```bash
git push origin feat/your-feature
```
- 创建 PR：

标题格式：类型(范围): 描述 如 feat(auth): 添加OAuth支持
关联 Issue：Closes #123 或 Fixes #456
提供 测试截图 或 性能对比数据