import React, {FC,ReactElement} from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

export const TaskTitleField: FC<ITextField> = (props):ReactElement =>{
 const {onChange=(e)=>console.log(e),disabled = false} = props;
return(
    <>
    <TextField
    id='title'
    label="Task title"
    placeholder="Task title"
    variant='outlined'
    size='small'
    name='title'
    multiline
    rows={4}
    fullWidth
    disabled = {disabled}
    onChange={onChange}
   
    />
    </>
)
}