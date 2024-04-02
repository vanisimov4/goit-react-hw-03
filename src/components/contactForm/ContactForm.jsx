import { Formik, Form, Field } from 'formik';
import css from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form className={css.form}>
        <Field type="text" name="name" />
        <Field type="number" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
