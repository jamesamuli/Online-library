export const SupportedLanguages = {
    fr: 'fr',
    en: 'en',
    sw: 'sw',
}
export default class Internationalisation {
    currentLanguage = {}

    languages = [
        {
            'code': 'fr', 'flag': '🇫🇷',
            'fr': 'Français',
            'en': 'French',
            'sw': "Kifaransa",
        },
        {
            'code': 'en', 'flag': '🇺🇸',
            'fr': 'Anglais',
            'en': 'English',
            'sw': "Kingereza",
        },
        {
            'code': 'sw', 'flag': '🇹🇿',
            'fr': 'Swahili',
            'en': 'Swahili',
            'sw': "Kiswahili",
        },
    ];

    
    codeToType(code) {
        switch (code) {
            case 'fr':
                return SupportedLanguages.fr;
            case 'sw':
                return SupportedLanguages.sw;
            case 'en':
                return SupportedLanguages.en;
            default:
                return SupportedLanguages.fr;
        }
    }

    typeToCode(language) {
        switch (language) {
            case SupportedLanguages.fr:
                return 'fr';
            case SupportedLanguages.en:
                return 'en';
            case SupportedLanguages.sw:
                return 'sw';
            default:
                return 'fr';
        }
    }

    getLanguageByCode(code) {
        switch (code) {
            case 'fr': return { code: 'fr' }
            case 'en': return { code: 'en' }
            case 'sw': return { code: 'sw' }
            default: return { code: 'fr' }
        }
    }

    onLanguageChanged(language) {
        switch (language) {
            case SupportedLanguages.fr:
                this.currentLanguage = { code: 'fr' }
                break;
            case SupportedLanguages.en:
                this.currentLanguage = { code: 'en' }
                break;
            case SupportedLanguages.sw:
                this.currentLanguage = { code: 'sw' }
                break;
            default: this.currentLanguage = { code: 'fr' }
                break;
        }
    }
}