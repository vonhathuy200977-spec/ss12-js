function addSubscription() {
    console.log("Thêm thuê bao");
}

function listSubscriptions() {
    console.log("Danh sách thuê bao");
}

function updateSubscription() {
    console.log("Cập nhật thuê bao");
}

function deleteSubscription() {
    console.log("Xóa thuê bao");
}

let choice;

do {
    console.log("\n===== MENU =====");
    console.log("1. Thêm thuê bao");
    console.log("2. Xem danh sách");
    console.log("3. Cập nhật thuê bao");
    console.log("4. Xóa thuê bao");
    console.log("5. Thoát");

    choice = prompt("Nhập lựa chọn: ");

    switch (choice) {
        case "1":
            addSubscription();
            break;

        case "2":
            listSubscriptions();
            break;

        case "3":
            updateSubscription();
            break;

        case "4":
            deleteSubscription();
            break;

        case "5":
            console.log("Thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

} while (choice !== "5");