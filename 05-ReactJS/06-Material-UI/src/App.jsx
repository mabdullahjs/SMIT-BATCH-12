// import { Box, Typography } from '@mui/material'
// import React from 'react'

// const App = () => {
//   return (
//     <>
//       {/* <Box sx={{
//         backgroundColor: '#0073e6',
//         color: 'white',
//         textAlign: 'center',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '10px'
//       }}>
//         <Typography sx={{ border: '3px solid black', margin: '10px' }} variant='h2'>Hello world</Typography>
//         <Typography sx={{ border: '3px solid black', margin: '10px' }} variant='h2'>Hello world</Typography>
//         <Typography sx={{ border: '3px solid black', margin: '10px' }} variant='h2'>Hello world</Typography>
//       </Box> */}
//     </>

//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from './components/Navbar'
import ImgMediaCard from './components/Card'
import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';


const App = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setProduct(res.products)
      }).catch((err) => {
        console.log(err);
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [])
  return (
    <>
      <ResponsiveAppBar />
      {loading && <Box sx={{
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress size="3rem" />
      </Box>}
      {error && <Alert severity="error">This is an error Alert.</Alert>}
      <Grid className="container mt-5" container spacing={12}>
        {product && product.map(item => {
          return <Grid size={{ md: 4, sm: 6, xs: 12 }}>
            <ImgMediaCard key={item.id} image={item.thumbnail} title={item.title} description={item.description} />
          </Grid>
        })}
      </Grid>

      {/* <Grid className="container" container spacing={2}>
        <Grid size={6} sx={{ border: '2px solid black' }}>
          <Typography>size=8</Typography>
        </Grid>
        <Grid size={6} sx={{ border: '2px solid black' }}>
          <Typography>size=4</Typography>
        </Grid>
        <Grid size={4} sx={{ border: '2px solid black' }}>
          <Typography>size=4</Typography>
        </Grid>
        <Grid size={8} sx={{ border: '2px solid black' }}>
          <Typography>size=8</Typography>
        </Grid>
      </Grid> */}

    </>
  )
}

export default App