import {connect} from 'react-redux';
import Internationalisation from '../../../data/provider/internationalization';



// const MultiLanguageRender = ({ComponentToRender, data , ...otherproprs})=>{
//     return <ComponentToRender data={data[otherproprs.currentLanguage]} currentLanguage={otherproprs.currentLanguage}/>
// }

// const LanguagesDisplayer = ({currentLanguage}) => {
//     const languages = new Internationalisation().languages
//     return <div>
//         <h1>fjsdlkjfsad</h1>
//     </div>

// }





const mapStateToProps = (storeOf) => ({
    currentLanguage : storeOf.spiderlib.currentLanguage.code
})


export default connect(mapStateToProps)(LanguagesDisplayer)