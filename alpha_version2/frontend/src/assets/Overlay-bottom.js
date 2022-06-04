import { Box } from '@mui/system';

/**
 * Overlay-bottom Component
 * Used in Initial-startup Page
 * @returns Bottom Overlay Component 
 */

const Overlaybottom = () => {
    return    <Box
    component="img"
    sx={{
      height: 4/11,
      width: 1/5,
    }}
    position='absolute'
    bottom = "0px"
    left = "0px"

    src="/Corner2.png"
  />
}

export default Overlaybottom