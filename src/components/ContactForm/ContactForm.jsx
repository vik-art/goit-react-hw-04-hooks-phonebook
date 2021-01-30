import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

export default function ContactForm ({onSubmit}) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

const handleChangeForm = e => {
        const { name, value } = e.target;
        switch(name) {
            case "name":
            setName(value);
            break;
            case "number":
            setNumber(value);
            break;
            default:
            return;
        }
    }
const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
}
        return (
            <form className={s.form} onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="name" 
                placeholder="Имя" 
                className={s.input}
                value={name} 
                onChange={handleChangeForm} />
                <input 
                type="tel"
                name="number" 
                placeholder="Телефон" 
                className={s.input}
                value={number} 
                onChange={handleChangeForm}/>
                <button 
                className={s.button}
                type="submit"
                >Добавить в контакты</button>
            </form>
        )
    }

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}