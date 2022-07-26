import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <div className='menu'>
            <button className='elem'>Главная</button>
            <button className='elem'>О клинике</button>
            <button className='elem'>Услуги и цены</button>
            <button className='elem'>Наша команда</button>
            <button className='elem'>Контакты</button>
        </div>
    )
}

export default Navigation;