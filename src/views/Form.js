
import {
    Button,
    InputFieldFF,
    SingleSelectFieldFF,
    SwitchFieldFF,
    composeValidators,
    createEqualTo,
    email,
    hasValue
  } from "@dhis2/ui";
  import { ReactFinalForm } from "@dhis2/ui";
  import React from "react";
  import styles from "./Form.module.css";
  
  const alertValues = (values) => {
    const formattedValuesString = JSON.stringify(values, null, 2);
    alert(formattedValuesString);
  };
  
  const { Field } = ReactFinalForm;
  
  export const Form = () => (
    <div>
      <h1>Contact Us!</h1>
  
      <ReactFinalForm.Form onSubmit={alertValues}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Field
                name="title"
                label="Title"
                component={SingleSelectFieldFF}
                className={styles.title}
                initialValue="none"
                options={[
                  { label: "Professor", value: "prof" },
                  { label: "Doctor", value: "doc" },
                  { label: "None", value: "none" }
                ]}
              />
            </div>
  
            <div className={styles.row}>
              <Field
                required
                name="surname"
                label="Surname"
                component={InputFieldFF}
                className={styles.surname}
                validate={hasValue}
              />
  
              <Field
                required
                name="firstname"
                label="First name"
                component={InputFieldFF}
                className={styles.firstname}
                validate={hasValue}
              />
            </div>
  
            <div className={styles.row}>
              <Field
                required
                name="email"
                label="E-mail address"
                component={InputFieldFF}
                className={styles.email}
                validate={composeValidators(email, hasValue)}
              />
            </div>
  
            <div className={styles.row}>
              <Field
                required
                name="email-confirmation"
                label="Confirm e-mail address"
                component={InputFieldFF}
                className={styles.email}
                validate={composeValidators(createEqualTo("email"), hasValue)}
              />
            </div>
  
            <div className={styles.row}>
              <Field
                type="checkbox"
                name="newsletter"
                label="I want to receive the newsletter"
                component={SwitchFieldFF}
                className={styles.newsletters}
                initialValue={false}
              />
            </div>
  
            <div className={styles.row}>
              <Button
                primary
                type="submit">
                Submit form
              </Button>
            </div>
          </form>
        )}
      </ReactFinalForm.Form>
    </div>
  );
  