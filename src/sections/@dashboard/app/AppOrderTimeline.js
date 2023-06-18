// @mui
import PropTypes from 'prop-types';
import { Card, Typography, CardHeader, CardContent } from '@mui/material';
import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineSeparator, TimelineConnector } from '@mui/lab';
import { BsCheck2All } from 'react-icons/bs';
import { FaRegTimesCircle } from 'react-icons/fa';

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
  return (
    <TimelineItem>
      <TimelineSeparator>
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
      </TimelineSeparator>

      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>

        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDateTime(time)}
        </Typography>
      </TimelineContent>
      <div
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
      >
        <BsCheck2All />
      </div>
      <div
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
      >
        <FaRegTimesCircle />
      </div>
    </TimelineItem>
  );
}
