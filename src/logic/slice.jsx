import { createSlice } from '@reduxjs/toolkit'
import Internationalisation from '../data/provider/internationalization';


export const crmSlice = createSlice({
    name: 'SPIDERLIB',
    initialState: {
        isDarkModeOn: false,
        isInitialized: false,
        currentLanguage: new Internationalisation().getLanguageByCode('fr'),
        userInformation: {},
    },
    
    reducers: {
        copyWith: (state, action) => {
            state.userLocation = action.payload.userLocation ?? state.userLocation;
            state.isInitialized = action.payload.isInitialized ?? state.isInitialized;
            state.userInformation = action.payload.userInformation ?? state.userInformation;
            state.isDarkModeOn = action.payload.isDarkModeOn ?? state.isDarkModeOn;
            state.currentLanguage = action.payload.currentLanguage ?? state.currentLanguage;
        },
    },
})

export const { copyWith } = crmSlice.actions;


export default crmSlice.reducer;