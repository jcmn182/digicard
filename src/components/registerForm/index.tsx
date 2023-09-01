'use client';

/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
  Button, TextField, Container, Typography, Grid, Divider, Link,
} from '@mui/material';
// icons
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
// styles
import styles from './styles.module.css';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });

  const getError = (name: string, value: string) => {
    if (name === 'firstName' || name === 'lastName') {
      const isValidName = /^[a-zA-Z]{1,}(?:\s+[a-zA-Z]+)*$/.test(value);
      if (!isValidName) {
        return name === 'firstName' ? 'Invalid name.' : 'Invalid last name.';
      }
    }

    if (name === 'email') {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const isValidEmail = emailPattern.test(value);
      if (!isValidEmail) {
        return 'Invalid email address.';
      }
    }

    return '';
  };

  const handleInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const isButtonDisabled = Object.keys(formData).some((key) => {
    const error = getError(key, formData[key as keyof typeof formData]);
    return error || !formData[key as keyof typeof formData];
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div className={styles.main_container}>
      <Container component="main" maxWidth="xs">
        <Typography variant="h5" align="center" gutterBottom style={{ padding: '10px 10px 0px 10px' }}>
          Try everything free, for 14-days!
        </Typography>
        <Typography variant="h6" align="center" gutterBottom style={{ padding: '0px 10px 10px 10px', color: '#828485' }}>
          No credit card needed during the trial.
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="fname"
                value={formData.firstName}
                onChange={handleInputChange}
                error={touchedFields.firstName && Boolean(getError('firstName', formData.firstName))}
                helperText={touchedFields.firstName ? getError('firstName', formData.firstName) : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={formData.lastName}
                onChange={handleInputChange}
                error={touchedFields.lastName && Boolean(getError('lastName', formData.lastName))}
                helperText={touchedFields.lastName ? getError('lastName', formData.lastName) : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                size="small"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                error={touchedFields.email && Boolean(getError('email', formData.email))}
                helperText={touchedFields.email ? getError('email', formData.email) : ''}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{
              marginTop: '1rem',
              backgroundColor: isButtonDisabled ? undefined : '#16405c',
            }}
            disabled={isButtonDisabled}
          >
            Next
          </Button>
        </form>
        <Divider style={{ padding: '30px 40px' }}>
          <span style={{ color: '#a8aaab' }}>Or</span>
        </Divider>
        <div className={styles.buttons_container}>
          <button type="button"><FcGoogle /></button>
          <button type="button" className={styles.facebook}><BsFacebook /></button>
          <button type="button" className={styles.linkedin}><FaLinkedin /></button>
          <button type="button"><AiFillGithub /></button>
        </div>
        <div className={styles.login_container}>
          Already have an account?
          <Link href="../../sign_in">
            <button type="button">Login</button>
          </Link>
        </div>
      </Container>
    </div>

  );
}

export default RegisterForm;
