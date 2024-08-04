// file imports
import { Box } from "@mui/material"
import { Styles } from "./Footer.styles"

const Footer = () => {

  return (
    <Box sx={Styles.footer}>
      <Box sx={Styles.textContainer}>
        <span>Created by&nbsp;</span>
        <span style={Styles.name}>Oscar Hermawan&nbsp;</span>
        <span>| &nbsp;&#169; 2024 All rights reserved</span>
      </Box>
    </Box>
  )
}

export default Footer
