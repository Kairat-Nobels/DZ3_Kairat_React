import styles from './search.module.css';

function Search({searchValue, setSearchValue})
{
    let input = document.querySelector('input')
    const ifNull = (e) =>
    {
        if (!e.target.value) {
            setSearchValue(e.target.value)
        }
    }
    const onEnter = (e) =>
    {
        if (e.keyCode == 13) {
            setSearchValue(e.target.value)
        }
    }
    const btnSearch = (e) =>
    {
        if (input) {
            setSearchValue(input.value)
        }
    }
    return (
        <div className={styles.header}>
            <div className={styles.logo}><img src="../../../public/LogoIP.png" alt="" /></div>
            <div className={styles.search} >
                <input onChange={ifNull} onKeyDown={onEnter} placeholder='Искать здесь...' type="text" />
                {searchValue &&(
                    <svg
                        onClick={(e) =>
                        {
                            setSearchValue('')
                            input.value = ''
                        }}
                        className={styles.closeIcon}
                        xmlns="http://www.w3.org/2000/svg"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" />
                    </svg>
                    )}
                <button onClick={btnSearch}>🔍</button>
            </div>
        </div>
    )
}
export default Search