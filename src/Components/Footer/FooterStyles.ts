import { makeStyles } from "@mui/styles"

const FooterStyles = makeStyles(() => ({
  footer: {
    display: "flex",
    background: "#0644A3",
    height: "8vh",
    color: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
  },
  textContainer: {
    display: "inline-block",
    textAlign: "center",
  },
}))

export default FooterStyles
