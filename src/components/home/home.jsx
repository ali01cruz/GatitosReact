import 'bootstrap/dist/css/bootstrap.min.css'
import SectionComponent from '../seccion/seccion'
import SideBar from '../sideBar/sideBar'
import das from './dashboard.module.css'
export default function Home(){

    return (    
      
        <div className={das.containerDash}  >
                <SideBar/>
                <SectionComponent/>
        </div>
     
)

}