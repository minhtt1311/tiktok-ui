import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import Image from "~/Image";
const cx = classNames.bind(styles)


function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/977f7cb3008a7158f440addd70900445~c5_100x100.jpeg?x-expires=1663228800&x-signature=VjzVeTJdCdZA4Aj%2FpEQpz5I%2FwNE%3D"
                alt="HOA"
                className={cx('avatar')}>
            </Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>To Thanh Minh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>ChinhNghiem</span>
            </div>
        </div>
    );
}

export default AccountItem;