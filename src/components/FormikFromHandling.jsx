import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

const SignupForm = () => {
    const initialValues = {
        full_name: "",
        email: "",
        password: "",
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={Yup.object({
                    full_name: Yup.string().required('full name is Required'),
                    email: Yup.string().required('Required'),
                    password: Yup.string().email('Invalid email address').required('Required'),
                })}
                onSubmit={(values) => {
                    console.log("values", values)
                }}
            >
                {
                    ({ isSubmitting }) => {

                        return (
                            <Form className='flex flex-col gap-6'>
                                <div>
                                    <TextField type="text" name="full_name" placeholder="full_name" />
                                    <ErrorMessage name="full_name" component="div" className="text-red-700" />
                                </div>
                                <div>
                                    <TextField type="email" name="email" placeholder="Email" />
                                    <ErrorMessage name="email" component="div" className="text-red-700" />
                                </div>

                                <div>
                                    <TextField type="password" name="password" placeholder="Password" />
                                    <ErrorMessage name="password" component="div" className="text-red-700" />
                                </div>
                                <button className='bg-green-800 text-white px-12 py-4 rounded-lg' type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )
                    }
                }

            </Formik>
        </div>
    )
}

export default SignupForm