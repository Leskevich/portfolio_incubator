import React from 'react';
import s from './Header.module.css'
import {Navigate} from "./nav/Navigate";

export const Header = () => {
    return (
        <div className={s.header}>
            <Navigate/>
        </div>
    );
};

