import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DatePicker } from '@mui/x-date-pickers';
import { LoadingButton } from '@mui/lab';
import axios from 'axios';


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function SignUpForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);


  const [signUp, setSignUP] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    residential_address: '',
    gender: '',
    date_of_birth: '',
    password: '',
    specialization: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setSignUP({ ...signUp, [name]: value });
  };

  // useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://web-production-3e2f.up.railway.app/v1/auth-user/create-doc/',
        {
          first_name: signUp.first_name.trim(),
          last_name: signUp.last_name.trim(),
          email: signUp.email.trim(),
          phone_number: signUp.phone_number.trim(),
          residential_address: signUp.residential_address.trim(),
          gender: signUp.gender.trim(),
          date_of_birth: signUp.date_of_birth.trim(),
          specialization: signUp.specialization.trim(),
          password: signUp.password.trim(),
        },
        {
          mode: 'no-cors', // Add the "mode" option here
        }
      )
      .then((res) => {
        window.localStorage.setItem('data', JSON.stringify(res.data));
        toast.success(`${res?.message}`);
        navigate('/verifyemail', { replace: true });

        setSignUP({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: '',
          residential_address: '',
          gender: '',
          date_of_birth: '',
          specialization: '',
          password: '',
        });
      })
      .catch((error) => {
         toast.error(`${error?.response?.data?.errors}`);
      });
  };
  return (
    
  <>
      <ToastContainer />

      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 10 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                width: '40%',
              }}
            >
              <TextField
                name="first_name"
                label="First Name"
                value={signUp.first_name}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
              />
              <TextField
                name="last_name"
                label="Last Name"
                value={signUp.last_name}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
              />
              <TextField
                name="phone_number"
                label="Phone Number"
                value={signUp.phone_number}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
              />
              <TextField
                name="residential_address"
                label="Resident Address"
                value={signUp.residential_address}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
              />
              <TextField
                name="email"
                label="Email address"
                value={signUp.email}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
              />
              {/* <DatePicker
                name="date_of_birth"
                label="D.O.B"
                value={signUp.residential_address}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
              /> */}
              <input type="date" name="date_of_birth" value={signUp.date_of_birth} onChange={handleChange}className="newInput"/>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                width: '40%',
              }}
            >
              <TextField
                name="specialization"
                label="Specialization"
                value={signUp.specialization}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  gap: '10',
                  width: '100%',
                  marginBottom: '1em',
                  height: '1.4375em',
                }}
              >
                <div>
                  <input type="radio" value="male" name="gender" onChange={handleChange} /> <span>Male</span>
                </div>
                <div>
                  <input type="radio" value="female" name="gender" onChange={handleChange} /> <span>Female</span>
                </div>
              </div>
              <TextField
                name="password"
                value={signUp.password}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1em' }}
                label="Password"
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
            </div>
          </div>
        </Stack>

   

        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          SignUp
        </LoadingButton>
      </form>
    </>
  );
}
