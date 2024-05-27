document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.expand();

    document.getElementById('change-ip').addEventListener('click', function() {
        // AJAX-запрос для изменения IP-адреса
        alert('Изменение IP-адреса...');
    });

    document.getElementById('change-conditions').addEventListener('click', function() {
        // AJAX-запрос для изменения условий подключения
        alert('Изменение условий подключения...');
    });

    document.getElementById('freeze').addEventListener('click', function() {
        // AJAX-запрос для заморозки подключения
        alert('Заморозка подключения...');
    });

    document.getElementById('unfreeze').addEventListener('click', function() {
        // AJAX-запрос для разморозки подключения
        alert('Разморозка подключения...');
    });

    document.getElementById('pay-now').addEventListener('click', function() {
        // AJAX-запрос для оплаты
        alert('Оплата...');
    });

    document.getElementById('contact-support').addEventListener('click', function() {
        // AJAX-запрос для связи с техподдержкой
        alert('Связь с техподдержкой...');
    });

    // Функция для открытия вкладок
    function openTab(evt, tabName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Открываем первую вкладку по умолчанию
    document.getElementsByClassName("tablink")[0].click();
});