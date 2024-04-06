import { IoCall, IoPerson } from 'react-icons/io5';

import css from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div className={css.contact}>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <IoCall /> {number}
        </p>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
