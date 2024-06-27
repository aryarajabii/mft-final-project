document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.rast1');
    const totalSumValue = document.querySelector('.total-sum-value');
    const totalPriceValue = document.querySelector('.total-price-value');
    const shippingPriceValue = document.querySelector('.shipping-price-value');

    let totalSum = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        const quantityElem = item.querySelector('.quantity');
        const totalPriceElem = item.querySelector('.total-price');
        const unitPriceElem = item.querySelector('.total-price').nextElementSibling;
        const unitPrice = parseInt(unitPriceElem.textContent.replace(/[^0-9]/g, ''), 10);
        
        const currentQuantity = parseInt(quantityElem.textContent, 10);
        totalSum += currentQuantity * unitPrice;
        totalPrice += parseInt(totalPriceElem.textContent.replace(/[^0-9]/g, ''), 10) || 0;
    });

    updateTotalValues();

    cartItems.forEach(item => {
        const increaseBtn = item.querySelector('.increase-btn');
        const decreaseBtn = item.querySelector('.decrease-btn');
        const deleteBtn = item.querySelector('.del-btn');
        const quantityElem = item.querySelector('.quantity');
        const totalPriceElem = item.querySelector('.total-price');
        const unitPriceElem = item.querySelector('.total-price').nextElementSibling;
        const unitPrice = parseInt(unitPriceElem.textContent.replace(/[^0-9]/g, ''), 10);

        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElem.textContent, 10);
            quantity++;
            quantityElem.textContent = quantity;
            totalPriceElem.textContent = `${quantity * unitPrice} ت`;
            totalSum += parseInt(quantityElem.textContent, 10) * unitPrice;
            totalPrice += parseInt(totalPriceElem.textContent.replace(/[^0-9]/g, ''), 10) || 0;
            updateTotalValues();
        });

        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElem.textContent, 10);
            if (quantity > 1) {
                quantity--;
                quantityElem.textContent = quantity;
                totalPriceElem.textContent = `${quantity * unitPrice} ت`;
                totalSum -= parseInt(quantityElem.textContent, 10) * unitPrice;
                totalPrice -= parseInt(totalPriceElem.textContent.replace(/[^0-9]/g, ''), 10) || 0;
                updateTotalValues();
            }
        });

        deleteBtn.addEventListener('click', () => {
            item.remove();
            totalSum -= parseInt(quantityElem.textContent, 10) * unitPrice;
            totalPrice -= parseInt(totalPriceElem.textContent.replace(/[^0-9]/g, ''), 10) || 0;
            updateTotalValues();
        });
    });

    function updateTotalValues() {
        totalSumValue.textContent = `${totalSum} ت`;
        totalPriceValue.textContent = `${totalPrice} ت`;
        shippingPriceValue.textContent = `0 ت`;
    }
});

