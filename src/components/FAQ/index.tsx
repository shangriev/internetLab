import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFaq } from '../../redux/slices/faqSlice';
import { RootState, AppDispatch } from '../../redux/store';
import styles from './styles.module.scss';
import { FaqItem } from './FaqItem';

export const FAQSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const dispatch = useDispatch<AppDispatch>();
    const faqData = useSelector((state: RootState) => state.faq.faq);

    useEffect(() => {
        dispatch(fetchFaq());
    }, [dispatch]);

    return (
        <section id='faq'>
            <div className={styles.wrapper}>
                <span className={styles.headline}>Вопросы и ответы</span>
                {faqData.map((item, id) => (
                    <FaqItem
                        onClick={() => (id === activeIndex ? setActiveIndex(null) : setActiveIndex(id))}
                        key={id}
                        item={item}
                        isOpen={activeIndex === id}
                    />
                ))}
            </div>
        </section>
    );
};
