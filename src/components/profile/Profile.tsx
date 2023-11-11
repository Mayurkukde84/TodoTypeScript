import  { ReactElement,FC } from 'react'
import {Avatar,Box} from '@mui/material'

const Profile:FC = ():ReactElement => {
  return (
    <Box
    display={'flex'}
    flexDirection={'column'}
    justifyContent={'center'}
    alignItems={'center'}
    >
     <Avatar
     sx={{
        width:'96px',
        height:'96px',
        backgroundColor:'primary.main',
        marginBottom:'16px'
     }}
     >J</Avatar>
    </Box>
  )
}

export default Profile;