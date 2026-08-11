// ===============================
// ЭМИТ — SCRIPT
// ===============================

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Ищем поля по типу и ID (более надежно)
    let nameInput = form.querySelector("input[type='text']");
    let phoneInput = form.querySelector("input[type='tel']");
    let serviceSelect = form.querySelector("#service-select"); // Ищем по новому ID
    let commentArea = form.querySelector("textarea");
    
    let name = nameInput ? nameInput.value.trim() : "";
    let phone = phoneInput ? phoneInput.value.trim() : "";
    let service = serviceSelect ? serviceSelect.value : "Не выбрано";
    let comment = commentArea ? commentArea.value.trim() : "";

    if (!name || !phone) {
        alert("Пожалуйста, заполните имя и телефон");
        return;
    }

    let message =
        `Здравствуйте! Хочу оставить заявку в ЭМИТ.

Имя: ${name}
Телефон: ${phone}
Услуга: ${service}

Комментарий:
${comment || "Без комментария"}`; // Если комментарий пустой, пишем "Без комментария"

    let maxLink = "https://max.ru/u/f9LHodD0cOIBNm7gJ6LbgEeDlz2U4vwxYKW4rQCHhH3ML3AjTWeqN0Z57Oc";

    // Копируем и открываем
    navigator.clipboard.writeText(message).then(function() {
        alert("Заявка подготовлена! Текст скопирован, сейчас откроется MAX.");
        window.open(maxLink, "_blank");
        form.reset(); // Очищаем форму после успешной отправки
    }).catch(function(err) {
        console.error('Ошибка копирования: ', err);
        alert("Не удалось скопировать текст автоматически. Пожалуйста, скопируйте его вручную или просто напишите в MAX.");
        window.open(maxLink, "_blank");
    });
});

// ===============================
// Плавное появление элементов
// ===============================

const elements = document.querySelectorAll(".card, .work, .features div, .protection-card, .tyres-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                // Перестаем наблюдать за элементом после появления (оптимизация производительности)
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)"; // Чуть больше смещение для заметного эффекта
    // Явно указываем, какие свойства анимировать, и добавляем ease для плавности
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
});
