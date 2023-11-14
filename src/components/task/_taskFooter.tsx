import {FC,ReactElement} from 'react';
import { Switch,Box,Button, FormControlLabel } from '@mui/material';
export const TaskFooter:FC = ():ReactElement =>{
    return(
        <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems='center'
        mt={4}
        >
            <FormControlLabel label="In Progress" control={<Switch color='warning'/>} />

        <Button
        variant='contained'
        color='success'
        size='small'
        sx={{color:'#ffffff'}}
        >Mark Complete</Button>
        </Box>
    )
}