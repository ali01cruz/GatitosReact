import 'bootstrap/dist/css/bootstrap.min.css'
import SectionComponent from '../seccion/seccion'
import SideBar from '../sideBar/sideBar'
import das from './dashboard.module.css'
import { useEffect } from 'react'
import { getGatos } from '../../actions/actions'
import { connect } from 'react-redux'
function Home({getGatos }){

    useEffect(()=>{
        getGatos();

    })
    
    return (    
        <div className={das.containerDash}  >
                <SideBar/>
                <SectionComponent/>
        </div>
)
}

export default connect(null,{getGatos })(Home)