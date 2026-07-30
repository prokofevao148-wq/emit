// ===============================
// ЭМИТ — SCRIPT
// ===============================


const form = document.getElementById("form");



form.addEventListener("submit", function(event){


    event.preventDefault();



    let name =
    form.querySelector("input[type='text']")?.value;



    let phone =
    form.querySelector("input[type='tel']")?.value;



    let service =
    form.querySelector("select")?.value;



    let comment =
    form.querySelector("textarea")?.value;




    if(!name || !phone){

        alert(
        "Пожалуйста, заполните имя и телефон"
        );

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



    navigator.clipboard.writeText(message);



    alert(
    "Заявка подготовлена. Текст скопирован, сейчас откроется MAX."
    );



    window.open(
        maxLink,
        "_blank"
    );



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
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";


}


});


},
{

threshold:0.15

});





elements.forEach(el=>{


el.style.opacity="0";


el.style.transform=
"translateY(20px)";


el.style.transition=
"0.5s";


observer.observe(el);


});