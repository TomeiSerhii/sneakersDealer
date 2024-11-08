function scrollToProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
document.querySelectorAll('.product .my_button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});
