import React from 'react'
import styles from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsActions from '../../Redux/Phonebook/contacts-actions';
import contactsSelectors from '../../Redux/Phonebook/contacts-selectors';

export default function ContactFilter(){
    const dispatch = useDispatch();
    const searchQuery = useSelector(contactsSelectors.getFilter);
    return(
        <label>
            Filter contacts by name
            <input className={styles.search} type="text" value={searchQuery} onChange={(event)=>{dispatch(contactsActions.changeFilter(event.currentTarget.value))}} />
        </label>
    )
};

