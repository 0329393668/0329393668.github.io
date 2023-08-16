table_list = [
    { 'id': 1, 'name': 'Bàn 1', 'status': 'Trống' },
    { 'id': 2, 'name': 'Bàn 2', 'status': 'Trống' },
    { 'id': 3, 'name': 'Bàn 3', 'status': 'Trống' },
    { 'id': 4, 'name': 'Bàn 4', 'status': 'Trống' },
    { 'id': 5, 'name': 'Bàn 5', 'status': 'Trống' },
    { 'id': 6, 'name': 'Bàn 6', 'status': 'Trống' },
    { 'id': 7, 'name': 'Bàn 7', 'status': 'Trống' },
    { 'id': 8, 'name': 'Bàn 8', 'status': 'Trống' },
    { 'id': 9, 'name': 'Bàn 9', 'status': 'Trống' }
]

const containerTable = document.querySelector('.container_table');
function rederTable(arr) {
    containerTable.innerHTML = '';

    if (arr.length == 0) {
        containerTable.insertAdjacentHTML(
            'afterbegin',
            '<li>Không cón bàn nào trống</li>'
        );
        document.querySelector('.option-container').style.display = 'none';
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        containerTable.innerHTML += `
        <div class="table mt-30">
        <div class="table_number">${p.name}</div>
        <div class="table_status">${p.status}</div>
    </div>
        `;
    }
}
function applyDiscount() {
    var discountCode = document.getElementById("discount-code").value;
}
rederTable(table_list);