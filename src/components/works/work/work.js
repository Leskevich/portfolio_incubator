import React from 'react';
import s from './work.module.css'

export const Work = () => {
    return (
        <div className={s.work}>
            <div className={s.imgContainer}>
                <div className={s.button}>
                    <button>Смотреть</button>
                </div>
            </div>
            <div className={s.texProject}>
                <div>Название проекта</div>
                <div>Краткое описание:</div>
            </div>
        </div>
    );
};

