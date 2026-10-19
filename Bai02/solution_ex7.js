let subscriptions = [
    {
        subscriptionId: "SUB_001",
        customerName: "Nguyen Van An",
        planTier: "PERSONAL",
        deviceLimit: 2
    },
    {
        subscriptionId: "SUB_002",
        customerName: "Tran Thi Mai",
        planTier: "FAMILY",
        deviceLimit: 5
    },
    {
        subscriptionId: "SUB_003",
        customerName: "Le Van Nam",
        planTier: "PERSONAL",
        deviceLimit: 2
    }
];

function generateSubscriptionId() {
    let number = subscriptions.length + 1;

    return "SUB_" + String(number).padStart(3, "0");
}

function addSubscription() {
    console.log("\n===== THÊM THUÊ BAO =====");

    let customerName = prompt("Nhập tên khách hàng: ");

    if (customerName.trim() === "") {
        console.log("Tên khách hàng không được để trống!");
        return;
    }

    console.log("1. PERSONAL - 2 thiết bị");
    console.log("2. FAMILY   - 5 thiết bị");

    let choice = prompt("Chọn gói (1-2): ");

    let planTier;
    let deviceLimit;

    if (choice === "1") {
        planTier = "PERSONAL";
        deviceLimit = 2;
    } else if (choice === "2") {
        planTier = "FAMILY";
        deviceLimit = 5;
    } else {
        console.log("Lựa chọn gói không hợp lệ!");
        return;
    }

    let subscriptionId = generateSubscriptionId();

    let newSubscription = {
        subscriptionId: subscriptionId,
        customerName: customerName,
        planTier: planTier,
        deviceLimit: deviceLimit
    };

    subscriptions.push(newSubscription);

    console.log("Thêm thuê bao thành công!");
    console.log("Mã thuê bao:", subscriptionId);
}

function listSubscriptions() {
    console.log("\n================ DANH SÁCH THUÊ BAO ================");

    if (subscriptions.length === 0) {
        console.log("Danh sách thuê bao đang trống!");
        return;
    }

    console.table(subscriptions);
}

function updateSubscription() {
    console.log("\n===== CẬP NHẬT GÓI CƯỚC =====");

    let subscriptionId = prompt("Nhập mã thuê bao cần cập nhật: ");

    let foundIndex = -1;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex === -1) {
        console.log("Không tìm thấy thuê bao!");
        return;
    }

    console.log("Thông tin hiện tại:");
    console.log(subscriptions[foundIndex]);

    console.log("\n1. PERSONAL - 2 thiết bị");
    console.log("2. FAMILY   - 5 thiết bị");

    let choice = prompt("Chọn gói mới (1-2): ");

    if (choice === "1") {
        subscriptions[foundIndex].planTier = "PERSONAL";
        subscriptions[foundIndex].deviceLimit = 2;
    } else if (choice === "2") {
        subscriptions[foundIndex].planTier = "FAMILY";
        subscriptions[foundIndex].deviceLimit = 5;
    } else {
        console.log("Lựa chọn gói không hợp lệ!");
        return;
    }

    console.log("Cập nhật thuê bao thành công!");
}

function deleteSubscription() {
    console.log("\n===== HỦY THUÊ BAO =====");

    let subscriptionId = prompt("Nhập mã thuê bao cần hủy: ");

    let foundIndex = -1;

    for (let i = 0; i < subscriptions.length; i++) {
        if (subscriptions[i].subscriptionId === subscriptionId) {
            foundIndex = i;
            break;
        }
    }

    if (foundIndex === -1) {
        console.log("Không tìm thấy thuê bao!");
        return;
    }

    console.log("Thông tin thuê bao:");
    console.log(subscriptions[foundIndex]);

    let confirmDelete = prompt("Bạn có chắc muốn hủy? (Y/N): ");

    if (confirmDelete.toUpperCase() === "Y") {
        subscriptions.splice(foundIndex, 1);
        console.log("Hủy thuê bao thành công!");
    } else {
        console.log("Đã hủy thao tác.");
    }
}

let menuChoice;

do {
    console.log("\n======================================");
    console.log("       RIKKEISTREAM - QUẢN LÝ SaaS");
    console.log("======================================");
    console.log("1. Thêm thuê bao mới");
    console.log("2. Xem toàn bộ danh sách");
    console.log("3. Cập nhật gói cước");
    console.log("4. Hủy thuê bao");
    console.log("5. Thoát chương trình");
    console.log("======================================");

    menuChoice = prompt("Nhập lựa chọn (1-5): ");

    switch (menuChoice) {
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
            console.log("Đã thoát chương trình. Hẹn gặp lại!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ! Vui lòng chọn từ 1 đến 5.");
    }

} while (menuChoice !== "5");