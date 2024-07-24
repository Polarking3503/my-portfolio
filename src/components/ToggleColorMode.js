import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSpring } from '@react-spring/web';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';

const CustomSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: theme.palette.mode === 'dark' ? '#ffeb3b' : '#1976d2',
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#ffeb3b' : '#1976d2',
  },
  '& .MuiSwitch-track': {
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
  },
}));

function ToggleColorMode({ mode, toggleColorMode }) {
  const springProps = useSpring({
    transform: mode === 'dark' ? 'rotate(180deg)' : 'rotate(0deg)',
  });

  return (
    <Box display="flex" alignItems="center">
      <Box position="relative" width={24} height={24} display="flex" alignItems="center">
        <animated.div
          style={{
            ...springProps,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mode === 'dark' ? (
            <ModeNightRoundedIcon fontSize="small" />
          ) : (
            <WbSunnyRoundedIcon fontSize="small" />
          )}
        </animated.div>
      </Box>
      <CustomSwitch
        checked={mode === 'dark'}
        onChange={toggleColorMode}
        inputProps={{ 'aria-label': 'toggle theme' }}
      />
    </Box>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
