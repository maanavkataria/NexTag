let cartCount = 0; // Initialize cart count

// Function to update cart count and show an animation when adding to cart
function addToCart() {
    cartCount++; // Increment cart count
    const cartIcon = document.getElementById('cart-count');
    cartIcon.textContent = cartCount; // Update the cart count displayed
    
    // Animate cart count with a short bounce effect
    cartIcon.classList.add('bounce');
    setTimeout(() => {
        cartIcon.classList.remove('bounce');
    }, 300);
}

// Animation for cart count (bounce effect)
document.styleSheets[0].insertRule(`
    .bounce {
        animation: bounce 0.3s ease-in-out;
    }
    
    @keyframes bounce {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
`, 0);