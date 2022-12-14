import React from 'react';
import s from './Main.module.css'
import stylesContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.main}>
            <div className={stylesContainer.container}>
                <div className={s.text}>
                    <span>Hello</span>
                    <h1>My name is Artem</h1>
                    <p>Go to work</p>
                </div>
                <div className={s.foto}>
                    <img src="" alt="foto"/>
                </div>
            </div>
        </div>
    );
};

