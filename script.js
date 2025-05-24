function copyEmail() {
    const email = document.getElementById("emailInput").value;
    const button = document.querySelector(".email");

    // Копируем текст
    navigator.clipboard.writeText(email).then(() => {
        // Меняем текст кнопки
        const originalText = button.innerHTML;
        button.innerHTML = 'Copied! <i class="far fa-check-circle"></i>';

        // Возвращаем через 2 секунды
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 4000);
    });
}