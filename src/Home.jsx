import React from 'react';
import './Home.css';
import Button from './Button.jsx';
import Navigation from './Navigation';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <div className='parent'>
                <div className='block'>
                  <h1 className='yourDog'>Your Dog</h1>
                  <p className='mainPageDescription'>Добро пожаловать в новую<br/>ветеринарную клинику в Москве</p>
                  <Button />
                </div>
              <img className='corgi'
                alt=''
                src='corgi.png' />
            </div>
        </div>
    );
}; 

export default Home;