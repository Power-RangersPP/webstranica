import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { KontaktWrapper } from "../styles/Kontakt.style";

export const Kontakt = ({}) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <KontaktWrapper>
            <div>
              <h2>Odaberite kojeg člana tima želite kontaktirat</h2>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Ivan
              </label>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Anja
              </label>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Karlo
              </label>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Lea
              </label>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Matija
              </label>
            </div>
            <label htmlFor="firstName">Ime:</label>
            <Field type="name" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <br />
            <label htmlFor="lastName">Prezime:</label>
            <Field type="name" name="lastName" />
            <br />
            <label htmlFor="email">Email: </label>
            <Field
              id="email"
              name="email"
              placeholder="email@email.com"
              type="email"
            />
            <br />
            <label htmlFor="subject">Predmet:</label>
            <Field type="text" name="subject" />
            <br />
            <label htmlFor="subject">Upit:</label>
            <Field type="textarea" name="subject" as="textarea" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </KontaktWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default Kontakt;
