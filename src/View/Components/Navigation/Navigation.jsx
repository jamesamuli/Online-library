import { useState} from 'react'
import { textColor } from '../../../Config/Config'
import { SingleList } from '../Sidebar/Sidebar'
import './Navigation.css'
export default function Navigation() {
    let [isSelected, setSelected] = useState(0)
    let [indicatorPosition, setIndicatorPosition] = useState("translateX(0px) scaleX(0.6875)")

    const upBarMenu = [
        { Name: 'Books', route: '' },
        { Name: 'Podcast', route: '' },
        { Name: 'Audio Books', route: '' },
        { Name: 'Authors', route: '' }
    ]


    /**
     * This function is amed to calculate the amount and tranformation
     * and scale which will be applied to an element
     * @param {Html Element} htmlElement 
     * @return {string}
     */
    function getTransform(element) {
        const transform = {
            x: element.offsetLeft,
            scaleX: element.offsetWidth / 64
        }
        return `translateX(${transform.x}px) scaleX(${transform.scaleX})`
    }


    return (
        <nav className="Navigation_menu" role={"tablist"}>
            <div className="navigation_container">
                <ul className="upbarmenu">
                    {upBarMenu.map((el, i) => {
                        return <SingleList
                            key={i}
                            Name={el.Name}
                            isClicked={isSelected === i}
                            onPressed={(el) => {
                                setSelected(i)
                                console.log(getTransform(el))
                                setIndicatorPosition(getTransform(el))
                            }}
                        />
                    })}
                </ul>
                <span className="indicator" style={{transform : indicatorPosition}}></span>
            </div>



            <div className="search_container">
                <input type="text" name="Search" title='Search whatever here' placeholder='All your search here' />
                <div className="search_button" tabIndex={0}>
                    <box-icon name='search' color={textColor}></box-icon>
                </div>
            </div>
        </nav>
    )
}