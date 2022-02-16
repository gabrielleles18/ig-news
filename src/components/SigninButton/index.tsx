import styles from './styles.module.scss';
import {FaGithub} from "react-icons/fa";
import {FiX} from "react-icons/fi";

export function SigninButton() {
    const isUserloggedIn = true;

    return isUserloggedIn ? (
        <button type="button" className={styles.signinButton}>
            <FaGithub color="#04d361"/>
            eu lelez
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button type="button" className={styles.signinButton}>
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    )
}
