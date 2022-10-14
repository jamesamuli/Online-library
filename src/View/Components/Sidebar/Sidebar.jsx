import { AppName } from '../../../Config/Config';
import './Sidebar.css';
import dumbProfil from '../../../Assets/img/dumb-profil.jpg';
import { useState } from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="head">
                <h1 title='Spider Library'>{AppName}</h1>
                <div className="notificatiion_container">
                    <box-icon name='envelope-open' color='#ffffff' ></box-icon>
                </div>
            </div>
            <div className="profil_container">
                <div className="profil_img">
                    <img src={dumbProfil} alt="Profil Image" width={200} height={200} />
                </div>
                <div className="initials_container">
                    <h3>Michael Jordans</h3>
                    <p>@username</p>
                </div>
            </div>

            <MenuSidebar />
        </div>
    )
}

let textColor = 'var(--grayText)'

function MenuSidebar() {
    let [active, setActive] = useState(false)
    const SidebarMenu = {
        UperMenu: [
            { iconName: 'home-alt-2', name: "Home", route: './'},
            { iconName: 'book-heart', name: 'Favorites', route: './Favorites-books' },
            { iconName: 'history', name: 'History', route: './History' }
        ],
        BottomMenu: [
            { iconName: 'cog', name: "Settings", route: './Settings' },
            { iconName: 'help-circle', name: 'Support', route: 'https://hello.com' },
            { iconName: 'log-out', name: 'Log out', route: '' }
        ]
    }
    return (
        <>
            {Object.values(SidebarMenu).map((_, i) => {
                return <ul className={`List_container ${i === 0 && 'asLine'}`} key={i}>
                    {_.map((el, i) => {
                        return <li key={i} onClick={(event)=>{
                            event.stopPropagation();
                            event.preventDefault();
                            setActive(true)
                        }} className={active ? 'active_list' : ''}>
                            <box-icon name={el.iconName} color={textColor} ></box-icon>
                            <p>{el.name}</p>
                        </li>
                    })}
                </ul>
            })}

        </>
    )

}

export default Sidebar;