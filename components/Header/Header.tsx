import type { NextPage } from 'next'
import Image from 'next/image'
import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
    return(
        <div className={styles.header}>
            <h1>oidaosd</h1>
            <Link href={'https://google.de'}>
                <a>
                    Google 
                </a>
            </Link>
            <div className={styles.menu}>
                <ul>
                    <li>test 1</li>
                    <li>test 2</li>
                    <li>test 2</li>
                    <li>test 3</li>
                    <li>test 4</li>
                </ul>
            </div>
        </div>
    )

}

export default Header;

