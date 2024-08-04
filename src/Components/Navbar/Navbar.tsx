// dependancies
import React, { useEffect, useRef, useState } from "react"
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  IconButton,
  Drawer,
  Box
} from "@mui/material"
import { Link } from "react-scroll"
import { Menu } from "@mui/icons-material"

// file imports
import { Styles } from "./Navbar.styles"
import logo from "./OscarLogo.png"

type BackgroundType =
  | "navbarTransparent"
  | "navbarSolid"
  | "space"
  | "icon"
  | "logo"
  | "tabs"
  | "drawerTabSpacing"

const Navbar: React.FC = () => {
  const [state, setState] = useState({ left: false })
  const [background, setBackground] = useState<BackgroundType>("navbarTransparent")
  const desktop = useMediaQuery("(min-width: 900px)")
  const mobile = useMediaQuery("(max-width: 900px)")

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        (event as React.KeyboardEvent).key &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const navRef = useRef<BackgroundType>()
  navRef.current = background

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 0.1
      if (show) {
        setBackground("navbarSolid")
      } else {
        setBackground("navbarTransparent")
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AppBar elevation={0} sx={Styles[navRef.current]}>
      <Toolbar>
        {/* Initials */}
        <Box style={{ marginRight: "1%" }} />
        <Link smooth="true" duration={1000} to="home">
          <img alt="logo" style={Styles.logo} src={logo}></img>
        </Link>
        <Box sx={Styles.space} />

        {/* Desktop Tabs */}
        {desktop && (
          <>
            <Tabs aria-label="tabs">
              <Link smooth="true" duration={1000} to="home">
                <Tab sx={Styles.tabs} label="Home" />
              </Link>
              {/* <Link smooth="true" duration={1000} offset={-50} to="skills">
                <Tab sx={Styles.tabs} label="Skills" />
              </Link> */}
              <Link smooth="true" duration={1000} offset={-70} to="projects">
                <Tab sx={Styles.tabs} label="Projects" />
              </Link>
              <Link smooth="true" duration={1000} offset={-70} to="about">
                <Tab sx={Styles.tabs} label="About" />
              </Link>
              <Link smooth="true" duration={1000} offset={-70} to="contact">
                <Tab sx={Styles.tabs} label="Contact" />
              </Link>
            </Tabs>
          </>
        )}

        {/* Mobile Tabs */}
        {mobile && (
          <>
            <IconButton onClick={toggleDrawer("left", true)} aria-label="menu">
              <Menu sx={Styles.icon} />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              <Box
                role="presentation"
                onClick={toggleDrawer("left", false)}
                onKeyDown={toggleDrawer("left", false)}
              >
                <Tabs orientation="vertical">
                  <Link smooth="true" duration={1000} to="home">
                    <Box sx={Styles.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        sx={Styles.tabs}
                        label="Home"
                      />
                    </Box>
                  </Link>
                  {/* <Link smooth="true" duration={1000} offset={-30} to="skills">
                    <Box sx={Styles.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        sx={Styles.tabs}
                        label="Skills"
                      />
                    </Box>
                  </Link> */}
                  <Link
                    smooth="true"
                    duration={1000}
                    offset={-60}
                    to="projects"
                  >
                    <Box sx={Styles.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        sx={Styles.tabs}
                        label="Projects"
                      />
                    </Box>
                  </Link>
                  <Link smooth="true" duration={1000} offset={-60} to="about">
                    <Box sx={Styles.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        sx={Styles.tabs}
                        label="About"
                      />
                    </Box>
                  </Link>
                  <Link smooth="true" duration={1000} offset={-60} to="contact">
                    <Box sx={Styles.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        sx={Styles.tabs}
                        label="Contact"
                      />
                    </Box>
                  </Link>
                </Tabs>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
