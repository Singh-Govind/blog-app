import {
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { loginUser } from "../store/userAuth/userAuth.actions";
import CustomToast from "../components/Helper/CustomToast";
import { useEffect } from "react";
import { ERROR_RESET } from "../store/userAuth/userAuth.types";
import { Navigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, token, error } = useSelector((store) => store.userAuth);

  useEffect(() => {
    dispatch({ type: ERROR_RESET });
  }, [error]);

  const login = () => {
    dispatch(loginUser({ email, password }));
    setEmail("");
    setPassword("");
  };

  if (error) {
    return (
      <CustomToast pos="top" toastText="Invalid Credentials" bgColor="red" />
    );
  }

  return (
    <>
      {/* {error ? (
        <CustomToast pos="top" toastText="Invalid email/password" />
      ) : (
        ""
      )} */}
      <Container>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            id="email-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
          <FormLabel>Password</FormLabel>
          <Input
            id="password-field"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <Flex m="1rem auto" justifyContent="center">
            <Button isLoading={loading ? true : false} onClick={login}>
              Submit
            </Button>
          </Flex>
        </FormControl>
      </Container>
    </>
  );
}
