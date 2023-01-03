import React from 'react';
import sContainer from './../common/styles/Container.module.css'
import s from './works.module.css'
import {Work} from "./work/work";

export const Works = () => {
    return (
        <div className={s.sectionWorks}>
            <div className={`${sContainer.container} ${s.containerWorks}`}>
                <h2>My works</h2>
                <div className={s.works}>
                    <Work/>
                    <Work/>
                </div>
            </div>
        </div>
    );
};

