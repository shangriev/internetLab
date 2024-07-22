import React from 'react';

import waitingImg from '../../img/howDoesItWork/waiting.svg';
import deliveryImg from '../../img/howDoesItWork/delivery-truck.svg';
import secureImg from '../../img/howDoesItWork/secure.svg';
import moneyImg from '../../img/howDoesItWork/money-bags.svg';
import creditImg from '../../img/howDoesItWork/credit.png';

import styles from './styles.module.scss';

export const UserGuide: React.FC = () => {
    return (
        <section id='user-guide'>
            <div className={styles.wrapper}>
                <span className={styles.headline}>Как это работает</span>
                <article className={styles.info}>
                    <div className={styles.info_item}>
                        <img src={waitingImg} alt='waiting' />
                        <div>
                            <h6>Прочитай задание внимательно</h6>
                            <p>Думаю у тебя не займет это больше двух-трех минут</p>
                        </div>
                    </div>
                    <div className={styles.info_item}>
                        <img src={deliveryImg} alt='delivery' />
                        <div>
                            <h6>Изучи весь макет заранее</h6>
                            <p>Подумай как это будет работать на разных разрешениях и при скролле</p>
                        </div>
                    </div>
                    <div className={styles.info_item}>
                        <img src={secureImg} alt='secure' />
                        <div>
                            <h6>Сделай хорошо</h6>
                            <p>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
                        </div>
                    </div>
                    <div className={styles.info_item}>
                        <img src={moneyImg} alt='money' />
                        <div>
                            <h6>Получи предложение</h6>
                            <p>Ну тут все просто, не я придумал правила, но думаю так и будет</p>
                        </div>
                    </div>
                </article>

                <article id='third-block'>
                    <div className={styles.credit}>
                        <div className={styles.credit_text}>
                            <span className={styles.title}>Круто, ты дошел до третьего блока</span>
                            <div className={styles.description}>
                                <p>
                                    63% опрошенных пользовались кредитами из-за того, что не могли покрыть
                                    непредвиденные расходы свыше 15 000 ₽.
                                </p>

                                <p>
                                    Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на
                                    процентах и штрафах.
                                </p>
                            </div>
                        </div>
                        <div className={styles.credit_img}>
                            <div className={styles.images}>
                                <img src={creditImg} alt='credit' />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};
