// Функция для открытия вкладок
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav__tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("nav__tablink_active");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("nav__tablink_active");
}

document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const buttons = [
        { id: 'change-ip', message: 'Изменение IP-адреса...' },
        { id: 'change-conditions', message: 'Изменение условий подключения...' },
        { id: 'freeze', message: 'Заморозка подключения...' },
        { id: 'unfreeze', message: 'Разморозка подключения...' },
        { id: 'pay-now', message: 'Оплата...' },
        { id: 'contact-support', message: 'Связь с техподдержкой...' },
    ];

    buttons.forEach(btn => {
        document.getElementById(btn.id).addEventListener('click', function() {
            alert(btn.message);
        });
    });

    const tablinks = document.getElementsByClassName('nav__tablink');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener('click', function(event) {
            openTab(event, tablinks[i].getAttribute('data-tab'));
        });
    }

    // Открываем вкладку "Управление подключением" по умолчанию
    document.getElementById("connection").style.display = "block";
    document.getElementsByClassName("nav__tablink")[0].classList.add("nav__tablink_active");
});