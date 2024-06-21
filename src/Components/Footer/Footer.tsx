import FooterStyles from "./FooterStyles"

const Footer = () => {
  const classes = FooterStyles()

  return (
    <div className={classes.footer}>
      <div className={classes.textContainer}>
        <span>Created by&nbsp;</span>
        <span style={{ color: "#b5befa" }}>Oscar Hermawan&nbsp;</span>
        <span>| &nbsp;&#169; 2024 All rights reserved</span>
      </div>
    </div>
  )
}

export default Footer
