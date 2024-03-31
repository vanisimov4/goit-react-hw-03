import css from './Contact.module.css';

const Contact = ({ name, number }) => {
  //   const status = isOnline ? 'Online' : 'Offline';
  return (
    <div className={css.contact}>
      {/* <img src={avatar} alt="Avatar" width="48" /> */}
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
