document.querySelectorAll(".borrow").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Bạn đã mượn sách thành công!");
    });
});


document.querySelectorAll(".return").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Bạn đã trả sách thành công!");
    });
});