import { TextField, styled } from "@mui/material";

const ResponsiveTextField = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-root": {
        [theme.breakpoints.down("phones")]: {
            fontSize: 16,
        },
    },
    "& .MuiFormLabel-root": {
        [theme.breakpoints.down("phones")]: {
            fontSize: 16,
        },
    },
}));

export default ResponsiveTextField;
