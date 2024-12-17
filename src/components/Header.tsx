import React from 'react';
import { Typography } from '@mui/material';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Typography variant="h3" align="center" gutterBottom>
      {title}
    </Typography>
  );
};

export default Header;
