import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
import '../sections/auth/signup/style.css';
// sections
import { SignUpForm, PatientSignUp } from '../sections/auth/signup';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: "100%",
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function SignUpPage() {
  const mdUp = useResponsive('up', 'md');

  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Helmet>
        <title>Login | Minimal UI</title>
      </Helmet>

      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />

        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}

        <Container maxWidth="lg">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Sign Up
            </Typography>
            <div
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1em' }}
            >
              <span>Sign Up as: </span>
              <button onClick={() => toggleTab(1)} className={`${toggleState === 1 ? 'active' : 'title'}`}
                // Add role attribute
                tabIndex={0} // Add tabIndex attribute
              >
                Doctor
              </button>
              <button
                onClick={() => toggleTab(2)}
                className={`${toggleState === 2 ? 'active' : 'title'}`} // Fix the className condition
              >
                Patient
              </button>
            </div>

            {toggleState === 1 ? <SignUpForm /> : <PatientSignUp />}
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
