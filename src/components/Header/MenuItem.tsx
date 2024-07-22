import React from 'react';
import styles from './styles.module.scss';
import arrowImg from '../../img/header/arrow.svg';

const ArrowIcon: React.FC = () => <img className={styles.arrow} src={arrowImg} alt='arrow' />;

interface MenuItemProps {
    targetId: string;
    children: React.ReactNode;
    onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ targetId, children, onClick }) => (
    <li className={styles.menu__item}>
        <a href={`#${targetId}`} className={styles.menu__link} onClick={onClick}>
            {children} <ArrowIcon />
        </a>
    </li>
);

export default MenuItem;
