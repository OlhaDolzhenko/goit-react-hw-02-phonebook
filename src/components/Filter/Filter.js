import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
      />
    </label>
  </div>
);

export default Filter;
