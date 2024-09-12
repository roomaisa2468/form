//navigation bar 
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}


let totalPrice = 0;

// Toggle selection of food items
function toggleSelection(foodItem, price) {
    if (foodItem.classList.contains('selected')) {
        foodItem.classList.remove('selected');
        updateTotal(-price);
    } else {
        foodItem.classList.add('selected');
        updateTotal(price);
    }
}

// Update total price
function updateTotal(amount) {
    totalPrice += amount;
    document.getElementById('totalPrice').textContent = totalPrice;
}

// Increase quantity
function increaseQty(button, price) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity += 1;
    quantityElement.textContent = quantity;
    updateTotal(price);
}

// Decrease quantity
function decreaseQty(button, price) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
        quantity -= 1;
        quantityElement.textContent = quantity;
        updateTotal(-price);
    }
}

// Form submission handling
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Order placed successfully!');
});



////food description dalni ha or time mila to  jo nav bar ma pagees banaye hein unko bhi maintain karlo

