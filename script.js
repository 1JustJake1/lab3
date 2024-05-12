let games = [
    {
        id: 1,
        name: "HELLDIVERS 2",
        image: "media\\1.jpg",
        description: "Остання лінія оборони Галактики. Приєднуйтеся до Пекельних десантників та боріться за свободу у ворожій галактиці у швидкому, шаленому та жорстокому шутері від третьої особи. ЦІНА:1199",
        category: "Екшен",
    },
    {
        id: 2,
        name: "Dishonored",
        image: "media\\2.jpg",
        description: "Dishonored — це захоплюючий екшн від першої особи, який представляє вас як надприродного вбивцю, якого спонукає помста. Завдяки гнучкій бойовій системі Dishonored творчо знищуйте свої цілі, комбінуючи надприродні здібності, зброю та незвичайні гаджети, які є у вашому розпорядженні. ЦІНА:260 ",
        category: "Екшен",
    },
    {
        id: 3,
        name: "ELDEN RING",
        image: "media\\3.jpg",
        description: "НОВА ФЕНТЕЗІЙНА RPG. Підніміться, заплямовані, і будьте керовані благодаттю, щоб володіти силою Кільця Елдена і стати Повелитилем Елдена у Землях Міжземмелля. ЦІНА:1799",
        category: "Екшен",
    },
    {
        id: 4,
        name: "DARK SOULS III",
        image: "media\\4.jpg",
        description: "Dark Souls продовжує розширювати кордони з останньою, амбітною частиною в серії, який отримав визнання критиків і визнання фанатів. Приготуйтеся та прийміть Темряву! ЦІНА:990",
        category: "Екшен",
    },
    {
        id: 5,
        name: "Lethal Company",
        image: "media\\5.jpg",
        description: "Кооперативний хоррор про пошук сміття на покинутих планетах, щоб продати брухт Компанії. ЦІНА:225",
        category: "Жахи",
    },
    {
        id: 6,
        name: "Phasmophobia",
        image: "media\\6.jpg",
        description: "Phasmophobia — кооперативний психологічний хоррор для 4 гравців. Паранормальні явища зростають, і ви та ваша команда повинні використовувати все наявне у вас обладнання для полювання на привидів, щоб зібрати якомога більше доказів. ЦІНА:219",
        category: "Жахи",
    },
    {
        id: 7,
        name: "Outlast",
        image: "media\\7.jpg",
        description: "Пекло — це експеримент, в якому неможливо вижити в Outlast. В хоррор грі від першої особи, виконуючи роль журналіста-розслідувача Майлза Апшера, досліджуйте психлікарню Mount Massive і спробуйте вижити достатньо довго, щоб розгадати її жахливу таємницю. ЦІНА:415",
        category: "Жахи",
    },
    {
        id: 8,
        name: "Resident Evil 2",
        image: "media\\8.jpg",
        description: "«Смертельний вірус поглинув жителів Раккун-Сіті у вересні 1998 року, занурюючи місто в хаос, оскільки зомбі бродять вулицями в пошуках тих, хто вижив. На вас чекають захоплюючий сюжет і неймовірні жахи. Станьте свідками повернення Resident Evil 2. ЦІНА:400",
        category: "Жахи",
    },
    {
        id: 9,
        name: "Sid Meier’s Civilization VI",
        image: "media\\9.jpg",
        description: "Civilization VI — це найновіша частина відзначеної нагородами франшизи Civilization. Розширюйте свою імперію, розвивайте свою культуру та змагайтеся один з одним з найвидатнішими лідерами історії. Чи витримає ваша цивілізація випробування часом? ЦІНА:525",
        category: "Стратегія",
    },
    {
        id: 10,
        name: "Slay the Spire»",
        image: "media\\10.jpg",
        description: "Ми поєднали карткові та мандрівні ігри, створивши найкращий однокористувацький складальник колоди, який ми тільки могли. Створіть свою унікальну колоду, зустріньтесь із чудернацькими істотами, знайдіть амулети надприродної сили, та підкоріть Вежу! ЦІНА:499",
        category: "Стратегія",
    },
    {
        id: 11,
        name: "Baldur's Gate 3»",
        image: "media\\11.jpg",
        description: "Baldur’s Gate 3 — це насичена сюжетом рольова гра для вечірок у всесвіті Dungeons & Dragons, де ваш вибір формує історію про дружбу та зраду, виживання та жертви та спокусу абсолютної влади. ЦІНА:899",
        category: "Стратегія",
    }

]


