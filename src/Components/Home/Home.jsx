// dependancies
import {
  useMediaQuery,
  Typography,
  Grid,
  IconButton,
  Button,
  Box
} from "@mui/material"
import { Link } from "react-scroll"
import Typewriter from "typewriter-effect"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

// file imports
import photoMe from "./Oscar.png"
import Resume from "./Resume.pdf"
import { Styles } from "./Home.styles"

const Home = () => {
  const desktop = useMediaQuery("(min-width: 960px)")
  const mobile = useMediaQuery("(min-width: 380px)")

  return (
    <Box id="home" sx={Styles.size}>
      <Grid container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <Box sx={Styles.title}>
            <Box>
              <a
                rel="noreferrer"
                href="https://github.com/oscarhermawan17"
                target="_blank"
              >
                <IconButton
                  sx={Styles.iconButtonBorder}
                  aria-label="github"
                >
                  <FaGithub style={Styles.iconButton} />
                </IconButton>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/oscar-hermawan/"
                target="_blank"
              >
                <IconButton
                  sx={Styles.iconButtonBorder}
                  aria-label="github"
                >
                  <FaLinkedin style={Styles.iconButton} />
                </IconButton>
              </a>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <IconButton
                  sx={Styles.iconButtonBorder}
                  aria-label="github"
                >
                  <FaYoutube style={Styles.iconButton} />
                </IconButton>
              </a>
              <a rel="noreferrer" href={Resume} target="_blank">
                <IconButton
                  sx={Styles.iconButtonBorder}
                  aria-label="github"
                >
                  <IoDocumentText style={Styles.iconButton} />
                </IconButton>
              </a>
              <br />
              <br />
              <Box sx={{ paddingBottom: "2%" }} />
              <Typography sx={Styles.titleText} variant="h3">
                <b>Hello there! My name is</b>
              </Typography>
              <br />
              <Typography sx={Styles.titleText} variant="h1">
                Oscar Hermawan
              </Typography>
              <Box sx={Styles.inline}>
                {mobile && (
                  <p style={Styles.inline}>
                    <b>And I am a</b>&nbsp;
                  </p>
                )}
                {mobile && (
                  <Box sx={Styles.inline}>
                    <b>
                      <Typewriter
                        options={{
                          strings: [
                            "Software Engineer",
                            "Web Developer",
                            "Dog Lovers",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </b>
                  </Box>
                )}
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  smooth="true"
                  duration={1000}
                  offset={-70}
                  to="projects"
                >
                  <Button sx={Styles.ovalButton} variant="outlined">
                    Portfolio
                  </Button>
                </Link>
                <Link
                  style={{ textDecoration: "none" }}
                  smooth="true"
                  duration={1000}
                  offset={-70}
                  to="contact"
                >
                  <Button sx={Styles.ovalButton} variant="outlined">
                    Contact
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid sx={Styles.photoContainer} item xs={5}>
          {desktop && (
            <img src={photoMe} style={Styles.photoMe} alt="anjali gupta" />
          )}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  )
}

export default Home
