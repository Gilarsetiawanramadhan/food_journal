import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container } from 'react-bootstrap';

const SignupForm = () => {

  const baseurl= process.env.REACT_APP_BASEURL

  const formik = useFormik({
    //initial values
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'admin'
    },
    //validasi schema
    validationSchema: Yup.object({
      username: Yup.string()
      .min(8, 'should mote than 8 characters')
        .required(),
      email: Yup.string()
        .email('invalid email format')
        .required(),
      password: Yup.string()
      .min(8, 'should mote than 8 characters')
        .required(),
      confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password')], 'password must match'),
    }),
    //handle submission
    onSubmit: values => {
      console.log(values);
      axios.get(`${baseurl}/api/v1/foods`)
    },
  });
  console.log(formik)
  return (
    <>
        <Container>
          <div className='form-register'>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="username">user name</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  />
                    {formik.touched.username && formik.errors.username ? (
                      <div style={{color:'red'}}>{formik.errors.username}</div>
                      ) : null}

                    <br/>

              <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  />
                    {formik.touched.email && formik.errors.email ? (
                      <div style={{color:'red'}}>{formik.errors.email}</div>
                    ) : null}

                    <br/>

              <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{color:'red'}}>{formik.errors.password}</div>
                  ) : null}

                  <br/>

              <label htmlFor="confirmPassword">confirm Password</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div style={{color:'red'}}>{formik.errors.confirmPassword}</div>
                    ) : null}

                        <br/>

              <button type="submit">Submit</button>
            </form>
          </div>
        </Container>
    </>
  );
};

export default SignupForm;