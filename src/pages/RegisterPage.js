import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import AuthService from "../services/authService";
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    useToast,
    Center,


} from '@chakra-ui/react';

const RegisterPage = () => {
    const toastHttp = useToast()

    const validationSchema = Yup.object().shape({
        username: Yup
            .string()
            .min(4, 'Za krótka nazwa (min. 4 znaki)')
            .max(16, 'Za długa nazwa (max. 16 znaków)')
            .required('Pole nazwa użytkownika jest wymagane'),
        password: Yup
            .string()
            .min(4, 'Za krótkie hasło (min. 4 znaki)')
            .max(16, 'Za długie hasło (max. 16 znaków)')
            .required('Pole hasło jest wymagane'),
        email: Yup
            .string()
            .email("Niepoprawny email")
            .required('Pole email jest wymagane'),
    });

    return (
        <Flex p={7}>
            <Formik
                initialValues={{ username: "", email: "", password: "" }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        Object.assign(values, { role: ["ROLE_USER"] })
                        console.log(values);
                        AuthService.register(values.username, values.email, values.password, ["ROLE_USER"]).then(
                            () => {
                                console.log("POST REGISTER");
                                toastHttp({
                                    title: "Pomyślnie stworzono konto",
                                    description: "Konto zostało stworzone",
                                    status: "success",
                                    duration: 5000,
                                    isClosable: true,
                                })
                                actions.resetForm({
                                    values: {
                                        username: '',
                                        email: '',
                                        password: '',
                                    },
                                })
                                actions.setSubmitting(false)
                            },
                            (error) => {
                                const resMessage =
                                    (error.response &&
                                        error.response.data &&
                                        error.response.data.message) ||
                                    error.message ||
                                    error.toString();
                                toastHttp({
                                    title: "Błąd rejestracji",
                                    description: resMessage,
                                    status: "error",
                                    duration: 5000,
                                    isClosable: true,
                                })

                            }
                        );
                    }, 1000)
                }}
                validationSchema={validationSchema}
            >
                {(props) => {
                    return (
                        <Flex width="full" align="center" justifyContent="center">
                            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" >
                                <Box textAlign="center">
                                    <Heading>Zarejestruj się</Heading>
                                </Box>
                                <Form>
                                    <Field name="username" >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.username && form.touched.username}>
                                                <FormLabel htmlFor="username">Nazwa użytkownika:</FormLabel>
                                                <Input {...field} id="username" type="username" placeholder="Nazwa użytkownika" />
                                                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="email">
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.email && form.touched.email}>
                                                <FormLabel htmlFor="email">Email:</FormLabel>
                                                <Input {...field} id="email" placeholder="test@onet.pl" />
                                                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Field name="password" >
                                        {({ field, form }) => (
                                            <FormControl isInvalid={form.errors.password && form.touched.password}>
                                                <FormLabel htmlFor="password">Hasło:</FormLabel>
                                                <Input {...field} type="password" id="password" placeholder="******" />
                                                <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>
                                    <Center>
                                        <Button
                                            mt={4}
                                            colorScheme="purple"
                                            size="lg"
                                            isLoading={props.isSubmitting}
                                            type="submit"

                                        >
                                            Zarejestruj się
                                        </Button>
                                    </Center>
                                </Form>
                            </Box>
                        </Flex>
                    )
                }}
            </Formik>
        </Flex>
    )

}

export default RegisterPage;