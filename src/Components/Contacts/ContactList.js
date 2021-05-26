import React, { useEffect } from "react";
import styles from "./Contacts.module.css";
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../Redux/Phonebook/contacts-operations";
import contactsSelectors from "../../Redux/Phonebook/contacts-selectors";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function ContactList() {
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  return (
    <>
      {isLoadingContacts && (
        <Loader
          type="ThreeDots"
          color="teal"
          height={130}
          width={130}
          style={{
            textAlign: "center",
          }}
        />
      )}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p className={styles.contact}>
              {name}: {number}
            </p>
            <button
              className={styles.delete}
              type="button"
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
