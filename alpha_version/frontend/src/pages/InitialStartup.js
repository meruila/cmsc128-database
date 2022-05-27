import Box from '@mui/material/Box';
import { Link } from '@mui/material';

import Overlaybottom from '../assets/Overlay-bottom';
import Overlaytop from '../assets/Overlay-top';

const green = "#0D542F";

const InitialStartup = () => {
    return <div>
        <Overlaytop />
            <Box
                component="img"
                position="absolute"
                width="33%"
                margin="auto"
                left="0"
                right="0"
                top="38%"
                align="center"
                src="/SHACKER-icon-with-label.png"
            />
            <Box
                component="div"
                sx={{
                    display: 'inline'
                }}
                position="absolute"
                left="39%"
                top="58%"
                align="center"
            >
                <Link href="create-admin" underline="hover" color="maroon">
                    {'Don\'t have an account yet? Sign up here.'}
                </Link>
                <Link href="login" underline="hover" color={green}>
                    {' Else, log in.'}
                </Link>
            </Box>
        <Overlaybottom />
    </div>;
}

export default InitialStartup;