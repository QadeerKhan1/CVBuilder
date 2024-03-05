import React from 'react'
import { Box,Grid } from '@mui/material'
import LeftSection from './leftSection/leftSection'
import RightSection from './rightSection/rightSectionPart'
import LeftSection1 from './templateContent1/leftSection/leftSection'
import RightSection1 from './templateContent1/rightSection/rightSectionPart'
export default function MainContent1 () {
  return (
    <>
    <Box>
        <Grid container>
            <Grid item sm={6}>
              <Box>
                <LeftSection1/>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box>
                 <RightSection1/>
              </Box>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}
