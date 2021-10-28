import { Link } from "react-router-dom";
import styles from "./error.module.css";
import found from "../../img/404.gif";

const Error404 = () => {
    return (
      <div className="mov">
        
  
        <div >
            <img className="loadinggatito" src={found} alt="loading" style={{maxWidth:"500px",marginTop:'5%'}} />
        </div>
  
        <div >
          <Link className={styles.busc}  to="/home">
            to Home
          </Link>
        </div>
      </div>
    );
  };
  export default Error404;