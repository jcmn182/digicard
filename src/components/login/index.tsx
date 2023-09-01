'use client';

import { useState } from 'react';
import {
  Button, TextField, Container, Typography, Grid, Paper,
} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    if (name === 'email') {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      setIsValidEmail(emailRegex.test(value));
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log(formData);
    // Send this data to your server
  };

  const isFormValid = formData.email && formData.password && isValidEmail;

  return (
    <Container component="main" maxWidth="md">
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={24} style={{ padding: '20px' }}>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <form noValidate onSubmit={handleSubmit} style={{ width: '100%', marginTop: 3 }}>
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                error={!isValidEmail}
                helperText={!isValidEmail ? 'Invalid email format' : ''}
              />
              <TextField
                size="small"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ margin: '24px 0 16px', backgroundColor: isFormValid ? '#16405c' : 'gray' }}
                disabled={!isFormValid}
              >
                Sign In
              </Button>
            </form>

            <Typography variant="body1" style={{ margin: '16px 0' }}>
              Or sign in with
            </Typography>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<FcGoogle />}
              style={{ marginBottom: '8px' }}
              onClick={() => {
                // Add Gmail authentication logic here
              }}
            >
              Gmail
            </Button>

            <Button
              variant="outlined"
              fullWidth
              startIcon={<FaMicrosoft />}
              onClick={() => {
                // Add Microsoft authentication logic here
              }}
            >
              Microsoft
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
