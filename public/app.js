// app.js - SPA-style interactions, data rendering, cart logic, login, and AI tool calls for nelazim.com
const views = document.querySelectorAll('.view');
const navButtons = document.querySelectorAll('[data-view]');
const userLabel = document.getElementById('user-label');
const cartCount = document.getElementById('cart-count');
const cartList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function showView(id) {
  views.forEach(v => v.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-view');
    if (id) showView(id);
  });
});

// Demo data
const products = [
  { id: 1, name: 'Minimalist T-Shirt', category: 'Apparel', seller: 'Nelazim Originals', price: 29, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80' },
  { id: 2, name: 'Cozy Hoodie', category: 'Apparel', seller: 'Urban Layer', price: 59, image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80' },
  { id: 3, name: 'Noise-cancelling Headphones', category: 'Electronics', seller: 'SoundFlow', price: 199, image: 'https://images.unsplash.com/photo-1518441902117-f56f2c3a3e68?auto=format&fit=crop&w=800&q=80' },
  { id: 4, name: 'AI Chatbot Package', category: 'Digital', seller: 'BotLab', price: 299, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Smart Lamp', category: 'Home', seller: 'Lightify', price: 89, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' }
];

const services = [
  { id: 1, tag: 'Digital Service', name: 'Social Media Management', description: 'Monthly content calendars, posts, and analytics.', price: 450 },
  { id: 2, tag: 'Home Service', name: 'Deep Cleaning', description: 'Full apartment deep clean with eco products.', price: 180 },
  { id: 3, tag: 'Digital Service', name: 'Logo & Brand Kit', description: 'Visual identity with logo, typography, and colors.', price: 320 },
  { id: 4, tag: 'Consulting', name: 'Growth Strategy Session', description: '90-minute workshop to unlock new growth paths.', price: 220 }
];

function renderProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="product-meta">${p.category} • Seller: ${p.seller}</div>
      <div class="price">$${p.price}</div>
      <button class="btn-primary" data-add-product="${p.id}">Add to Cart</button>
    </div>
  `).join('');

  grid.querySelectorAll('[data-add-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.getAttribute('data-add-product'));
      const product = products.find(x => x.id === id);
      if (product) addToCart(product);
    });
  });
}

function renderServices() {
  const grid = document.getElementById('service-grid');
  grid.innerHTML = services.map(s => `
    <div class="card">
      <span class="service-tag">${s.tag}</span>
      <h4>${s.name}</h4>
      <p class="product-meta">${s.description}</p>
      <div class="price">Starting at $${s.price}</div>
    </div>
  `).join('');
}

const cart = [];

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function removeFromCart(id) {
  const idx = cart.findIndex(item => item.id === id);
  if (idx >= 0) cart.splice(idx, 1);
  updateCart();
}

function updateCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  if (totalCount > 0) {
    cartCount.style.display = 'inline-flex';
    cartCount.textContent = totalCount;
  } else {
    cartCount.style.display = 'none';
  }

  if (cart.length === 0) {
    cartList.innerHTML = '<p class="product-meta">Your cart is empty.</p>';
  } else {
    cartList.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div>
          <div class="cart-item-name">${item.name}</div>
          <div class="product-meta">${item.category} • ${item.seller}</div>
        </div>
        <div>
          <div class="price">$${(item.price * item.qty).toFixed(2)}</div>
          <button class="btn-outline" data-remove="${item.id}">Remove</button>
        </div>
      </div>
    `).join('');

    cartList.querySelectorAll('[data-remove]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = Number(btn.getAttribute('data-remove'));
        removeFromCart(id);
      });
    });
  }

  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

renderProducts();
renderServices();
updateCart();

// Login
const loginForm = document.getElementById('login-form');
const loginName = document.getElementById('login-name');

function loadUser() {
  const stored = localStorage.getItem('nelazim-user');
  if (stored) userLabel.textContent = `Welcome, ${stored}`;
}

loadUser();

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = loginName.value.trim();
  if (!name) return;
  localStorage.setItem('nelazim-user', name);
  userLabel.textContent = `Welcome, ${name}`;
  showView('home');
});

// AI tool helpers
async function callAI(endpoint, payload, button, outputEl) {
  button.disabled = true;
  const original = button.textContent;
  button.textContent = 'Generating...';
  outputEl.textContent = 'Working with AI...';

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.message || 'Request failed');
    }
    outputEl.textContent = data.content;
  } catch (err) {
    outputEl.textContent = `Error: ${err.message}`;
  } finally {
    button.disabled = false;
    button.textContent = original;
  }
}

// Product description
const btnPd = document.getElementById('btn-pd');
btnPd.addEventListener('click', () => {
  callAI('/api/product-description', {
    name: document.getElementById('pd-name').value,
    features: document.getElementById('pd-features').value,
    targetAudience: document.getElementById('pd-target').value
  }, btnPd, document.getElementById('pd-output'));
});

// Ad copy
const btnAd = document.getElementById('btn-ad');
btnAd.addEventListener('click', () => {
  callAI('/api/ad-copy', {
    product: document.getElementById('ad-product').value,
    platform: document.getElementById('ad-platform').value,
    targetAudience: document.getElementById('ad-target').value
  }, btnAd, document.getElementById('ad-output'));
});

// Instagram content
const btnIg = document.getElementById('btn-ig');
btnIg.addEventListener('click', () => {
  callAI('/api/instagram-content', {
    concept: document.getElementById('ig-concept').value,
    tone: document.getElementById('ig-tone').value,
    keywords: document.getElementById('ig-keywords').value
  }, btnIg, document.getElementById('ig-output'));
});

// Campaign plan
const btnCp = document.getElementById('btn-cp');
btnCp.addEventListener('click', () => {
  callAI('/api/campaign-plan', {
    brand: document.getElementById('cp-brand').value,
    budget: document.getElementById('cp-budget').value,
    days: document.getElementById('cp-days').value
  }, btnCp, document.getElementById('cp-output'));
});
