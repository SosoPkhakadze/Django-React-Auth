import React from 'react';
import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const MyMessage = ({ text, color = '#e74c3c' }) => {
    return (
        <Box sx={{
            backgroundColor: 'rgba(231, 76, 60, 0.1)',
            color: color,
            width: '90%',
            maxWidth: '420px',
            padding: '12px 20px',
            borderRadius: '12px',
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: `1px solid ${color}`,
            zIndex: 1000,
            animation: 'fadeIn 0.5s ease-out',
            '@keyframes fadeIn': {
                from: { opacity: 0, transform: 'translateX(-50%) translateY(-20px)' },
                to: { opacity: 1, transform: 'translateX(-50%) translateY(0)' }
            }
        }}>
            <ErrorOutlineIcon sx={{ marginRight: '8px', color: color }} />
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {text}
            </Typography>
        </Box>
    );
};

export default MyMessage;