import { createSlice } from '@reduxjs/toolkit'
import Internationalisation from '../data/provider/internationalization';


export const sdrlbSlice = createSlice({
    name: 'spiderlib',
    initialState: {
        isDarkModeOn: false,
        isInitialized: false,
        currentLanguage: new Internationalisation().getLanguageByCode('en'),
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

export const { copyWith } = sdrlbSlice.actions;


export default sdrlbSlice.reducer;