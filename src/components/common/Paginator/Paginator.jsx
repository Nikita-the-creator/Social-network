import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize

    return (<div className={styles.pagination}>

            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <button className={styles.selectedPage ? 1 : currentPage === p}
                                   key={p}
                                   onClick={(e) => {
                                       onPageChanged(p)
                                   }}>{p}</button>
                })}

            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>
            }

        </div>
    )
}

export default Paginator;