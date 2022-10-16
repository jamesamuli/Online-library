import { AppName } from "../../Config/Config";
import Internationalisation from "./internationalization";



export default class LocalStorageServices{
    onThemeChanged(isDarkMode){
        console.log(isDarkMode)
        localStorage.setItem(`${AppName}isdm`, isDarkMode ? "1" : "0")
    }

    isDarkTheme(){
        if(Number(localStorage.getItem(`${AppName}isdm`)) === 1){
            return true ;
        }else{
            return false;
        }
    }

    onLanguageChanged(language){
        localStorage.setItem(`${AppName}slctdlngg`, new Internationalisation().typeToCode(language));
    }
    getCurrentLanguage(){
        
        return localStorage.getItem(`${AppName}slctdlngg`) ?? 'en';
    }
}