import React, { useState } from 'react';
import { Box, Typography, Paper, Stack, TextField, FormControl, InputLabel, Input, IconButton, InputAdornment, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import google from '../Asstes/Create Account-Log in-page/google-logo-icon-png-transparent-background-osteopathy-16 1.png'
import facebook from '../Asstes/Create Account-Log in-page/facebook-512 1.png'
import img from '../Asstes/Create Account-Log in-page/Woman connects a laptop to the server.png'



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
              <span sx={{ whiteSpace: 'nowrap' }}>{greeting}</span>
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
          // backgroundColor: 'red'
        }}>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '62px',
            padding: '81px 0 0 110px',
            // backgroundColor: 'yellow'
          }}>

            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '367px',
              width: '100%'
            }}>
              <Typography sx={{
                width: '450px',
                color: '#277502',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '72.917%', /* 72.917% 35px */
                letterSpacing: '3.84px',

              }}>
                Create Account
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
                gap: '30px',
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
                  {/* Full Name Field */}
                  <TextField
                    id="fullName"
                    label="Full Name"
                    variant="standard"
                    value={fullName}
                    onChange={handleFullNameChange}
                    sx={{ width: '714.01587px' }}
                    error={!!errors.fullName}
                    helperText={errors.fullName}
                  />
                </div>
                <div>
                  {/* Email Field */}
                  <TextField
                    id="emailAddress"
                    label="Email Address"
                    variant="standard"
                    value={email}
                    onChange={handleEmailChange}
                    sx={{ width: '714.01587px' }}
                    error={!!errors.email}
                    helperText={errors.email}
                  />
                </div>

                <div>
                  <p>
                    {/* Password Field */}
                    <FormControl variant="standard" sx={{ width: '714px' }} error={!!errors.password}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      <Typography variant="caption" color="error">
                        {errors.password}
                      </Typography>
                    </FormControl>
                  </p>
                </div>

                <div>
                  <p>
                    {/* Confirm Password Field */}
                    <FormControl variant="standard" sx={{ width: '714px' }} error={!!errors.confirmPassword}>
                      <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                      <Input
                        id="confirmPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                      <Typography variant="caption" color="error">
                        {errors.confirmPassword}
                      </Typography>
                    </FormControl>
                  </p>
                </div>

              </Box>

              <Box>
                <Button type="submit" variant="contained" sx={{
                  display: 'flex',
                  padding: '16px 234px 0px 234px',
                  alignItems: 'flex-start',
                  gap: '10px',
                  borderRadius: '8px',
                  textTransform: 'none',
                  background: 'linear-gradient(180deg, rgba(33,100,15,1) 0%, rgba(84,174,0,1) 100%)'
                }}
                  onClick={handleSubmit}>
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
                    Create Account
                  </Typography>
                </Button>

                {/* Success Message */}
                {formSubmitted && (
                  <Typography variant="body1" color="primary" sx={{ marginTop: '20px', textAlign: 'center' }}>
                    Account created successfully!
                  </Typography>
                )}


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
                  Do you have an account ?
                  <a href="/Createaccount">Login here</a>
                </Typography>


              </Box>

            </Box>

          </Box >

        </Paper >

      </Box >
    </Box>
  )



export default CreateAccount;
