// dependancies
import { Grid, Typography, Divider, Button, useMediaQuery } from "@mui/material"
import profile from "./Oscar.jpeg"
import Resume from "../Home/resume.pdf"

// icons
import { FaRegFilePdf } from "react-icons/fa"

// file imports
import useAboutStyles from "./AboutStyles"

const About = () => {
  // classes and queries
  const classes = useAboutStyles()
  const md = useMediaQuery("(max-width: 960px)")
  const lg = useMediaQuery("(min-width: 960px)")

  return (
    <div className={classes.background}>
      <Grid id="about" container>
        {/* Title */}
        <Grid className={classes.title} item xs={12}>
          <br />
          <Typography variant="h2">About Me</Typography>
          <Typography variant="h4">- Get To Know Me -</Typography>
          <br />
          <br />
        </Grid>
        <Grid item xs={1}></Grid>
        {md && <Grid item xs={1}></Grid>}
        <Grid item xs={10} md={5}>
          <div className={classes.picSpacing}>
            <img
              alt="Display"
              src={profile}
              className={classes.profilePic}
            ></img>
          </div>
          <br />
          <br />
          <br />
        </Grid>
        {md && <Grid item xs={1}></Grid>}

        {/* Text */}
        <Grid item xs={10} md={5}>
          <br />
          <Typography
            variant="h6"
            className={classes.subTitle}
            display="inline"
          >
            My name is Oscar Hermawan and I am a
          </Typography>
          <Typography
            variant="h6"
            style={{ color: "#175fca" }}
            className={classes.subTitle}
            display="inline"
          >
            {" "}
            Software Engineer
          </Typography>
          <div style={{ paddingBottom: "2%" }} />
          <Typography variant="body1">
            I have experience working in web and mobile development with various
            frameworks and libraries such as JavaScript, React, React Native,
            Vue, Express.js, Node.js, TypeScript, MySQL, and PostgreSQL. I have
            worked in industries including Banking/Finance, Video Commerce, Real
            Estate Commerce, and Funding Companies. <br />
            <br />
            Currently, I am curious about and learning Go (for performance) and
            Python (for data science). Some of my hobbies include playing
            futsal, playing video games, watching movies, solving Codewars
            problems, and traveling with my wife.
            <br />
            <br />
            <b>
              Currently, I am seeking a full-time job as a Full Stack Developer.
            </b>
          </Typography>
          <br />
          <Divider />
          <br />

          {/* Buttons */}
          {lg && (
            <a
              rel="noreferrer"
              target="_blank"
              href={Resume}
              className={classes.links}
            >
              <div>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </div>
            </a>
          )}
          {md && (
            <a
              rel="noreferrer"
              target="_blank"
              href={Resume}
              className={classes.links}
            >
              <div>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.buttonMobile}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </div>
            </a>
          )}
        </Grid>
        {md && <Grid item xs={1}></Grid>}

        {/* Bottom */}
        <Grid item xs={12}>
          <div style={{ paddingBottom: "7%" }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default About
