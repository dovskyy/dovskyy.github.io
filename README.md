# Portfolio - Marcel Dovský

Profesjonalne portfolio dla Java Developera zbudowane z wykorzystaniem czystego HTML, CSS i JavaScript. Nowoczesny, responsywny design z dark mode i animacjami scroll reveal.

## ✨ Funkcje

- 📱 **Responsywny design** - działa na wszystkich urządzeniach (mobile-first)
- 🌓 **Dark mode / Light mode** - przełącznik motywu z zapisem preferencji
- 🎨 **Nowoczesny design** - minimalistyczny, editorial-inspired
- ⚡ **Animacje scroll** - fade-in, slide-in effects
- 🎯 **SEO optimized** - meta tags, structured data, semantic HTML
- ♿ **Accessibility** - ARIA labels, keyboard navigation
- 🚀 **Performance** - optymalizowane animacje, lazy loading

## 📁 Struktura Projektu

```
dovskyy.github.io/
├── index.html          # Główna strona HTML
├── style.css           # Wszystkie style CSS
├── script.js           # Interaktywność JavaScript
├── README.md           # Ten plik
└── CNAME               # Konfiguracja domeny (opcjonalne)
```

## 🚀 Deployment na GitHub Pages

### 1. Przygotowanie Repozytorium

Repozytorium musi być publiczne i nazwane według wzoru: `username.github.io`

```bash
# Jeśli jeszcze nie jest zainicjowane
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### 2. Push do GitHub

```bash
# Dodaj remote (jeśli jeszcze nie ma)
git remote add origin https://github.com/dovskyy/dovskyy.github.io.git

# Push do main branch
git push -u origin main
```

### 3. Włącz GitHub Pages

1. Przejdź do repozytorium na GitHub
2. Settings → Pages (w lewym menu)
3. W sekcji "Source":
   - Branch: **main**
   - Folder: **/ (root)**
4. Kliknij **Save**

Strona będzie dostępna pod adresem: `https://dovskyy.github.io`

## 🌐 Dodanie Własnej Domeny

### 1. Konfiguracja DNS

W panelu swojego dostawcy domeny (np. Namecheap, GoDaddy, CloudFlare) dodaj rekordy DNS:

**Dla domeny głównej (dovskyy.me):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Dla subdomeny (www.dovskyy.me):**
```
Type: CNAME
Name: www
Value: dovskyy.github.io
```

### 2. Dodaj CNAME plik

Stwórz plik `CNAME` w głównym katalogu projektu:

```bash
echo "dovskyy.me" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 3. Konfiguracja w GitHub

1. Settings → Pages
2. W sekcji "Custom domain" wpisz: `dovskyy.me`
3. Zaznacz "Enforce HTTPS" (po propagacji DNS, ~24h)

## ✏️ Modyfikacja Treści

### Zmiana Danych Osobowych

**W `index.html` zmień:**

```html
<!-- Hero Section (linia 88-95) -->
<h1 class="hero-title fade-in-up">
    TwojeImię<br>
    <span class="hero-title-accent">Nazwisko</span>
</h1>
<p class="hero-subtitle fade-in-up">
    Twój opis<br>
    <span class="hero-company">@ Twoja Firma</span>
</p>
```

### Modyfikacja "O mnie"

```html
<!-- About Section (linia 122-134) -->
<p class="lead">
    Twój główny opis...
</p>
<p>
    Szczegółowy opis doświadczenia...
</p>
```

### Dodanie Projektów

```html
<!-- Projects Section (linia 259-292) -->
<article class="project-card reveal">
    <div class="project-number">01</div>
    <div class="project-content">
        <h3 class="project-title">Nazwa Projektu</h3>
        <p class="project-description">
            Opis projektu...
        </p>
        <div class="project-stack">
            <span class="tech-tag">Technologia 1</span>
            <span class="tech-tag">Technologia 2</span>
        </div>
        <div class="project-links">
            <a href="GITHUB_URL" class="project-link">Zobacz kod</a>
            <a href="LIVE_URL" class="project-link">Live demo</a>
        </div>
    </div>
