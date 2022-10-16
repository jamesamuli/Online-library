import { appName } from "../../config/config";
import Internationalisation from "./internationalization";



export default class LocalStorageServices{
    onThemeChanged(isDarkMode){
        localStorage.setItem(`${appName}isdm`, isDarkMode ? 1 : 0)
    }

    isDarkTheme(){
        if(Number(localStorage.getItem(`${appName}isdm`)) === 1){
            return true ;
        }else{
            return false;
        }
    }

    onLanguageChanged(language){
        localStorage.setItem(`${appName}slctdlngg`, new Internationalisation().typeToCode(language));
    }
    getCurrentLanguge(){
        return localStorage.getItem(`${appName}slctdlngg` ?? 'fr')
    }
}