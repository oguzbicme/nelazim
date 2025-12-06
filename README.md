<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8" />
  <title>nelazim.com – Ne lazımsa, burada.</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Google Font: Poppins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>
    :root {
      --blue-main: #1C3F78;      /* L1 tonu */
      --blue-dark: #162C63;
      --blue-light: #e6edf9;
      --text-light: #ffffff;
      --text-dark: #0f172a;
      --card-radius: 16px;
      --shadow-soft: 0 12px 30px rgba(0, 0, 0, 0.18);
      --shadow-strong: 0 18px 45px rgba(15,23,42,0.45);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--blue-main);
      color: var(--text-light);
      min-height: 100vh;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    button {
      font-family: inherit;
    }

    .page {
      max-width: 1440px;
      margin: 0 auto;
      padding: 24px 24px 64px;
    }

    /* HEADER */
    header {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 20px;
    }

    .logo {
      font-weight: 700;
      font-size: 1.4rem;
      letter-spacing: 0.03em;
      cursor: pointer;
    }

    .search-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      background: #f9fafb;
      border-radius: 999px;
      padding: 0 18px;
      height: 46px;
      box-shadow: 0 4px 16px rgba(15, 23, 42, 0.15);
    }

    .search-wrapper input {
      border: none;
      outline: none;
      flex: 1;
      background: transparent;
      font-size: 0.9rem;
      color: #111827;
    }

    .search-wrapper input::placeholder {
      color: #9ca3af;
    }

    .main-nav {
      display: flex;
      gap: 14px;
      margin-left: 8px;
    }

    .nav-link {
      font-size: 0.86rem;
      padding: 6px 10px;
      border-radius: 999px;
      cursor: pointer;
      border: 1px solid transparent;
      color: rgba(241,245,249,0.9);
      transition: background 0.2s, border-color 0.2s, color 0.2s;
      white-space: nowrap;
    }

    .nav-link:hover {
      background: rgba(15,23,42,0.35);
      border-color: rgba(248,250,252,0.75);
    }

    .nav-link.active {
      background: #ffffff;
      color: var(--blue-dark);
      border-color: transparent;
      box-shadow: 0 8px 24px rgba(15,23,42,0.4);
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-icons {
      display: flex;
      gap: 8px;
      font-size: 1.1rem;
    }

    .icon-btn {
      position: relative;
      width: 36px;
      height: 36px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s, transform 0.15s, border-color 0.2s;
      background: transparent;
      color: inherit;
    }

    .icon-btn:hover {
      background: rgba(15,23,42,0.18);
      transform: translateY(-1px);
      border-color: rgba(255,255,255,0.8);
    }

    .cart-badge {
      position: absolute;
      top: -6px;
      right: -4px;
      min-width: 16px;
      height: 16px;
      border-radius: 999px;
      background: #ef4444;
      color: #fff;
      font-size: 0.65rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
    }

    .user-name {
      font-size: 0.8rem;
      opacity: 0.9;
      max-width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* GENERIC BUTTONS */
    .btn-primary,
    .btn-outline {
      padding: 10px 20px;
      border-radius: 999px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      border: 1px solid transparent;
      transition: background 0.2s, color 0.2s, transform 0.15s, box-shadow 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn-primary {
      background: #ffffff;
      color: var(--blue-dark);
      box-shadow: var(--shadow-soft);
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 16px 40px rgba(15,23,42,0.35);
    }

    .btn-outline {
      background: transparent;
      color: #e5e7eb;
      border-color: rgba(248,250,252,0.8);
    }

    .btn-outline:hover {
      background: rgba(15,23,42,0.2);
    }

    .btn-small {
      padding: 8px 14px;
      font-size: 0.8rem;
    }

    .btn-ghost {
      background: transparent;
      border-radius: 999px;
      border: none;
      font-size: 0.78rem;
      padding: 4px 8px;
      cursor: pointer;
      color: #ef4444;
    }

    .btn-ghost:hover {
      background: rgba(239,68,68,0.08);
    }

    /* LAYOUT */
    .view {
      display: none;
      margin-top: 12px;
    }

    .view.active {
      display: block;
    }

    .hero-and-cards {
      display: grid;
      grid-template-columns: minmax(0, 2.2fr) minmax(0, 1.8fr);
      gap: 40px;
      margin-bottom: 40px;
      margin-top: 16px;
    }

    .hero {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .hero-title {
      font-size: clamp(2.4rem, 3vw, 3rem);
      font-weight: 700;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 0.98rem;
      max-width: 420px;
      color: rgba(241,245,249,0.88);
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 8px;
    }

    .hero-icons {
      display: grid;
      gap: 12px;
      justify-content: end;
    }

    .hero-icon-card {
      border-radius: 20px;
      border: 1px solid rgba(226, 232, 240, 0.7);
      width: 96px;
      height: 96px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      color: #e5e7eb;
    }

    .hero-icons-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .text-light-muted {
      font-size: 0.86rem;
      color: rgba(226,232,240,0.9);
    }

    /* ANA MODÜL KARTLARI */
    .modules {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .card {
      background: #ffffff;
      border-radius: var(--card-radius);
      padding: 24px 22px;
      box-shadow: var(--shadow-soft);
      color: var(--text-dark);
      display: flex;
      flex-direction: column;
      gap: 12px;
      cursor: pointer;
      transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.2s;
    }

    .card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-strong);
    }

    .card-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: 1px solid #d1d5db;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      color: var(--blue-dark);
      margin-bottom: 6px;
    }

    .card-title {
      font-weight: 600;
      font-size: 1rem;
    }

    .card-desc {
      font-size: 0.86rem;
      color: #6b7280;
    }

    /* KATEGORİLER */
    .section-title {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
      margin-bottom: 40px;
    }

    .category-card {
      background: #ffffff;
      border-radius: var(--card-radius);
      padding: 18px 16px;
      box-shadow: 0 10px 26px rgba(15,23,42,0.25);
      color: var(--text-dark);
      display: flex;
      flex-direction: column;
      gap: 10px;
      cursor: pointer;
      transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.18s;
    }

    .category-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 42px rgba(15,23,42,0.33);
      background: #f9fafb;
    }

    .category-icon {
      width: 36px;
      height: 36px;
      border-radius: 999px;
      border: 1px solid #d1d5db;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      color: var(--blue-dark);
    }

    .category-name {
      font-size: 0.92rem;
      font-weight: 500;
    }

    /* CONTENT CARD GENEL */
    .content-card {
      background: #ffffff;
      border-radius: var(--card-radius);
      padding: 22px 22px 26px;
      box-shadow: var(--shadow-soft);
      color: var(--text-dark);
      margin-bottom: 24px;
    }

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 4px 10px;
      border-radius: 999px;
      font-size: 0.75rem;
      font-weight: 500;
      background: var(--blue-light);
      color: var(--blue-dark);
    }

    /* GRIDLİ ALANLAR */
    .products-grid,
    .services-grid,
    .ai-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0,1fr));
      gap: 18px;
    }

    .product-card,
    .service-card,
    .ai-card {
      border-radius: 14px;
      border: 1px solid #e5e7eb;
      padding: 14px 14px 16px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      background: #ffffff;
      transition: box-shadow 0.18s ease, transform 0.18s ease, border-color 0.18s ease;
      cursor: pointer;
    }

    .product-card:hover,
    .service-card:hover,
    .ai-card:hover {
      transform: translateY(-3px);
      border-color: #cbd5f5;
      box-shadow: 0 16px 40px rgba(15,23,42,0.22);
    }

    .product-category {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #6b7280;
    }

    .product-name {
      font-size: 0.9rem;
      font-weight: 600;
    }

    .product-meta {
      font-size: 0.8rem;
      color: #6b7280;
    }

    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 6px;
      gap: 8px;
    }

    .price {
      font-weight: 600;
      font-size: 0.92rem;
      color: var(--blue-dark);
    }

    .tag {
      font-size: 0.74rem;
      padding: 2px 8px;
      border-radius: 999px;
      border: 1px solid #e5e7eb;
      color: #4b5563;
    }

    .ai-card .tag {
      border-color: #c4d3ff;
      color: #334155;
    }

    /* GÖRSELLER */
    .product-img,
    .service-img,
    .ai-img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    .service-img {
      height: 150px;
    }

    .ai-img {
      height: 150px;
    }

    /* FORM / LOGIN */
    .form-group {
      margin-bottom: 14px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 0.86rem;
    }

    .form-group label {
      font-weight: 500;
      color: #0f172a;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      border-radius: 10px;
      border: 1px solid #d1d5db;
      padding: 8px 10px;
      font-size: 0.9rem;
      font-family: inherit;
      outline: none;
      transition: border-color 0.18s, box-shadow 0.18s;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.35);
    }

    .form-group textarea {
      min-height: 90px;
      resize: vertical;
    }

    /* CART */
    .cart-empty {
      font-size: 0.9rem;
      color: #6b7280;
    }

    .cart-items {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 14px;
    }

    .cart-item {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      padding: 10px 12px;
      border-radius: 10px;
      background: #f9fafb;
      font-size: 0.86rem;
      align-items: center;
    }

    .cart-item-main {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .cart-item-name {
      font-weight: 500;
      color: #0f172a;
    }

    .cart-item-meta {
      font-size: 0.78rem;
      color: #6b7280;
    }

    .cart-item-actions {
      display: flex;
      align-items: center;
      gap: 6px;
      white-space: nowrap;
    }

    .badge {
      padding: 2px 8px;
      border-radius: 999px;
      font-size: 0.75rem;
      border: 1px solid #e5e7eb;
      color: #4b5563;
    }

    /* ABOUT */
    .about-text {
      font-size: 0.9rem;
      color: #111827;
      line-height: 1.6;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 2.2fr 1.4fr;
      gap: 22px;
      margin-top: 14px;
    }

    .about-highlight {
      background: #0f172a;
      color: #e5e7eb;
      border-radius: 14px;
      padding: 16px 18px;
      font-size: 0.86rem;
    }

    .about-highlight strong {
      color: #ffffff;
    }

    /* ÜRÜN DETAY SAYFASI */
    .product-detail-card {
      max-width: 960px;
    }

    .product-detail-layout {
      display: grid;
      grid-template-columns: 1.4fr 1.6fr;
      gap: 22px;
      margin-top: 18px;
      align-items: flex-start;
    }

    .product-detail-img {
      width: 100%;
      border-radius: 14px;
      object-fit: cover;
      max-height: 420px;
    }

    .product-detail-info p {
      margin-bottom: 8px;
    }

    .product-detail-meta {
      font-size: 0.85rem;
      color: #6b7280;
    }

    .product-detail-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 14px;
      gap: 12px;
      flex-wrap: wrap;
    }

    /* FOOTER */
    footer {
      margin-top: 32px;
      border-top: 1px solid rgba(255,255,255,0.2);
      padding-top: 20px;
      font-size: 0.8rem;
      color: rgba(226,232,240,0.8);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 10px;
    }

    footer .links {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }

    footer a {
      font-size: 0.8rem;
      opacity: 0.9;
    }

    footer a:hover {
      text-decoration: underline;
    }

    /* RESPONSIVE */
    @media (max-width: 1200px) {
      .products-grid,
      .services-grid,
      .ai-grid {
        grid-template-columns: repeat(2, minmax(0,1fr));
      }

      .product-detail-layout {
        grid-template-columns: minmax(0,1fr);
      }
    }

    @media (max-width: 1024px) {
      .page {
        padding: 20px 16px 40px;
      }

      .hero-and-cards {
        grid-template-columns: minmax(0,1fr);
      }

      .hero-icons {
        justify-content: flex-start;
      }

      .modules {
        grid-template-columns: repeat(2,minmax(0,1fr));
      }

      .categories {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .main-nav {
        display: none;
      }

      .about-grid {
        grid-template-columns: minmax(0,1fr);
      }

      .product-detail-card {
        max-width: 100%;
      }
    }

    @media (max-width: 640px) {
      header {
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
      }

      .header-right {
        justify-content: flex-end;
        width: 100%;
      }

      .hero-actions {
        flex-direction: column;
        align-items: stretch;
      }

      .modules {
        grid-template-columns: minmax(0,1fr);
      }

      .categories {
        grid-template-columns: minmax(0,1fr);
      }

      .products-grid,
      .services-grid,
      .ai-grid {
        grid-template-columns: minmax(0,1fr);
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <!-- HEADER -->
    <header>
      <div class="logo" data-view="home">nelazim.com</div>

      <div class="search-wrapper">
        <input type="text" placeholder="Ürün, hizmet veya yapay zekâ arayın..." id="global-search" />
      </div>

      <nav class="main-nav">
        <button class="nav-link active" data-view="home">Ana Sayfa</button>
        <button class="nav-link" data-view="products">Ürünler</button>
        <button class="nav-link" data-view="services">Hizmetler</button>
        <button class="nav-link" data-view="ai">Yapay Zekâ</button>
        <button class="nav-link" data-view="about">Hakkımızda</button>
      </nav>

      <div class="header-right">
        <div class="user-name" id="user-name-label"></div>
        <div class="header-icons">
          <button class="icon-btn" id="profile-btn" aria-label="Profil" title="Kullanıcı girişi">
            👤
          </button>
          <button class="icon-btn" id="cart-btn" aria-label="Sepet" title="Sepet">
            🛒
            <span class="cart-badge" id="cart-count" style="display:none;">0</span>
          </button>
        </div>
      </div>
    </header>

    <!-- ANA SAYFA -->
    <main id="view-home" class="view active">
      <section class="hero-and-cards">
        <div class="hero">
          <h1 class="hero-title">Ne lazımsa,<br />burada.</h1>
          <p class="hero-subtitle">
            Ürünler, hizmetler ve yapay zekâ araçları tek platformda.
          </p>

          <div class="hero-actions">
            <button class="btn-primary" data-view="products">Ürünlere Göz At</button>
            <button class="btn-outline" data-view="ai">AI Asistanı Dene</button>
          </div>

          <p class="text-light-muted">
            Çok satıcılı pazar yeri, profesyonel hizmetler ve akıllı yapay zekâ araçları tek çatı altında buluşuyor.
          </p>
        </div>

        <div class="hero-icons">
          <div class="hero-icon-card">🛠️</div>
          <div class="hero-icons-grid">
            <div class="hero-icon-card">🛍️</div>
            <div class="hero-icon-card">🧠</div>
          </div>
        </div>
      </section>

      <section class="modules">
        <div class="card" data-view="products">
          <div class="card-icon">🛍️</div>
          <div class="card-title">Ürünler</div>
          <div class="card-desc">
            Farklı satıcıların mağazalarıyla çok satıcılı pazar yeri.
          </div>
        </div>
        <div class="card" data-view="services">
          <div class="card-icon">🛠️</div>
          <div class="card-title">Hizmetler</div>
          <div class="card-desc">
            Profesyonel hizmet verenlerle ihtiyacını buluştur.
          </div>
        </div>
        <div class="card" data-view="ai">
          <div class="card-icon">🧠</div>
          <div class="card-title">Yapay Zekâ Araçları</div>
          <div class="card-desc">
            AI asistan, reklam metni, ürün açıklaması ve daha fazlası.
          </div>
        </div>
      </section>

      <section>
        <h2 class="section-title">Öne Çıkan Kategoriler</h2>

        <div class="categories">
          <div class="category-card" data-category="Moda">
            <div class="category-icon">👕</div>
            <div class="category-name">Moda</div>
            <p class="card-desc">Tişört, hoodie ve daha fazlası.</p>
          </div>
          <div class="category-card" data-category="Teknoloji">
            <div class="category-icon">💻</div>
            <div class="category-name">Teknoloji</div>
            <p class="card-desc">Kulaklık, aksesuar ve dijital ürünler.</p>
          </div>
          <div class="category-card" data-category="Ev Hizmetleri">
            <div class="category-icon">🏠</div>
            <div class="category-name">Ev Hizmetleri</div>
            <p class="card-desc">Temizlik ve tadilat çözümleri.</p>
          </div>
          <div class="category-card" data-category="Dijital AI Çözümleri">
            <div class="category-icon">🧩</div>
            <div class="category-name">Dijital AI Çözümleri</div>
            <p class="card-desc">AI bot, metin ve görsel araçları.</p>
          </div>
        </div>

        <p class="text-light-muted">
          Bir kategoriye tıkladığında o kategoriye ait örnek ürünleri görebilirsin.
        </p>
      </section>
    </main>

    <!-- ÜRÜNLER SAYFASI -->
    <section id="view-products" class="view">
      <div class="content-card">
        <div class="content-header">
          <div>
            <span class="pill">Ürünler</span>
            <h2 class="section-title" style="margin-top:8px;">Öne Çıkan Ürünler</h2>
          </div>
          <span class="text-light-muted" style="color:#6b7280;">
            Kategoriye göre filtrelemek için üstteki aramayı veya ana sayfadaki kartları kullanabilirsin.
          </span>
        </div>

        <div class="products-grid" id="products-grid">
          <!-- JS ile doldurulacak -->
        </div>
      </div>
    </section>

    <!-- HİZMETLER SAYFASI -->
    <section id="view-services" class="view">
      <div class="content-card">
        <div class="content-header">
          <div>
            <span class="pill">Hizmetler</span>
            <h2 class="section-title" style="margin-top:8px;">Örnek Hizmetler</h2>
          </div>
          <span class="text-light-muted" style="color:#6b7280;">
            Teklif akışı şu an örnek amaçlıdır, gerçek ödeme sistemi bağlı değildir.
          </span>
        </div>

        <div class="services-grid">
          <div class="service-card">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600"
              alt="Sosyal medya reklam yönetimi"
              class="service-img"
            />
            <div class="product-category">Sosyal Medya Reklamcılığı</div>
            <div class="product-name">Instagram & TikTok Reklam Yönetimi</div>
            <div class="product-meta">Hedef kitle analizi, kreatif fikir, A/B testleri.</div>
            <div class="product-footer">
              <span class="price">Başlangıç: 1.500₺</span>
              <button class="btn-outline btn-small">Teklif Al</button>
            </div>
          </div>

          <div class="service-card">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600"
              alt="Özel koleksiyon tasarımı"
              class="service-img"
            />
            <div class="product-category">Moda / Tekstil</div>
            <div class="product-name">Marka İçin Özel Koleksiyon Tasarımı</div>
            <div class="product-meta">Sana özel kapsül koleksiyon ve üretim danışmanlığı.</div>
            <div class="product-footer">
              <span class="price">Proje Bazlı</span>
              <button class="btn-outline btn-small">İletişime Geç</button>
            </div>
          </div>

          <div class="service-card">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
              alt="AI danışmanlık"
              class="service-img"
            />
            <div class="product-category">AI Danışmanlık</div>
            <div class="product-name">İş Süreçlerine Yapay Zekâ Entegrasyonu</div>
            <div class="product-meta">Chatbot, metin otomasyonu ve veri analizi çözümleri.</div>
            <div class="product-footer">
              <span class="price">Başlangıç: 5.000₺</span>
              <button class="btn-outline btn-small">Görüşme Planla</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- YAPAY ZEKÂ SAYFASI -->
    <section id="view-ai" class="view">
      <div class="content-card">
        <div class="content-header">
          <div>
            <span class="pill">Yapay Zekâ Araçları</span>
            <h2 class="section-title" style="margin-top:8px;">nelazim AI Merkezi</h2>
          </div>
          <span class="text-light-muted" style="color:#6b7280;">
            Bu bölüm demo amaçlıdır; gerçek API entegrasyonu daha sonra eklenebilir.
          </span>
        </div>

        <div class="ai-grid">
          <div class="ai-card">
            <img
              src="https://images.unsplash.com/photo-1676299081847-824b2fa2a343?w=600"
              alt="Genel amaçlı AI chatbot"
              class="ai-img"
            />
            <div class="product-category">Chatbot</div>
            <div class="product-name">Genel Amaçlı Sohbet Asistanı</div>
            <div class="product-meta">
              Müşterilerin sorularını yanıtlayan, sipariş durumunu anlatan ve ürün öneren akıllı asistan.
            </div>
            <div class="product-footer">
              <span class="tag">Demo</span>
              <button class="btn-primary btn-small">Simülasyonu Aç</button>
            </div>
          </div>

          <div class="ai-card">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600"
              alt="Ürün açıklaması AI"
              class="ai-img"
            />
            <div class="product-category">İçerik Üretimi</div>
            <div class="product-name">Ürün Açıklaması Oluşturucu</div>
            <div class="product-meta">
              Sadece başlık ve birkaç anahtar kelime ver, açıklamayı AI yazsın.
            </div>
            <div class="product-footer">
              <span class="tag">Yakında</span>
              <button class="btn-outline btn-small">Detay Gör</button>
            </div>
          </div>

          <div class="ai-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600"
              alt="Reklam metni AI"
              class="ai-img"
            />
            <div class="product-category">Reklam</div>
            <div class="product-name">Sosyal Medya Reklam Metni Asistanı</div>
            <div class="product-meta">
              Instagram, TikTok ve Google Ads için farklı tonlarda kopyalar üret.
            </div>
            <div class="product-footer">
              <span class="tag">Beta</span>
              <button class="btn-outline btn-small">Örnek Üret</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HAKKIMIZDA -->
    <section id="view-about" class="view">
      <div class="content-card">
        <span class="pill">Hakkımızda</span>
        <h2 class="section-title" style="margin-top:8px;">nelazim.com Nedir?</h2>

        <div class="about-grid">
          <div class="about-text">
            <p>
              nelazim.com, modern kullanıcının “Ne lazımsa, burada olsun.” beklentisiyle
              tasarlanmış bir süper platform fikridir. Tekstil, sosyal medya reklamcılığı ve
              yapay zekâ deneyimlerinden beslenerek; ürünleri, hizmetleri ve dijital AI araçlarını
              tek ekosistemde bir araya getirir.
            </p>
            <br />
            <p>
              Platformun vizyonu; küçük işletmeler, girişimciler ve bireysel kullanıcılar için
              akıllı ve erişilebilir bir altyapı sunmaktır. Klasik pazar yeri mantığını, hizmet
              platformlarını ve yapay zekâyı tek bir arayüzde buluşturmayı hedefler.
            </p>
            <br />
            <p>
              Bu sayfa şu anda tasarım ve konsept aşamasının çalışan prototipidir. Gerçek
              ürünler, hizmet verenler ve yapay zekâ modelleri entegre edildiğinde tam sürüm
              hâline gelecektir.
            </p>
          </div>

          <div class="about-highlight">
            <strong>Marka Sözü:</strong><br />
            <span>“Ne lazımsa, burada.”</span>
            <br /><br />
            <strong>Odak Noktaları:</strong>
            <ul style="margin-top:6px; padding-left:18px;">
              <li>Çok satıcılı ürün pazaryeri</li>
              <li>Profesyonel hizmet platformu</li>
              <li>Yapay zekâ destekli araçlar</li>
            </ul>
            <br />
            <strong>Tasarım İlkesi:</strong><br />
            Minimal, profesyonel ve teknolojik.
          </div>
        </div>
      </div>
    </section>

    <!-- KULLANICI GİRİŞİ -->
    <section id="view-login" class="view">
      <div class="content-card" style="max-width:480px;">
        <span class="pill">Kullanıcı Girişi</span>
        <h2 class="section-title" style="margin-top:8px;">Hesabına giriş yap</h2>

        <p class="product-meta" style="margin-bottom:14px; color:#6b7280;">
          Bu demo sürümde giriş; sadece tarayıcıda saklanan basit bir isim alanıdır.
          Gerçek kimlik doğrulama sonradan entegre edilebilir.
        </p>

        <form id="login-form">
          <div class="form-group">
            <label for="login-name">Adınız / Mağaza adınız</label>
            <input id="login-name" type="text" placeholder="Örn: Oğuz Biçme" required />
          </div>
          <div class="form-group">
            <label for="login-email">E-posta (opsiyonel)</label>
            <input id="login-email" type="email" placeholder="ornek@mail.com" />
          </div>
          <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">
            Giriş Yap
          </button>
        </form>
      </div>
    </section>

    <!-- SEPET -->
    <section id="view-cart" class="view">
      <div class="content-card" style="max-width:640px;">
        <div class="content-header">
          <div>
            <span class="pill">Sepet</span>
            <h2 class="section-title" style="margin-top:8px;">Seçtiğin Ürünler</h2>
          </div>
          <span class="text-light-muted" style="color:#6b7280;">
            Ödemeler henüz canlı değildir, bu sadece bir demo sepetidir.
          </span>
        </div>

        <div id="cart-content">
          <!-- JS ile doldurulacak -->
        </div>
      </div>
    </section>

    <!-- ÜRÜN DETAY SAYFASI -->
    <section id="view-product-detail" class="view">
      <div class="content-card product-detail-card">
        <button class="btn-outline btn-small" id="product-detail-back">
          ← Ürünlere Dön
        </button>

        <div class="product-detail-layout">
          <div>
            <img
              id="product-detail-image"
              class="product-detail-img"
              src=""
              alt="Ürün görseli"
            />
          </div>
          <div class="product-detail-info">
            <div class="pill" id="product-detail-category"></div>
            <h2 class="section-title" id="product-detail-name" style="margin-top:10px;"></h2>
            <p class="product-detail-meta" id="product-detail-seller"></p>
            <p class="product-detail-meta" id="product-detail-description"></p>

            <div class="product-detail-footer">
              <div>
                <div class="price" id="product-detail-price"></div>
                <div class="tag" id="product-detail-badge" style="margin-top:6px;"></div>
              </div>
              <button class="btn-primary" id="product-detail-add">
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div>© <span id="year"></span> nelazim.com · Ne lazımsa, burada.</div>
      <div class="links">
        <a href="#" data-view="about">Hakkımızda</a>
        <a href="#" data-view="products">Satıcı Ol (Demo)</a>
        <a href="#" data-view="services">Hizmet Veren Ol (Demo)</a>
        <a href="#" data-view="home">Destek</a>
      </div>
    </footer>
  </div>

  <script>
    // Yıl
    document.getElementById("year").textContent = new Date().getFullYear();

    // BASİT SPA VIEW SİSTEMİ
    const views = document.querySelectorAll(".view");
    const navLinks = document.querySelectorAll(".nav-link");
    const logo = document.querySelector(".logo");

    function showView(id) {
      views.forEach(v => v.classList.remove("active"));
      const el = document.getElementById("view-" + id);
      if (el) el.classList.add("active");

      // nav state
      navLinks.forEach(n => {
        if (n.dataset.view === id) n.classList.add("active");
        else n.classList.remove("active");
      });
    }

    // Header nav tıklamaları
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        showView(link.dataset.view);
      });
    });

    logo.addEventListener("click", () => showView("home"));

    // data-view ile çalışan tüm elementler
    document.querySelectorAll("[data-view]").forEach(el => {
      el.addEventListener("click", (e) => {
        if (el.tagName === "A") e.preventDefault();
        const target = el.dataset.view;
        if (target) showView(target);
      });
    });

    // ÖRNEK ÜRÜN VERİLERİ (GÖRSELLİ & AÇIKLAMALI)
    const products = [
      {
        id: 1,
        name: "Oversize Basic Tişört",
        category: "Moda",
        seller: "Nelazim Textiles",
        price: 249,
        badge: "Yeni",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900",
        description: "Yüksek kaliteli pamuk kumaştan, günlük kullanıma uygun oversize basic tişört."
      },
      {
        id: 2,
        name: "Minimal Hoodie Koleksiyonu",
        category: "Moda",
        seller: "Nelazim Studio",
        price: 549,
        badge: "Sınırlı",
        image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=900",
        description: "Minimal tasarımlı, yumuşak dokulu hoodie koleksiyonu. Unisex kalıp."
      },
      {
        id: 3,
        name: "Kablosuz Bluetooth Kulaklık",
        category: "Teknoloji",
        seller: "TechStore",
        price: 899,
        badge: "Popüler",
        image: "https://images.unsplash.com/photo-1585386959984-a4155223f3c6?w=900",
        description: "Gürültü engelleme destekli, uzun pil ömürlü kablosuz kulaklık."
      },
      {
        id: 4,
        name: "USB-C Çoklu Dönüştürücü",
        category: "Teknoloji",
        seller: "GadgetLab",
        price: 329,
        badge: "Fırsat",
        image: "https://images.unsplash.com/photo-1592833152679-5a8c2bb0e2b0?w=900",
        description: "Laptop ve tabletler için çoklu port desteğine sahip kompakt dönüştürücü."
      },
      {
        id: 5,
        name: "Ev Temizlik Paketi (4 Saat)",
        category: "Ev Hizmetleri",
        seller: "TemizEv Ekibi",
        price: 750,
        badge: "Hizmet",
        image: "https://images.unsplash.com/photo-1581578017429-41d6a4d79929?w=900",
        description: "Profesyonel ekip ile 4 saatlik kapsamlı ev temizlik hizmeti."
      },
      {
        id: 6,
        name: "Mini Tadilat & Onarım Ziyareti",
        category: "Ev Hizmetleri",
        seller: "UstaKapıda",
        price: 1250,
        badge: "Hizmet",
        image: "https://images.unsplash.com/photo-1598515213692-d8e9db293e96?w=900",
        description: "Evdeki küçük tamir ve tadilat işleri için hızlı çözüm ziyareti."
      },
      {
        id: 7,
        name: "AI ChatBot Starter Paketi",
        category: "Dijital AI Çözümleri",
        seller: "nelazim AI",
        price: 3500,
        badge: "Dijital",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900",
        description: "Web siten için hazır entegrasyonlu, çok dilli AI sohbet botu paketi."
      },
      {
        id: 8,
        name: "Sosyal Medya İçerik AI Paketi",
        category: "Dijital AI Çözümleri",
        seller: "nelazim AI",
        price: 2900,
        badge: "Dijital",
        image: "https://images.unsplash.com/photo-1676299081847-824b2fa2a343?w=900",
        description: "Instagram, TikTok ve YouTube için otomatik içerik üreten AI çözümleri."
      }
    ];

    const productsGrid = document.getElementById("products-grid");

    // ÜRÜN KARTLARINI RENDER ET
    function renderProducts(filterCategory = null, searchTerm = "") {
      productsGrid.innerHTML = "";
      const term = searchTerm.trim().toLowerCase();

      products
        .filter(p => !filterCategory || p.category === filterCategory)
        .filter(p =>
          !term ||
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.seller.toLowerCase().includes(term)
        )
        .forEach(p => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.dataset.productId = p.id;

          card.innerHTML = `
            <img src="${p.image}" class="product-img" alt="${p.name}">
            <div class="product-category">${p.category}</div>
            <div class="product-name">${p.name}</div>
            <div class="product-meta">Satıcı: ${p.seller}</div>
            <div class="product-footer">
              <span class="price">${p.price.toLocaleString("tr-TR")}₺</span>
              <div style="display:flex;align-items:center;gap:6px;">
                <span class="tag">${p.badge}</span>
                <button class="btn-primary btn-small" data-add-to-cart="${p.id}">
                  Sepete Ekle
                </button>
              </div>
            </div>
          `;
          productsGrid.appendChild(card);
        });

      // Sepete ekle & detay tıklamaları
      productsGrid.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", (event) => {
          const addBtn = event.target.closest("[data-add-to-cart]");
          const id = Number(card.dataset.productId);
          const product = products.find(p => p.id === id);
          if (!product) return;

          if (addBtn) {
            addToCart(product);
          } else {
            openProductDetail(product);
          }
        });
      });
    }

    renderProducts();

    // Kategoriler tıklanınca ürün sayfasına ve filtreye git
    document.querySelectorAll(".category-card").forEach(card => {
      card.addEventListener("click", () => {
        const cat = card.dataset.category;
        showView("products");
        renderProducts(cat);
      });
    });

    // GLOBAL ARAMA
    document.getElementById("global-search").addEventListener("input", (e) => {
      const value = e.target.value;
      renderProducts(null, value);
    });

    // SEPET
    let cart = [];
    const cartCountEl = document.getElementById("cart-count");
    const cartContentEl = document.getElementById("cart-content");
    const cartBtn = document.getElementById("cart-btn");

    function addToCart(product) {
      const existing = cart.find(c => c.id === product.id);
      if (existing) existing.qty += 1;
      else cart.push({ ...product, qty: 1 });
      updateCartUI();
      showView("cart");
    }

    function removeFromCart(id) {
      cart = cart.filter(c => c.id !== id);
      updateCartUI();
    }

    function updateCartUI() {
      const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
      const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

      if (totalCount > 0) {
        cartCountEl.style.display = "flex";
        cartCountEl.textContent = totalCount;
      } else {
        cartCountEl.style.display = "none";
      }

      if (cart.length === 0) {
        cartContentEl.innerHTML = `<p class="cart-empty">Sepetin şu anda boş. Ürünler sayfasından dilediğin ürünü sepete ekleyebilirsin.</p>`;
        return;
      }

      const itemsHtml = cart.map(item => `
        <div class="cart-item">
          <div class="cart-item-main">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-meta">${item.category} · Satıcı: ${item.seller}</div>
          </div>
          <div class="cart-item-actions">
            <span class="badge">Adet: ${item.qty}</span>
            <span class="price">${(item.qty * item.price).toLocaleString("tr-TR")}₺</span>
            <button class="btn-ghost" data-remove="${item.id}">Sil</button>
          </div>
        </div>
      `).join("");

      cartContentEl.innerHTML = `
        <div class="cart-items">${itemsHtml}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <div class="product-meta" style="color:#4b5563;">
            Toplam ürün: <strong>${totalCount}</strong>
          </div>
          <div class="price" style="font-size:1.05rem;">
            Toplam: ${totalPrice.toLocaleString("tr-TR")}₺
          </div>
        </div>
        <button class="btn-primary" style="width:100%;justify-content:center;">
          Ödeme Adımına Geç (Demo)
        </button>
      `;

      // Silme butonları
      cartContentEl.querySelectorAll("[data-remove]").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = Number(btn.dataset.remove);
          removeFromCart(id);
        });
      });
    }

    cartBtn.addEventListener("click", () => {
      showView("cart");
    });

    // LOGIN
    const loginForm = document.getElementById("login-form");
    const profileBtn = document.getElementById("profile-btn");
    const userNameLabel = document.getElementById("user-name-label");

    function loadUserFromStorage() {
      const stored = localStorage.getItem("nelazimUserName");
      if (stored) {
        userNameLabel.textContent = stored;
      }
    }

    loadUserFromStorage();

    profileBtn.addEventListener("click", () => {
      showView("login");
    });

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("login-name").value.trim();
      if (!name) return;
      localStorage.setItem("nelazimUserName", name);
      userNameLabel.textContent = name;
      showView("home");
    });

    // ÜRÜN DETAY SAYFASI LOGİĞİ
    const detailImage = document.getElementById("product-detail-image");
    const detailCategory = document.getElementById("product-detail-category");
    const detailName = document.getElementById("product-detail-name");
    const detailSeller = document.getElementById("product-detail-seller");
    const detailDesc = document.getElementById("product-detail-description");
    const detailPrice = document.getElementById("product-detail-price");
    const detailBadge = document.getElementById("product-detail-badge");
    const detailAddBtn = document.getElementById("product-detail-add");
    const detailBackBtn = document.getElementById("product-detail-back");

    let currentDetailProduct = null;

    function openProductDetail(product) {
      currentDetailProduct = product;
      detailImage.src = product.image;
      detailImage.alt = product.name;
      detailCategory.textContent = product.category;
      detailName.textContent = product.name;
      detailSeller.textContent = "Satıcı: " + product.seller;
      detailDesc.textContent = product.description || "";
      detailPrice.textContent = product.price.toLocaleString("tr-TR") + "₺";
      detailBadge.textContent = product.badge;
      showView("product-detail");
    }

    detailAddBtn.addEventListener("click", () => {
      if (currentDetailProduct) {
        addToCart(currentDetailProduct);
      }
    });

    detailBackBtn.addEventListener("click", () => {
      showView("products");
    });
  </script>
</body>
</html>