</article>
```

### Zmiana Umiejętności

```html
<!-- Skills Section (linia 165-183) -->
<div class="skill-item">
    <span class="skill-name">Nazwa Technologii</span>
    <div class="skill-bar">
        <div class="skill-progress" style="--progress: 85%"></div>
    </div>
</div>
```

### Aktualizacja Kontaktu

```html
<!-- Contact Section (linia 386-406) -->
<a href="mailto:twoj@email.com" class="contact-link">
    <!-- ikona -->
    <span>twoj@email.com</span>
</a>
```

## 🎨 Dostosowanie Designu

### Zmiana Kolorów

W pliku `style.css` zmodyfikuj zmienne CSS (linia 7-25):

```css
:root {
    /* Kolory Light Mode */
    --color-primary: #D4855F;        /* Główny kolor akcentu */
    --color-accent: #2C3E50;         /* Drugi kolor akcentu */
    --color-bg: #FAFAF8;             /* Tło */
    --color-surface: #FFFFFF;        /* Tło kart/sekcji */
    --color-text: #1A1A1A;           /* Tekst główny */
}

[data-theme="dark"] {
    /* Kolory Dark Mode */
    --color-primary: #E6956F;
    --color-bg: #0F1419;
    /* ... */
}
```

### Zmiana Czcionek

W pliku `index.html` (linia 30) zmień import Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

W `style.css` zaktualizuj zmienne:

```css
:root {
    --font-serif: 'Your Serif Font', Georgia, serif;
    --font-sans: 'Your Sans Font', sans-serif;
}
```

## ⌨️ Skróty Klawiszowe

- **T** - Przełącz Dark/Light mode
- **ESC** - Przewiń na górę strony

## 🔧 Wskazówki Techniczne

### Optymalizacja Wydajności

1. **Obrazy**: Dodaj obrazy projektów w formacie WebP
2. **Icons**: Rozważ użycie SVG sprite dla ikon
3. **Critical CSS**: Wyodrębnij krytyczne style dla pierwszego renderowania
4. **CDN**: Użyj CDN dla Google Fonts (już zaimplementowane)

### SEO

1. **Structured Data**: Zaktualizuj dane w `<script type="application/ld+json">` (linia 35-51)
2. **Meta Description**: Zmień w `<meta name="description">` (linia 6)
3. **Open Graph Image**: Stwórz obraz `og-image.jpg` (1200x630px) i umieść w głównym katalogu
4. **Sitemap**: Dodaj `sitemap.xml` dla lepszej indeksacji

### Analytics

Dodaj Google Analytics w `index.html` przed `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Rozwiązywanie Problemów

### GitHub Pages nie działa

1. Sprawdź czy repozytorium jest publiczne
2. Upewnij się, że branch to `main` (nie `master`)
3. Poczekaj 5-10 minut na zbudowanie strony
4. Sprawdź Settings → Pages dla błędów

### Domena nie działa

1. Sprawdź propagację DNS: https://dnschecker.org
2. Poczekaj 24-48h na pełną propagację
3. Upewnij się, że plik CNAME jest w głównym katalogu
4. Sprawdź czy w Settings → Pages jest ustawiona domena

### Dark mode nie zapisuje się

- Sprawdź czy localStorage jest włączony w przeglądarce
- Sprawdź console dla błędów JavaScript

## 📱 Testowanie

### Responsywność

Przetestuj na:
- Mobile: 320px, 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

### Przeglądarki

Sprawdź kompatybilność:
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari
- ✅ Opera

### Narzędzia

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WAVE Accessibility](https://wave.webaim.org/)

## 📄 Licencja

MIT License - możesz swobodnie używać tego kodu dla swoich projektów.

## 🤝 Kontakt

Marcel Dovský
- Email: marcel@dovskyy.me
- GitHub: [@dovskyy](https://github.com/dovskyy)
- LinkedIn: [Marcel Dovský](https://linkedin.com/in/marcel-dovský)

---

**Zbudowane z ❤️ używając HTML, CSS i JavaScript**
