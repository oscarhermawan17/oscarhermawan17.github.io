// dependancies
import React, { useState } from "react"
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  Modal,
  Box,
  useMediaQuery,
  useTheme
} from "@mui/material"
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { ref, push, set } from "firebase/database";

// file imports
import { db } from "../../firebaseConfig.ts";
import { Styles as ContactStyles } from "./Contact.styles"

const Contact = () => {
  const theme = useTheme();
  const Styles = ContactStyles(theme);
  const md = useMediaQuery("(max-width: 960px)")
  const lg = useMediaQuery("(min-width: 960px)")

  // state declaration
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorName, setErrorName] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [openModal, setOpenModal] = useState(false)
  const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const maximumCharacter = 100


  const resetFunction = () => {
    setName("")
    setEmail("")
    setMessage("")
    setErrorName("")
    setErrorEmail("")
    setErrorMessage("")
    setOpenModal(false)
  }

  const formValidation = ({ value, entity, setValue, setError }: { 
    value: string,
    entity: string,
    setValue: (arg: string) => void,
    setError: (arg: string) => void
  }) => {
    if (value === "") {
      setError(`Please enter your ${entity}`)
    } else if (entity === 'email' && !emailRegex.test(value)) {
      setError(`Please enter a correct ${entity}`)
    } else if (entity === 'message' && value.length > maximumCharacter) {
      setError(`Please write a ${entity} under ${maximumCharacter} characters`)
    } else {
      setError("")
    }
    setValue(value)
  }

  const isFormValid = () => name && !errorName && email && !errorEmail && message && !errorMessage

  // event handler
  const submitHander = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 

    if(isFormValid()) {
      const firebaseObject = {
        name: name,
        email: email,
        message: message,
      }

      try {
        const newCommentRef = push(ref(db, 'messages'));
        set(newCommentRef, firebaseObject)
          .then(() => {
            setOpenModal(true)
          })
          .catch(error => console.error("Error adding comment: ", error))
      } catch (error) {
          console.error("Error adding comment: ", error);
      }
    }
  }

  return (
    <Grid container sx={Styles.root} id="contact">
      {/* Title */}
      <Grid sx={Styles.title} item xs={12}>
        <br />
        <Typography variant="h2" sx={Styles.contactMe}>Contact Me</Typography>
        <Typography variant="h4">- Can't Wait to Connect! -</Typography>
      </Grid>

      {/* Contact Text */}
      {lg && (
        <>
          <Grid item xs={1}></Grid>
          <Grid item xs={10} md={5}>
            <br />
            <br />
            <Typography variant="h5">
              <b>Get in Touch!</b>
            </Typography>
            <Divider></Divider>
            <br />
            <MdEmail />
            &nbsp;
            <Typography display="inline">
              <b> Email:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              style={Styles.contact}
              href="mailto:oscar.hermawan90@gmail.com"
            >
              <Typography display="inline">
                {" "}
                oscar.hermawan90@gmail.com
              </Typography>
            </a>
            <Box />
            <br />
            <FaPhone />
            &nbsp;
            <Typography display="inline">
              <b> Phone:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              style={Styles.contact}
              href="+62 853 921 910"
            >
              <Typography sx={Styles.contact} display="inline">
                {" "}
                +62 853 921 910
              </Typography>
            </a>
            <Box />
            <br />
            <FaGithub />
            &nbsp;
            <Typography display="inline">
              <b> Github:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              style={Styles.contact}
              href="https://github.com/oscarhermawan17"
            >
              <Typography display="inline">
                {" "}
                github.com/oscarhermawan17
              </Typography>
            </a>
            <Box />
            <br />
            <FaLinkedin />
            &nbsp;
            <Typography display="inline">
              <b> LinkedIn:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              style={Styles.contact}
              href="https://www.linkedin.com/in/oscar-hermawan/"
            >
              <Typography display="inline">
                {" "}
                linkedin.com/in/oscar-hermawan/
              </Typography>
            </a>
            <br />
            <br />
            <br />
          </Grid>
          <Grid item xs={1}></Grid>
        </>
      )}

      {/* Contact Form */}
      {md && <Grid item xs={1}></Grid>}
      <Grid item xs={10} md={4}>
        <Box sx={Styles.formContainer}>
          <form onSubmit={submitHander} style={Styles.form}>
            <TextField
              sx={Styles.input}
              value={name}
              onChange={(e) => formValidation({ value: e.target.value, entity: "name", setValue: setName, setError: setErrorName })}
              label="Name"
              variant="outlined"
              error={!!errorName}
              helperText={errorName}
            />
            <br />
            <br />
            <TextField
              sx={Styles.input}
              value={email}
              onChange={(e) => formValidation({ value: e.target.value, entity: "email", setValue: setEmail, setError: setErrorEmail })}
              label="Email"
              variant="outlined"
              error={!!errorEmail}
              helperText={errorEmail}
            />
            <br />
            <br />
            <TextField
              sx={Styles.input}
              value={message}
              onChange={(e) => formValidation({ value: e.target.value, entity: "message", setValue: setMessage, setError: setErrorMessage })}
              label="Message"
              multiline
              rows={10}
              variant="outlined"
              error={!!errorMessage}
              helperText={errorMessage}
            />
            <br />
            <br />
            <Box sx={Styles.center}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={Styles.button}
                disabled={!isFormValid()}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
      <Grid item xs={1}></Grid>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Styles.boxModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you. <br/>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span><strong>Name: </strong>{name}</span> <br/>
            <span><strong>Email: </strong>{email}</span> <br/>
            <span><strong>Message: </strong>{message}</span> <br/> <br/>
            <span>Your message has been successfully sent.</span> <br/><br/><br/>
          </Typography>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button variant="contained" size="medium" color="info" onClick={resetFunction}>Ok</Button>
          </Box>
        </Box> 
      </Modal>
    </Grid>
  )
}

export default Contact
