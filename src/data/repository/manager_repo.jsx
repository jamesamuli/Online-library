import Internationalisation from "../provider/internationalization";

import LocalStorageServices from "../provider/local_storage";

export default class ManagerRepository {
    loadAppSettings() {
        const localStorageServices = new LocalStorageServices();
        let isDarkModeOn = localStorageServices.isDarkTheme();
        let currentLanguage = localStorageServices.getCurrentLanguage();

        return {
            isDarkModeOn: isDarkModeOn,
            currentLanguage: new Internationalisation().getLanguageByCode(currentLanguage)
        }
    }

    onFirstTimeOpeningTheApp() {
        const localStorageServices = new LocalStorageServices();
        localStorageServices.onFirstTime();
        localStorageServices.onThemeChanged(false);
        localStorageServices.onLanguageChanged(
            new Internationalisation().codeToType(navigator.language.split("-")[0]),
        );
    }

    onThemeChanged(isDarkModeOn) {
        const localStorageServices = new LocalStorageServices();
        localStorageServices.onThemeChanged(isDarkModeOn);
    }

    // onSetRefreshToken(tokens) {
    //     const { accessToken, refreshToken } = tokens;
    //     const localStorageServices = new LocalStorageServices();
    //     localStorageServices.setRefreshToken(refreshToken);
    //     localStorageServices.setAccessToken(accessToken);
    // }

    onLanguageChanged(language) {
        const localStorageServices = new LocalStorageServices();
        const internationalisation = new Internationalisation();
        localStorageServices.onLanguageChanged(language);
        internationalisation.onLanguageChanged(language);
        return internationalisation.currentLanguage;
    }
}