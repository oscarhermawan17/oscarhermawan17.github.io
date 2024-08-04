// dependancies
import { Grid, Typography, Divider, Button, useMediaQuery, useTheme, Box } from "@mui/material"
import { FaRegFilePdf } from "react-icons/fa"

// file imports
import { Styles as useAboutStylesx } from "./About.styles"
import profile from "./Oscar.jpeg"
import Resume from "../Home/resume.pdf"

const About = () => {
  const theme = useTheme();
  const Styles = useAboutStylesx(theme);
  const md = useMediaQuery("(max-width: 960px)")
  const lg = useMediaQuery("(min-width: 960px)")

  return (
    <Box sx={Styles.background}>
      <Grid id="about" container>
        <Grid sx={Styles.title} item xs={12}>
          <br />
          <Typography variant="h2" sx={Styles.aboutMe}>About Me</Typography>
          <Typography variant="h4">- Get To Know Me -</Typography>
          <br />
          <br />
        </Grid>
        <Grid item xs={1}></Grid>
        {md && <Grid item xs={1}></Grid>}
        <Grid item xs={10} md={5}>
          <Box sx={Styles.picSpacing}>
            <img
              alt="Display"
              src={profile}
              style={Styles.profilePic}
            ></img>
          </Box>
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
            sx={Styles.subTitle}
            display="inline"
          >
            My name is Oscar Hermawan and I am a
          </Typography>
          <Typography
            variant="h6"
            sx={Styles.subTitle2Nd}
            display="inline"
          >
            {" "}
            Software Engineer
          </Typography>
          <Box sx={{ paddingBottom: "2%" }} />
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
              style={Styles.links}
            >
              <Box>
                <Button
                  variant="contained"
                  size="large"
                  sx={Styles.button}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </Box>
            </a>
          )}
          {md && (
            <a
              rel="noreferrer"
              target="_blank"
              href={Resume}
              style={Styles.links}
            >
              <Box>
                <Button
                  variant="contained"
                  size="large"
                  sx={Styles.buttonMobile}
                  startIcon={<FaRegFilePdf />}
                >
                  Resume
                </Button>
              </Box>
            </a>
          )}
        </Grid>
        {md && <Grid item xs={1}></Grid>}

        {/* Bottom */}
        <Grid item xs={12}>
          <Box sx={{ paddingBottom: "7%" }} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
