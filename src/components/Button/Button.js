import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {

    const { onClick } = props;

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (<button className={clsx(styles.button, props.className)} onClick={handleClick}>{props.children}</button>);
};

export default Button;