function loadProducts(category, priceLower, priceHigher) {
    let container = document.getElementById("container");
    let innerHtmlContainer = "";
    let gamesFiltered = [];
    if (category) {
      if (category == "кошик") return showBasket();
      gamesFiltered = games.filter((elem) => elem.category === category);
    } else {
      gamesFiltered = games;
    }
    gamesFiltered.forEach((elem) => {
      let elemHtml = ` <div class="elem-card">
      <div class="leftside">
        <image width="20%" src="${elem.image}"/>
      </div>
      <div class="rightside">
        <h4 class="cardtitle">${elem.name}</h4>
        <p>${elem.description}</p>
      </div>
      <button onclick="addBasket(${elem.id})">Додати в кошик</button>
    </div>`;
      innerHtmlContainer += elemHtml;
    });
    container.innerHTML = innerHtmlContainer;
  }
  
  let basket = [];
  
  function showBasket() {
    let container = document.getElementById("container");
    let innerHtmlContainer = "";
  
    games.forEach((elem) => {
      if (!basket.includes(elem.id)) return;
      let elemHtml = `
      <div class="elem-card">
        <div class="leftside">
          <image width="20%" src="${elem.image}"/>
        </div>
        <div class="rightside">
          <h4 class="cardtitle">${elem.name}</h4>
          <p>${elem.description}</p>
        </div>
        <button onclick="removeFromBasket(${elem.id})">Видалити з кошика</button>
      </div>`;
      innerHtmlContainer += elemHtml;
    });
    container.innerHTML = innerHtmlContainer;
  }
  
  function addBasket(elem) {
    basket.push(elem);
    console.log(basket);
  }
  
  function removeFromBasket(elemId) {
    const index = basket.indexOf(elemId);
    if (index !== -1) {
      basket.splice(index, 1);
      showBasket(); // Оновити відображення корзини після видалення
    }
  }

setTimeout(() => {
    let container = document.getElementById("navbar");
    container.innerHTML = "Please like and subscribe";
}, 5000)

document.addEventListener("DOMContentLoaded", function () {
    var subscriptionOffer = document.getElementById('subscriptionOffer');
    var acceptButton = document.getElementById('acceptButton');
    var rejectButton = document.getElementById('rejectButton');


    function showSubscriptionOffer() {
        subscriptionOffer.style.display = 'block';
    }


    function hideSubscriptionOffer() {
        subscriptionOffer.style.display = 'none';
    }


    if (!localStorage.getItem('subscriptionAccepted')) {
        showSubscriptionOffer();
    }


    acceptButton.addEventListener('click', function () {
        localStorage.setItem('subscriptionAccepted', true);
        hideSubscriptionOffer();
    });

    rejectButton.addEventListener('click', function () {
        hideSubscriptionOffer();
    });
});

const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeButton = document.getElementById('close-btn');
const closeTimeout = 5000;


function showModal() {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}


function closeModal() {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}


closeButton.addEventListener('click', closeModal);


let timer = setTimeout(() => {
    closeButton.textContent = "Close";
    closeButton.style.color = "#000";
    closeButton.addEventListener('click', closeModal);
}, closeTimeout);


modal.addEventListener('click', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        closeButton.textContent = "Close";
        closeButton.style.color = "#000";
        closeButton.addEventListener('click', closeModal);
    }, closeTimeout);
});


showModal();