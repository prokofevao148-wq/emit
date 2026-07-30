// ===============================
// ЭМИТ — SCRIPT
// ===============================

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Ищем поля по типу, так как в HTML добавлены type="text" и type="tel"
    let nameInput = form.querySelector("input[type='text']");
    let phoneInput = form.querySelector("input[type='tel']");
    
    let name = nameInput ? nameInput.value : "";
    let phone = phoneInput ? phoneInput.value : "";

    let serviceSelect = form.querySelector("select");
    let service = serviceSelect ? serviceSelect.value : "Не выбрано";

    let commentArea = form.querySelector("textarea");
    let comment = commentArea ? commentArea.value : "";

    if (!name || !phone) {
        alert("Пожалуйста, заполните имя и телефон");
        return;
    }

    let message =
        `Здравствуйте! Хочу оставить заявку ЭМИТ.

Имя: ${name}

Телефон: ${phone}

Услуга: ${service}

Комментарий:
${comment}
`;

    let maxLink =
        "https://max.ru/u/f9LHodD0cOIBNm7gJ6LbgEeDlz2U4vwxYKW4rQCHhH3ML3AjTWeqN0Z57Oc";

    navigator.clipboard.writeText(message).then(function() {
        alert("Заявка подготовлена. Текст скопирован, сейчас откроется MAX.");
        window.open(maxLink, "_blank");
    }).catch(function(err) {
        // Если доступ к буферу запрещен браузером
        console.error('Ошибка копирования: ', err);
        window.open(maxLink, "_blank");
    });
});

// ===============================
// Плавное появление элементов
// ===============================

const elements =
    document.querySelectorAll(
        ".card, .work, .features div"
    );

const observer =
    new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        {
            threshold: 0.15
        }
    );

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "0.5s";
    observer.observe(el);
});