import React from 'react';
import { Box, Typography, Paper, Stack, TextField, FormControl, InputLabel, Input, IconButton, InputAdornment, Button, } from '@mui/material';
import { Visibility, VisibilityOff, } from '@mui/icons-material';
import img from '../Asstes/Create Account-Log in-page/Woman connects a laptop to the server.png';
import google from '../Asstes/Create Account-Log in-page/google-logo-icon-png-transparent-background-osteopathy-16 1.png';
import facebook from '../Asstes/Create Account-Log in-page/facebook-512 1.png';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = "";
if (curDate >= 1 && curDate < 12) {
  greeting = "Good Morning!";
}
else if (curDate >= 12 && curDate < 16) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}


const Login = () => {
  // State for form fields and error messages
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  // Handle email change and validate email format
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Email validation (simple regex pattern)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  // Function to handle password changes
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Define a regular expression to validate the password
    // Minimum 8 characters, at least 2 numbers, and 1 special character
    const passwordRegex = /^(?=.*[0-9].*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

    // Validate the password using the regular expression
    if (!passwordRegex.test(value)) {
      setPasswordError('Password must be at least 8 characters long and include at least two numbers and one special character');
    } else {
      setPasswordError('');
    }
  };


  // Handle password visibility toggle
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle form submission (e.g., make an API call for authentication)
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailError && !passwordError) {
      // Perform form submission (e.g., API call for authentication)
      console.log('Form submitted:', { email, password });
    }
  };


  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Box sx={{
        display: 'flex',
        position: 'relative',
        height: '1024px',
        width: '1440px',
        borderRadius: '36px'
      }}>

        <Box sx={{
          width: '417px',
          flexShrink: ' 0',
          background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)',
          borderRadius: '25px 0 0 25px'
        }}>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '410px',
            height: '106px',
            padding: '81px 72px 0 72px'
          }}>

            <Typography sx={{
              color: '#FFF',
              // fontFamily: 'Poppins',
              fontSize: '24px',
              // fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '53px', /* 220.833% */
              letterSpacing: '2px',
            }}>
              <span >{greeting}</span>
            </Typography>

            <Typography sx={{
              color: '#FFF',
              fontSize: '48px',
              fontStyle: 'none',
              fontWeight: '900',
              lineHeight: '53px',/* 110.417% */
              letterspacing: '2px',
            }}>
              HAVE A NICE DAY
            </Typography>
          </Box>


        </Box>

        <Box component="img" src={img}
          sx={{
            width: '500px',
            height: '356px',
            position: 'absolute',
            bottom: '0px',
            left: '-1px',
            borderRadius: '0 0 0 25px'
          }} />

        <Paper elevation={3} style={{
          padding: '36px',
          borderRadius: '0px 25px 25px 0px',

        }}>

          <Box sx={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '62px',
            padding: '81px 0 0 110px',

          }}>

            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '367px',
              width: '100%'
            }}>
              <Typography sx={{
                width: '379px',
                color: '#277502',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '72.917%', /* 72.917% 35px */
                letterSpacing: '3.84px'
              }}>
                Log In
              </Typography>

            </Box>



            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '71px',
            }}>

              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '45px',
              }}>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '51px',
                }}>
                  <Stack direction="row" spacing={'51px'}>
                    <Button variant="outlined" sx={{
                      width: '331.291px',
                      height: '73.357px',
                      flexShrink: ' 0',
                      textTransform: 'none',
                      color: 'none',
                      fontSize: 'none'

                    }}>
                      <Box component="img" src={google}
                        sx={{
                          width: '37.785px',
                          height: '35.495px',
                          spacing: '15px',
                          position: 'absolute',
                          left: '38px',
                          top: '18.88px',
                        }} />
                      <Typography sx={{
                        position: 'absolute',
                        right: '52.54px',
                        top: '18.88px',
                        color: ' #5A5A5A',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWight: '600',
                        lineHeight: '35px' /* 218.75% */
                      }}>
                        Sign up with Google
                      </Typography>

                    </Button>
                    <Button variant="outlined" sx={{
                      width: '331.291px',
                      height: '73.357px',
                      flexShrink: ' 0',
                      textTransform: 'none'
                    }}>
                      <Box component="img" src={facebook}
                        sx={{
                          width: '37.785px',
                          height: '35.495px',
                          spacing: '15px',
                          position: 'absolute',
                          left: '38px',
                          top: '18.88px'
                        }} />
                      <Typography sx={{
                        position: 'absolute',
                        right: '43.54px',
                        top: '18.88px',
                        color: ' #5A5A5A',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWight: '6000',
                        lineHeight: '35px' /* 218.75% */
                      }}>
                        Sign up with Facebook
                      </Typography>
                    </Button>
                  </Stack>
                </Box>

                <Typography sx={{
                  width: '90.142px',
                  height: '5px',
                  color: '#A3A3A3',
                  fontSize: '18px',
                  fontWeight: '400',
                  lineHeight: '35px', /* 194.444% */
                }}>
                  - OR -
                </Typography>

                <div>
                  <p>
                    <TextField
                      id="email"
                      label="Email"
                      variant="standard"
                      value={email}
                      onChange={handleEmailChange}
                      sx={{ width: '714.01587px', height: '52.5689px' }}
                    />
                    {emailError && (
                      <Typography sx={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
                        {emailError}
                      </Typography>
                    )}
                  </p>
                </div>

                <div>
                  <p>
                    <FormControl sx={{ width: '714px' }} variant="standard">
                      <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    {passwordError && (
                      <Typography sx={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>
                        {passwordError}
                      </Typography>
                    )}
                  </p>
                  <Typography sx={{
                    color: 'var(--Primary, #449E2E)',
                    // fontFamily: 'Jost',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '22px', /* 137.5% */
                    letterSpacing: '-0.408px',
                  }} >
                    Forget Password?
                  </Typography>
                </div>
              </Box>

              <Box>
                <Button sx={{
                  display: 'flex',
                  padding: '16px 234px 0px 234px',
                  alignItems: 'flex-start',
                  gap: '10px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)'
                }}>
                  <Typography sx={{
                    width: '244.919px',
                    height: '57.976px',
                    color: '#FFF',
                    textAlign: 'center',
                    // fontFamily: 'Poppins',
                    fontSize: '20px',
                    // fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '35px', /* 175% */
                  }}>
                    Log In
                  </Typography>
                </Button>

                <Typography
                  sx={{
                    color: 'var(--Secondary, #5FC301)',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '22px', /* 137.5% */
                    letterSpacing: '-0.408px',
                    marginTop: '30px',
                    '& a': {
                      color: '#5FC301', // Customize the link color here
                      textDecoration: 'none', // Remove underline
                      fontWeight: 'bold',
                      '&:hover': {
                        color: '#408000', // Color on hover, you can customize this
                      }
                    }
                  }}
                >
                  Don’t You Have an Account?
                  <a href="/Createaccount">Signup Here</a>
                </Typography>

              </Box>

            </Box>

          </Box >

        </Paper >

      </Box >
    </Box>

  )

}

export default Login;