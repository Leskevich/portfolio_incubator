import React from 'react';
import s from './Contacts.module.css'
import sContainer from './../common/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.sectionContacts}>
            <div className={`${sContainer.container} ${s.portfolioContainer}`}>
                <h2>Контакты</h2>

                <form action="" className={s.formContainer}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea className={s.fieldText}></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

