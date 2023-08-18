const video = document.getElementById('hero-video');
video.controls = false;
// 
function sendMail(){
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Заполните все обязательные поля.");
        return false; // Предотвращаем отправку формы
    }

    const params = {
        name: name,
        email: email,
        message: message,
    }
    const serviceID = "service_p1d2u3q"
    const templateID = "template_zsf595o"
    
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Сообщение отправлено");
        })
        .catch((err) => console.log(err));

    return false; // Предотвращаем отправку формы после выполнения sendMail()
}

// 

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLink = document.querySelector('.nav-link');
    const navLinks = document.querySelectorAll('.nav-link a'); // Получаем все ссылки внутри меню

    burger.addEventListener('click', function(event) {
        event.stopPropagation();
        navLink.classList.toggle('active');
        burger.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!navLink.contains(event.target) && !burger.contains(event.target)) {
            navLink.classList.remove('active');
            burger.classList.remove('active');
        }
    });

    // Добавляем обработчик события для каждой ссылки внутри меню
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLink.classList.remove('active'); // Закрываем меню при клике на ссылку
        });
    });
});

