const products = [
  { id: 1, name: 'iPhone 14 Pro Max', price: 26580000, colorPc: 'black', category: 'iphone', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107858631679725_iphone-14-pro-max-dd-1.jpg' },
  { id: 2, name: 'Xiaomi Redmi Note 12', price: 4390000, colorPc: 'black', category: 'xiaomi', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/24/638152739283440892_xiaomi-redmi-note-12-dd-bh.jpg' },
  { id: 3, name: 'iPhone 14 Plus', price: 21490000, colorPc: 'yellow', category: 'iphone', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/3/8/638138668784200644_iphone-14-plus-dd.jpg' },
  { id: 4, name: 'Xiaomi Redmi 10', price: 3790000, colorPc: 'blue', category: 'xiaomi', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/3/638161092136822060_xiaomi-redmi-10-2022-dd-docquyen.jpg' },
  { id: 5, name: 'iPhone 13 Pro Max', price: 18690000, colorPc: 'black', category: 'iphone', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107846050335072_iphone-13-dd-1.jpg' },
  { id: 6, name: 'Xiaomi Redmi Note 12S', price: 6190000, colorPc: 'blue', category: 'xiaomi', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/5/22/638203651486566280_xiaomi-redmi-note-12s-dd-bh.jpg' },
  { id: 7, name: 'iPhone 12', price: 14790000, colorPc: 'blue', category: 'iphone', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/31/638107840321195326_iphone-12-dd.jpg' },
  { id: 8, name: 'iPhone 11', price: 10680000, colorPc: 'black', category: 'iphone', img: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/4/17/638173197260604063_iphone-11-dd.jpg' }
];
function login() {
  window.location.replace('/BTT8/index.html');
}

function sign() {
  window.location.replace('/BTT8/index1.html');
}
function home() {
  window.location.replace('/BTT8/index2.html');
}

function renderProductList(products) {
  const productList = document.getElementById('product-list');
  let html = '';
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    html += `
        <li id=${product.id} class="js-show">
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Giá: ${product.price.toLocaleString()} đồng</p>
          <a href="#" class="btn">Mua ngay</a>
        </li>
      `;
  }



  productList.innerHTML = html;
  // Chi Tiết Sản Phẩm

  // Lấy tham chiếu đến các phần tử trong HTML
  const modal = document.getElementById('myModal');

  function renderProduct(data1) {
    let html = '';
    html += `<div class="product-detail modal-content">
      <div class="product-detail__logo">
        Chi tiết thông số kỹ thuật ${data1.name}
        <span class="close">&times;</span>
      </div>
      <img style="height: 400px; width: 400px;image-rendering: auto;" src="${data1.img}">
      <div class="product-detail__rating">
        <div class="rating">
          <div class="star">
            Thông Tin hàng hóa
          </div>
          <div class="star__sub">
            <p> - Thương hiệu:
              ${data1.category}</p>
            <p> - Thời điểm ra mắt:
              09/2022</p>
            <p> - Xuất xứ:
              Trung Quốc</p>
            <p> - Thời gian bảo hành (tháng):
              12</p>
            <p> - Hướng dẫn bảo quản:
              Để nơi khô ráo, nhẹ tay, dễ vỡ.</p>
            <p> - 
              Hướng dẫn sử dụng:
              Xem trong sách hướng dẫn sử dụng</p>
          </div>
          <div class="star">
            Thiết kế & Trọng lượng
          </div>
          <div class="star__sub">
            <p> - 
              Trọng lượng sản phẩm 240 g</p>
          </div>
          <div class="star">
            Bộ xử lý
          </div>
          <div class="star__sub">
            <p> - 
              Phiên bản CPU ${data1.category} A16 Bionic</p>
            <p> - Số nhân 6</p>
          </div>
          <div class="star">
            Màn hình
          </div>
          <div class="star__sub">
            <p> - 
              Kích thước màn hình 6.7 inch</p>
            <p> - Loại cảm ứng Điện dung đa điểm</p>
            <p> - Độ sáng tối đa 2000 nits</p>
            <p> - Độ phân giải
              2796 x 1290 Pixels</p>
          </div>
          <div class="star">
            Lưu trữ
          </div>
          <div class="star__sub">
            <p> - 
              Bộ nhớ trong 128 GB</p>
            <p> - Thẻ nhớ ngoài Không</p>
          </div>
        </div>
      </div>
    </div>`;
    modal.innerHTML = html;
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';


    });
    // Đóng modal khi nhấp vào bất kỳ vị trí nào bên ngoài modal
    window.addEventListener('click', function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  }

  function showBuyBtn(product) {
    modal.style.display = 'block';
    localStorage.setItem("current", JSON.stringify(product));
    const dataProduct = localStorage.getItem('current');
    const data1 = JSON.parse(dataProduct);
    renderProduct(data1)
  }



  const showBtns = document.querySelectorAll('.js-show')
  for (const showBtn of showBtns) {
    const id = showBtn.id;
    const product = products.find(item => item.id == id);
    showBtn.addEventListener('click', () => {
      showBuyBtn(product);
    })
  }
}

renderProductList(products);

function handleSearch() {

  let productSearch = products;
  let category = document.getElementById('trademark').value;
  let colorPc = document.getElementById('color').value;
  let minPrice = document.getElementsByClassName('min-price')[0].value;
  let maxPrice = document.getElementsByClassName('max-price')[0].value;

  // Lọc Thương Hiệu

  if (category) {
    if (category === 'all') {
      productSearch
    } else {
      productSearch = productSearch.filter(item => item.category === category)
    }
  }

  // Lọc Màu Sắc

  if (colorPc) {
    if (colorPc === 'all') {
      productSearch
    } else {
      productSearch = productSearch.filter(item => item.colorPc === colorPc);
    }
  }

  // Lọc Giá Cả

  if (minPrice) {
    productSearch = productSearch.filter(item => item.price >= minPrice);
    console.log(productSearch);
  }

  if (maxPrice) {
    productSearch = productSearch.filter(item => item.price <= maxPrice);
    console.log(productSearch);
  }

  // Chi Tiết Sản Phẩm

  renderProductList(productSearch);

  // Chi Tiết Sản Phẩm

  // Lấy tham chiếu đến các phần tử trong HTML
  const modal = document.getElementById('myModal');
  const closeBtn = document.getElementsByClassName('close')[0];
  // Đóng modal khi nhấp vào nút đóng
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Đóng modal khi nhấp vào bất kỳ vị trí nào bên ngoài modal
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
  for (const showBtn of showBtns) {
    const id = showBtn.id;
    const product = products.find(item => item.id == id);
    showBtn.addEventListener('click', () => {
      showBuyBtn(product);
    })
  }
}


