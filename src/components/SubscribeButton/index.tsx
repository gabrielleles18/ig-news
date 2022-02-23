import styles from './styles.module.scss';
import {signin, useSession} from "next-auth/client";

interface SubscribeButtonProps {
    priceId: string
}

export function SubscribeButton({priceId}: SubscribeButtonProps) {
    const [session] = useSession();

    function handleSubscribe() {
        if (!session) {
            signin('github')
            return;
        }



    }

    return (
        <button
            type="button"
            className={styles.signinButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}
