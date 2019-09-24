import React, { FunctionComponent } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const personSchema = Yup.object({
  firstName: Yup.string().min(3),
  lastName: Yup.string().required()
});

type Props = {};

const Person: FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <Formik
        validationSchema={personSchema}
        initialValues={{ firstName: "", lastName: "" }}
        onSubmit={values => {
          console.log(values);
        }}
      >
        {({ isValid }) => (
          <Form>
            <Field name="firstName" />
            <Field name="lastName" />
            <button disabled={!isValid}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Person;
