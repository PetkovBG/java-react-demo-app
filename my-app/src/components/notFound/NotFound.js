import { Link } from "react-router-dom";
import styles from './NotFound.module.css';

const NotFound = () => {

    return(
        <>
        <div >
            This page could not be found.
        </div>
        <Link to="/" className={styles.homeLink}>Home</Link>
        </>
    )

}

export default NotFound;