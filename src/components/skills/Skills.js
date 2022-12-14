import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={s.sectionSkill}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>

                </div>
            </div>
        </div>
    );
};

