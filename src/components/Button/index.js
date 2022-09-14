import { faL } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({ to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text,
    disabled = false,
    rounded = false,
    children,
    leftIcon,
    rightIcon,
    onClick,
    className,
    ...passProps }) {
    let Comp = "button"
    const props = {
        onClick,

        ...passProps
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'

    }
    if (disabled) {
        delete props.onClick
    }
    const classes = cx('wrapper', { [className]: className, primary, outline, rounded, small, large, text, disabled })
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}> {children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>

    );
}

export default Button;