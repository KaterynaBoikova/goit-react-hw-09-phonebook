import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../../Redux/Phonebook/contacts-operations";
import contactsSelectors from "../../Redux/Phonebook/contacts-selectors";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [nameInput, setName] = useState("");
  const [number, setNumber] = useState("");
  const contactsIn = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleChangeName = (event) => {
    setName(event.currentTarget.value);
  };
  const handleChangeNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (contactsIn.find(({ name }) => name === nameInput)) {
      alert(nameInput + " is already in contacts");
      return;
    }
    dispatch(
      contactsOperations.addContact({ name: nameInput, number: number })
    );
    setName("");
    setNumber("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={styles.inputForm}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={nameInput}
          onChange={handleChangeName}
        />
      </label>
      <label>
        Phone
        <input
          className={styles.inputForm}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChangeNumber}
        />
      </label>
      <button className={styles.btnAdd} type="submit">
        Add Contact
      </button>
    </form>
  );
}
