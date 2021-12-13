import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Formik,
  Form,
  Field,
  FieldProps,
  FormikFormProps,
  FormikProps,
  FormikValues,
  FieldInputProps,
} from "formik";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/toast";
import { RootState } from "../../../store";
import { login } from "../slices/authenticationSlice";

interface FormValues {
  email: string;
  password: string;
}

interface FormRenderProps<V = any> {
  field: FieldInputProps<V>;
  form: FormikProps<FormValues>;
}

interface LoginCredentials {
  email: string;
  password: string;
}

function Login() {
  const { loading, token } = useSelector(
    (state: RootState) => state.authentiction
  );
  const dispatch = useDispatch();
  const toast = useToast();

  function validateName(value: string) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  async function performLogin(data: LoginCredentials) {
    dispatch(login({
      email: data.email,
      password: data.password
    }));
  }

  useEffect(() => {
    if (token) {
      toast({
        title: "You are logged in!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [token]);

  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, actions) => {
          performLogin(values);
        }}
      >
        {(props: FormikProps<FormValues>) => {
          const { touched, errors, isSubmitting } = props;
          return (
            <Form
              className="container"
              style={{ display: "flex", flexFlow: "column" }}
            >
              <Field name="email">
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={!!(form.errors.name && form.touched.name)}
                  >
                    {/* <FormLabel htmlFor="email">Email</FormLabel> */}
                    <Input
                      {...field}
                      mt={10}
                      size="lg"
                      id="email"
                      placeholder="Enter email"
                      variant="filled"
                      isRequired
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }: FieldProps) => (
                  <FormControl
                    isInvalid={!!(form.errors.name && form.touched.name)}
                  >
                    <Input
                      {...field}
                      mt={10}
                      size="lg"
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      variant="filled"
                      isRequired
                    />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                mt={10}
                colorScheme="teal"
                isLoading={loading}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
}

export default Login;
