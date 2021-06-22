import React, { useState } from 'react'
import CityService from '../services/CityService'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function CityAdd() {

  
    return (
        <div>
        <h1>Any place in your app!</h1>
        <Formik
          initialValues={{ name: '' }}
         
          onSubmit={(values, { setSubmitting }) => {
            let cityService = new CityService()
            cityService.addCtiy(values).then()

            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    )
}
