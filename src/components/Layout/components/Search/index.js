import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from "~/components/Popper"
import HeadlessTippy from '@tippyjs/react/headless';
import AccountItem from '../../../AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss'

import classNames from 'classnames/bind';
const cx = classNames.bind(styles)




function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1])
        }, 0);
    }, [])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()

    }

    const handleHideResult = () => {
        setShowResult(false)
    }
    return (

        < HeadlessTippy
            inertia
            visible={showResult && searchResult.length > 0}

            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                    </PopperWrapper>
                </div>
            )
            }
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Search accounts and video'
                    spellCheck={false}
                    onChange={(e) => { setSearchValue(e.target.value) }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}


                <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />


                <button className={cx('search-btn')} >
                    <SearchIcon />

                </button>
            </div>
        </ HeadlessTippy>

    );
}

export default Search;