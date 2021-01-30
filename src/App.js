import React, {useState, useEffect} from 'react';

import shortid from 'shortid';

import s from './App.module.css';

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactsList";
import Filter from "./components/Filter"


export default function App () {
    const defaultContacts = [
        {id: shortid.generate(), name: 'Rosie Simpson', number: '459-12-56'},
        {id: shortid.generate(), name: 'Hermione Kline', number: '443-89-12'},
        {id: shortid.generate(), name: 'Eden Clements', number: '645-17-79'},
        {id: shortid.generate(), name: 'Annie Copeland', number: '227-91-26'},
    ];
    const [filter, setFilter] = useState("");
    const [contacts, setContacts] = useState(() => {return JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts})
        useEffect(() => {
            localStorage.setItem('contacts', JSON.stringify(contacts));
          }, [contacts]);
const addContact = (name, number) => {
        const contact = {
        id: shortid.generate(),
        name,
        number,
        }
        if(!name || !number) {
            alert("Some field is empty!");
            return;
        }else if(contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert("Contact is already exist!");
            return;
        } else {
            setContacts(prevContacts => [contact, ...prevContacts]);
        }
    }
const handleDeleteContact = id => {
        setContacts(contacts.filter(contact => contact.id !== id))
    }
const changeFilter = e => {
        setFilter(e.currentTarget.value);
    }
    const getVisibleContacts = () => {
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
    }
        return <>
        <div className={s.container}>
            <h1 className={s.headling}>Телефонная книга</h1>
            <ContactForm 
            onSubmit={addContact}/>

            <Filter value={filter} onChange={changeFilter} />
</div>
            <h2 className={s.contacts}>Контакты</h2>
            <ContactList 
            contacts={getVisibleContacts()}
            onDeleteContact = {handleDeleteContact}
            />
        </>
}