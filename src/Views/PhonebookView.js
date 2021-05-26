import React from 'react';
import ContactForm from '../Components/ContactForm/ContactForm.js';
import ContactList from "../Components/Contacts/ContactList";
import ContactFilter from "../Components/Contacts/ContactFilter";
import Layout from "../Components/Layout/Layout";
import styles from '../Styles/PhonebookView.module.css';
const PhonebookView=()=>{
    return(
        <Layout>
        <div className={styles.flexwrap}>
            <div className={styles.formAdd}>
            <h2>Phonebook</h2>
            <ContactForm />
        </div>
            <div className={styles.contactsList}>
            <h2>Contacts</h2>
            <ContactFilter />
            <ContactList />
            </div>
        </div>
            </Layout>
    )
};

export default PhonebookView;