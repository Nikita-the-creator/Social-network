import styles from '../preloader/Preloader.module.css'
import React from 'react'


const Preloader = (props) => {

    return <div>
        {
            <div className={styles.ldsSpinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        }
    </div>
}

export default Preloader;