## Skills Icons ✨

अपने टेक स्टैक को साफ़, कस्टमाइज़ेबल आइकन्स के साथ दिखाएं — बस आप जिन तकनीकों का उपयोग करते हैं, उन्हें कॉमा से अलग करके सूचीबद्ध करें।

### उदाहरण 💡

![Banner Dark](../../.github/example-dark.png#gh-dark-mode-only)
![Banner Light](../../.github/example-light.png#gh-light-mode-only)

### उपलब्ध भाषाएँ 🌐

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
- 🇮🇳 हिन्दी (Hindi) ⬅
- 🇮🇳 [മലയാളം (Malayalam)](../ml/README.md)
- 🇬🇷 [Ελληνικά (Greek)](../el/README.md)

> [!IMPORTANT]
> यदि आपको यह प्रोजेक्ट पसंद आए, तो कृपया रिपॉज़िटरी को स्टार करने पर विचार करें! इससे हमें विज़िबिलिटी मिलती है और प्रोजेक्ट को सहायता मिलती है।

#### मुख्य URLs 🔗

- [https://skills.syvixor.com](https://skills.syvixor.com)
- [https://skills-icons.vercel.app](https://skills-icons.vercel.app)

```markdown
[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)
```

[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)

## कॉन्फ़िगरेशन विकल्प 🛠️

| Parameter | विवरण                                | Required | Default |
| --------- | ----------------------------------- | -------- | ------- |
| `i`       | आइकन नामों की कॉमा-सेपरेटेड सूची            | Yes      | /       |
| `perline` | प्रति लाइन दिखने वाले आइकनों की संख्या        | No       | 15      |
| `radius`  | आइकन के कोनों का रेडियस (25 से 85 के बीच) | No       | 40      |

## डार्क और लाइट मोड सपोर्ट 🌗

`Skills Icons` अब ऑटोमैटिक थीम डिटेक्शन को सपोर्ट करता है — आइकन अपने आप आपके सिस्टम के डार्क 🌙 या लाइट ☀️ मोड के अनुसार एडजस्ट हो जाते हैं।

यह सुविधा `CSS` की बिल्ट-इन मीडिया क्वेरी `prefers-color-scheme` का उपयोग करती है, जो यूज़र की थीम प्रेफरेंस को पहचानकर SVG रंगों को बदल देती है।

## उपलब्ध आइकन 🎨

सभी उपलब्ध आइकनों को देखने के लिए [URL Builder](https://builder.syvixor.com) पर जाएँ। यहाँ आप आइकनों को आसानी से ब्राउज़, खोज और कस्टमाइज़ कर सकते हैं।

## योगदान करें 🎖️

हम किसी भी डेवलपर का योगदान स्वागत करते हैं! यदि आप मदद करना चाहते हैं, तो कृपया हमारे [CONTRIBUTING.md](./CONTRIBUTING.md) में दिए गए दिशा-निर्देशों का पालन करें।

### योगदान के तरीके

- **नए आइकन जोड़ना:** आइकन लाइब्रेरी को बढ़ाने के लिए PR भेजें।
- **बग फिक्सेस:** समस्याएँ ढूंढें और ठीक करें।
- **डॉक्यूमेंटेशन:** डॉक्यूमेंटेशन में सुधार करें।

## डेवलपमेंट सेटअप

```bash
# Clone the repository
git clone https://github.com/syvixor/skills-icons.git

# Install dependencies
pnpm install # or npm install

# Run development server
pnpm dev # or npm run dev
```

अधिक जानकारी के लिए [CONTRIBUTING.md](./CONTRIBUTING.md) देखें।

# 🐳 Docker उपयोग

यह सेक्शन बताता है कि `Skills Icons` को Docker की मदद से कैसे बिल्ड और रन किया जाए।

## आवश्यकताएँ (Prerequisites)

आगे बढ़ने से पहले यह इंस्टॉल होना चाहिए:

- Docker (version 18.09 या उससे ऊपर)

## Docker Image बनाना

`Skills Icons` की Docker इमेज बनाने के लिए:

1. टर्मिनल खोलें और प्रोजेक्ट डायरेक्टरी में जाएँ।
2. नीचे दिए गए कमांड को चलाएँ:

```bash
docker build -t skills-icons .
# or
sudo docker build -t skills-icons .
```

## Docker Container चलाना

इमेज बनने के बाद कंटेनर रन करने के लिए:

```bash
docker run -p 3000:3000 skills-icons
# or
sudo docker run -p 3000:3000 skills-icons
```

यह कमांड आपके सिस्टम के port 3000 को कंटेनर के port 3000 से मैप करता है, जिससे आप [http://localhost:3000](http://localhost:3000) पर ऐप एक्सेस कर सकते हैं।

## आइकन हटाने के अनुरोध 🚫

हम सभी कंपनियों की ब्रांडिंग गाइडलाइन्स और बौद्धिक संपदा का सम्मान करते हैं।
यदि आप किसी कंपनी का प्रतिनिधित्व करते हैं और चाहते हैं कि उनका आइकन हटाया जाए, या किसी प्रकार का उल्लंघन हो रहा हो — तो कृपया इस रिपॉज़िटरी में एक issue उठाएँ।
हम तुरंत समीक्षा करके आवश्यक कार्रवाई करेंगे।

## सहायता करें 💝

यदि यह प्रोजेक्ट आपके लिए उपयोगी है, तो:

- रिपॉज़िटरी को स्टार दें
- इसे दूसरों के साथ साझा करें
- योगदान करें

## सभी योगदानकर्ताओं का धन्यवाद 🙏

[![Contributors](https://contrib.rocks/image?repo=syvixor/skills-icons)](https://github.com/syvixor/skills-icons/graphs/contributors)

## Powered By 🛟

यह प्रोजेक्ट [Vercel](https://vercel.com) द्वारा डिप्लॉय और होस्ट किया गया है।

## लाइसेंस 📝

यह प्रोजेक्ट [MIT License](../../LICENSE) के तहत उपलब्ध है।