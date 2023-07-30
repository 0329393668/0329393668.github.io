function login() {
    window.location.replace('/BTT8/index.html');
}

function sign() {
    window.location.replace('/BTT8/index1.html');
}
function home() {
    window.location.replace('/BTT8/index2.html');
}
function shop() {
    window.location.replace('/BTT8/index3.html');
}



// giỏ hàng
const subTotalEl = document.querySelector('.subtotal span');
const vatEl = document.querySelector('.vat span');
const totalEle = document.querySelector('.total span');
const current = localStorage.getItem('currents');
const data = JSON.parse(current);
const productsEle = document.querySelector('.productss');
let discountEl = document.querySelector('.discount span');


function renderUI(arr) {
    productsEle.innerHTML = '';
    if (arr.length == 0) {
        productsEle.insertAdjacentHTML(
            'afterbegin',
            '<li>Không có sản phẩm nào trong giỏ hàng</li>'
        );
        document.querySelector('.option-container').style.display = 'none';
        document.querySelector('.clear').style.display = 'none';
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        productsEle.innerHTML += `
<li class="row">
  <div class="col left">
      <div class="thumbnail">
          <a href="#">
              <img src="${p.img}" alt="${p.name}">
          </a>
      </div>
      <div class="detail">
          <div class="name"><a href="#">${p.name}</a></div>
          <div class="description">
              
          </div>
          <div class="price">${p.price.toLocaleString()} đồng</div>
      </div>
  </div>
  <div class="col right">
      <div class="quantity">
          <input type="number" class="quantity" step="1" value="${p.count}" onchange="changeTotalProduct(${p.id}, event)">
      </div>
      <div class="remove">
          <span class="closes" onclick="removeItem(${p.id})">
              <i class="fa fa-times" aria-hidden="true"></i>
          </span>
      </div>
  </div>
</li>
`;
    }

    // Số lượng
    let countEle = document.querySelector('.count');
    countEle.innerText = `Giỏ hàng ( ${updateTotalItem(arr)} )`;

    // Tính tiền 
    updateTotalMoney(arr);

    // Tính tiền khi mã giảm giá
    let applyPromotionButton = document.querySelector('.promotion button');
    applyPromotionButton.addEventListener('click', () => {
        updateTotalMoney(arr);
    });

    // Thanh Toán
    const pay = document.querySelector('.clear');
    const infoForm = document.querySelector('#info-form');
    const pays = document.querySelector('.clears');
    const paytext = document.querySelector('.clears__text');
    const paysnumber = document.querySelector('.clears__number');

    pay.addEventListener('click', () => {
        if (arr.length > 0) {
            infoForm.style.display = 'flex';

        } else {
            alert('Mua hàng thất bại')
        }
    });
    pays.addEventListener('click', () => {
        if (paytext.value != 0 && paysnumber.value != 0) {
            console.log(paytext.value)
            alert('Mua hàng thành công')
            localStorage.removeItem('currents');
            const data = JSON.parse(localStorage.getItem('currents')) || [];
            localStorage.setItem("currents", JSON.stringify(data));
        }
        return home();
    });
}

// Xóa sản phẩm 
function removeItem(id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            data.splice(i, 1);
        }
    }
    localStorage.setItem("currents", JSON.stringify(data));
    window.location.replace('/BTT8/index3.html');
    renderUI(data);
}

// Đếm số lượng
function updateTotalItem(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        total += p.count;
    }
    return total;
}

// Thêm sản phẩm
function changeTotalProduct(id, e) {
    const count = Number(e.target.value);
    if (Number.isInteger(count) && count > 0) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                data[i].count = count;
            }
        }
    }
    localStorage.setItem("currents", JSON.stringify(data));
    renderUI(data);
}


// // Áp dụng mã giảm giá
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40,
};

let inputPromotion = document.querySelector('#promo-code');
function checkPromotion() {
    let value = inputPromotion.value.toUpperCase();
    if (promotionCode[value]) {
        return promotionCode[value];
    }
    return 0;
}

function updateTotalMoney(arr) {
    // Tính tổng tiền cart
    let totalMoney = 0;

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        totalMoney += p.count * p.price;
    }

    let discount = checkPromotion();
    // Cập nhật tiền lên trên giao diện
    subTotalEl.innerText = (totalMoney).toLocaleString();
    vatEl.innerText = (totalMoney * 0.05).toLocaleString();
    if (discount > 0) {
        discountEl.parentElement.classList.remove('hide');
        discountEl.innerText = `-${((discount * totalMoney) / 100).toLocaleString()}`;
        totalEle.innerText = `${(totalMoney * 1.05 - (discount * totalMoney) / 100).toLocaleString()} đồng`;
    } else {
        discountEl.parentElement.classList.add('hide');
        totalEle.innerText = `${(totalMoney * 1.05).toLocaleString()} đồng`;
    }
}

// Mã Giảm giá 
function applyPromotion() {
    let inputPromotion = document.querySelector('#promo-code').value.toUpperCase();
    let promotionCode = {
        A: 10,
        B: 20,
        C: 30,
        D: 40,
    };
    if (promotionCode[inputPromotion]) {
        updateTotalMoney(data);
    } else {
        alert('Mã giảm giá không hợp lệ');
    }
}


renderUI(data);
