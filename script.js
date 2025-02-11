document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const gifContainer = document.getElementById("gif-container");

    let yesSize = 20; // Начальный размер кнопки "Да"
    let step = 30; // Насколько кнопка увеличивается при каждом нажатии

    function showGif() {
        document.querySelector(".buttons").style.display = "none"; // Убираем кнопки
        gifContainer.style.display = "block"; // Показываем гифку
    }

    yesButton.addEventListener("click", showGif);

    noButton.addEventListener("click", () => {
        yesSize += step; // Увеличиваем кнопку "Да"
        yesButton.style.fontSize = `${yesSize}px`;
        yesButton.style.padding = `${yesSize / 3}px ${yesSize / 2}px`;

        if (yesSize >= window.innerWidth / 2) {
            yesButton.style.width = "100vw";  // Заполняем весь экран по ширине
            yesButton.style.height = "100vh"; // Заполняем весь экран по высоте
            yesButton.style.position = "absolute";
            yesButton.style.top = "0";
            yesButton.style.left = "0";
            yesButton.style.zIndex = "999";
            yesButton.style.fontSize = "50px";
            noButton.style.display = "none"; // Прячем кнопку "Нет"
        }

        if (yesSize >= window.innerWidth) {
            showGif(); // Когда "Да" заняло весь экран, показываем гифку
        }
    });
});
