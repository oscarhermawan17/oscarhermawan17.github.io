
import { Theme } from "@mui/material/styles"

export const Styles = (theme: Theme) => ({
  root: {
    background: theme.palette.primary.dark,
  },
  title: {
    textAlign: "center",
    color: theme.palette.secondary.dark,
  },
  contactMe: {
    fontWeight: 800
  },
  formContainer: {
    height: "78vh",
    position: "relative",
  },
  form: {
    position: 'absolute' as const,
    top: "50%",
    left: "50%",
    transform: "translate(-100%, -50%)",
  },
  input: {
    width: "200%",
    fontWeight: "600",
    "& label.Mui-focused": {
      color: theme.palette.secondary.dark,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.secondary.dark,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#0644A3",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary.dark,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.secondary.dark,
      },
    },
  },
  center: {
    display: "flex",
    justifyContent: "center",
    width: "200%",
  },
  button: {
    backgroundColor: "#0644A3",
    color: "#FFFFFF",
    borderRadius: 20,
    marginRight: "2%",
    textTransform: "none",
    "&:hover": {
      transition: "0.3s",
      color: "#0644A3",
      backgroundColor: "#FFFFFF",
      border: "1px solid #0644A3",
    },
  },
  contact: {
    textDecoration: "none",
    color: "#000000",
    "&:hover": {
      transition: "0.3s",
      color: "#b5befa",
    },
  },
  spacing: {
    display: "flex",
    alignItems: "center",
  },
  boxModal: {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
})
