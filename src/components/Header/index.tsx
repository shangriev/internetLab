import React, { useState } from 'react';
import MenuItem from './MenuItem'; // Убедитесь, что путь к файлу правильный
import styles from './styles.module.scss';

export const Header: React.FC = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => setOpenMenu(prev => !prev);

    const handleClick = () => {
        document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <div className={styles.container}>
                <div className={styles.navigation}>
                    <div className={styles.logo}>
                        <svg width='36' height='24' xmlns='http://www.w3.org/2000/svg'>
                            <circle cx='24' cy='12' r='12' fill='#ECEFF2' />
                            <circle cx='12' cy='12' r='12' fill='#2A6CEA' />
                        </svg>
                        <p className={`${styles.logo_text} ${openMenu ? styles.active : ''}`}>testLab</p>
                    </div>

                    <button
                        className={`${styles.menu__button} ${openMenu ? styles.open : ''}`}
                        onClick={toggleMenu}
                    ></button>

                    <nav className={`${styles.menu} ${openMenu ? '' : styles.active}`}>
                        <ul className={styles.menu__list}>
                            <MenuItem targetId='user-guide' onClick={toggleMenu}>
                                Как это работает
                            </MenuItem>
                            <MenuItem targetId='third-block' onClick={toggleMenu}>
                                3-й блок
                            </MenuItem>
                            <MenuItem targetId='reviews' onClick={toggleMenu}>
                                Отзывы
                            </MenuItem>
                            <MenuItem targetId='faq' onClick={toggleMenu}>
                                Вопросы и ответы
                            </MenuItem>
                            <MenuItem targetId='form' onClick={toggleMenu}>
                                Форма
                            </MenuItem>
                        </ul>
                    </nav>
                </div>

                <div className={styles.information}>
                    <div className={styles.block_info}>
                        <p className={styles.title}>Говорят, никогда не поздно сменить профессию</p>
                        <p className={styles.subtitle}>Сделай круто тестовое задание и у тебя получится</p>
                        <button onClick={handleClick} className={styles.whiteBtn}>
                            Проще простого!
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
