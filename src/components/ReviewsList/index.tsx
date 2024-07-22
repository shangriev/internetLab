import React, { useEffect } from 'react';

import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviews } from '../../redux/slices/rewiewsSlice';
import { RootState, AppDispatch } from '../../redux/store';

import styles from './styles.module.scss';
import './slick-theme.css';
import './slick.scss';

interface CustomArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const PrevArrow: React.FC<CustomArrowProps> = props => {
    const { className, style, onClick } = props;
    return (
        <div className={`${className} ${styles.customPrevArrow}`} style={{ ...style }} onClick={onClick}>
            <svg className='custom-arrow' width='32' height='32' viewBox='0 0 17 32' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z'
                    fill='#C2C8CD'
                />
            </svg>
        </div>
    );
};

const NextArrow: React.FC<CustomArrowProps> = props => {
    const { className, style, onClick } = props;
    return (
        <div className={`${className} ${styles.customNextArrow}`} style={{ ...style }} onClick={onClick}>
            <svg className='custom-arrow' width='32' height='32' viewBox='0 0 17 32' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d='M1.39143 29.724C1.26408 29.847 1.1625 29.9941 1.09262 30.1568C1.02275 30.3194 0.985964 30.4944 0.984425 30.6714C0.982887 30.8485 1.01662 31.024 1.08366 31.1879C1.1507 31.3518 1.24971 31.5006 1.3749 31.6258C1.50009 31.751 1.64896 31.85 1.81282 31.9171C1.97668 31.9841 2.15226 32.0178 2.32929 32.0163C2.50633 32.0148 2.68129 31.978 2.84397 31.9081C3.00664 31.8382 3.15376 31.7367 3.27676 31.6093L14.1728 20.7133C15.4209 19.4623 16.1219 17.7672 16.1219 16C16.1219 14.2328 15.4209 12.5377 14.1728 11.2866L3.27676 0.39064C3.02529 0.147762 2.68849 0.0133699 2.33889 0.0164078C1.9893 0.0194457 1.65488 0.159671 1.40767 0.406882C1.16046 0.654093 1.02023 0.988509 1.01719 1.3381C1.01416 1.6877 1.14855 2.0245 1.39143 2.27597L12.2874 13.172C13.0373 13.9221 13.4586 14.9393 13.4586 16C13.4586 17.0606 13.0373 18.0779 12.2874 18.828L1.39143 29.724Z'
                    fill='#C2C8CD'
                />
            </svg>
        </div>
    );
};

export const ReviewsList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const reviewsData = useSelector((state: RootState) => state.reviews.reviews);

    useEffect(() => {
        dispatch(fetchReviews());
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section id='reviews'>
            <div className={styles.wrapper}>
                <div className='container'>
                    <h2>Отзывы</h2>

                    <Slider {...settings}>
                        {reviewsData.map((item, index) => (
                            <div key={index} className={styles.review_wrapper}>
                                <div className={styles.user_item}>
                                    <img src={item.image} alt='user-photo' />
                                    <div className={styles.user_data}>
                                        <span className={styles.user_name}>{item.name}</span>
                                        <span className={styles.user_city}>{item.city}</span>
                                    </div>
                                </div>
                                <p className={styles.feedback}>{item.feedback}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};
