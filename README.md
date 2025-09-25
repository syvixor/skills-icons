## Skills Icons ✨

Showcase your tech stack with clean, customizable icons, just list the technologies you use, separated by commas.

### Example 💡

![Banner Dark](./.github/example-dark.png#gh-dark-mode-only)
![Banner Light](./.github/example-light.png#gh-light-mode-only)

### Available Languages 🌐

- 🇬🇧 English ⬅
- 🇨🇳 [中文 (Chinese)](./i18n/zh/README.md)
- 🇪🇸 [Español (Spanish)](./i18n/es/README.md)
- 🇮🇹 [Italiano (Italian)](./i18n/it/README.md)
- 🇷🇺 [Русский (Russian)](./i18n/ru/README.md)

> [!IMPORTANT]
> We'd really appreciate it if you would consider starring our repository! It helps us gain visibility and support the project.

#### Main URLs 🔗

- https://skills.syvixor.com
- https://skills-icons.vercel.app

```markdown
[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)
```

[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)

### Configuration Options 🛠️

| Parameter | Description                                      | Required | Default |
|-----------|--------------------------------------------------|----------|---------|
| `i`       | Comma-separated list of icon names               | Yes      | /       |
| `perline` | Number of icons per line                         | No       | 15      |
| `radius`  | Icon(s) corner radius (value between 25 and 85)  | No       | 40      |

### Available Icons 🎨

To view all available icons, check out the [URL Builder](https://builder.syvixor.com). It lets you browse, search, and customize icons easily.

### Contributing 🎖️

We welcome contributions from anyone! If you'd like to help, please follow the detailed guidelines in our [CONTRIBUTING.md](.github/CONTRIBUTING.md) file.

#### Ways to Contribute

- Add New Icons: Submit PRs to expand our icon collection.
- Bug Fixes: Help us identify and fix issues.
- Documentation: Help improve documentation.

#### Development Setup

```bash
# Clone the repository
git clone https://github.com/syvixor/skills-icons.git

# Install dependencies
pnpm install # or npm install

# Run development server
pnpm dev # or npm run dev
```

For more instructions on how to get started, check out the guidelines in the [CONTRIBUTING.md](.github/CONTRIBUTING.md).

### Docker Usage 🐳

This section provides instructions on building and running the `Skills Icons` project using Docker. Follow the steps below to containerize and manage the application efficiently.

#### Prerequisites

Before you begin, ensure you have the following installed:
- Docker (version 18.09 or higher)

#### Building the Docker Image

To build the Docker image for `Skills Icons`, follow these steps:
1. Open a terminal and navigate to the directory.
2. Run the following command to build the image:
```bash
docker build -t skills-icons .
# or
sudo docker build -t skills-icons .
```

#### Running the Docker Container

Once the image is built, you can run it in a container:
1. Execute the following command:
```bash
docker run -p 3000:3000 skills-icons
# or
sudo docker run -p 3000:3000 skills-icons
```

This command maps port 3000 of your host machine to port 3000 of the container, allowing you to access `Skills Icons` at http://localhost:3000.

### Icon Removal Requests 🚫

We strive to respect all branding guidelines and intellectual property. If you represent a company whose icon is included in this project and you would like it removed, or if you believe we have used an icon in a way that violates your branding guidelines, please open an issue on this repository detailing your request. We will review your request promptly and take appropriate action. We appreciate your understanding and cooperation.

### Support 💝

If you find this project helpful, consider:

- Starring the repository
- Sharing it with others
- Contributing to its development

### Thanks To All The contributors 🙏

[![Contributors](https://contrib.rocks/image?repo=syvixor/skills-icons)](https://github.com/syvixor/skills-icons/graphs/contributors)

### Powered By 🛟

This project is deployed and hosted using [Vercel](https://vercel.com)

### License 📝

This project is licensed under [MIT License](LICENSE)