import React,{FC,ReactElement} from 'react'
import { Box } from '@mui/material'
import { TaskHeader } from './_taskHeader'
import { TaskDescription } from './_taskDescription'
import { TaskFooter } from './_taskFooter'

export const Task:FC = (props):ReactElement =>{
return (
    <Box
    display={'flex'}
    width={'100%'}
    justifyContent={'flex-start'}
    flexDirection={'column'}
    mb={4}
    p={2}
    sx={{
        width:'100%',
        backgroundColor:'background.paper',
        borderRadius:'8px',
        border:'1px solid',
        borderColor:'error.light'
    }}
    >
        Test
        <TaskHeader/>
        <TaskDescription/>
        <TaskFooter/>

    </Box>
)
}