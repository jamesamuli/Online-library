import { AppName } from '../../../Config/Config';
import './Sidebar.css';
import dumbProfil from '../../../Assets/img/dumb-profil.jpg';
import { useState } from 'react';




let textColor = 'var(--grayText)';

const Sidebar = () => {
    let [isClicked, setClicked] = useState(0);
    let Menu = [
        { iconName: 'home-alt-2', name: "Home", route: './' },
        { iconName: 'book-heart', name: 'Favorites', route: './Favorites-books' },
        { iconName: 'history', name: 'History', route: './History' },
        { iconName: 'cog', name: "Settings", route: './Settings' },
        { iconName: 'help-circle', name: 'Support', route: 'https://hello.com' },
        { iconName: 'log-out', name: 'Log out', route: '' }
    ]

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

            <ul className='List_container asLine'>
                {Menu.map((el, i) => {
                    return <div key={i}>
                        {i < 3 && <SingleList

                            IconName={el.iconName}
                            Name={el.name}
                            isClicked={isClicked === i}
                            onPressed={() => {
                                setClicked(i)
                            }}
                        />
                        }
                    </div>

                })}
            </ul>

            <ul className='List_container'>
                {Menu.map((el, i) => {
                    return <div key={i}>
                        {i >= 3 && <SingleList
                            IconName={el.iconName}
                            Name={el.name}
                            isClicked={isClicked === i}
                            onPressed={() => {
                                setClicked(i)
                            }}
                        />}
                    </div>
                })}
            </ul>
        </div>
    )
}



function SingleList({ IconName, Name, isClicked, onPressed }) {
    return (
        <li onClick={onPressed} className={isClicked ? 'active_list' : ''}>
            <box-icon name={IconName} type={isClicked ? 'solid' : 'regular'} color={textColor} ></box-icon>
            <p>{Name}</p>
        </li>

    )

}

export default Sidebar;