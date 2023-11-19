import { ReactElement, FC } from "react";
import { Avatar, Box, Typography } from "@mui/material";

interface IProfile{
  name?:string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
const {name} = props
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
     
    >
      <Avatar
        sx={{
          width: "96px",
          height: "86px",
          backgroundColor: "primary.main"
        }}
      >
        <Typography variant="h4" color="text.primary">
          {name.substring(0,1)}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
          {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
          This is your personal tasks manage
      </Typography>
    </Box>
  );
};

export default Profile;
