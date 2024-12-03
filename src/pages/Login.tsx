import styled from 'styled-components'
import { Box, Container, Grid2 } from '@mui/material' 

const LoginArea = styled.div`
    background: #666;
`
const LoginImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`

function Login() {
  return (
    <>
    <Box>
      <Grid2 container>
        <Grid2 item xs={12} sm={6} sx={{alignItems: 'center', display: 'flex', height:'100vh'}}>
          <Container maxWidth="sm">
            <LoginArea>Login</LoginArea>
          </Container>
        </Grid2>

        <Grid2 item sm={6} sx={{display: {sx: 'none', sm: 'block'}}}>
            <LoginImage/>
        </Grid2>
      </Grid2>
    </Box>
      
    </>
  )
}

export default Login
