// Initialize Telegram library
Telegram.WebView.ready(function() {
    // Add event listeners for user info, payment, and info windows
    document.getElementById('user-info-window').addEventListener('click', function() {
        // Show user info window
        this.classList.add('show');
    });

    document.getElementById('payment-window').addEventListener('click', function() {
        // Show payment window
        this.classList.add('show');
    });

    document.getElementById('info-window').addEventListener('click', function() {
        // Show info window
        this.classList.add('show');
    });
});