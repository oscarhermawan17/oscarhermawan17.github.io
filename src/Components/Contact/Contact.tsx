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
} from "@mui/material"
// import emailjs from "emailjs-com"
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

// file imports
import { db } from "../../firebaseConfig.ts";
import { ref, push, set } from "firebase/database";
import ContactStyles from "./ContactStyles"

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Contact = () => {
  // classes and queries
  const classes = ContactStyles()
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
    e.preventDefault() // prevents screen refresh

    if(isFormValid()) {
      console.log({ errorName, errorEmail, errorMessage })
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
    <Grid container className={classes.root} id="contact">
      {/* Title */}
      <Grid className={classes.title} item xs={12}>
        <br />
        <Typography variant="h2">Contact Me</Typography>
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
              className={classes.contact}
              href="mailto:oscar.hermawan90@gmail.com"
            >
              <Typography display="inline">
                {" "}
                oscar.hermawan90@gmail.com
              </Typography>
            </a>
            <div />
            <br />
            <FaPhone />
            &nbsp;
            <Typography display="inline">
              <b> Phone:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.contact}
              href="+62 853 921 910"
            >
              <Typography className={classes.contact} display="inline">
                {" "}
                +62 853 921 910
              </Typography>
            </a>
            <div />
            <br />
            <FaGithub />
            &nbsp;
            <Typography display="inline">
              <b> Github:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.contact}
              href="https://github.com/oscarhermawan17"
            >
              <Typography display="inline">
                {" "}
                github.com/oscarhermawan17
              </Typography>
            </a>
            <div />
            <br />
            <FaLinkedin />
            &nbsp;
            <Typography display="inline">
              <b> LinkedIn:</b>
            </Typography>
            <a
              rel="noreferrer"
              target="_blank"
              className={classes.contact}
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
        <div className={classes.formContainer}>
          <form onSubmit={submitHander} className={classes.form}>
            <TextField
              className={classes.input}
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
              className={classes.input}
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
              className={classes.input}
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
            <div className={classes.center}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                className={classes.button}
                disabled={!isFormValid()}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </Grid>
      <Grid item xs={1}></Grid>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
