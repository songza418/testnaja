document.addEventListener("DOMContentLoaded", function () {
    // เลือกปุ่มจากหน้า HTML
    let button = document.getElementById("alertButton");

    // กำหนดให้กดแล้วแสดง alert
    button.addEventListener("click", function () {
        alert("พ่อง");
    });
});
