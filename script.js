document.addEventListener("DOMContentLoaded", function() {
    const showArticlesButton = document.getElementById("showArticlesButton");
    const articles = document.getElementById("articles");
    const copyButtons = document.querySelectorAll(".copyButton");

    showArticlesButton.addEventListener("click", function() {
        if (articles.style.display === "none" || articles.style.display === "") {
            articles.style.display = "block";
            showArticlesButton.textContent = "Скрыть статьи";
        } else {
            articles.style.display = "none";
            showArticlesButton.textContent = "Показать статьи";
        }
    });

    copyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const textToCopy = this.getAttribute("data-text");
            copyTextToClipboard(textToCopy);
        });
    });

    function copyTextToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Текст скопирован в буфер обмена: " + text);
    }
});
