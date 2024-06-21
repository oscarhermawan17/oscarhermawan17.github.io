import {
  useMediaQuery,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material"
import { Link } from "react-scroll"
import Typewriter from "typewriter-effect"
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

import photoMe from "./Oscar.png"
import Resume from "./Resume.pdf"
import useStyles, { HomeStylesSx } from "./HomeStyles"

const Home = () => {
  // css import
  const classes = useStyles()
  const desktop = useMediaQuery("(min-width: 960px)")
  const mobile = useMediaQuery("(min-width: 380px)")

  return (
    <div id="home" className={classes.size}>
      <Grid container xs={12}>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <div className={classes.title}>
            <div>
              <a
                rel="noreferrer"
                href="https://github.com/oscarhermawan17"
                target="_blank"
              >
                <IconButton
                  sx={HomeStylesSx.iconButtonBorder}
                  aria-label="github"
                >
                  <FaGithub className={classes.iconButton} />
                </IconButton>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/oscar-hermawan/"
                target="_blank"
              >
                <IconButton
                  sx={HomeStylesSx.iconButtonBorder}
                  aria-label="github"
                >
                  <FaLinkedin className={classes.iconButton} />
                </IconButton>
              </a>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <IconButton
                  sx={HomeStylesSx.iconButtonBorder}
                  aria-label="github"
                >
                  <FaYoutube className={classes.iconButton} />
                </IconButton>
              </a>
              <a rel="noreferrer" href={Resume} target="_blank">
                <IconButton
                  sx={HomeStylesSx.iconButtonBorder}
                  aria-label="github"
                >
                  <IoDocumentText className={classes.iconButton} />
                </IconButton>
              </a>
              <br />
              <br />
              <div style={{ paddingBottom: "2%" }} />
              <Typography sx={HomeStylesSx.titleText} variant="h3">
                <b>Hello there! My name is</b>
              </Typography>
              <br />
              <Typography sx={HomeStylesSx.titleText} variant="h1">
                Oscar Hermawan
              </Typography>
              <div className={classes.inline}>
                {mobile && (
                  <p style={{ display: "inline-block" }}>
                    <b>And I am a</b>&nbsp;
                  </p>
                )}
                {mobile && (
                  <div style={{ display: "inline-block" }}>
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
                  </div>
                )}
                <br />
                <Link
                  style={{ textDecoration: "none" }}
                  smooth="true"
                  duration={1000}
                  offset={-70}
                  to="projects"
                >
                  <Button sx={HomeStylesSx.ovalButton} variant="outlined">
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
                  <Button sx={HomeStylesSx.ovalButton} variant="outlined">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
        <Grid sx={HomeStylesSx.photoContainer} item xs={5}>
          {desktop && (
            <img src={photoMe} className={classes.photoMe} alt="anjali gupta" />
          )}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  )
}

export default Home
