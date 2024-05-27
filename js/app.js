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

    document.getElementsByClassName("tablink")[0].click();

    const tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener('click', function(event) {
            openTab(event, tablinks[i].getAttribute('onclick').split("'")[1]);
        });
    }
});