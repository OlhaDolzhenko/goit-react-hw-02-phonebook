import styles from './ContactsListItem.module.css';

const ContactsListItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.listItem} key={contact.id}>
      {contact.name}:<span className={styles.number}>{contact.number}</span>
      <button
        className={styles.btn}
        onClick={() => onDelete(contact.id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};
export default ContactsListItem;
