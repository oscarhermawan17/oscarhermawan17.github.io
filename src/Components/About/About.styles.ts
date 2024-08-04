import { Theme } from "@mui/material/styles"

export const Styles = (theme: Theme) => ({
  title: {
    textAlign: "center",
    color: theme.palette.secondary.dark,
  },
  aboutMe: {
    fontWeight: 800
  },
  background: {
    backgroundColor: "white",
  },
  subTitle: {
    fontWeight: "600",
  },
  subTitle2Nd: { 
    fontWeight: "600",
    color: "#175fca" 
  },
  subTitleSmall: {
    fontWeight: "600",
  },
  picSpacing: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  profilePic: {
    transition: "0.3s",
    width: "80%",
    height: "auto",
    "&:hover": {
      transition: "0.3s",
      boxShadow:
        "0 6px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  },
  skills: {
    display: "inline-block",
    "&:hover": {
      transition: "0.3s",
      color: "#b5befa",
    },
  },
  button: {
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 20,
    color: "#ffffff",
    marginRight: "2%",
    textTransform: "none",
    width: "30%",
    height: "auto",
    "&:hover": {
      transition: "0.3s",
      color: "#000000",
      backgroundColor: "#EDF1FA",
    },
  },
  buttonMobile: {
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: 20,
    color: "#ffffff",
    marginRight: "2%",
    textTransform: "none",
    width: "42%",
    height: "auto",
    "&:hover": {
      transition: "0.3s",
      color: "#000000",
      backgroundColor: "#EDF1FA",
    },
  },
  links: {
    textDecoration: "none",
  },
})
