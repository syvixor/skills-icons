## Skills Icons ✨

Mostra el teu stack tecnològic amb icones netes i personalitzables, només llista les tecnologies que utilitzes, separades per comes.

### Exemple 💡

![Banner Dark](../../.github/example-dark.png#gh-dark-mode-only)
![Banner Light](../../.github/example-light.png#gh-light-mode-only)

### Idiomes Disponibles 🌐

- 🇬🇧 [English (Anglès)](../../README.md)
- 🇨🇳 [中文 (Xinès)](../zh/README.md)
- 🇪🇸 [Español (Espanyol)](../es/README.md)
- 🇪🇸 Català (Català 🇨🇹) ⬅
- 🇮🇹 [Italiano (Italià)](../it/README.md)
- 🇷🇺 [Русский (Rus)](../ru/README.md)
- 🇹🇷 [Türkçe (Turc)](../tr/README.md)
- 🇵🇹 [Português (Portuguès)](../pt/README.md)
- 🇩🇪 [Deutsch (Alemany)](../de/README.md)
- 🇰🇷 [한국어 (Coreà)](../ko/README.md)
- 🇮🇳 [हिन्दी (Hindi)](../hin/README.md)
- 🇮🇳 [മലയാളം (Malayalam)](../ml/README.md)
- 🇬🇷 [Ελληνικά (Greek)](../el/README.md)

> [!IMPORTANT]
> T'agrairíem molt si consideressis donar una estrella al nostre repositori! Ens ajuda a guanyar visibilitat i a donar suport al projecte.

#### Main URLs 🔗

- https://skills.syvixor.com
- https://skills-icons.vercel.app

```markdown
[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)
```

[![Skills](https://skills.syvixor.com/api/icons?i=ts,node,expressjs,vue,nuxt,mongodb,prisma)](https://github.com/syvixor/skills-icons)


### Opcions de Configuració 🛠️

| Paràmetre | Descripció                                                 | Requerit | Per defecte |
| --------- | ---------------------------------------------------------- | -------- | ----------- |
| `i`       | Llista de noms d'icones separats per comes                 | Sí       | /           |
| `perline` | Nombre d'icones per línia                                  | No       | 15          |
| `radius`  | Radi de les cantonades de les icones (valor entre 25 i 85) | No       | 40          |

### Mode Fosc i Clar 🌗

`Skills Icons` ara suporta detecció automàtica de tema — les icones s'adaptaran perfectament al mode fosc 🌙 o clar ☀️ del teu sistema sense cap paràmetre ni configuració manual.

Aquest comportament funciona gràcies a la consulta de mitjans `CSS` integrada `prefers-color-scheme`, que detecta la preferència de tema actual de l'usuari i ajusta els colors SVG en conseqüència.

### Icones Disponibles 🎨

Per veure totes les icones disponibles, consulta el [Constructor d'URL](https://builder.syvixor.com). Et permet navegar, cercar i personalitzar icones fàcilment.

### Contribuint 🎖️

Donem la benvinguda a les contribucions de tothom! Si t'agradaria ajudar, si us plau segueix les directrius detallades al nostre fitxer [CONTRIBUTING.md](./CONTRIBUTING.md).

#### Formes de Contribuir

- Afegir Noves Icones: Envia PRs per ampliar la nostra col·lecció d'icones.
- Correcció d'Errors: Ajuda'ns a identificar i corregir problemes.
- Documentació: Ajuda a millorar la documentació.

#### Configuració de Desenvolupament

```bash
# Clonar el repositori
git clone https://github.com/syvixor/skills-icons.git

# Instal·lar dependències
pnpm install # o npm install

# Executar servidor de desenvolupament
pnpm dev # o npm run dev
```

Per a més instruccions sobre com començar, consulta les directrius al [CONTRIBUTING.md](./CONTRIBUTING.md).

### Ús amb Docker 🐳

Aquesta secció proporciona instruccions sobre com construir i executar el projecte `Skills Icons` utilitzant Docker. Segueix els passos següents per contenitzar i gestionar l'aplicació de manera eficient.

#### Prerequisits

Abans de començar, assegura't de tenir instal·lat el següent:

- Docker (versió 18.09 o superior)

#### Construir la Imatge Docker

Per construir la imatge Docker per a `Skills Icons`, segueix aquests passos:

1. Obre un terminal i navega al directori.
2. Executa la següent comanda per construir la imatge:

```bash
docker build -t skills-icons .
# o
sudo docker build -t skills-icons .
```

#### Executar el Contenidor Docker

Un cop construïda la imatge, pots executar-la en un contenidor:

1. Executa la següent comanda:

```bash
docker run -p 3000:3000 skills-icons
# o
sudo docker run -p 3000:3000 skills-icons
```

Aquesta comanda mapeja el port 3000 de la teva màquina amfitrió al port 3000 del contenidor, permetent-te accedir a `Skills Icons` a http://localhost:3000.

### Sol·licituds d'Eliminació d'Icones 🚫

Ens esforcem per respectar totes les directrius de marca i propietat intel·lectual. Si representes una empresa la icona de la qual està inclosa en aquest projecte i vols que sigui eliminada, o si creus que hem utilitzat una icona d'una manera que viola les teves directrius de marca, si us plau obre un issue en aquest repositori detallant la teva sol·licitud. Revisarem la teva sol·licitud ràpidament i prendrem les mesures adequades. Agraïm la teva comprensió i cooperació.

### Suport 💝

Si aquest projecte et resulta útil, considera:

- Donar una estrella al repositori
- Compartir-lo amb altres
- Contribuir al seu desenvolupament

### Gràcies a Tots els Contribuïdors 🙏

[![Contributors](https://contrib.rocks/image?repo=syvixor/skills-icons)](https://github.com/syvixor/skills-icons/graphs/contributors)

### Impulsat Per 🛟

Aquest projecte està desplegat i allotjat utilitzant [Vercel](https://vercel.com)

### Llicència 📝

Aquest projecte està llicenciat sota [Llicència MIT](../../LICENSE)
