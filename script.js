// Product data
const products = [
    {
        id: 1,
        name: "Classic Wool Blazer",
        price: 299.99,
        category: "men",
        image: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Timeless wool blazer in navy blue, perfect for any formal occasion."
    },
    {
        id: 2,
        name: "Silk Evening Gown",
        price: 499.99,
        category: "women",
        image: "https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Elegant silk evening gown in emerald green with delicate embroidery."
    },
    {
        id: 3,
        name: "Children's Formal Set",
        price: 149.99,
        category: "children",
        image: "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        description: "Adorable formal set including blazer and pants for special occasions."
    }
];

// Shopping cart
let cart = [];

// DOM Elements
const featuredProducts = document.getElementById('featuredProducts');
const cartBtn = document.querySelector('.cart-btn');

// Display featured products
function displayFeaturedProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <p>${product.description}</p>
            <button onclick="addToCart(${product.id})" class="add-to-cart">Add to Cart</button>
        `;
        featuredProducts.appendChild(productElement);
    });
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

// Update cart count
function updateCartCount() {
    cartBtn.textContent = `Cart (${cart.length})`;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedProducts();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});