export const Styles = {
  size: {
    height: "100vh",
  },
  title: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
  titleText: {
    color: "#ffffff",
  },
  inline: {
    color: "#ffffff",
    fontSize: "1.6rem",
    fontFamily: "Poppins, sans-serif",
    display: "inline-block"
  },
  photoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photoMe: {
    paddingTop: "5%",
    width: "500px",
    height: "auto",
  },
  iconButtonBorder: {
    transition: "0.3s",
    borderRadius: "55%",
    color: "white",
    border: "1px solid white",
    marginRight: "2.5vw",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#0644A3",
      transition: "0.3s",
    },
  },
  iconButton: {
    width: "3vh",
    height: "auto",
  },
  ovalButton: {
    textDecoration: "none",
    borderRadius: 20,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    fontSize: "60%",
    marginRight: "1.5vw",
    "&:hover": {
      backgroundColor: "#FFFFFF",
      color: "#0644A3",
      transition: "0.3s",
    },
  },
}