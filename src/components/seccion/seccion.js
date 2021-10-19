
import Cats from "../catCard/cats";
import pag from "./seccion.module.css";

export default function SectionComponent(props){

    return (        
        <section className={pag.containerPag}>
                <Cats/>
        </section>
)
}
