import { textColor } from '../../../Config/Config';
import AppLogo from '../../../Assets/img/withouTextLogo.png'
import './home.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { copyWith } from '../../../logic/slice';
import ManagerRepository from '../../../data/repository/manager_repo';
import Themechanger from '../../Components/Theme/Theme_changer';


function Home({ currentLanguage, dispatch }) {

    useEffect(() => {
        const settings = new ManagerRepository().loadAppSettings();
        dispatch(copyWith({
            isDarkModeOn: settings.isDarkModeOn,
            currentLanguage: settings.currentLanguage,
        }))
    }, [dispatch])


    const OptionToBeSelected = [
        { IconName: 'library', Name: 'Books', route: '', IconColor: 'var(--primaryColor)' },
        { IconName: 'calendar-event', Name: 'Published 7 day ago', route: '', IconColor: 'var(--primaryColorThirdVariant)' },
        { IconName: 'group', Name: 'Authors', route: '', IconColor: 'var(--primaryColorSecondVariant)' },
        { IconName: 'arch', Name: 'Editor', route: '', IconColor: 'var(--primaryColorFourthVariant)' },
        { IconName: 'cabinet', Name: 'Genre', route: '', IconColor: 'var(--primaryColorThirdVariant)' },
        { IconName: 'bookmark-alt', Name: 'Etiquette', route: '', IconColor: 'var(--primaryColorSecondVariant)' },
        { IconName: 'list-ol', Name: 'Series', route: '', IconColor: 'var(--primaryColorFourthVariant)' },
        { IconName: 'calendar', Name: 'Year published', route: '', IconColor: 'var(--primaryColor)' },
    ]
    return <div className="home_screen">
        {console.log(currentLanguage)}
        <div className="headers" >
            <div className="logo_container">
                <img src={AppLogo} alt="App Logo" tabIndex={0} />
            </div>
            <div className="side_container">
                <Themechanger/>
                <div className="language_container">
                    <box-icon name='world' color={"var(--primaryColorThirdVariant)"} size={'2rem'}></box-icon>
                </div>
            </div>
        </div>
        <div className="main_container">
            <div className="main_wrapper">
                <div className="wrapper">
                    <div className="titleApp">
                        <h1>Spider<span>Lib</span> </h1>
                    </div>
                    <div className="search_container">
                        <input type="text" name="Search" title='Search whatever here' placeholder='Search for Books, Author and many more...' />
                        <div className="search_button" tabIndex={0}>
                            <box-icon name='search' color={textColor}></box-icon>
                        </div>
                    </div>
                </div>

                <div className="route_container">
                    {OptionToBeSelected.map((el, i) => {
                        return <div className="container" key={i}>
                            <box-icon name={el.IconName} size={'2.2rem'} color={el.IconColor}></box-icon>
                            <h3>{el.Name}</h3>
                        </div>
                    })}
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = (storeOf) => ({
    currentLanguage: storeOf.spiderlib.currentLanguage.code,
    isDarkModeOn: storeOf.spiderlib.isDarkModeOn,
});

export default connect(mapStateToProps)(Home)