// Variables globales
let cart = [];
let products = [];

// DOM Elements
const productsContainer = document.getElementById('products-container');
const cartCount = document.querySelector('.cart-count');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.querySelector('.cart-modal');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.total-price');
const emptyCartBtn = document.querySelector('.btn-empty');
const checkoutBtn = document.querySelector('.btn-checkout');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');
const productModal = document.querySelector('.product-modal');
const productModalBody = document.querySelector('.product-modal-body');
const closeProductModal = document.querySelector('.close-product-modal');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    setupEventListeners();
    updateCartCount();
});

// Cargar productos desde db.js
function loadProducts() {
    products = [...productos]; // Usamos los datos de db.js
    displayProducts(products);
    displayFeaturedProducts();
}

// Mostrar productos en el grid
function displayProducts(productsToDisplay) {
    productsContainer.innerHTML = '';
    
    if (productsToDisplay.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No se encontraron productos.</p>';
        return;
    }
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            ${product.destacado ? '<span class="product-badge">Destacado</span>' : ''}
            <img src="${product.imagen}" alt="${product.nombre}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.nombre}</h3>
                <p class="product-description">${product.descripcion}</p>
                <p class="product-price">$${product.precio.toFixed(0)}</p>
                <div class="product-actions">
                    <button class="btn btn-view" data-id="${product.id}">Ver detalles</button>
                    <button class="btn btn-add" data-id="${product.id}">Añadir</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
    
    // Agregar event listeners a los botones recién creados
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
    
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', showProductDetails);
    });
}

// Mostrar productos destacados
function displayFeaturedProducts() {
    const featuredContainer = document.querySelector('.featured-products');
    const featuredProducts = products.filter(product => product.destacado);
    
    featuredContainer.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const featuredProduct = document.createElement('div');
        featuredProduct.className = 'featured-product';
        featuredProduct.innerHTML = `
            <img src="${product.imagen}" alt="${product.nombre}" class="featured-product-image">
            <div class="featured-product-info">
                <h3 class="featured-product-title">${product.nombre}</h3>
                <p class="product-description">${product.descripcion}</p>
                <p class="featured-product-price">$${product.precio.toFixed(0)}</p>
                <div class="product-actions">
                    <button class="btn btn-add" data-id="${product.id}">Añadir</button>
                </div>
            </div>
        `;
        featuredContainer.appendChild(featuredProduct);
    });
    
    // Agregar event listeners a los botones de añadir
    document.querySelectorAll('.featured-product .btn-add').forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}

// Configurar event listeners
function setupEventListeners() {
    // Carrito
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    emptyCartBtn.addEventListener('click', emptyCart);
    checkoutBtn.addEventListener('click', checkout);
    
    // Filtros
    filterBtns.forEach(btn => {
        btn.addEventListener('click', filterProducts);
    });
    
    // Categorías
    categoryCards.forEach(card => {
        card.addEventListener('click', filterByCategory);
    });
    
    // Modal de producto
    closeProductModal.addEventListener('click', () => {
        productModal.classList.remove('active');
    });
    
    // Menú hamburguesa
    hamburgerMenu.addEventListener('click', toggleMobileMenu);
    
    // Cerrar modales al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.classList.remove('active');
        }
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });
}

// Funcionalidad del carrito
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showAddedToCartMessage(product.nombre);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    updateCartCount();
    renderCartItems();
    saveCartToLocalStorage();
}

function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function renderCartItems() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Tu carrito está vacío</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.nombre}</h4>
                <p class="cart-item-price">${item.precio.toFixed(2)}</p>
                <div class="cart-item-actions">
                    <div class="cart-item-quantity">
                        <button class="decrement" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increment" data-id="${item.id}">+</button>
                    </div>
                    <span class="remove-item" data-id="${item.id}">Eliminar</span>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Calcular total
    const total = cart.reduce((sum, item) => sum + (item.precio * item.quantity), 0);
    cartTotal.textContent = `${total.toFixed(2)}`;
    
    // Agregar event listeners a los botones de cantidad
    document.querySelectorAll('.increment').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += 1;
                updateCart();
            }
        });
    });
    
    document.querySelectorAll('.decrement').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                updateCart();
            } else {
                removeFromCart(productId);
            }
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
}

function toggleCart() {
    cartModal.classList.toggle('active');
}

function emptyCart() {
    cart = [];
    updateCart();
    toggleCart();
    showMessage('Carrito vaciado', 'success');
}

function checkout() {
    if (cart.length === 0) {
        showMessage('Tu carrito está vacío', 'warning');
        return;
    }
    
    // Simular proceso de pago
    showMessage('Compra realizada con éxito', 'success');
    emptyCart();
}

// Filtrado de productos
function filterProducts(e) {
    const filter = e.target.getAttribute('data-filter');
    
    // Actualizar botones activos
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    let filteredProducts = [];
    
    if (filter === 'all') {
        filteredProducts = products;
    } else if (filter === 'destacado') {
        filteredProducts = products.filter(product => product.destacado);
    } else {
        filteredProducts = products.filter(product => product.categoria === filter);
    }
    
    displayProducts(filteredProducts);
}

function filterByCategory(e) {
    const category = e.currentTarget.getAttribute('data-category');
    
    // Actualizar botones activos
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Activar el botón correspondiente a la categoría
    document.querySelector(`.filter-btn[data-filter="${category}"]`).classList.add('active');
    
    const filteredProducts = products.filter(product => product.categoria === category);
    displayProducts(filteredProducts);
    
    // Scroll a la sección de productos
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Mostrar detalles del producto
function showProductDetails(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    productModalBody.innerHTML = `
        <div class="product-details">
            <div class="product-details-image">
                <img src="${product.imagen}" alt="${product.nombre}">
            </div>
            <div class="product-details-info">
                <h2>${product.nombre}</h2>
                <p class="product-details-price">$${product.precio.toFixed(2)}</p>
                <p class="product-details-description">${product.descripcion}</p>
                <div class="product-details-actions">
                    <button class="btn btn-add-to-cart" data-id="${product.id}">Añadir al carrito</button>
                </div>
            </div>
        </div>
    `;
    
    // Agregar event listener al botón de añadir
    document.querySelector('.btn-add-to-cart').addEventListener('click', addToCart);
    
    // Mostrar modal
    productModal.classList.add('active');
}

// Mensajes y notificaciones
function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'notification added-to-cart';
    message.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${productName} añadido al carrito</span>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            message.remove();
        }, 300);
    }, 3000);
}

function showMessage(text, type) {
    const message = document.createElement('div');
    message.className = `notification ${type}`;
    message.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${text}</span>
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            message.remove();
        }, 300);
    }, 3000);
}

// Menú móvil
function toggleMobileMenu() {
    navbar.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active'); 
        }
    });
});

// LocalStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({
    behavior: 'smooth'
        });
    }
    });
});

// Cargar carrito desde localStorage al iniciar
loadCartFromLocalStorage();