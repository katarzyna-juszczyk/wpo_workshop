var data = {
    "Ogólne techniki optymalizacji ładowania": [
        "Performance golden rule",
        "Bandwidth vs latency",
        "Minifikacja zasobów",
        "Kompresja (gzip, brotli)",
        "HTTP cache (Cache-Control, ETag)",
        "Service Workers - implementacja przykładowej strategii cache’owania",
        "Resource hints (np. preload, prerender)",
        "CDN",
        "Reguła 14kB",
        "HTTP/2 - wpływ na techniki optymalizacji",
        "Client Side Render vs Server Side Render"
    ],
    "Ładowanie CSS": [
        "Blokowanie renderowania",
        "Minifikacja (cssnano, csso)",
        "Sekcja head",
        "Skrócony zapis CSS",
        "Płaskie selektory",
        "Usuwanie nieużywanego CSS",
        "Usuwanie duplikacji (csscss)",
        "Mobile first jako technika optymalizacji",
        "@import vs link",
        "Krytyczny CSS (above the fold)"
    ],
    "Ładowanie JS": [
        "Blokowanie parsowania",
        "Minifikacja (UglifyJS2)",
        "Łączenie skryptów",
        "Defer vs async",
        "Defer vs skrypty na końcu body",
        "Lekkie alternatywy dla popularnych bibliotek",
        "Vanilla JS",
        "Prekompilacja szablonów",
        "Bundle collapsing",
        "Tree-shaking",
        "Porównanie czasu ładowania popularnych frameworków JS",
        "Porównanie bundlerów JS pod kątem wielkości plików",
    ],
    "Ładowanie czcionek": [
        "Wybór optymalnej czcionki",
        "Konwersja typów czcionek (ttf2eot, ttf2woff, ttf2woff2)",
        "Optymalna kaskada @font-face",
        "Font subsetting (fontmin)",
        "Flash of Unstyled Text vs Flash of Invisible Text",
        "Nieblokujące ładowanie (font-display, Font Loading API)"
    ],
    "Ładowanie obrazków": [
        "Raster vs vector",
        "Obrazki w HTML vs obrazki w CSS",
        "img@srcset",
        "picture",
        "Optymalizacja JPEG i PNG (imagemin)",
        "WebP (imagemin-webp)",
        "Lazy loading (blazy)",
        "Sprites (svg-sprite)"
    ],
    "Animacje": [
        "60fps",
        "Jank i analiza wolnych ramek",
        "Forced synchronous layout",
        "requestAnimationFrame",
        "Paint flashing",
        "Animacje w osobnej warstwie",
        "Animacje w CSS vs animacje w JS",
        "Optymalizacje renderowania Virtual DOM (na przykładzie Elm i React)"
    ],
    "Przeglądarka": [
        "Critical Rendering Path",
        "DOM",
        "CSSOM",
        "Render Tree",
        "Layout",
        "Paint"
    ],
    "Metryki": [
        "Time to First Byte",
        "Time to First Paint",
        "DOM Content Loaded",
        "Time to First Meaningful Paint",
        "Time to Interactive",
        "Load Time",
        "Speed Index",
        "Performance budget",
        "Analiza wykresów typu waterfall i flame chart"
    ],
    "Narzędzia": [
        "Chrome DevTools (Network, Timeline, Audits, Rendering)",
        "npm jako narzędzie do budowania i automatyzacji optymalizacji",
        "Narzędzia oparte o reguły (np. PageSpeed Insights)",
        "Web Page Test",
        "Continuous Web Performance Testing z webpagetest-api"
    ]
};

function sectionItem(item) {
    return `<li>${item}</li>`;
}

function section(name, items) {
    return `<section class="main-content__section">
                <h2 class="main-content__section-header">${name}</h2>
                <ul class="main-content__section-group">
                  ${items.map(sectionItem).join("\n")}
                </ul>
            </section>`;
}

function renderToString(data) {
    return Object.keys(data).map(function (name) {
        return section(name, data[name]);
    }).join("\n");
}

console.log(renderToString(data));

