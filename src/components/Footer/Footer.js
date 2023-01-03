import React from 'react';
import s from './Footer.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Messager} from "./Messager/Messager";


export const Footer = () => {
    return (
        <div className={s.sectionFooter}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <h2>Лескевич Артем</h2>
                <div className={s.messengersContainer}>
                    <Messager/>
                    <Messager/>
                    <Messager/>
                    <Messager/>
                </div>
                <span>какой-то текст</span>
            </div>


        </div>
    );
};

