import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInterviewed } from '../../redux/slices/interviewedSlice';
import { RootState, AppDispatch } from '../../redux/store';

import styles from './styles.module.scss';

export const InterviewedUsers = () => {
    const data = useSelector((state: RootState) => state.interviewed.interviewed);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchInterviewed());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {data.map((item, id) => (
                    <div className={styles.block} key={id}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
