import {FC,ReactElement, useState} from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import {DesktopDatePicker} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TextField } from "@mui/material";
import { IDateField } from "./interfaces/IDateField";

export const  TaskDateField:FC<IDateField> = (props):ReactElement =>{
 
const {value=new Date(),disabled=false,onChange = (date)=>console.log(date)} = props
    return(
        <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
            label="Take Date"
            inputFormat='dd/MM/yyyy'
            value={value}
            onChange={onChange}
            disabled={disabled}
            renderInput = {(params)=>(
                <TextField {...params} />
            )}
            />

        </LocalizationProvider>
        
        </>
    )
}