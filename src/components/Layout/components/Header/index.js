import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUpload, faMessage, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from "~/components/Popper"

import Button from '~/components/Button';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '../../../AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {

                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet'
                },
            ]

        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',

    }
]



function Header() {
    const currentUser = true
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    //handleLogic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':



                break
            default:
        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@minh'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings'
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },

    ]

    return (

        < header className={cx('wrapper')} >
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tikttok" />
                </div>
                <HeadlessTippy
                    visible={searchResult.length > 0}

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
                    )} >
                    <div className={cx('search')}>
                        <input placeholder='Search accounts and video' spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />


                        <button className={cx('search-btn')} >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />

                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement='bottom' >
                                <div className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faUpload} />
                                </div>

                            </Tippy>


                        </>
                    ) : (

                        <>
                            <Button className={cx('action-btn')} text >Upload</Button>
                            <Button primary >Login</Button>






                        </>
                    )
                    }
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange} >
                        {currentUser ? (
                            <img className={cx('user-avatar')} src="https://nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg" alt="a" />
                        ) : (

                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}

                    </Menu>
                </div>

            </div >
        </ header >
    )

}

export default Header;
