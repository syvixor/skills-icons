## Skills Icons ✨

깔끔하고 커스터마이즈 가능한 아이콘으로 당신의 기술 스택을 멋지게 보여주세요. 사용하는 기술들을 쉼표로 구분해 입력하기만 하면 됩니다.

### 예시 💡

![Banner Dark](../../.github/example-dark.png#gh-dark-mode-only)
![Banner Light](../../.github/example-light.png#gh-light-mode-only)

### 지원되는 언어 🌐

- 🇬🇧 [English](../../README.md)
- 🇨🇳 [中文 (Chinese)](../zh/README.md)
- 🇪🇸 [Español (Spanish)](../es/README.md)
- 🇪🇸 [Català (Català 🇨🇹)](../ca/README.md)
- 🇮🇹 [Italiano (Italian)](../it/README.md)
- 🇷🇺 [Русский (Russian)](../ru/README.md)
- 🇹🇷 [Türkçe (Turkish)](../tr/README.md)
- 🇵🇹 [Português (Portuguese)](../pt/README.md)
- 🇩🇪 [Deutsch (German)](../de/README.md)
- 🇰🇷 [한국어 (Korean)](../ko/README.md)
- 🇮🇳 [हिन्दी (Hindi)](../hin/README.md)

> [!IMPORTANT]
> 저희 레포지토리에 스타를 눌러주시면 정말 감사하겠습니다! 더 많은 사람들에게 노출되고 프로젝트를 발전시키는 데 큰 도움이 됩니다.

#### 주요 URL 🔗

- https://skills.syvixor.com
- https://skills-icons.vercel.app

```markdown
[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)
```

[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)

### 구성 옵션 🛠️

| 매개변수    | 설명                             | 필수 여부 | 기본값  |
| --------- | ------------------------------- | ------- | ------ |
| `i`       | 아이콘 이름들을 쉼표로 구분한 목록     | 필수     | /      |
| `perline` | 한 줄에 표시할 아이콘 개수           | 선택     | 15     |
| `radius`  | 아이콘 모서리 반경 (값은 25~85 사이)  | 선택     | 40     |

### 다크 & 라이트 모드 🌗

`Skills Icons`는 이제 자동 테마 감지를 지원합니다 — 추가 설정이나 파라미터 없이도 아이콘이 시스템의 다크 🌙 / 라이트 ☀️ 모드에 자동으로 맞춰집니다.

이 동작은 `CSS`의 기본 미디어 쿼리인 `prefers-color-scheme`을 기반으로 합니다. 이 쿼리는 사용자의 현재 테마 설정을 감지해 SVG 색상을 자동으로 조정합니다.

### 사용 가능한 아이콘 🎨

사용 가능한 모든 아이콘을 확인하려면 [URL Builder](https://builder.syvixor.com)를 방문하세요. 아이콘을 쉽게 탐색하고, 검색하고, 커스터마이즈할 수 있습니다.

### 기여하기 🎖️

우리는 누구든지 기여를 환영합니다! 프로젝트에 도움이 되고 싶다면, [CONTRIBUTING.md](./CONTRIBUTING.md)에 있는 자세한 가이드를 따라 주세요.

#### 기여하는 방법

- 새 아이콘 추가: 아이콘 컬렉션을 확장할 수 있도록 PR을 제출해주세요.
- 버그 수정: 문제를 발견하고 해결하는 데 도움을 주세요.
- 문서 개선: 문서 품질 향상에 기여해주세요.

#### 개발 환경 설정

```bash
# 레포지토리 클론하기
git clone https://github.com/syvixor/skills-icons.git

# 의존성 설치하기
pnpm install # or npm install

# 개발 서버 실행하기
pnpm dev # or npm run dev
```

시작하는 방법에 대한 더 자세한 안내는 [CONTRIBUTING.md](./CONTRIBUTING.md) 파일의 가이드를 참고해주세요.

### Docker 사용 방법 🐳

이 섹션에서는 Docker를 사용해 `Skills Icons` 프로젝트를 빌드하고 실행하는 방법을 안내합니다. 아래 단계에 따라 애플리케이션을 컨테이너화하고 효율적으로 관리할 수 있습니다.

#### 사전 준비 사항

시작하기 전에, 아래 항목이 설치되어 있는지 확인하세요:

- Docker (버전 18.09 이상)

#### Docker 이미지 빌드하기

`Skills Icons`의 Docker 이미지를 빌드하려면 다음 단계를 따르세요:

1. 터미널을 열고 프로젝트 디렉토리로 이동합니다.
2. 아래 명령어를 실행해 이미지를 빌드합니다:

```bash
docker build -t skills-icons .
# 또는
sudo docker build -t skills-icons .
```

#### Docker 컨테이너 실행하기

이미지가 빌드되면, 컨테이너로 실행할 수 있습니다:

1. 아래 명령어를 실행합니다:

```bash
docker run -p 3000:3000 skills-icons
# 또는
sudo docker run -p 3000:3000 skills-icons
```

이 명령어는 호스트 머신의 3000번 포트를 컨테이너의 3000번 포트에 매핑합니다. 이후 http://localhost:3000에 접속하여 `Skills Icons`을 사용할 수 있습니다.

### 아이콘 제거 요청 🚫

저희는 모든 브랜드 가이드라인과 지적 재산권을 존중하기 위해 노력합니다. 이 프로젝트에 포함된 아이콘이 귀사(회사)의 것이고 제거를 원하시거나, 저희가 아이콘을 브랜드 가이드라인에 어긋나는 방식으로 사용했다고 판단되면 해당 요청 내용을 담아 이 레포지토리에 이슈를 등록해주세요. 요청을 신속하게 검토하고 적절한 조치를 취하겠습니다. 이해와 협조에 감사드립니다.

### 프로젝트 지원 💝

이 프로젝트가 도움이 되었다면 다음과 같은 방식으로 응원해 주세요:

- 레포지토리에 스타를 눌러주세요
- 주변에 공유해 주세요
- 프로젝트 개발에 기여해 주세요

### 모든 기여자분들께 감사드립니다 🙏

[![Contributors](https://contrib.rocks/image?repo=syvixor/skills-icons)](https://github.com/syvixor/skills-icons/graphs/contributors)

### 제공 / 지원 🛟

이 프로젝트는 [Vercel](https://vercel.com)을 사용해 배포 및 호스팅되고 있습니다.

### 라이선스 📝

이 프로젝트는 [MIT License](../../LICENSE)를 따릅니다.
