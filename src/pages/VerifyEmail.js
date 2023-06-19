import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Container,
  Typography,
  Divider,
  Button,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { Helmet } from 'react-helmet-async';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// @mui
import { styled } from '@mui/material/styles';
// import {  Stack,  } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';



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
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function VerifyEmail() {
  const mdUp = useResponsive('up', 'md');

  const navigate = useNavigate();

  const [signUp, setSignUP] = useState({
    email: '',
    token: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setSignUP({ ...signUp, [name]: value });
  };

  // useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://web-production-3e2f.up.railway.app/v1/auth-user/verify-email-complete/', {
        email: signUp.email.trim(),
        token: signUp.token.trim(),
      })
      .then((res) => {
        window.localStorage.setItem('data', JSON.stringify(res.data));
        toast.success(`${res.message}`);
        navigate('/dashboard', { replace: true });

        setSignUP({
          email: '',
          token: '',
        });
      })
      .catch((error) => {
        toast.error(`${error?.response?.data?.errors}`);
      });
  };

  return (
    <>
    <ToastContainer />
      <Helmet>
        <title> Login | Minimal UI </title>
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

        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h4" gutterBottom>
              Verify Email
            </Typography>

            <Typography variant="body2" sx={{ mb: 5 }}>
              Input your data
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField name="email" label="Email address" value={signUp.email} onChange={handleChange} />
                <TextField name="token" label="Token" value={signUp.token} onChange={handleChange} />
              </Stack>

              <LoadingButton fullWidth size="large" type="submit" variant="contained">
                Verify Email
              </LoadingButton>
            </form>
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
