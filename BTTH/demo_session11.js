const prompt = require("prompt-sync")();

let subscriptions = [
    {
        subscriptionId: "SUB01",
        customerName: "Nguyen Van A",
        plan: "Standard",
        price: 120000,
        deviceLimit: 2
    },
    {
        subscriptionId: "SUB02",
        customerName: "Tran Thi B",
        plan: "Family",
        price: 250000,
        deviceLimit: 5
    }
];

function addSub() {
    console.log("\n===== THÊM THUÊ BAO =====");

    let subscriptionId = prompt("Nhập mã thuê bao: ");
    let customerName = prompt("Nhập tên khách hàng: ");

    console.log("\n1. Standard - 120000đ - 2 thiết bị");
    console.log("2. Family   - 250000đ - 5 thiết bị");

    let choice = prompt("Chọn gói: ");

    let plan;
    let price;
    let deviceLimit;

    if (choice === "1") {
        plan = "Standard";
        price = 120000;
        deviceLimit = 2;
    } else if (choice === "2") {
        plan = "Family";
        price = 250000;
        deviceLimit = 5;
    } else {
        console.log("Gói cước không hợp lệ!");
        return;
    }

    let newSub = {
        subscriptionId: subscriptionId,
        customerName: customerName,
        plan: plan,
        price: price,
        deviceLimit: deviceLimit
    };

    subscriptions.push(newSub);

    console.log("Thêm thuê bao thành công!");
}

function listSubs() {
    console.log("\n================ DANH SÁCH THUÊ BAO ================");

    if (subscriptions.length === 0) {
        console.log("Danh sách đang trống!");
        return;
    }

    console.log(
        "Mã thuê bao".padEnd(15) +
        "Khách hàng".padEnd(20) +
        "Gói cước".padEnd(15) +
        "Đơn giá".padEnd(15) +
        "Thiết bị"
    );

    console.log("-".repeat(80));

    for (let i = 0; i < subscriptions.length; i++) {
        let sub = subscriptions[i];

        console.log(
            sub.subscriptionId.padEnd(15) +
            sub.customerName.padEnd(20) +
            sub.plan.padEnd(15) +
            (sub.price.toLocaleString("vi-VN") + "đ").padEnd(15) +
            sub.deviceLimit
        );
    }

    console.log("=".repeat(80));
}

function upgradeSub() {
    console.log("\n===== NÂNG CẤP GÓI CƯỚC =====");

    let subscriptionId = prompt("Nhập mã thuê bao cần nâng cấp: ");

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

    let sub = subscriptions[foundIndex];

    console.log("\nThông tin hiện tại:");
    console.log("Mã:", sub.subscriptionId);
    console.log("Khách hàng:", sub.customerName);
    console.log("Gói:", sub.plan);

    if (sub.plan === "Family") {
        console.log("Thuê bao đã ở gói Family!");
        return;
    }

    sub.plan = "Family";
    sub.price = 250000;
    sub.deviceLimit = 5;

    console.log("\nNâng cấp thành công!");
    console.log("Gói mới: Family");
    console.log("Đơn giá: 250000đ");
    console.log("Thiết bị: 5");
}

let menuChoice;

do {
    console.log("\n");
    console.log("==========================================");
    console.log("       RIKKEISTREAM - QUẢN LÝ SaaS");
    console.log("==========================================");
    console.log("1. Thêm thuê bao mới");
    console.log("2. Hiển thị danh sách thuê bao");
    console.log("3. Nâng cấp gói cước");
    console.log("4. Thoát chương trình");
    console.log("==========================================");

    menuChoice = prompt("Nhập lựa chọn (1-4): ");

    switch (menuChoice) {
        case "1":
            addSub();
            break;

        case "2":
            listSubs();
            break;

        case "3":
            upgradeSub();
            break;

        case "4":
            console.log("Đã thoát chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ!");
    }

} while (menuChoice !== "4");