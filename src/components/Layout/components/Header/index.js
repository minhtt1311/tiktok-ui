
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';


import Button from '~/components/Button';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';

import Menu from '~/components/Popper/Menu';
import Image from '~/Image';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Search from '../Search';

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
                    title: 'Tiếng Việt'
                },
                {
                    type: 'language',
                    code: 'De',
                    title: 'Deutsch'
                },
                {
                    type: 'language',
                    code: 'Su',
                    title: 'Suomi'
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


                <Search />


                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement='bottom' >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>

                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement='bottom' >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>

                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement='bottom' >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>

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
                            <Image
                                className={cx('user-avatar')}
                                src="https://nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg"
                                alt="a"

                            />
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
