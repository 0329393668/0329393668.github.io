function renderProductList() {
  const products = [
    { name: 'Sản phẩm 1', price: 200000 },
    { name: 'Sản phẩm 2', price: 250000 },
    { name: 'Sản phẩm 3', price: 300000 },
    { name: 'Sản phẩm 4', price: 150000 },
    { name: 'Sản phẩm 5', price: 280000 },
    { name: 'Sản phẩm 6', price: 220000 },
    { name: 'Sản phẩm 7', price: 350000 },
    { name: 'Sản phẩm 8', price: 180000 },
    { name: 'Sản phẩm 9', price: 270000 },
    { name: 'Sản phẩm 10', price: 230000 },
    { name: 'Sản phẩm 11', price: 290000 },
    { name: 'Sản phẩm 12', price: 210000 },
    { name: 'Sản phẩm 13', price: 320000 },
    { name: 'Sản phẩm 14', price: 170000 },
    { name: 'Sản phẩm 15', price: 260000 },
    { name: 'Sản phẩm 16', price: 240000 },
    { name: 'Sản phẩm 17', price: 310000 },
    { name: 'Sản phẩm 18', price: 190000 },
    { name: 'Sản phẩm 19', price: 330000 },
    { name: 'Sản phẩm 20', price: 200000 }
  ];

  const productList = document.getElementById('product-list');
  let html = '';
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    html += `
        <li>
          <img src="https://img.websosanh.vn/v2/users/review/images/g0uimocg53p63.jpg?compress=85" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Giá: ${product.price.toLocaleString()} đồng</p>
          <a href="#" class="btn">Mua ngay</a>
        </li>
      `;
  }
  console.log("html", html)

  productList.innerHTML = html;
}
renderProductList();
console.log(renderProductList())
