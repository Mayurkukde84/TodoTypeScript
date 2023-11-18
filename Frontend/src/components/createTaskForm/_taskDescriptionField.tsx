import {FC,ReactElement} from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';


export const TaskDescriptionField: FC<ITextField> = (props):ReactElement =>{
  const {onChange = (e)=>console.log(e),disabled} = props
return(
    <>
      <TextField
    id='descrcription'
    label="description"
    placeholder="Description"
    variant='outlined'
    size='small'
    name='title'
    multiline
    rows={4}
    fullWidth
    onChange={onChange}
    disabled={disabled}
  
    />
    </>
)
}