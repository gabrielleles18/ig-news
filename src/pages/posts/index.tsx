import Head from "next/head";
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title> Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de mri freoijm</time>
                        <strong>fesfsef fefs efse sefs f</strong>
                        <p>
                            fesfsef fefs efse sefs ffesfsef fefs efse sefs ffesfsef
                            fefs efse sefs ffesfsef fefs efse
                            sefs ffesfsef fefs efse sefs ffesfsef fefs efse sefs f
                        </p>
                    </a>
                    <a href="">
                        <time>12 de mri freoijm</time>
                        <strong>fesfsef fefs efse sefs f</strong>
                        <p>fesfsef fefs efse sefs ffesfsef fefs efse sefs ffesfsef
                            fefs efse sefs ffesfsef fefs efse
                            sefs ffesfsef fefs efse sefs ffesfsef fefs efse sefs f
                        </p>
                    </a>
                    <a href="">
                        <time>12 de mri freoijm</time>
                        <strong>fesfsef fefs efse sefs f</strong>
                        <p>fesfsef fefs efse sefs ffesfsef fefs efse sefs ffesfsef
                            fefs efse sefs ffesfsef fefs efse
                            sefs ffesfsef fefs efse sefs ffesfsef fefs efse sefs f
                        </p>
                    </a>
                    <a href="">
                        <time>12 de mri freoijm</time>
                        <strong>fesfsef fefs efse sefs f</strong>
                        <p>fesfsef fefs efse sefs ffesfsef fefs efse sefs ffesfsef
                            fefs efse sefs ffesfsef fefs efse
                            sefs ffesfsef fefs efse sefs ffesfsef fefs efse sefs f
                        </p>
                    </a>
                </div>
            </main>
        </>
    )
}
