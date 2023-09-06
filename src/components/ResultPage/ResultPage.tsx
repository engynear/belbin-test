import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import RoleBlock from './RoleBlock/RoleBlock';
import Form from '../Form/Form';

import styled from "styled-components";
import useCustomSelector from "src/hooks/useCustomSelector";
import { questionState } from 'src/store/rootSelector';

import { roles, keys } from '../../text/roles';

// images
import topStripe from '../../assets/ResultPage/topStripe.svg';
import rightStripe from '../../assets/ResultPage/rightStripe.svg';
import belbinLabel from '../../assets/ResultPage/belbinLabel.svg';
import BELBINLabel from '../../assets/ResultPage/BELBIN.svg';
import shareIcon from '../../assets/ResultPage/shareIcon.svg';
import shareIconColored from '../../assets/ResultPage/shareIconColored.svg';
import styleClasses from './resultPage.module.css';
import { Button } from "@material-ui/core";

export default function ResultPage() {

    const [ isCopied, setIsCopies ] = useState(false);

    const questionsRate = useCustomSelector(questionState);

    // формируем сколько очков набрала каждая категория
    let updatedRoles: any = {
        ...roles
    };
    for(const role in updatedRoles) {
       updatedRoles[role] = keys[role].reduce((acc: any, val: any) => {
        const pageId = val[0];
        const questionId = val[1];
            return acc + questionsRate[pageId][questionId];
       }, 0);
    };

    // ищем топ всех ролей
    let array = [];
    for( const role in updatedRoles ) {
        array.push(updatedRoles[role]);
    }
    array = array.sort((a, b) => a - b);

    const arrayLength = array.length;

    let topRoles = [];
    for (let i = 0; i < arrayLength; i++) {
        const rate: any = array.pop();
        const category = Object.keys(updatedRoles).filter(function(key) {return updatedRoles[key] === rate});
        for (let j = 0 ; j <= category.length; j++ ) {
            topRoles.push({
                category: category[j],
                rate: rate
            });
            updatedRoles[category[i]] = -100;
            array = array.filter(el => el !== rate);
        }
    }
    for(const role in topRoles) {
        if (topRoles[role].category === undefined || topRoles[role].rate === undefined ) {
          delete topRoles[role];
        }
    }

    const sumAllValue = topRoles.reduce((sum: any, role: any) => sum + role.rate, 0);
    if (sumAllValue < 70) {
        return (
            <Redirect to="/" />
        );  
    }

    // main value
    let mainValue: any;
    for(let value in topRoles) {
        if ( topRoles[value].category !== undefined && topRoles[value].rate !== undefined && value !== undefined) {
            mainValue = topRoles[value];
            break;
        }
    }
    // supported value
    let supportedValue: any;
    if (mainValue !== undefined) {
        for(let value in topRoles) {
            if ( topRoles[value].category !== undefined && topRoles[value].rate !== undefined && value !== undefined && topRoles[value].category !== mainValue.category) {
                supportedValue = topRoles[value];
                break;
            }
        }
    }
    // the smallest value
    let smallest : any;
    // let exsmallest : any;
    for(let value in topRoles) {
        if ( topRoles[value].category !== undefined && topRoles[value].rate !== undefined && value !== undefined) {
            // exsmallest = smallest;
            smallest = topRoles[value];
        }
    }

    const copyToClipboard = () => {

        const el = document.createElement('textarea');
        el.value = window.location.origin + '/';
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);  
        
        setIsCopies(true);
    }


        return (
            <>
            {/* images bg */}
            {/*<img 
                src={topStripe}
                alt=""
                className={styleClasses.topStripe}
            />
            <img 
                src={rightStripe}
                alt=""
                className={styleClasses.rightStripe}
            />*/}

            <div className={styleClasses.main}>
                <h1>Результат теста</h1>
                <div className={styleClasses.table}> 
                    <ul>
                        <li className={styleClasses.firstLi}>
                            <div className={styleClasses.firstColumn}>
                                <span style={{
                                    fontWeight: 600
                                }}>
                                    Роль
                                </span>
                            </div>
                            <div className={styleClasses.secondColumn}>
                                <span style={{
                                    fontWeight: 600
                                }}>
                                    Проценты
                                </span>
                            </div>
                            <div className={styleClasses.thirdColumn}>
                                <span style={{
                                    fontWeight: 600
                                }}>
                                    Баллы
                                </span>
                            </div>
                        </li>
                        {topRoles.map((role, index) => (
                                <li key={"role" + index} className={styleClasses.bodyLi}>
                                    <div className={styleClasses.firstColumn}>
                                        {role.category === mainValue.category &&
                                        (<Gradient2>
                                            <p>{role.category}</p>
                                        </Gradient2>)
                                        }
                                        {role.category === supportedValue.category &&
                                        (<Gradient2>
                                            <p>{role.category}</p>
                                        </Gradient2>)
                                        }
                                        {role.category !== supportedValue.category && role.category !== mainValue.category && 
                                        <p>{role.category}</p>
                                        }
                                    </div>
                                    <div className={styleClasses.secondColumn}>
                                        {role.category === mainValue.category &&
                                        <Gradient2>
                                            {Math.round((role.rate * 100) / sumAllValue)}%
                                        </Gradient2>
                                        }
                                        {role.category === supportedValue.category &&
                                        <Gradient2>
                                            {Math.round((role.rate * 100) / sumAllValue)}%
                                        </Gradient2>
                                        }
                                        {role.category !== supportedValue.category && role.category !== mainValue.category &&
                                        Math.round((role.rate * 100) / sumAllValue)+'%'
                                        }
                                    </div>
                                    <div className={styleClasses.thirdColumn}>
                                        {role.category === mainValue.category &&
                                        <Gradient2>
                                            {role.rate}
                                        </Gradient2>}
                                        {role.category === supportedValue.category &&
                                        <Gradient2>
                                            {role.rate}
                                        </Gradient2>}
                                        {role.category !== supportedValue.category && role.category !== mainValue.category &&
                                        role.rate}
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
                
                <div className={ styleClasses.shareButton }>

					{/*<button onClick={ copyToClipboard }
                    style = { isCopied ? { color: "#5850F1" } : {} }
                    >
                     <img src={ isCopied ? shareIconColored : shareIcon } className={ styleClasses.buttonIcon }
                    />
                        { isCopied ? "Скопировано" : "Поделиться тестом" }
                    </button>*/}
                </div>
                <div className="form-link" style={{marginTop: '20px'}}>
                    <h3>Укажи свои результаты в <a href="https://forms.gle/coLyHQJw9XBct7536">форме</a></h3>
                </div>
            </div>
        </>
        );
}


const Bold = styled.strong`
    font-weight: bold;
`;

// const Gradient1 = styled(Bold)`
//     background: -webkit-linear-gradient(45deg, #09009f, #00ff95 80%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     text-transform: uppercase;
// `;

const Gradient2 = styled(Bold)`
    -webkit-background-clip: text;
    text-transform: uppercase;
`;
