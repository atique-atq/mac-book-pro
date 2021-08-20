document.getElementById('8gb-memory-btn').addEventListener('click', function () {
    setPrice('memory-cost', 0);
    let bestPrice = getPrice('best-price');
    let storagePrice = getPrice('storage-cost');
    let deliveryPrice = getPrice('delivery-cost');
    let totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    debugger;
    setPrice('total-price', totalPrice);
})
// document.getElementById('8gb-memory-btn').addEventListener('click', function () {

//     let memory = parseFloat(getMemoryPrice('memory-cost'))
//     let bestPrice = parseFloat(getBestPrice().innerText);
//     setMemoryPrice()
//     let storagePrice = parseFloat(getStoragePrice().innerText);
//     let deliveryPrice = parseFloat(getDelivertPrice().innerText);
//     setTotalPrice(bestPrice, 0, storagePrice, deliveryPrice);
//     console.log(deliveryPrice);
// })
function getPrice(id) {
    return parseFloat(document.getElementById(id).innerText)
}


function setPrice(id, price) {
    document.getElementById(id).innerText = price;
    // console.log(b + 'a')
    // = price;
}
