import Contact from '../contact/Contact';
// import css from './FriendList.module.css';

const ContactList = ({ contList }) => {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      {contList.map(contact => {
        return (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
