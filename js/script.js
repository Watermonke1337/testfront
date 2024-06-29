const jsConfetti = new JSConfetti();
const userInfo = require('./userInfo');

initializeDraymanFramework({
    browserCommands: (emit) => ({
        getTelegramData: () => {
            window.Telegram.WebApp.ready();
            return {
                initData: window.Telegram.WebApp.initData,
                initDataUnsafe: window.Telegram.WebApp.initDataUnsafe,
                themeParams: window.Telegram.WebApp.themeParams,
                colorScheme: window.Telegram.WebApp.colorScheme,
                viewportHeight: window.Telegram.WebApp.viewportHeight,
            };
        },
        setMainButtonParams: (params) => {
            window.Telegram.WebApp.MainButton.setParams(params);
        },
        setBackButtonVisibility: ({ visible }) => {
            visible
                ? window.Telegram.WebApp.BackButton.show()
                : window.Telegram.WebApp.BackButton.hide();
        },
        explode: async () => {
            jsConfetti.addConfetti();
        },
        events: async ({ onMainButtonClick, onViewportChanged, onBackButtonClick }) => {
            Telegram.WebApp.onEvent("mainButtonClicked", () => emit(onMainButtonClick));
            Telegram.WebApp.onEvent("backButtonClicked", () => emit(onBackButtonClick));
            Telegram.WebApp.onEvent("viewportChanged", () => emit(onViewportChanged, { viewportHeight: window.Telegram.WebApp.viewportHeight }, { debounce: 300 }));
        },
    }),
});

// Render user info component
const userInfoWindow = document.getElementById('user-info-window');
userInfoWindow.innerHTML = userInfo({ userInfo: { username: 'John Doe', bio: 'Hello, I am John Doe!' } });