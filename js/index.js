/*----------
    Memory
 ----------*/
// event handler for 8GB memory button
document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    updateFields('memory-cost', 0);
})
// event handler for 16GB MEMORY button
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    updateFields('memory-cost', 180);
})

/*------------
   Storage
 ------------*/
// event handler for 256GB Storage button
document.getElementById('256gb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 0);
})
// event handler for 512GB Storage button
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 100);
})
// event handler for 1TB Storage button
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 180);
})

/*------------
   Delivery
 ------------*/
// event handler for 256GB Storage button
document.getElementById('256gb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 0);
})
// event handler for 512GB Storage button
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 100);
})
// event handler for 1TB Storage button
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    updateFields('storage-cost', 180);
})

// utilities functions 
function updateFields(fieldIdToUpdate, fieldPriceToUpdate) {
    setPrice(fieldIdToUpdate, fieldPriceToUpdate);
    setPrice('total-price', totalPrice());
}
function setPrice(id, price) {
    document.getElementById(id).innerText = price;
}
function totalPrice() {
    let bestPrice = getPrice('best-price');
    let memoryPrice = getPrice('memory-cost');
    let storagePrice = getPrice('storage-cost');
    let deliveryPrice = getPrice('delivery-cost');
    return bestPrice + memoryPrice + storagePrice + deliveryPrice;
}
function getPrice(id) {
    return parseFloat(document.getElementById(id).innerText)
}
