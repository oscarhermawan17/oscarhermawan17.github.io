import React, { useEffect, useRef, useState } from "react"
import {
  useMediaQuery,
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  IconButton,
  Drawer,
} from "@mui/material"
import { Link } from "react-scroll"
import { Menu } from "@mui/icons-material"

import useStyles, { NavbarStylesSx } from "./NavbarStyles"
import logo from "./OscarLogo.png"

type BackgroundType =
  | "navbarTransparent"
  | "navbarSolid"
  | "space"
  | "icon"
  | "logo"
  | "tabs"
  | "drawerTabSpacing"

//header section of website
const Navbar: React.FC = () => {
  const [state, setState] = useState({ left: false })
  const [background, setBackground] =
    useState<BackgroundType>("navbarTransparent")

  const classes = useStyles()
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
        // detects if it was accidentally triggered
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
    <AppBar elevation={0} sx={NavbarStylesSx[navRef.current]}>
      <Toolbar>
        {/* Initials */}
        <div style={{ marginRight: "1%" }} />
        <Link smooth="true" duration={1000} to="home">
          <img alt="logo" className={classes.logo} src={logo}></img>
        </Link>
        <div className={classes.space} />

        {/* Desktop Tabs */}
        {desktop && (
          <>
            <Tabs aria-label="tabs">
              <Link smooth="true" duration={1000} to="home">
                <Tab sx={NavbarStylesSx.tabs} label="Home" />
              </Link>
              {/* <Link smooth="true" duration={1000} offset={-50} to="skills">
                <Tab sx={NavbarStylesSx.tabs} label="Skills" />
              </Link> */}
              <Link smooth="true" duration={1000} offset={-70} to="projects">
                <Tab sx={NavbarStylesSx.tabs} label="Projects" />
              </Link>
              <Link smooth="true" duration={1000} offset={-70} to="about">
                <Tab sx={NavbarStylesSx.tabs} label="About" />
              </Link>
              <Link smooth="true" duration={1000} offset={-70} to="contact">
                <Tab sx={NavbarStylesSx.tabs} label="Contact" />
              </Link>
            </Tabs>
          </>
        )}

        {/* Mobile Tabs */}
        {mobile && (
          <>
            <IconButton onClick={toggleDrawer("left", true)} aria-label="menu">
              <Menu sx={NavbarStylesSx.icon} />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              <div
                role="presentation"
                onClick={toggleDrawer("left", false)}
                onKeyDown={toggleDrawer("left", false)}
              >
                <Tabs orientation="vertical">
                  <Link smooth="true" duration={1000} to="home">
                    <div className={classes.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        className={classes.tabs}
                        label="Home"
                      />
                    </div>
                  </Link>
                  {/* <Link smooth="true" duration={1000} offset={-30} to="skills">
                    <div className={classes.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        className={classes.tabs}
                        label="Skills"
                      />
                    </div>
                  </Link> */}
                  <Link
                    smooth="true"
                    duration={1000}
                    offset={-60}
                    to="projects"
                  >
                    <div className={classes.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        className={classes.tabs}
                        label="Projects"
                      />
                    </div>
                  </Link>
                  <Link smooth="true" duration={1000} offset={-60} to="about">
                    <div className={classes.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        className={classes.tabs}
                        label="About"
                      />
                    </div>
                  </Link>
                  <Link smooth="true" duration={1000} offset={-60} to="contact">
                    <div className={classes.drawerTabSpacing}>
                      <Tab
                        onClick={toggleDrawer("left", false)}
                        className={classes.tabs}
                        label="Contact"
                      />
                    </div>
                  </Link>
                </Tabs>
              </div>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
