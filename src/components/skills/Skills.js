import React from 'react';
import s from './Skills.module.css'
import sContainer from './../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.sectionSkill}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML/CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Skill title={'JS'} description={'Ad commodi consectetur'}/>
                    <Skill title={'React'} description={'sunt tempore temporibus vel voluptas voluptate!'}/>
                </div>
            </div>
        </div>
    );
};

