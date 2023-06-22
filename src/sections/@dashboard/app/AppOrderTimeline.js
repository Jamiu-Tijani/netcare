// @mui
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
import { BsCheck2All } from 'react-icons/bs';
import { FaRegTimesCircle } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// utils
import { fDateTime } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

AppOrderTimeline.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppOrderTimeline({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <CardContent
        sx={{
          '& .MuiTimelineItem-missingOppositeContent:before': {
            display: 'none',
          },
        }}
      >
        <Timeline>
          {list.map((item, index) => (
            <>
              <OrderItem key={item.id} item={item} isLast={index === list.length - 1} />
            </>
          ))}
        </Timeline>
      </CardContent>
    </Card>
  );
}

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  isLast: PropTypes.bool,
  item: PropTypes.shape({
    time: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    type: PropTypes.string,
  }),
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;

  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const token = localStorage.getItem('token')?.replace(/['"]+/g, '');
  // console.log(token)

  useEffect(() => {
    function queryApi() {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      };
      return axios
        .post(
          `https://web-production-3e2f.up.railway.app/v1/appointments/get-doctor-appointments/`,
          { doctor_email: 'olamiquadri1@gmail.com' },
          { headers }
        )

        .then((res) => {
          setResult(res.data.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    queryApi();
  }, []);

  // const [signUp, setSignUP] = useState({
  //   appointment_id: '',
  // });

  // useEffect(() => {}, []);

  const handleApprove = (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem('token')?.replace(/['"]+/g, '');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    };
    axios
      .patch(
        'https://web-production-3e2f.up.railway.app/v1/appointments/approve-appointment/',
        {
          appointment_id: id,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data.data);
        toast.success(`${res?.message}`);
        // setSignUP({
        //   email: '',
        // });
      })
      .catch((error) => {
        toast.error(`${error?.response?.data?.errors}`);
      });
  };

  const handleReject = (e, id) => {
    e.preventDefault();
    const token = localStorage.getItem('token')?.replace(/['"]+/g, '');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    };
    axios
      .patch(
        'https://web-production-3e2f.up.railway.app/v1/appointments/reject-appointment/',
        {
          appointment_id: id,
        },
        { headers }
      )
      .then((res) => {
        console.log(res.data.data);
        toast.success(`${res?.message}`);
        // setSignUP({
        //   email: '',
        // });
      })
      .catch((error) => {
        toast.error(`${error?.response?.data?.errors}`);
      });
  };

  return (
    <TimelineItem>
      {/* <TimelineSeparator>
        <TimelineDot
          color={
            (type === 'order1' && 'primary') ||
            (type === 'order2' && 'success') ||
            (type === 'order3' && 'info') ||
            (type === 'order4' && 'warning') ||
            'error'
          }
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator> */}
      {result?.map((user, id) => {
        return (
          <div key={id}>
            <TimelineContent>
              <Typography variant="subtitle2">{user?.patient_name}</Typography>

              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {user?.start_time}
              </Typography>
            </TimelineContent>
            <button
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '9px',
                backgroundColor: 'rgb(32, 101, 209)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={(e) => handleApprove(e, user?.appointment_id)}
            >
              <BsCheck2All />
            </button>
            <button
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '9px',
                backgroundColor: '#FF4842',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '.5em',
                cursor: 'pointer',
              }}
              onClick={(e) => handleReject(e, user?.appointment_id)}
            >
              <FaRegTimesCircle />
            </button>
          </div>
        );
      })}
    </TimelineItem>
  );
}
