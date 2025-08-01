## Skills Icons 💡

![](./.github/banner.png)

<p align="center">
中文 | <a href="/README.md">English</a>
</p>

### 快速开始 🚀

使用以下URL并添加所需技术栈图标（用逗号分隔）来展示您的技能：

> [!IMPORTANT]
> 如果您能为我们的仓库点个星星，我们将不胜感激！这有助于提升项目可见度并获得支持。

#### 主链接 🔗
- https://skills.syvixor.com
- https://skills-icons.vercel.app

```markdown
[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)
```

[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)

### 配置选项 🛠️

| 参数       | 说明                                      | 必填   | 默认值  |
|------------|------------------------------------------|--------|---------|
| `i`        | 逗号分隔的图标名称列表                    | 是     | /       |
| `perline`  | 每行显示的图标数量                        | 否     | 15      |
| `radius`   | 图标圆角半径 (取值范围 25-125)            | 否     | 25      |

### 可用图标 🎨

查看所有可用图标，请访问 [图标生成器](https://builder.syvixor.com)。您可轻松浏览、搜索和自定义图标。

### 参与贡献 🎖️

欢迎任何人参与贡献！请遵循 [贡献指南](.github/CONTRIBUTING.md) 中的详细说明。

#### 贡献方式
- 添加新图标：提交PR扩展图标库
- 修复问题：协助识别并修复缺陷
- 改进文档：优化项目文档

#### 开发环境配置

```bash
# 克隆仓库
git clone https://github.com/syvixor/skills-icons.git

# 安装依赖
pnpm install  # 或 npm install

# 启动开发服务器
pnpm dev  # 或 npm run dev
```

更多指引请查看 [贡献指南](.github/CONTRIBUTING.md)。

### Docker 使用 🐳

以下指南介绍如何使用 Docker 构建和运行本项目：

#### 先决条件
确保已安装：
- Docker (版本 18.09 或更高)

#### 构建镜像
```bash
docker build -t skills-icons .
# 或
sudo docker build -t skills-icons .
```

#### 运行容器
```bash
docker run -p 3000:3000 skills-icons
# 或
sudo docker run -p 3000:3000 skills-icons
```
此命令将容器 3000 端口映射到本地，可通过 http://localhost:3000 访问。

### 图标移除请求 🚫

我们尊重所有品牌指南和知识产权。若您代表图标所属公司需要移除图标，或认为图标使用违反品牌规范，请在本仓库提交 issue 说明请求。我们将及时审核并处理，感谢理解与配合。

### 支持项目 💝
若本项目对您有帮助，请考虑：
- 为仓库点一个Star
- 分享给他人
- 参与项目开发

### 技术支持 🛟
本项目由 [Vercel](https://vercel.com) 部署托管

### 许可证 📝
[MIT 许可证](LICENSE)
