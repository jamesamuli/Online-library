import { connect } from 'react-redux'
import ManagerRepository from '../../../data/repository/manager_repo'
import { copyWith } from '../../../logic/slice';



function ThemeChanger({ isDarkModeOn, dispatch }) {
    return <div className="mode_container" onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        changeTheme(!isDarkModeOn, dispatch)
    }}>
        <box-icon name={isDarkModeOn ? 'sun' : 'moon'} color={isDarkModeOn ? "var(--primaryColorSecondVariant)" : "var(--primaryColor)"} size={'2em'}></box-icon>
    </div>
}

async function changeTheme(isDarkModeOn, dispatch) {
    try {
        new ManagerRepository().onThemeChanged(isDarkModeOn);
        await dispatch(copyWith({
            isDarkModeOn: isDarkModeOn,
        }))
    } catch (e) {
        console.log('An error occured while changing the them', e)
    }
    console.log("Theme changed successfully !!!")
}
export const light = {
    backgroundColor: "#fdfdfd",
    secondaryColor: "#1a1a23",
    cardColor: "#ffffff",
    secondaryColorVariant: "#44444b",
    grayText: "#cacaca",
    inputBackground: "#f1f1f1",
    inputTextColor: "#6e6e6e",
};
export const dark = {
    backgroundColor: 'rgba(17, 24, 39, 1)',
    secondaryColor: "#1a1a23",
    cardColor: "#ffffff",
    secondaryColorVariant: "#44444b",
    grayText: "#cacaca",
    inputBackground: "#f1f1f1",
    inputTextColor: "#6e6e6e",
};
export function themeRender(theme) {


    return {
        '--backgroundColor': theme.backgroundColor,
        '--secondaryColor': theme.secondaryColor,
        '--cardColor': theme.cardColor,
        '--secondaryColorVariant': theme.secondaryColorVariant,
        '--grayText ': theme.grayText,
        '--inputBackground': theme.inputBackground,
        '--inputTextColor': theme.inputTextColor,
    }
}

const mapStateToProps = (storeOf) => ({
    isDarkModeOn: storeOf.spiderlib.isDarkModeOn,
})

export default connect(mapStateToProps)(ThemeChanger)