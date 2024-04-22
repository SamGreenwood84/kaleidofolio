import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

{/** Imported useState method */}
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlertName, setShowAlertName] = useState(false);
    const [showAlertEmail, setShowAlertEmail] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState(false);

    {/** Trimmed whitespace, if no text prompts alert as per requirements*/}
    const handleEmptyName = (value) => {
        if (!value.trim()) {
            setShowAlertName(true);
        } else {
            setShowAlertName(false);
        }
    }

    const handleEmptyEmail = (value) => {
        if (!value.trim()) {
            setShowAlertEmail(true);
        } else {
            setShowAlertEmail(false);
        }
    }

    const handleEmptyMessage = (value) => {
        if (!value.trim()) {
            setShowAlertMessage(true);
        } else {
            setShowAlertMessage(false);
        }
    }

    {/** Regex for email validation */}
    const emailValidation = (email) => {
        const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegEx.test(email);
    }

    {/** This validates email, if not valid prompts invalid email */}
    const handleEmailValidation = (event) => {
        const emailVal = event.target.value;
        setEmail(emailVal);
        setEmailError(!emailValidation(emailVal));
    }

    return (
        <Box
            className='marginTop appJsx'
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='contactForm appJsx'>
                <ContactMailIcon sx={{ color: '#00ff00' }}/>
                <Typography variant='body1' color='textSecondary' align='center'>
                    asksam2023@gmail.com
                </Typography>
                <ContactPhoneIcon sx={{ color: '#00ff00' }}/>
                <Typography variant='body1' color='textSecondary' align='center' gutterBottom>
                    604-349-8535
                </Typography>
                {/** No text is entered=alert */}
                 {showAlertName && (
                    <Alert variant="outlined" severity="info">
                        Name is required
                    </Alert>
                )}
                {/** Mouse leaves input with no text=alert appears */}
                <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    maxRows={4}
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    onMouseOut={() => handleEmptyName(name)}
                />
                {showAlertEmail && (
                    <Alert variant="outlined" severity="info">
                        Email is required
                    </Alert>
                )}
                {/** Add text=prompts email validation */}
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    multiline
                    required
                    value={email}
                    onChange={handleEmailValidation}
                    onMouseOut={() => handleEmptyEmail(email)}
                    error={!!emailError}
                    helperText={emailError ? 'Invalid Email' : '' }
                />
                 {showAlertMessage && (
                    <Alert variant="outlined" severity="info">
                        Message is required
                    </Alert>
                )}
                <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    required
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    onMouseOut={() => handleEmptyMessage(message)}
                />
                <Button sx={{ marginLeft: '135px', marginBottom: '20px' }} variant='outlined'>Submit</Button>
            </div>
        </Box>
    );
}