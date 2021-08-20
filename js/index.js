/*-------------------
    Events Handlers
 -------------------*/
// event handlers for memory button
document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    updateFields('memory-cost', 0);
})
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    updateFields('memory-cost', 180);
})

// event handlers for Storage button
document.getElementById('256gb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 0);
})
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 100);
})
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 180);
})

// event handler for  Delivery button
document.getElementById('free-delivery-btn').addEventListener('click', function () {
    updateFields('delivery-cost', 0);
})
document.getElementById('paid-delivery-btn').addEventListener('click', function () {
    updateFields('delivery-cost', 20);
})

//event handler for Promo Code
document.getElementById('promo-code-btn').addEventListener('click', function () {
    let promoCodeField = document.getElementById('promo-code-field');
    if (promoCodeField.value.toLowerCase() == 'stevekaku') {
        let netPrice = totalPrice();
        let discountedPrice = netPrice - (netPrice * .20);
        setPrice('footer-price', discountedPrice);
        promoCodeField.value = '';
    }
})

/*-------------------
   utility functions 
 -------------------*/
//updates necessary fields for corresponding events
function updateFields(fieldIdToUpdate, fieldPriceToUpdate) {
    setPrice(fieldIdToUpdate, fieldPriceToUpdate);
    let netPrice = totalPrice();
    setPrice('total-price', netPrice);
    setPrice('footer-price', netPrice);
}
function setPrice(id, price) {
    document.getElementById(id).innerText = price;
}
function totalPrice() {
    return getPrice('best-price') + getPrice('memory-cost') + getPrice('storage-cost') + getPrice('delivery-cost');
}
//fetching present value of a field
function getPrice(id) {
    return parseFloat(document.getElementById(id).innerText);
}
