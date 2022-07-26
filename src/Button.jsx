import React, {useState} from 'react';
import './Button.css';
import Modal from './Modal.jsx';
import {IMaskInput} from 'react-imask';

const Button = () => {

    const [isModal, setModal] = React.useState(false);

    const [name, setName] = useState(''); 
    const [number, setNumber] = useState('');
    
    const [onButtonClicked, setButtonClicked] = React.useState(false);

    const close = () => {
        setModal(false);
        setName('');
        setNumber('');
        setButtonClicked(false);
    }
  
    const registrated = (e) =>  {
        e.preventDefault();
        setButtonClicked(true);
    }

    const handleChangeName = (e) => setName(e.target.value)
    const handleChangeNumber = (e) => setNumber(e.target.value)

    const PhoneMask = "{0}(000)000-00-00";

    const modalInput = 
        <form className='inputElements'>
           <input 
            className='input'
            placeholder='Ваше имя' 
            value={name} 
            onChange={handleChangeName}
          />
          <IMaskInput
            className='input'
            placeholder='Контактный телефон' 
            value={number} 
            onChange={handleChangeNumber}
            mask={PhoneMask}
          /> 
          <button 
            onClick={registrated}
            className='buttonInput'
            disabled={!name || !number || number.length !== 15}> 
                Записаться на приём
            </button>
        </form>

    const modalRegistration = <Modal
        isVisible={isModal}
        title="Запись на приём к ветеринарному врачу"
        content={<p>Запись на приём возможна только по телефону. 
            Оставьте ваши контактные данные, и мы вам перезвоним.<br/><br/>
            Нажимая на кнопку "Записаться на приём", Вы соглашаетесь с правилами 
            обработки персональных данных и с тем, что Вам уже есть 18 лет.</p>}
        onClose={close}
        input={modalInput}
    />

    const modalRegistrated = <Modal
        isVisible={isModal}
        title="Ваш запрос отправлен"
        text={<p>{name}, мы перезвоним Вам по номеру 
        телефона {number} в течение нескольких минут.</p>}
        onClose={close}
    />

    return (
        <div>
            <button className='button' onClick={() => setModal(true)}>Записаться на приём</button>
            {onButtonClicked ? modalRegistrated : modalRegistration}
        </div> 
    );
};

export default Button;