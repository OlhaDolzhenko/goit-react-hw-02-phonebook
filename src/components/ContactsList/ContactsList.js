import ContactsListItem from '../ContactsListItem';
import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return <ContactsListItem contact={contact} onDelete={onDelete} />;
      })}
    </ul>
  );
};

export default ContactsList;
