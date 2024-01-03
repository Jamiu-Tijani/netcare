import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUP] = useState({
    email: '',
    password: '',
  });
  const [emailIsInValid,setEmailIsInValid] = useState(false);


  const handleChange = ({ target: { name, value } }) => {
    setSignUP({ ...signUp, [name]: value });
  };

  // useEffect(() => {}, []);

  const handleSubmit = (e) => {
    // input validation
    const emailIsValid = signUp.email.includes('@')
    if(!emailIsValid){
      setEmailIsInValid(true)
      // stops the progression of he code if invalid
      return;
    }

    setEmailIsInValid(false)
    e.preventDefault();
    window.localStorage.removeItem('token');

    axios
      .post('https://web-production-3e2f.up.railway.app/v1/auth-user/login/', {
        email: signUp.email.trim(),
        password: signUp.password.trim(),
      })
      .then((res) => {
        console.log(res.data.data);

        window.localStorage.setItem('token', JSON.stringify(res.data.data.token));

        if (res.data.data['user-type'] === 'patient') {
          navigate('/patientdashboard/app', { replace: true });
        } else {
          navigate('/dashboard/app', { replace: true });
        }

        toast.success(`${res?.message}`);
        setSignUP({
          email: '',
          password: '',
        });
      })
      .catch((error) => {
        toast.error(`${error?.response?.data?.errors}`);
      });
  };
function handleInputBlur (){

}
  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField name="email" onBlur={handleInputBlur} label="Email address" value={signUp.email} onChange={handleChange} />
          <span>
            {emailIsInValid && <p>Pls enter a valid email address</p>}
          </span>
          <TextField
            name="password"
            label="Password"
            value={signUp.password}
            onChange={handleChange}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <Checkbox name="remember" label="Remember me" />
          <Link href="/emailreset" variant="subtitle2" underline="hover">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Login
        </LoadingButton>
      </form>
    </>
  );
}
