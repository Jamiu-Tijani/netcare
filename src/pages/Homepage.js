import React, { useState } from 'react';
import '../home.css';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillGooglePlusCircle } from 'react-icons/ai';
import { MdPayments } from 'react-icons/md';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../components/iconify';

const Homepage = () => {
  const navigate = useNavigate();

  const [signUp, setSignUP] = useState({
    email: '',
    subject: '',
    message: '',
    name: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setSignUP({ ...signUp, [name]: value });
  };

  // useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://web-production-3e2f.up.railway.app/v1/auth-user/send-inquiry-email/', {
        email: signUp.email.trim(),
        subject: signUp.subject.trim(),
        message: signUp.message.trim(),
        name: signUp.name.trim(),
      })
      .then((res) => {
        window.localStorage.setItem('data', JSON.stringify(res.data));
        navigate('/dashboard/app', { replace: true });

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
  return (
    <>
      <header className="header">
        <nav className="topNav">
          <h3>NatCare</h3>
        </nav>
        <div className="headerCon">
          <h1>Work with an amazing design</h1>
          <p>
            We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play
            this game
          </p>
          <button>
            <Link href="/signup">Create Account</Link>
          </button>
             <button>
            <Link href="/login">Login </Link>
          </button>

          <h5>Find US</h5>
          <div className="social">
            <AiFillFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillGooglePlusCircle className="iconL" />
          </div>
        </div>
      </header>

      <section className="work">
        <div className="work1">
          <div className="work1Con">
            <div className="TextCont">
              <div className="TextCon">
                <MdPayments className="textIcon" />
                <h2>Fully integrated</h2>
                <p>We get insulted by others, lose trust for those We get back freezes</p>
              </div>
              <div className="TextCon">
                <MdPayments className="textIcon" />
                <h2>Fully integrated</h2>
                <p>We get insulted by others, lose trust for those We get back freezes</p>
              </div>
              <div className="TextCon">
                <MdPayments className="textIcon" />
                <h2>Fully integrated</h2>
                <p>We get insulted by others, lose trust for those We get back freezes</p>
              </div>
              <div className="TextCon">
                <MdPayments className="textIcon" />
                <h2>Fully integrated</h2>
                <p>We get insulted by others, lose trust for those We get back freezes</p>
              </div>
            </div>
            <div className="wokImgCap">
              <div className="wokImg">
                <div className="img">
                  <img src="/assets/images/covers/test2.jpeg" alt="" />
                </div>
                <h3>Image</h3>
                <p>
                  Website visitors today demand a frictionless user expericence — especially when using search. Because
                  of the hight standards.
                </p>
                <button>find out more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="wor2">
          <div className="wor2Con">
            <h1>The Executive Team</h1>
            <p>There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill.</p>

            <div className="worDiv">
              <div className="divTab">
                <div className="img">
                  <img src="/assets/images/covers/test2.jpeg" alt="" />
                </div>
                <div>
                  <h1>Emma Roberts</h1>
                  <h3>UI Designer</h3>
                  <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                </div>
              </div>
              <div className="divTab">
                <div className="img">
                  <img src="/assets/images/covers/test2.jpeg" alt="" />
                </div>
                <div>
                  <h1>Emma Roberts</h1>
                  <h3>UI Designer</h3>
                  <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                </div>
              </div>
              <div className="divTab">
                <div className="img">
                  <img src="/assets/images/covers/test2.jpeg" alt="" />
                </div>
                <div>
                  <h1>Emma Roberts</h1>
                  <h3>UI Designer</h3>
                  <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                </div>
              </div>
              <div className="divTab">
                <div className="img">
                  <img src="/assets/images/covers/test2.jpeg" alt="" />
                </div>
                <div>
                  <h1>Emma Roberts</h1>
                  <h3>UI Designer</h3>
                  <p>Artist is a term applied to a person who engages in an activity deemed to be an art.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spon">
          <div className="sponInut">
            <h2>Quick Equire</h2>
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField name="name" label="Name" value={signUp.name} onChange={handleChange} />
                <TextField name="email" label="Email address" value={signUp.email} onChange={handleChange} />
                <TextField name="subject" label="Subject" value={signUp.subject} onChange={handleChange} />
                <TextField name="massage" label="Message" value={signUp.message} onChange={handleChange} />
              </Stack>
              <LoadingButton fullWidth size="large" type="submit" variant="contained">
                Make Enquire
              </LoadingButton>
            </form>
          </div>
        </div>
        <footer className="foo">All rights reserved. Copyright © 2023 Netcare</footer>
      </section>
    </>
  );
};

export default Homepage;
