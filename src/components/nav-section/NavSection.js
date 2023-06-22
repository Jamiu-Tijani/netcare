import PropTypes from 'prop-types';
import { NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

// @mui
import { Box, List, ListItemText } from '@mui/material';
//
import { StyledNavItem, StyledNavItemIcon } from './styles';

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }) {
  const navigate = useNavigate();

  const handleApprove = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')?.replace(/['"]+/g, '');

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    };
    axios
      .post('https://web-production-3e2f.up.railway.app/v1/auth-user/logout/', { headers })
      .then((res) => {
        console.log(res.data.data);
        navigate('/login', { replace: true });
      })
      .catch((error) => {
        toast.error(`${error?.response?.data?.errors}`);
      });
  };

  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
        {/* <button onClick={(e) => handleApprove(e)}>Login</button> */}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
