import { Button, ButtonGroup,FormControl, FormErrorMessage, FormLabel, Input, Heading, VStack } from "@chakra-ui/react";
import { Image , Box} from '@chakra-ui/react'
import { useContext, useRef } from "react";
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext1";
import { CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import Register from "../register/Register1"
import * as Yup from "yup";

export default function R() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const { user,isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const faireRedirection = async (e) => {
    e.preventDefault();
    console.log("faireRedirection");
      try {
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }

  return (
    

  <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required!")
          .min(6, "Username too short!")
          .max(28, "Username too long!"),
        password: Yup.string()
          .required("Password required!")
          .min(6, "Password too short!")
          .max(28, "Password too long!"),
      })}
      
    >
        
        
      
       
        
      <VStack
        as="form"
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
        onSubmit={handleClick}
        
        
      >
          <Image borderRadius='full'
            boxSize='150px'
            src='http://localhost:3000/twitter-logo.jpeg'
            alt='Dan Abramov' />
          <Heading>Register</Heading>
        
            
        
        <FormControl>
            <FormLabel>Username</FormLabel>
            <Input name="username" 
            placeholder="Enter username" 
            autoComplete="off"
            size="lg"
            ref={username}/>
            <FormErrorMessage> Invalid username</FormErrorMessage>    
            
        </FormControl>
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input name="password" 
            placeholder="Enter password" 
            autoComplete="off" 
            
            ref={email}/>

            <FormErrorMessage> Invalid email</FormErrorMessage>    
            
        </FormControl>

        <FormControl>
            <FormLabel>Password</FormLabel>
            <Input name="password" 
            placeholder="Enter password" 
            autoComplete="off" 
            ref={password}
            type= "password"/>
            <FormErrorMessage> Invalid password</FormErrorMessage>    
            
        </FormControl>

        <FormControl>
            <FormLabel>PasswordAgain</FormLabel>
            <Input name="password Again" 
            placeholder="Enter password" 
            autoComplete="off" 
            type= "password"
            ref={passwordAgain}/>
            <FormErrorMessage> Invalid password</FormErrorMessage>    
            
        </FormControl>
        
        <span className="loginForgot">Forgot Password?</span>
            
        <ButtonGroup pt="1rem" >
          <Button colorScheme="teal" type="submit" disabled={isFetching}>
         
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Sign Up"
              )}
            
          </Button>
          <Button onClick={faireRedirection}>

          {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Go to Log in"
              )}
              
          </Button>
        </ButtonGroup>
      </VStack>
      </Formik>
  );
}