// Centralized menu data keeps pricing, filtering, and cart rendering in sync.
const menuItems = [
  {
    id: "pizza-margherita",
    category: "pizza",
    name: "Margherita",
    description: "Classic tomato sauce, mozzarella, basil, and olive oil.",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=900&q=80",
    prices: { Small: 8.99, Medium: 11.99, Large: 14.99 }
  },
  {
    id: "pizza-pepperoni",
    category: "pizza",
    name: "Pepperoni",
    description: "Bold pepperoni, bubbling cheese, and rich house tomato sauce.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80",
    prices: { Small: 9.99, Medium: 13.49, Large: 16.99 }
  },
  {
    id: "pizza-bbq-chicken",
    category: "pizza",
    name: "BBQ Chicken",
    description: "Smoky barbecue sauce, grilled chicken, onions, and mozzarella.",
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80",
    prices: { Small: 10.49, Medium: 14.49, Large: 18.49 }
  },
  {
    id: "pizza-veggie-supreme",
    category: "pizza",
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives, and sweet corn.",
    image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZ2llJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
    prices: { Small: 9.49, Medium: 12.99, Large: 16.49 }
  },
  {
    id: "burger-classic-beef",
    category: "burger",
    name: "Classic Beef Burger",
    description: "Juicy beef patty, crisp lettuce, tomato, and signature sauce.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
    price: 7.99
  },
  {
    id: "burger-chicken",
    category: "burger",
    name: "Chicken Burger",
    description: "Crispy chicken fillet with slaw and creamy chili mayo.",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=80",
    price: 7.49
  },
  {
    id: "burger-cheese",
    category: "burger",
    name: "Cheese Burger",
    description: "Beef patty stacked with cheddar, pickles, and caramelized onions.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    price: 8.49
  },
  {
    id: "burger-double-patty",
    category: "burger",
    name: "Double Patty Burger",
    description: "Two seared beef patties, double cheese, lettuce, and house sauce.",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80",
    price: 10.99
  },
  {
    id: "burger-veggie",
    category: "burger",
    name: "Veggie Burger",
    description: "Plant-based patty, avocado spread, greens, and tomato.",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80",
    price: 7.29
  },
  {
    id: "sub-chicken",
    category: "submarine",
    name: "Chicken Submarine",
    description: "Grilled chicken strips, lettuce, tomato, and garlic aioli.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=900&q=80",
    price: 6.99
  },
  {
    id: "sub-beef",
    category: "submarine",
    name: "Beef Submarine",
    description: "Seasoned beef, sauteed onions, peppers, and smoky sauce.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=900&q=80",
    price: 7.49
  },
  {
    id: "sub-veg",
    category: "submarine",
    name: "Veg Submarine",
    description: "Roasted vegetables, cheese, lettuce, and herb dressing.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80",
    price: 6.49
  },
  {
    id: "drink-coke",
    category: "drink",
    name: "Coke",
    description: "Ice-cold Coca-Cola can.",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&w=900&q=80",
    price: 1.99
  },
  {
    id: "drink-pepsi",
    category: "drink",
    name: "Pepsi",
    description: "Refreshing Pepsi can served chilled.",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?auto=format&fit=crop&w=900&q=80",
    price: 1.99
  },
  {
    id: "drink-sprite",
    category: "drink",
    name: "Sprite",
    description: "Lemon-lime sparkle for the perfect pairing.",
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=900&q=80",
    price: 1.89
  },
  {
    id: "drink-water",
    category: "drink",
    name: "Water",
    description: "Still bottled water.",
    image: "https://images.unsplash.com/photo-1564419320408-38e24e038739?auto=format&fit=crop&w=900&q=80",
    price: 1.29
  }
];

const state = {
  activeCategory: "all",
  cardSelections: {},
  cart: loadCart()
};

