<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CheepShop - Mode & Vêtements</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

<!-- ===== HEADER ===== -->
<header>
  <div class="header-top">
    <div class="logo" onclick="showPage('home')">Cheep<span>Shop</span></div>
    <div class="header-location" onclick="openAddressModal()" title="Changer l'adresse" style="cursor:pointer">
      <span>📍 Livraison à</span>
      <strong id="headerCity">Sélectionner une adresse</strong>
    </div>
    <div class="search-bar">
      <select class="search-cat">
        <option>Toutes catégories</option>
        <option>Femme</option>
        <option>Homme</option>
        <option>Enfant</option>
        <option>Sport</option>
      </select>
      <input class="search-input" id="mainSearch" type="text" placeholder="Rechercher un article, une marque..." onkeydown="if(event.key==='Enter') doSearch()">
      <button class="search-btn" onclick="doSearch()">Rechercher</button>
    </div>
    <div class="header-actions">
      <div class="header-btn account-btn" onclick="toggleAccountMenu()">
        <span id="headerGreeting">Bonjour, connectez-vous</span>
        <strong id="headerAccountLabel">Compte & Listes ▾</strong>
        <div class="account-dropdown" id="accountDropdown">
          <div id="acctNotLogged">
            <button class="acct-login-btn" onclick="event.stopPropagation();closeAccountMenu();openLoginModal()">Se connecter</button>
            <div style="text-align:center;padding:8px 16px 16px;font-size:12px;color:var(--muted)">Nouveau client ? <span class="modal-link" style="display:inline" onclick="event.stopPropagation();closeAccountMenu();openRegisterModal()">Créer un compte</span></div>
          </div>
          <div id="acctLogged" style="display:none">
            <div class="acct-header">
              <div class="acct-avatar" id="acctAvatar">SL</div>
              <div class="acct-name" id="acctName">Utilisateur</div>
              <div class="acct-email" id="acctEmail"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="2d48404c44416d485548405d4148034e4240">[email&#160;protected]</a></div>
            </div>
            <div class="acct-menu">
              <div class="acct-item" onclick="closeAccountMenu();showPage('orders')">📦 Mes commandes</div>
              <div class="acct-item" onclick="closeAccountMenu();openAddressModal()">📍 Mes adresses</div>
              <div class="acct-item" onclick="closeAccountMenu();showPage('cart')">🛍️ Mon panier</div>
              <div class="acct-sep"></div>
              <div class="acct-item" onclick="logout()" style="color:var(--primary)">🚪 Se déconnecter</div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-btn" onclick="showPage('orders')">
        <span>Retours &</span>
        <strong>Commandes</strong>
      </div>
      <div class="header-btn cart-btn" onclick="showPage('cart')">
        <span style="font-size:26px">🛍️</span>
        <strong>Panier</strong>
        <div class="cart-count" id="cartCount">0</div>
      </div>
    </div>
  </div>
  <nav class="header-nav">
    <div class="nav-item" id="nav-home" onclick="navClick('home')">Accueil</div>
    <div class="nav-item" id="nav-Femme" onclick="navClick('Femme')">Femme</div>
    <div class="nav-item" id="nav-Homme" onclick="navClick('Homme')">Homme</div>
    <div class="nav-item" id="nav-Enfant" onclick="navClick('Enfant')">Enfant</div>
    <div class="nav-item" id="nav-Sport" onclick="navClick('Sport')">Sport</div>
    <div class="nav-item" id="nav-Accessoires" onclick="navClick('Accessoires')">Accessoires</div>
    <div class="nav-item nav-promo" id="nav-promo" onclick="navClick('promo')">Soldes -50%</div>
    <div class="nav-item" id="nav-new" onclick="navClick('new')">Nouveautés</div>
  </nav>
</header>

<!-- ===== HOME PAGE ===== -->
<div class="page active" id="page-home">
  <div class="hero">
    <div class="hero-slides" id="heroSlides">
      <div class="hero-slide">
        <div class="hero-content">
          <div class="hero-tag">Nouvelle Collection</div>
          <div class="hero-title">PRINTEMPS<br>2025</div>
          <div class="hero-sub">Découvrez les tendances de la saison. Couleurs pastels, coupes fluides.</div>
          <button class="hero-cta" onclick="filterCategory('Femme')">Découvrir la collection</button>
        </div>
      </div>
      <div class="hero-slide">
        <div class="hero-content">
          <div class="hero-tag">Offre Limitée</div>
          <div class="hero-title">SOLDES<br>-50%</div>
          <div class="hero-sub">Sur plus de 1 000 articles. Stocks limités, profitez-en vite !</div>
          <button class="hero-cta" onclick="filterCategory('Homme')">Voir les offres</button>
        </div>
      </div>
      <div class="hero-slide">
        <div class="hero-content">
          <div class="hero-tag">Collection Sport</div>
          <div class="hero-title">MOVE<br>FREE</div>
          <div class="hero-sub">Sportswear haute performance pour tous vos entraînements.</div>
          <button class="hero-cta" onclick="filterCategory('Sport')">Explorer</button>
        </div>
      </div>
    </div>
    <div class="hero-dots">
      <div class="hero-dot active" onclick="goSlide(0)"></div>
      <div class="hero-dot" onclick="goSlide(1)"></div>
      <div class="hero-dot" onclick="goSlide(2)"></div>
    </div>
  </div>

  <div class="cats-band">
    <div class="cat-pill active" onclick="filterCategory('all')">Tout voir</div>
    <div class="cat-pill" onclick="filterCategory('Femme')">Femme</div>
    <div class="cat-pill" onclick="filterCategory('Homme')">Homme</div>
    <div class="cat-pill" onclick="filterCategory('Enfant')">Enfant</div>
    <div class="cat-pill" onclick="filterCategory('Sport')">Sport</div>
    <div class="cat-pill" onclick="filterCategory('Accessoires')">Accessoires</div>
  </div>

  <div class="main-content">
    <div class="section-header">
      <div class="section-title">Meilleures Ventes</div>
      <div class="see-all" onclick="doSearch()">Voir tout →</div>
    </div>
    <div class="products-grid" id="homeProductsGrid"></div>

    <div class="promo-grid">
      <div class="promo-card" onclick="filterCategory('Femme')">
        <div>
          <div class="promo-label">Tendance du moment</div>
          <div class="promo-title">ROBES D'ÉTÉ</div>
          <div class="promo-sub">Jusqu'à -40% sur la nouvelle collection</div>
        </div>
        <div class="promo-cta">Shopper maintenant</div>
      </div>
      <div class="promo-card">
        <div>
          <div class="promo-label">Flash Sale</div>
          <div class="promo-title">24H</div>
          <div class="promo-sub">Offres exclusives</div>
        </div>
        <div class="promo-cta">J'en profite</div>
      </div>
      <div class="promo-card" onclick="filterCategory('Sport')">
        <div>
          <div class="promo-label">Nouveautés</div>
          <div class="promo-title">SPORT</div>
          <div class="promo-sub">Équipez-vous</div>
        </div>
        <div class="promo-cta">Voir</div>
      </div>
      <div class="promo-card" onclick="filterCategory('Accessoires')">
        <div>
          <div class="promo-label">Complétez votre look</div>
          <div class="promo-title">ACCESSOIRES</div>
          <div class="promo-sub">Sacs, bijoux, chaussures...</div>
        </div>
        <div class="promo-cta">Découvrir</div>
      </div>
    </div>

    <div class="section-header">
      <div class="section-title">Nouveautés</div>
      <div class="see-all" onclick="doSearch()">Voir tout →</div>
    </div>
    <div class="products-grid" id="homeProducts2Grid"></div>
  </div>

  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <span class="logo">Cheep<span>Shop</span></span>
        <p>La mode à prix cassés. Des milliers de références pour femme, homme et enfant. Livraison gratuite dès 49€.</p>
      </div>
      <div class="footer-col"><h4>Aide</h4><a>Mon compte</a><a>Suivi commande</a><a>Retours & échanges</a><a>FAQ</a></div>
      <div class="footer-col"><h4>Boutique</h4><a>Nouveautés</a><a>Soldes</a><a>Marques</a><a>Lookbook</a></div>
      <div class="footer-col"><h4>Légal</h4><a>CGV</a><a>Confidentialité</a><a>Cookies</a><a>Mentions légales</a></div>
    </div>
    <div class="footer-bottom">© 2025 CheepShop. Tous droits réservés. Paiement 100% sécurisé</div>
  </footer>
</div>

<!-- ===== SEARCH PAGE ===== -->
<div class="page" id="page-search">
  <div class="main-content">
    <div class="search-page-layout">
      <aside class="search-sidebar">
        <div class="filter-panel">
          <div class="filter-title">Filtres <span class="filter-reset" onclick="resetFilters()">Réinitialiser</span></div>
          <div class="filter-section">
            <div class="filter-section-title">Catégorie <span>▾</span></div>
            <div class="filter-option"><input type="checkbox" id="f-femme" onchange="applyFilters()"><label for="f-femme">Femme</label><span class="count">(124)</span></div>
            <div class="filter-option"><input type="checkbox" id="f-homme" onchange="applyFilters()"><label for="f-homme">Homme</label><span class="count">(98)</span></div>
            <div class="filter-option"><input type="checkbox" id="f-sport" onchange="applyFilters()"><label for="f-sport">Sport</label><span class="count">(45)</span></div>
            <div class="filter-option"><input type="checkbox" id="f-access" onchange="applyFilters()"><label for="f-access">Accessoires</label><span class="count">(33)</span></div>
          </div>
          <div class="filter-section">
            <div class="filter-section-title">Prix <span>▾</span></div>
            <div class="price-range">
              <input type="range" min="0" max="500" value="500" id="priceRange" oninput="updatePriceFilter(this.value)">
              <div class="price-inputs">
                <input class="price-input" type="number" id="priceMin" placeholder="0 €" value="0">
                <span>—</span>
                <input class="price-input" type="number" id="priceMax" placeholder="500 €" value="500">
              </div>
            </div>
          </div>
          <div class="filter-section">
            <div class="filter-section-title">Marque <span>▾</span></div>
            <div class="filter-option"><input type="checkbox" id="fb-hm"     onchange="applyFilters()"><label for="fb-hm">H&M</label><span class="count">(52)</span></div>
            <div class="filter-option"><input type="checkbox" id="fb-zara"  onchange="applyFilters()"><label for="fb-zara">Zara</label><span class="count">(48)</span></div>
            <div class="filter-option"><input type="checkbox" id="fb-nike"  onchange="applyFilters()"><label for="fb-nike">Nike</label><span class="count">(31)</span></div>
            <div class="filter-option"><input type="checkbox" id="fb-adidas" onchange="applyFilters()"><label for="fb-adidas">Adidas</label><span class="count">(28)</span></div>
            <div class="filter-option"><input type="checkbox" id="fb-levis" onchange="applyFilters()"><label for="fb-levis">Levi's</label><span class="count">(19)</span></div>
          </div>
          <div class="filter-section">
            <div class="filter-section-title">Taille <span>▾</span></div>
            <div class="size-grid">
              <button class="size-btn" onclick="toggleSize(this)">XS</button><button class="size-btn" onclick="toggleSize(this)">S</button>
              <button class="size-btn" onclick="toggleSize(this)">M</button><button class="size-btn" onclick="toggleSize(this)">L</button>
              <button class="size-btn" onclick="toggleSize(this)">XL</button><button class="size-btn" onclick="toggleSize(this)">XXL</button>
            </div>
          </div>
          <button class="apply-filters" onclick="applyFilters()">Appliquer les filtres</button>
        </div>
      </aside>
      <div class="search-results">
        <div class="results-header">
          <div class="results-count" id="resultsCount"><strong>24 résultats</strong> pour "<span id="searchQuery">vêtements</span>"</div>
          <select class="sort-select" onchange="sortProducts(this.value)">
            <option value="relevance">Pertinence</option>
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="rating">Mieux notés</option>
          </select>
        </div>
        <div class="active-filters" id="activeFilters"></div>
        <div class="products-grid" id="searchProductsGrid"></div>
      </div>
    </div>
  </div>
</div>

<!-- ===== PRODUCT PAGE ===== -->
<div class="page" id="page-product">
  <div class="main-content">
    <div class="product-page">
      <div class="breadcrumb">
        <span onclick="showPage('home')">Accueil</span> ›
        <span onclick="showPage('search')">Mode</span> ›
        <span id="breadProduct">Produit</span>
      </div>
      <div class="product-layout">
        <div class="product-gallery">
          <div class="gallery-main">
            <img id="galleryMainImg" src="" alt="Product">
          </div>
          <div class="gallery-thumbs" id="galleryThumbs"></div>
        </div>
        <div class="product-info">
          <div class="product-brand-line" id="pdpBrand">ZARA</div>
          <div class="product-title" id="pdpTitle">Robe Midi Fleurie</div>
          <div class="product-rating">
            <div class="stars" id="pdpStars">★★★★★</div>
            <div class="rating-count" id="pdpRatings" onclick="document.querySelector('.reviews-section').scrollIntoView({behavior:'smooth'})">4.8 (247 avis)</div>
            <div class="rating-verified">Achat vérifié</div>
          </div>
          <div class="product-prices">
            <div class="product-price-now" id="pdpPrice">49,99 €</div>
            <div class="product-price-old" id="pdpOldPrice">89,99 €</div>
            <div class="product-discount" id="pdpDiscount">-44%</div>
          </div>
          <div class="product-desc" id="pdpDesc"></div>
          <div class="product-colors">
            <div class="product-colors-label">Couleur : <span id="pdpColorLabel">Standard</span></div>
            <div class="color-swatches" id="pdpColors"></div>
          </div>
          <div class="product-sizes">
            <div class="product-sizes-label">Taille : <span id="selectedSize">Sélectionner</span><a>Guide des tailles</a></div>
            <div class="sizes-row" id="pdpSizes"></div>
          </div>
          <div class="product-qty">
            <div class="qty-label">Quantité :</div>
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty(-1)">−</button>
              <div class="qty-val" id="qtyVal">1</div>
              <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
          </div>
          <div class="product-actions">
            <button class="btn-add-cart" onclick="addCurrentToCart()">Ajouter au panier</button>
            <button class="btn-buy-now" onclick="buyNow()">Acheter maintenant</button>
            <button class="btn-wishlist" onclick="wishToggle(this)">♡</button>
          </div>
          <div class="product-delivery">
            <div class="delivery-row"><span class="delivery-icon">&#128666;</span><div class="delivery-text"><strong>Livraison gratuite</strong><span>Dès 49€ d'achat • Estimée : Lun. 24 mars</span></div></div>
            <div class="delivery-row"><span class="delivery-icon" style="font-style:normal">&#8617;</span><div class="delivery-text"><strong>Retour gratuit</strong><span>Sous 30 jours</span></div></div>
            <div class="delivery-row"><span class="delivery-icon" style="font-style:normal">&#128274;</span><div class="delivery-text"><strong>Paiement sécurisé</strong><span>CB, PayPal, Apple Pay</span></div></div>
          </div>
        </div>
      </div>

      <!-- ===== SECTION AVIS CLIENTS ===== -->
      <div class="reviews-section">

        <div class="reviews-header">
          <div>
            <div class="reviews-title">Avis clients</div>
            <div style="font-size:14px;color:var(--muted)" id="reviewsSubtitle">Basé sur <strong id="reviewsTotalCount">0</strong> avis vérifiés</div>
          </div>
          <div class="reviews-global-score">
            <div class="reviews-big-score" id="reviewsAvgScore">—</div>
            <div class="reviews-big-stars" id="reviewsAvgStars">☆☆☆☆☆</div>
            <div class="reviews-big-count">sur 5</div>
          </div>
          <div class="reviews-bars" id="reviewsBars"></div>
        </div>

        <!-- Liste des avis -->
        <div class="reviews-list" id="reviewsList"></div>

        <!-- Formulaire d'ajout d'avis -->
        <div class="review-form-section">
          <div class="review-form-title">Laisser un avis</div>
          <div class="review-form-sub">Partagez votre expérience avec les autres acheteurs</div>

          <div style="margin-bottom:20px">
            <div class="star-picker-label">Votre note *</div>
            <div class="star-picker" id="starPicker">
              <button class="star-btn" data-val="1" onclick="setRating(1)">★</button>
              <button class="star-btn" data-val="2" onclick="setRating(2)">★</button>
              <button class="star-btn" data-val="3" onclick="setRating(3)">★</button>
              <button class="star-btn" data-val="4" onclick="setRating(4)">★</button>
              <button class="star-btn" data-val="5" onclick="setRating(5)">★</button>
            </div>
          </div>

          <div class="review-form-grid">
            <div class="form-group">
              <label class="form-label-r">Prénom *</label>
              <input class="form-input-r" type="text" id="reviewName" placeholder="Votre prénom">
            </div>
            <div class="form-group">
              <label class="form-label-r">Titre de l'avis *</label>
              <input class="form-input-r" type="text" id="reviewTitle" placeholder="Ex : Très belle qualité !">
            </div>
            <div class="form-group full">
              <label class="form-label-r">Votre avis *</label>
              <textarea class="form-input-r" id="reviewBody" rows="4" placeholder="Décrivez votre expérience avec ce produit (taille, qualité, confort...)"></textarea>
            </div>
          </div>
          <button class="btn-submit-review" onclick="submitReview()">Publier mon avis →</button>
          <div class="review-success-msg" id="reviewSuccessMsg">
            Merci ! Votre avis a été publié avec succès.
          </div>
        </div>

      </div><!-- /reviews-section -->

    </div>
  </div>
</div>

<!-- ===== CART PAGE ===== -->
<div class="page" id="page-cart">
  <div class="main-content">
    <div class="cart-layout">
      <div>
        <div class="cart-title">Mon Panier</div>
        <div id="cartItems"></div>
      </div>
      <div>
        <div class="cart-summary">
          <div class="summary-title">Récapitulatif</div>
          <div class="summary-row"><span>Sous-total (<span id="cartQtyLabel">0</span> articles)</span><span id="subtotalVal">0,00 €</span></div>
          <div class="summary-row"><span>Livraison</span><span id="shippingVal" style="color:var(--green)">Gratuite</span></div>
          <div class="summary-row"><span>Réduction</span><span id="discountVal" style="color:var(--primary)">-0,00 €</span></div>
          <div class="promo-input-row">
            <input class="promo-input" type="text" placeholder="Code promo (ex: CYBER24)">
            <button class="promo-apply">Appliquer</button>
          </div>
          <div class="summary-row total"><span>Total TTC</span><strong id="totalVal">0,00 €</strong></div>
          <button class="checkout-btn" onclick="showPage('checkout')">Passer au paiement →</button>
          <div class="secure-badges">
            <div class="secure-badge"><span class="icon" style="font-size:18px">&#128274;</span>Sécurisé</div>
            <div class="secure-badge"><span class="icon" style="font-size:18px">&#128179;</span>CB acceptée</div>
            <div class="secure-badge"><span class="icon" style="font-size:18px">&#128666;</span>Livraison rapide</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== CHECKOUT PAGE ===== -->
<div class="page" id="page-checkout">
  <div class="main-content">
    <div class="checkout-layout">
      <div>
        <div class="checkout-title">Paiement</div>
        <div class="checkout-section">
          <div class="checkout-section-title"><div class="step-num">1</div> Adresse de livraison</div>
          <div class="form-grid">
            <div class="form-group-co"><label class="form-label">Prénom</label><input class="form-input" type="text" placeholder="Thomas" value="Thomas"></div>
            <div class="form-group-co"><label class="form-label">Nom</label><input class="form-input" type="text" placeholder="Dupont" value="Dupont"></div>
            <div class="form-group-co full"><label class="form-label">Adresse</label><input class="form-input" type="text" placeholder="12 rue de la Paix"></div>
            <div class="form-group-co"><label class="form-label">Code postal</label><input class="form-input" type="text" placeholder="75001"></div>
            <div class="form-group-co"><label class="form-label">Ville</label><input class="form-input" type="text" placeholder="Paris"></div>
            <div class="form-group-co full"><label class="form-label">Téléphone</label><input class="form-input" type="tel" placeholder="06 12 34 56 78"></div>
          </div>
        </div>
        <div class="checkout-section">
          <div class="checkout-section-title"><div class="step-num">2</div> Mode de paiement</div>
          <div class="payment-methods">
            <div class="pay-method active" onclick="selectPayMethod(this)">Carte bancaire</div>
            <div class="pay-method" onclick="selectPayMethod(this)">🅿️ PayPal</div>
            <div class="pay-method" onclick="selectPayMethod(this)"> Apple Pay</div>
          </div>
          <div id="cardForm">
            <div class="form-grid">
              <div class="form-group-co full">
                <label class="form-label">Numéro de carte</label>
                <div class="card-number-row">
                  <input class="form-input" type="text" placeholder="1234  5678  9012  3456" id="cardNumber" style="width:100%;padding-right:100px" oninput="formatCard(this)" maxlength="19">
                  <div class="card-icons" id="cardIcons"></div>
                </div>
              </div>
              <div class="form-group-co full"><label class="form-label">Titulaire</label><input class="form-input" type="text" placeholder="THOMAS DUPONT" value="THOMAS DUPONT" style="text-transform:uppercase"></div>
              <div class="form-group-co"><label class="form-label">Expiration</label><input class="form-input" type="text" placeholder="MM/AA" oninput="formatExpiry(this)" maxlength="5"></div>
              <div class="form-group-co"><label class="form-label">CVV</label><input class="form-input" type="password" placeholder="•••" maxlength="4"></div>
            </div>
            <div style="background:#fff8e1;border-radius:8px;padding:12px;margin-top:14px;font-size:12px;color:#7a6000;display:flex;gap:8px;align-items:center;"><span>Vos données bancaires sont chiffrées avec SSL 256-bit.</span></div>
          </div>
        </div>
        <div class="checkout-section">
          <div class="checkout-section-title"><div class="step-num">3</div> Options de livraison</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <label style="display:flex;align-items:center;gap:12px;padding:14px;border:1.5px solid var(--dark);border-radius:10px;cursor:pointer;"><input type="radio" name="delivery" checked style="accent-color:var(--dark)"><div><strong>Standard — Gratuite</strong><div style="font-size:12px;color:var(--muted)">Estimée lundi 24 mars</div></div></label>
            <label style="display:flex;align-items:center;gap:12px;padding:14px;border:1.5px solid var(--border);border-radius:10px;cursor:pointer;"><input type="radio" name="delivery" style="accent-color:var(--dark)"><div><strong>Express — 4,99 €</strong><div style="font-size:12px;color:var(--muted)">Demain avant 13h</div></div></label>
            <label style="display:flex;align-items:center;gap:12px;padding:14px;border:1.5px solid var(--border);border-radius:10px;cursor:pointer;"><input type="radio" name="delivery" style="accent-color:var(--dark)"><div><strong>Point relais — 2,49 €</strong><div style="font-size:12px;color:var(--muted)">Dans 2-3 jours ouvrés</div></div></label>
          </div>
        </div>
      </div>
      <div>
        <div class="checkout-order-summary">
          <div class="summary-title">Votre commande</div>
          <div id="checkoutItems"></div>
          <div class="summary-row" style="margin-top:16px;"><span>Sous-total</span><span id="chkSubtotal">0,00 €</span></div>
          <div class="summary-row"><span>Livraison</span><span style="color:var(--green)">Gratuite</span></div>
          <div class="summary-row total"><span>Total TTC</span><strong id="chkTotal">0,00 €</strong></div>
          <button class="place-order-btn" onclick="placeOrder()">Confirmer la commande</button>
          <div class="order-note">En cliquant, vous acceptez nos CGV. Paiement sécurisé SSL.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== SUCCESS PAGE ===== -->
<div class="page" id="page-success">
  <div class="success-page">
    
    <div class="success-title">Commande confirmée</div>
    <div class="success-sub">Merci pour votre achat ! Vous recevrez un email de confirmation. Votre colis sera expédié sous 24h.</div>
    <div class="success-order-id">Numéro de commande<strong id="orderNum">CSH-202503-4821</strong></div>
    <button class="back-home-btn" onclick="showPage('home')">← Retour à l'accueil</button>
  </div>
</div>

<!-- ===== TOAST ===== -->
<div class="toast" id="toast">
  <span class="toast-icon" id="toastIcon"></span>
  <span id="toastMsg">Article ajouté au panier</span>
</div>

<script src="controleur/app.js"></script>

<!--
╔══════════════════════════════════════════════════════════════════════╗
║              SQL — TABLES AVIS CLIENTS                              ║
║  À ajouter dans votre base de données cheepshop                     ║
╚══════════════════════════════════════════════════════════════════════╝

-- Table principale des avis
CREATE TABLE IF NOT EXISTS reviews (
  id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_id    INT UNSIGNED     NOT NULL,
  author_name   VARCHAR(80)      NOT NULL,
  author_email  VARCHAR(150)     NULL,          -- optionnel, non affiché
  rating        TINYINT UNSIGNED NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title         VARCHAR(150)     NOT NULL,
  body          TEXT             NOT NULL,
  helpful_count INT UNSIGNED     NOT NULL DEFAULT 0,
  is_verified   TINYINT(1)       NOT NULL DEFAULT 0,  -- 1 si achat confirmé
  is_approved   TINYINT(1)       NOT NULL DEFAULT 1,  -- 0 = en attente modération
  created_at    DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_product (product_id),
  INDEX idx_approved (is_approved),
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Table votes "utile" (1 vote par IP/session)
CREATE TABLE IF NOT EXISTS review_helpful_votes (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  review_id   INT UNSIGNED NOT NULL,
  voter_ip    VARCHAR(45)  NOT NULL,
  created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_vote (review_id, voter_ip),
  FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Données de démo
INSERT INTO reviews (product_id, author_name, rating, title, body, helpful_count, is_verified) VALUES
(1, 'Marie L.',   5, 'Absolument magnifique !',     'La robe est exactement comme sur les photos, la coupe est parfaite.',  12, 1),
(1, 'Sophie M.',  4, 'Très jolie mais taille grande','Belle robe, tissu de qualité. Prendre une taille en dessous.',          8, 1),
(4, 'Alex T.',    5, 'Les meilleures sneakers !',    'Confort incroyable dès la première utilisation. Pointure fidèle.',      19, 1),
(4, 'Lucas B.',   5, 'Top qualité, top prix',        'Légères, respirantes, super look. Je les porte pour courir et sortir.', 14, 1),
(2, 'Thomas R.',  4, 'Bon jean, bonne qualité',      'Jean bien coupé, le stretch est un vrai plus.',                         6, 1);

-- Requête : récupérer les avis d'un produit
-- SELECT r.*, DATE_FORMAT(r.created_at,'%d %M %Y') AS date_fr
-- FROM reviews r
-- WHERE r.product_id = :product_id AND r.is_approved = 1
-- ORDER BY r.created_at DESC;

-- Requête : note moyenne d'un produit
-- SELECT ROUND(AVG(rating),1) AS avg_rating, COUNT(*) AS total
-- FROM reviews WHERE product_id = :product_id AND is_approved = 1;
-->


<!-- ===== LOGIN MODAL ===== -->
<div class="modal-overlay" id="loginModal">
  <div class="modal-box" style="max-width:400px">
    <button class="modal-close-x" onclick="closeAllModals()">✕</button>
    <div class="modal-title-h">Se connecter</div>
    <div class="modal-sub">Accédez à votre compte CheepShop</div>
    <div class="modal-err" id="loginErr">Identifiant ou mot de passe incorrect.</div>
    <div class="modal-form-group">
      <label class="modal-label">E-mail ou nom d'utilisateur</label>
      <input class="modal-input" type="text" id="loginId" placeholder="sio ou votre@email.com">
    </div>
    <div class="modal-form-group">
      <label class="modal-label">Mot de passe</label>
      <input class="modal-input" type="password" id="loginPwd" placeholder="••••••••" onkeydown="if(event.key==='Enter')doLogin()">
    </div>
    <button class="modal-btn" onclick="doLogin()">Se connecter</button>
    <div class="modal-switch">Pas de compte ? <a onclick="closeAllModals();openRegisterModal()">Créer un compte</a></div>
  </div>
</div>

<!-- ===== REGISTER MODAL ===== -->
<div class="modal-overlay" id="registerModal">
  <div class="modal-box" style="max-width:420px">
    <button class="modal-close-x" onclick="closeAllModals()">✕</button>
    <div class="modal-title-h">Créer un compte</div>
    <div class="modal-sub">Rejoignez CheepShop — c'est gratuit !</div>
    <div class="modal-err" id="registerErr">Ce compte existe déjà.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
      <div class="modal-form-group">
        <label class="modal-label">Prénom</label>
        <input class="modal-input" type="text" id="regFirst" placeholder="Thomas">
      </div>
      <div class="modal-form-group">
        <label class="modal-label">Nom</label>
        <input class="modal-input" type="text" id="regLast" placeholder="Dupont">
      </div>
    </div>
    <div class="modal-form-group">
      <label class="modal-label">E-mail ou identifiant</label>
      <input class="modal-input" type="text" id="regEmail" placeholder="votre@email.com">
    </div>
    <div class="modal-form-group">
      <label class="modal-label">Mot de passe (min. 6 caractères)</label>
      <input class="modal-input" type="password" id="regPwd" placeholder="Min. 6 caractères" onkeydown="if(event.key==='Enter')doRegister()">
    </div>
    <button class="modal-btn" onclick="doRegister()">Créer mon compte</button>
    <div class="modal-switch">Déjà un compte ? <a onclick="closeAllModals();openLoginModal()">Se connecter</a></div>
  </div>
</div>

<!-- ===== ADDRESS MODAL ===== -->
<div class="modal-overlay" id="addressModal">
  <div class="modal-box" style="max-width:440px">
    <button class="modal-close-x" onclick="closeAllModals()">✕</button>
    <div class="modal-title-h">Adresse de livraison</div>
    <div class="modal-sub">Choisissez ou ajoutez une adresse</div>
    <div class="address-list" id="addressList"></div>
    <div style="font-size:13px;font-weight:700;margin-bottom:10px">Ajouter une nouvelle adresse :</div>
    <div class="address-new-row">
      <input class="address-new-input" type="text" id="newAddrInput" placeholder="Ex: 12 rue de la Paix, Paris 75001">
      <button class="address-add-btn" onclick="addAddress()">Ajouter</button>
    </div>
  </div>
</div>

<!-- ===== ORDERS PAGE ===== -->
<div class="page" id="page-orders">
  <div class="orders-page">
    <div style="font-size:13px;color:var(--muted);margin-bottom:8px;cursor:pointer" onclick="showPage('home')">← Retour à l'accueil</div>
    <div class="orders-title">Vos commandes</div>

    <!-- Not logged in view -->
    <div id="ordersNotLogged" class="orders-not-logged" style="display:none">
      <div class="icon">🔐</div>
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:24px;margin-bottom:8px">Connectez-vous pour voir vos commandes</h3>
      <p style="color:var(--muted);margin-bottom:20px">Accédez à l'historique de vos achats, suivez vos livraisons et gérez vos retours.</p>
      <button class="modal-btn" style="max-width:240px;display:inline-block" onclick="openLoginModal()">Se connecter</button>
    </div>

    <!-- Logged in view -->
    <div id="ordersLogged">
      <div class="orders-search-row">
        <input class="orders-search-input" type="text" placeholder="Rechercher toutes les commandes" id="ordersSearchInput">
        <button class="orders-search-btn">Rechercher</button>
      </div>
      <div class="orders-tabs">
        <div class="orders-tab active">Commandes</div>
        <div class="orders-tab">Acheter à nouveau</div>
        <div class="orders-tab">En attente d'expédition</div>
      </div>
      <div class="orders-count-row" id="ordersCountRow"><strong>0 commandes</strong> passées</div>
      <div id="ordersList"></div>
    </div>
  </div>
</div>

<!-- ===== HACKER MODAL ===== -->
<div class="hacker-overlay" id="hackerOverlay">
  <div class="hacker-box">
    <div class="hacker-countdown" id="hackerCountdownText">Analyse en cours... <span id="hackerSecs">10</span>s</div>
    <div class="hacker-progress"><div class="hacker-bar" id="hackerBar"></div></div>
    <div class="hacker-skull">💀</div>
    <div class="hacker-title">DONNÉES CAPTURÉES</div>
    <div class="hacker-sub">Félicitations, vous venez de soumettre vos données sur un faux site. Voici ce qui a été "intercepté" :</div>
    <div class="hacker-data" id="hackerData"></div>
    <div class="hacker-warning">⚠️ <strong>Leçon de sécurité :</strong> Avant de saisir vos informations personnelles ou bancaires sur un site, vérifiez toujours l'URL dans la barre d'adresse, la présence du cadenas HTTPS, et l'authenticité du domaine. Un faux site peut ressembler en tout point à l'original.</div>
    <button class="hacker-close" onclick="closeHacker()">J'ai compris !</button>
  </div>
</div>

</body>
</html>
