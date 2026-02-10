# Kontekst Projektu: Strona Osobista / Portfolio Web Developer (dovskyy.github.io)

## Przegląd
Jest to osobista strona wizytówka i portfolio Marcela Lewandowskiego (.lewcode). Służy do prezentacji oferty tworzenia stron WWW, aplikacji webowych oraz usług marketingowych. Strona zaprojektowana jest w nowoczesnym, minimalistycznym stylu z silnym naciskiem na "inżynierską precyzję" i zaufanie.

## Autor i Dane
- **Imię:** Marcel Lewandowski
- **Marka:** .lewcode
- **Kontakt:** kontakt@lewcode.pl, +48 570 271 968
- **Linki:** GitHub (dovskyy), LinkedIn (marcel-lew96)
- **NIP:** 5543026420

## Oferta i Cennik (Główne Produkty)
1.  **Pakiet Start (od 1500 PLN):** Landing Page / One Page. Idealne dla specjalistów. Formularz, SEO, szybkość.
2.  **Pakiet Firma / CMS (od 3500 PLN):** Strona wielostronicowa (do 5 podstron), system CMS (WordPress/Strapi), Blog, zaawansowane SEO.
3.  **Dedykowane / App (Indywidualnie):** Aplikacje webowe (React/Java), E-commerce, systemy B2B.

## Zasady Współpracy (Process & Warranty)
- **Proces:** 3 kroki: 1. Poznanie firmy/brief, 2. Projekt i treści, 3. Wdrożenie i rozwój.
- **Gwarancja:** 6 miesięcy gwarancji technicznej na każdy projekt.
- **Wsparcie:** 3 miesiące darmowego wsparcia i drobnych zmian "na start".

## Technologia i Architektura
Projekt oparty na fundamentalnych technologiach webowych bez ciężkich frameworków (Vanilla stack).

### Pliki
- `index.html`: Główna struktura semantyczna.
- `style.css`: Style, definicje zmiennych (`:root`), responsywność.
- `script.js`: Logika interfejsu (motywy, animacje, nawigacja).
- `assets/`: Katalog na obrazy i media (np. zdjęcia profilowe, ikony).

### CSS Design System
- **Zmienne:** Zdefiniowane w `:root` (np. `--accent-primary`, `--bg-surface`).
- **Motywy:** Obsługa Light/Dark mode via atrybut `data-theme="dark"` na elemencie `<html>`.
- **Typografia:** Nagłówki: 'Outfit', Tekst: 'Inter'.
- **Efekty:**
    - Gradienty na tekstach i przyciskach.
    - Cienie (`--shadow-sm`, `--shadow-md`).
    - Animacje wjazdu (`.reveal`, `fade-in-up`).
- **Przyciski:** `.btn-primary` (gradientowe tło), `.btn-secondary` (obrys).

### JavaScript
- **Zależności:** Brak (Pure Vanilla JS).
- **Funkcjonalności:**
    - Przełącznik motywu z zapisem do `localStorage`.
    - `IntersectionObserver` do animacji wchodzenia elementów (`.reveal`) i pasków umiejętności.
    - Aktywne linki w nawigacji podczas scrollowania.

## Wytyczne Stylistyczne dla Claude Code
Podczas edycji lub rozwijania strony kieruj się następującymi zasadami:

1.  **Styl Kodowania:**
    - Utrzymuj prostotę (KISS). Nie wprowadzaj jQuery, Bootstrapa ani Tailwinda, jeśli nie jest to konieczne.
    - Używaj istniejących klas narzędziowych i zmiennych CSS.
    - Zachowuj spójność wcięć i formatowania.

2.  **Styl Komunikacji (Copywriting):**
    - **Tone of voice:** Ekspercki, ale zrozumiały. Inżynierski konkret połączony z językiem korzyści biznesowych.
    - **Słowa klucze:** Bezpieczeństwo, szybkość, spokój, gwarancja, precyzja, zaufanie.
    - **Narracja:** "Zdejmuję z Ciebie techniczny ciężar". Klient ma się czuć zaopiekowany.

3.  **Rozwój:**
    - Nowe sekcje powinny korzystać z klasy `.container` dla spójnej szerokości.
    - Wszystkie nowe elementy interaktywne muszą być obsługiwane w Dark Mode.