const menuGrid = document.getElementById("menuGrid");
const featuredItems = document.getElementById("featuredItems");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutSummary = document.getElementById("checkoutSummary");
const checkoutTotal = document.getElementById("checkoutTotal");
const navCartCount = document.getElementById("navCartCount");
const stickyCartCount = document.getElementById("stickyCartCount");
const cartDrawer = document.getElementById("cartDrawer");
const backdrop = document.getElementById("backdrop");
const backToTop = document.getElementById("backToTop");
const loader = document.getElementById("loader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const menuFilters = document.getElementById("menuFilters");
const checkoutForm = document.getElementById("checkoutForm");
const contactForm = document.getElementById("contactForm");

function loadCart() {
  try {
    const savedCart = localStorage.getItem("pink-slice-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Unable to load cart from localStorage:", error);
    return [];
  }
}

function saveCart() {
  localStorage.setItem("pink-slice-cart", JSON.stringify(state.cart));
}

function formatCurrency(value) {
  return `$${value.toFixed(2)}`;
}

function getItemBasePrice(item, selectedSize) {
  if (item.category === "pizza") {
    return item.prices[selectedSize];
  }

  return item.price;
}

function getCardSelection(itemId) {
  if (!state.cardSelections[itemId]) {
    state.cardSelections[itemId] = { quantity: 1, size: "Medium" };
  }

  return state.cardSelections[itemId];
}

function renderFeaturedItems() {
  const featured = [menuItems[1], menuItems[5], menuItems[9]];

  featuredItems.innerHTML = featured
    .map((item) => {
      const priceLabel = item.category === "pizza"
        ? `From ${formatCurrency(item.prices.Small)}`
        : formatCurrency(item.price);

      return `
        <article class="featured-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <strong>${priceLabel}</strong>
        </article>
      `;
    })
    .join("");
}

// Re-render menu cards whenever filters, size options, or quantities change.
function renderMenu() {
  const filteredItems = state.activeCategory === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === state.activeCategory);

  menuGrid.innerHTML = filteredItems
    .map((item) => {
      const selection = getCardSelection(item.id);
      const activePrice = getItemBasePrice(item, selection.size);
      const sizeMarkup = item.category === "pizza"
        ? `
          <div class="size-selector" data-item-id="${item.id}">
            ${Object.keys(item.prices)
              .map(
                (size) => `
                  <button
                    class="size-btn ${selection.size === size ? "is-active" : ""}"
                    data-size="${size}"
                    data-item-id="${item.id}"
                    type="button"
                  >
                    ${size}
                  </button>
                `
              )
              .join("")}
          </div>
        `
        : `<p class="menu-card__meta">Single serving</p>`;

      return `
        <article class="menu-card reveal" data-category="${item.category}">
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-card__body">
            <div>
              <p class="menu-card__meta">${capitalize(item.category)}</p>
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </div>

            ${sizeMarkup}

            <div class="menu-card__price-row">
              <span class="menu-card__price">${formatCurrency(activePrice)}</span>
              <span class="menu-card__meta">${item.category === "pizza" ? `${selection.size} size` : "Ready to order"}</span>
            </div>

            <div class="quantity-row">
              <div class="quantity-control" aria-label="Quantity selector">
                <button type="button" data-action="decrease-card" data-item-id="${item.id}">-</button>
                <span id="qty-${item.id}">${selection.quantity}</span>
                <button type="button" data-action="increase-card" data-item-id="${item.id}">+</button>
              </div>
              <button class="btn btn--primary" type="button" data-action="add-to-cart" data-item-id="${item.id}">
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  revealNewMenuCards();
}

function revealNewMenuCards() {
  document.querySelectorAll(".menu-card.reveal").forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 50, 240)}ms`;
    requestAnimationFrame(() => {
      card.classList.add("is-visible");
    });
  });
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function updateCardQuantity(itemId, delta) {
  const selection = getCardSelection(itemId);
  selection.quantity = Math.max(1, selection.quantity + delta);
  renderMenu();
}

function updateCardSize(itemId, size) {
  const selection = getCardSelection(itemId);
  selection.size = size;
  renderMenu();
}

function addToCart(itemId) {
  const item = menuItems.find((menuItem) => menuItem.id === itemId);
  const selection = getCardSelection(itemId);
  const size = item.category === "pizza" ? selection.size : null;
  const cartKey = size ? `${itemId}-${size}` : itemId;
  const existingItem = state.cart.find((cartItem) => cartItem.key === cartKey);
  const unitPrice = getItemBasePrice(item, selection.size);

  if (existingItem) {
    existingItem.quantity += selection.quantity;
  } else {
    state.cart.push({
      key: cartKey,
      itemId,
      name: item.name,
      size,
      unitPrice,
      quantity: selection.quantity
    });
  }

  selection.quantity = 1;
  persistAndRefresh();
  openCart();
}

function updateCartQuantity(cartKey, delta) {
  const cartItem = state.cart.find((item) => item.key === cartKey);
  if (!cartItem) {
    return;
  }

  cartItem.quantity += delta;
  if (cartItem.quantity <= 0) {
    state.cart = state.cart.filter((item) => item.key !== cartKey);
  }

  persistAndRefresh();
}

function removeCartItem(cartKey) {
  state.cart = state.cart.filter((item) => item.key !== cartKey);
  persistAndRefresh();
}

function clearCart() {
  state.cart = [];
  persistAndRefresh();
}

// Every cart mutation flows through one refresh path for consistent UI state.
function persistAndRefresh() {
  saveCart();
  renderMenu();
  renderCart();
  renderCheckoutSummary();
}

function getCartTotals() {
  const itemCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = state.cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  return { itemCount, totalAmount };
}

function renderCart() {
  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="empty-state">Your cart is empty. Add something delicious to get started.</p>`;
  } else {
    cartItems.innerHTML = state.cart
      .map((item) => {
        const subtotal = item.unitPrice * item.quantity;
        const meta = item.size ? `${item.size} size` : "Standard";

        return `
          <article class="cart-item">
            <div class="cart-item__content">
              <h4>${item.name}</h4>
              <p class="cart-item__meta">${meta} - ${formatCurrency(item.unitPrice)} each</p>
              <strong>${formatCurrency(subtotal)}</strong>
              <div class="cart-item__controls">
                <button class="mini-btn" type="button" data-action="decrease-cart" data-cart-key="${item.key}">-</button>
                <span>${item.quantity}</span>
                <button class="mini-btn" type="button" data-action="increase-cart" data-cart-key="${item.key}">+</button>
                <button class="remove-btn" type="button" data-action="remove-cart" data-cart-key="${item.key}">Remove</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const totals = getCartTotals();
  cartTotal.textContent = formatCurrency(totals.totalAmount);
  navCartCount.textContent = totals.itemCount;
  stickyCartCount.textContent = totals.itemCount;
}

function renderCheckoutSummary() {
  if (!state.cart.length) {
    checkoutSummary.innerHTML = `<p class="empty-state">Your cart is empty. Add menu items to see your summary here.</p>`;
    checkoutTotal.textContent = formatCurrency(0);
    return;
  }

  checkoutSummary.innerHTML = state.cart
    .map((item) => {
      const label = item.size ? `${item.name} (${item.size}) x${item.quantity}` : `${item.name} x${item.quantity}`;
      return `
        <div class="checkout-summary__line">
          <span>${label}</span>
          <strong>${formatCurrency(item.unitPrice * item.quantity)}</strong>
        </div>
      `;
    })
    .join("");

  checkoutTotal.textContent = formatCurrency(getCartTotals().totalAmount);
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  document.body.classList.add("no-scroll");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
  document.body.classList.remove("no-scroll");
}

function toggleMobileMenu() {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function validateCheckoutForm() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const payment = checkoutForm.querySelector('input[name="payment"]:checked')?.value;
  const phoneIsValid = /^[0-9+\-\s()]{7,20}$/.test(phone);

  if (!state.cart.length) {
    alert("Your cart is empty. Please add items before placing an order.");
    return false;
  }

  if (!name || !phone || !address) {
    alert("Please complete your name, phone number, and address.");
    return false;
  }

  if (!phoneIsValid) {
    alert("Please enter a valid phone number.");
    return false;
  }

  if (!payment) {
    alert("Please select a payment option.");
    return false;
  }

  return true;
}

function handleCheckoutSubmit(event) {
  event.preventDefault();

  if (!validateCheckoutForm()) {
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const payment = checkoutForm.querySelector('input[name="payment"]:checked').value;
  const total = formatCurrency(getCartTotals().totalAmount);

  alert(`Thanks, ${name}! Your Pink Slice order has been placed.\nPayment: ${payment}\nTotal: ${total}`);
  checkoutForm.reset();
  clearCart();
}

function handleContactSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name || !email || !message) {
    alert("Please complete the contact form before sending.");
    return;
  }

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailIsValid) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`Thanks, ${name}! We received your message and will get back to you soon.`);
  contactForm.reset();
}

