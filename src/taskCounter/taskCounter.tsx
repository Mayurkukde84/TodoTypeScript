import React,{FC,ReactElement} from 'react'
import { Avatar,Box,Typography } from '@mui/material'
import { Status } from '../components/createTaskForm/enum/Status'
import { emitCorrectBorderColor } from './helpers/emitCorrectBorder'
import { emitCorrectLabel } from './helpers/emitCorrectLabel'
export const TaskCounter : FC = (props):ReactElement =>{
    const {status = Status.completed , count = 0} = props
return(
    <>
    <Box
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    >
        <Avatar
        sx={{
            backgroundColor:'transparent',
            border:'5px solid',
            width:'96px',
            height:'96px',
            marginBottom:'16px',
            borderColor:`${emitCorrectBorderColor(status)}`
        }}
        >
            <Typography color={'#fffff'} variant='h4' >{count}</Typography>
        </Avatar>
       
            <Typography
            color={'#ffffff'}
            fontWeight='bold'
            fontSize={'20px'}
            variant='h5'
            >
                {emitCorrectLabel(status)}
            </Typography>
       

    </Box>
    
    </>
)
}