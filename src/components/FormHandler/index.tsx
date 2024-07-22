import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import checkImg from '../../img/form/greenCheck.svg';
import crossImg from '../../img/form/cancel.svg';

export const FormHandler = () => {
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [focusOnName, setFocusOnName] = useState<boolean | null>(null);
    const [focusOnPhone, setFocusOnPhone] = useState<boolean | null>(null);
    const [errorName, setErrorName] = useState<string>('Поле пустое');
    const [errorPhone, setErrorPhone] = useState<string>('Поле пустое');
    const [formValid, setFormValid] = useState<boolean>(false);
    const [sending, setSending] = useState<boolean>(false);
    const [submitError, setSubmitError] = useState<string>('');
    const [agree, setAgree] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const verifyName = (nameUser: string) => {
        if (nameUser === '') {
            setFocusOnName(false);
            setErrorName('Поле обязательна для заполнения');
        } else if (!/^[a-zA-Zа-яА-Я\s]+$/.test(nameUser)) {
            setFocusOnName(false);
            setErrorName('Введите корректное имя');
        } else {
            setFocusOnName(true);
            setErrorName('');
        }
    };

    const verifyPhone = (phoneNumber: string) => {
        if (phoneNumber === '') {
            setFocusOnPhone(false);
            setErrorPhone('Поле обязательна для заполнения');
        } else if (!/^\+?\d{10,15}$/.test(phoneNumber)) {
            setFocusOnPhone(false);
            setErrorPhone('Введите корректный телефон');
        } else {
            setFocusOnPhone(true);
            setErrorPhone('');
        }
    };

    useEffect(() => {
        setFormValid(!errorName && !errorPhone && name.trim() !== '' && phone.trim() !== '' && agree);
    }, [errorName, errorPhone, name, phone, agree]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!formValid) return;

        setSending(true);
        setSubmitError('');

        try {
            const response = await fetch('http://localhost:3001/userform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, phone }),
            });

            const result = await response.json();
            console.log('Форма отправлена:', result);

            setName('');
            setPhone('');
            setFocusOnName(null);
            setFocusOnPhone(null);
            setAgree(false);
            setIsSubmitted(true);
        } catch (error) {
            setSubmitError('Ошибка при отправке данных');
            console.error('Error:', error);
        } finally {
            setSending(false);
        }
    };

    return (
        <section id='form'>
            <div className={styles.wrapper}>
                <span className={styles.headline}>Отправь форму</span>

                {isSubmitted ? (
                    <div className={styles.success_message}>
                        <p>Ваша заявка успешно отправлена!</p>
                    </div>
                ) : (
                    <form className={styles.forms} onSubmit={handleSubmit}>
                        <div
                            className={`${styles.form_item} ${focusOnName === false ? styles.error : ''} ${
                                focusOnName === true ? styles.success : ''
                            }`}
                        >
                            <input
                                type='text'
                                onBlur={e => verifyName(e.target.value)}
                                placeholder=''
                                className={styles.form}
                                value={name}
                                onChange={e => {
                                    setName(e.target.value);
                                    verifyName(e.target.value);
                                }}
                            />
                            <label htmlFor='name'>Имя</label>

                            {focusOnName === false && (
                                <>
                                    <img
                                        onClick={() => setName('')}
                                        src={crossImg}
                                        className={styles.error_icon}
                                        alt='error'
                                    />
                                    <span className={styles.error_message}>{errorName}</span>
                                </>
                            )}
                            {focusOnName === true && (
                                <img src={checkImg} className={styles.success_icon} alt='success' />
                            )}
                        </div>
                        <div
                            className={`${styles.form_item} ${focusOnPhone === false ? styles.error : ''} ${
                                focusOnPhone === true ? styles.success : ''
                            }`}
                        >
                            <input
                                type='tel'
                                onBlur={e => verifyPhone(e.target.value)}
                                className={styles.form}
                                placeholder=''
                                value={phone}
                                onChange={e => {
                                    setPhone(e.target.value);
                                    verifyPhone(e.target.value);
                                }}
                            />
                            <label htmlFor='phone'>Телефон</label>

                            {focusOnPhone === false && (
                                <>
                                    <img
                                        onClick={() => setPhone('')}
                                        src={crossImg}
                                        className={styles.error_icon}
                                        alt='error'
                                    />
                                    <span className={styles.error_message}>{errorPhone}</span>
                                </>
                            )}
                            {focusOnPhone === true && (
                                <img src={checkImg} className={styles.success_icon} alt='success' />
                            )}
                        </div>

                        <div className={styles.checkbox_container}>
                            <label>
                                <input
                                    type='checkbox'
                                    className={styles.real_checkbox}
                                    checked={agree}
                                    onChange={() => setAgree(!agree)}
                                />
                                <span className={styles.custom_checkbox}></span>
                                Согласен, отказываюсь
                            </label>
                        </div>
                        <button type='submit' className={styles.blue_button} disabled={!formValid || sending}>
                            {sending ? 'Отправка...' : 'Отправить'}
                        </button>

                        {submitError && <p className={styles.error_message}>{submitError}</p>}
                    </form>
                )}
            </div>
        </section>
    );
};
