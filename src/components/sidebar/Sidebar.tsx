import {FC,ReactElement} from  'react'
import {Grid} from '@mui/material'
import {Profile} from '../profile/Profile'
const Sidebar:FC = ():ReactElement=>{
    return(
        <>
        <Grid
        item
        md={4}
        sx={{
            height:'100vh',
            position:'fixed',
            right:0,
            top:0,
            width:'100%',
            background:'background paper',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center'
        }}
        >
            <Profile/>
        </Grid>
        </>
    )
}

export default Sidebar;