function handleMenuInteractions(event) {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const itemId = button.dataset.itemId;
  const action = button.dataset.action;

  if (button.classList.contains("size-btn")) {
    updateCardSize(itemId, button.dataset.size);
    return;
  }

  if (action === "increase-card") {
    updateCardQuantity(itemId, 1);
  }

  if (action === "decrease-card") {
    updateCardQuantity(itemId, -1);
  }

  if (action === "add-to-cart") {
    addToCart(itemId);
  }
}

function handleCartInteractions(event) {
  const button = event.target.closest("button");
  if (!button) {
    return;
  }

  const cartKey = button.dataset.cartKey;
  const action = button.dataset.action;

  if (action === "increase-cart") {
    updateCartQuantity(cartKey, 1);
  }

  if (action === "decrease-cart") {
    updateCartQuantity(cartKey, -1);
  }

  if (action === "remove-cart") {
    removeCartItem(cartKey);
  }
}

function handleFilterChange(event) {
  const button = event.target.closest(".filter-btn");
  if (!button) {
    return;
  }

  state.activeCategory = button.dataset.category;
  document.querySelectorAll(".filter-btn").forEach((filterButton) => {
    filterButton.classList.toggle("is-active", filterButton === button);
  });
  renderMenu();
}

function handleScroll() {
  backToTop.classList.toggle("is-visible", window.scrollY > 500);
}

// IntersectionObserver powers the lightweight scroll reveal animation.
function setupRevealAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function hideLoader() {
  window.setTimeout(() => {
    loader.classList.add("is-hidden");
  }, 900);
}

function bindEvents() {
  menuGrid.addEventListener("click", handleMenuInteractions);
  cartItems.addEventListener("click", handleCartInteractions);
  menuFilters.addEventListener("click", handleFilterChange);
  document.getElementById("openCartBtn").addEventListener("click", openCart);
  document.getElementById("stickyCartBtn").addEventListener("click", openCart);
  document.getElementById("closeCartBtn").addEventListener("click", closeCart);
  document.getElementById("clearCartBtn").addEventListener("click", clearCart);
  document.getElementById("checkoutLink").addEventListener("click", closeCart);
  backdrop.addEventListener("click", closeCart);
  navToggle.addEventListener("click", toggleMobileMenu);
  document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", closeMobileMenu));
  checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  contactForm.addEventListener("submit", handleContactSubmit);
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", handleScroll);
}

function init() {
  renderFeaturedItems();
  renderMenu();
  renderCart();
  renderCheckoutSummary();
  setupRevealAnimations();
  bindEvents();
  hideLoader();
}

document.addEventListener("DOMContentLoaded", init);
