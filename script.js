const eggButton = document.getElementById("eggButton");

const coinsElement = document.getElementById("tapCoins");

let tapCoins =
    Number(localStorage.getItem("tapCoins")) || 0;


// Обновление баланса

function updateBalance() {

    coinsElement.textContent =
        tapCoins.toLocaleString("ru-RU");

    localStorage.setItem(
        "tapCoins",
        tapCoins
    );
}


// Создание всплывающей монетки

function createFloatingCoin(x, y) {

    const coin =
        document.createElement("div");

    coin.className = "float-coin";

    coin.textContent = "+1 🪙";

    coin.style.left = x + "px";

    coin.style.top = y + "px";

    document.body.appendChild(coin);


    setTimeout(() => {

        coin.remove();

    }, 700);
}


// Тап по яйцу

function tapEgg() {

    // +1 Tap Coin

    tapCoins += 1;

    updateBalance();


    // Получаем позицию яйца

    const rect =
        eggButton.getBoundingClientRect();


    const x =
        rect.left +
        rect.width / 2 +
        (Math.random() - 0.5) * 100;


    const y =
        rect.top +
        rect.height / 2 +
        (Math.random() - 0.5) * 50;


    // Показываем +1

    createFloatingCoin(x, y);


    // Вибрация телефона

    if (navigator.vibrate) {

        navigator.vibrate(8);

    }
}


// Обработка нажатия

eggButton.addEventListener(
    "pointerdown",
    function(event) {

        event.preventDefault();

        tapEgg();

    }
);


// Кнопка яиц

document
    .getElementById("eggsButton")
    .addEventListener("click", function() {

        alert(
            "🥚 Здесь будет твоя коллекция яиц."
        );

    });


// Кнопка магазина

document
    .getElementById("shopButton")
    .addEventListener("click", function() {

        alert(
            "🛒 Здесь будет магазин предметов."
        );

    });


// Показываем баланс

updateBalance();