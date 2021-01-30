import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css'

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={s.list}>
            {contacts.map(({id, name, number}) => (
                <li key={id} className={s.item}>
                    <p>
                        {name}: {number}
                    </p>
                    <button
                    type="button"
                    className={s.button}
                    onClick={() => onDeleteContact(id)}
                    >Удалить</button>
                </li>
            ))}
        </ul>
    )
}
ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired
}

export default ContactList;