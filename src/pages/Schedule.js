import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import '../home.css';

const Schedule = () => {
  const [signUp, setSignUP] = useState({
    patient_email: '',
    date: '',
    start_time: '',
    doctor_email: '',
    end_time: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setSignUP({ ...signUp, [name]: value });
  };

  const ScheduleAppointment = (e) => {
    e.preventDefault();
        const token = localStorage.getItem('token')?.replace(/['"]+/g, '');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    };
    axios
      .post('https://web-production-3e2f.up.railway.app/v1/appointments/schedule-appointment/', {
        patient_email: signUp.patient_email.trim(),
        date: signUp.date.trim(),
        start_time: signUp.start_time.trim(),
        doctor_email: signUp.doctor_email.trim(),
        end_time: signUp.end_time.trim(),
      }, {headers})
      .then((res) => {
        window.localStorage.setItem('data', JSON.stringify(res.data));
        toast.success(`${res?.data.data.message}`);
        // navigate('/', { replace: true });
        setSignUP({
          patient_email: '',
          date: '',
          start_time: '',
          doctor_email: '',
          end_time: '',
        });
        console.log(res);
      })
      .catch((error) => {
        toast.error(`${error?.response?.data?.errors}`);
      });
  };

  return (
    <div>
      <h2>Schedule An Appointment  </h2>
      <form onSubmit={ScheduleAppointment}>
        <Stack spacing={3}>
          <input name="patient_email" placeholder="Patient Email address" value={signUp.patient_email} onChange={handleChange}  className="newInput"/>
          <input name="doctor_email" placeholder="Doctor Email address" value={signUp.doctor_email} onChange={handleChange}  className="newInput"/>
          <input type="date" placeholder="Date" name="date" value={signUp.date} onChange={handleChange} className="newInput" />
          <input type="time" placeholder="Start Time"  name="start_time" value={signUp.start_time} onChange={handleChange} className="newInput" />
          <input type="time" placeholder="End Time"  name="end_time" value={signUp.end_time} onChange={handleChange} className="newInput" />
        </Stack>
        <LoadingButton fullWidth size="large" type="submit" variant="contained">
          Make Enquire
        </LoadingButton>
      </form>
    </div>
  );
};

export default Schedule;
