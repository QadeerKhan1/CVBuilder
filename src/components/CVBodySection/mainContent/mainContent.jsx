import React from 'react'
import { Box,Grid } from '@mui/material'
import LeftSection from './leftSection/leftSection'
import RightSection from './rightSection/rightSectionPart'
export default function MainContent () {
  return (
    <>
    <Box>
        <Grid container>
            <Grid item sm={6}>
              <Box>
                <LeftSection/>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box>
                 <RightSection/>
              </Box>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}
