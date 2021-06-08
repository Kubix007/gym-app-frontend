import React, { useEffect, useState, useContext } from 'react';
import { Formik, Form, Field } from 'formik'
import { LoggedUserIdContext } from '../context/LoggedUserIdContext';
import * as Yup from 'yup';
import UserService from '../services/userService';
import AuthService from '../services/authService';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Flex,
    Text,
    Box,
    Center,
    useToast
} from "@chakra-ui/react"


const OrderPassForm = ({ price, numberOfMonths }) => {
    // eslint-disable-next-line no-unused-vars
    const { loggedUserId, setLoggedUserId } = useContext(LoggedUserIdContext);
    const [todaysDate, setTodaysDate] = useState("");
    const [value, setValue] = useState("");
    const toastHttp = useToast()

    let expirationDate = "";

    const getExpirationDate = () => {
        let date = new Date(todaysDate);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        month = month + numberOfMonths;
        if (day < 10) {
            day = '0' + date.getDate();
        }
        if (month > 12) {
            year += 1;
            month = month - 12;
        }
        if (month < 10) {
            month = '0' + month;
        }
        expirationDate = ((year + '-' + month + '-' + day).toString());
        return ((day + '.' + month + '.' + year).toString());
    }



    const validationSchema = Yup.object().shape({
        name: Yup
            .string()
            .required('Pole imię jest wymagane'),
        surname: Yup
            .string()
            .required('Pole nazwisko jest wymagane'),
        email: Yup
            .string()
            .email("Niepoprawny email")
            .required('Pole email jest wymagane'),
        address: Yup
            .string()
            .required('Pole ulica jest wymagane'),
        city: Yup
            .string()
            .required('Pole miasto jest wymagane'),
        postalCode: Yup
            .string()
            .required('Pole kod pocztowy jest wymagane'),
        phoneNumber: Yup
            .string()
            .required('Pole numer kontaktowy jest wymagane'),
        membership: Yup
            .string()
            .required('Prosze wybrać najpierw karnet'),
        startDate: Yup
            .string()
            .required('Proszę wybrać datę rozpoczęcia'),
    });

    useEffect(() => {
        setValue(price);
        setLoggedUserId(AuthService.getCurrentUser().id)
    }, [price, numberOfMonths, setLoggedUserId]);

    const handleOnChange = (e) => {
        const nameTarget = e.target.id
        if (nameTarget === "startDate") {
            setTodaysDate(e.target.value)
        }
    }

    return (
        <Flex p={7}>
            <Formik
                initialValues={{ name: "", surname: "", email: "", address: "", city: "", postalCode: "", phoneNumber: "", membership: value, startDate: "" }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        Object.assign(values, { expirationDate: expirationDate, userId: loggedUserId, status: "Nieopłacone" })
                        UserService.postMembershipOrders(values.name, values.surname, values.email, values.address, values.city,
                            values.postalCode, values.phoneNumber, values.membership, values.startDate, expirationDate, loggedUserId, "Nieopłacony").then(
                                () => {
                                    console.log("POST MEMBERSHIP");
                                    toastHttp({
                                        title: "Złożono zamówienie",
                                        description: "Zamówienie zostało złożone poprawnie",
                                        status: "success",
                                        duration: 5000,
                                        isClosable: true,
                                    })
                                    actions.resetForm({
                                        values: {
                                            name: '',
                                            surname: '',
                                            email: '',
                                            address: '',
                                            city: '',
                                            postalCode: '',
                                            phoneNumber: '',
                                            membership: '',
                                            startDate: '',
                                        },
                                    })
                                    actions.setSubmitting(false)

                                    expirationDate = "";
                                },
                                (error) => {
                                    console.log(error);
                                }
                            )
                    }, 1000)
                }}
                validationSchema={validationSchema}
            >
                {(props) => {
                    return (
                        <Box>
                            <Text p={4} fontWeight="bold" fontSize="2xl" id="membership">Ważny do: {todaysDate && numberOfMonths ? getExpirationDate() : null} </Text>
                            <Form>
                                <Field name="startDate" >
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.startDate && form.touched.startDate}>
                                            <FormLabel htmlFor="startDate">Data rozpoczęcia karnetu:</FormLabel>
                                            <Input {...field} id="startDate" type="date" onChange={handleOnChange} value={form.values.startDate = todaysDate} />
                                            <FormErrorMessage>{form.errors.startDate}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="name" >
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.name && form.touched.name}>
                                            <FormLabel htmlFor="name">Imię:</FormLabel>
                                            <Input {...field} id="name" placeholder="Imię" />
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="surname">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.surname && form.touched.surname}>
                                            <FormLabel htmlFor="surname">Nazwisko:</FormLabel>
                                            <Input {...field} id="surname" placeholder="Nazwisko" />
                                            <FormErrorMessage>{form.errors.surname}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="email">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.email && form.touched.email}>
                                            <FormLabel htmlFor="email">Email:</FormLabel>
                                            <Input {...field} id="email" placeholder="Adres email" />
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="address">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.address && form.touched.address}>
                                            <FormLabel htmlFor="address">Ulica:</FormLabel>
                                            <Input {...field} id="address" placeholder="np. Nowa 2/3" />
                                            <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="city">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.city && form.touched.city}>
                                            <FormLabel htmlFor="city">Miasto:</FormLabel>
                                            <Input {...field} id="city" placeholder="Miasto" />
                                            <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="postalCode">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.postalCode && form.touched.postalCode}>
                                            <FormLabel htmlFor="postalCode">Kod pocztowy:</FormLabel>
                                            <Input {...field} id="postalCode" placeholder="XX-XXX" />
                                            <FormErrorMessage>{form.errors.postalCode}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="phoneNumber">
                                    {({ field, form }) => (
                                        <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}>
                                            <FormLabel htmlFor="phoneNumber">Numer kontaktowy:</FormLabel>
                                            <Input {...field} id="phoneNumber" placeholder="Numer telefonu" />
                                            <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="membership">
                                    {({ form }) => (
                                        <FormControl p={3} isInvalid={form.errors.membership}>
                                            <Center>
                                                <Text fontWeight="bold" fontSize="2xl" id="membership">Cena: {form.values.membership = value} zł</Text>
                                                <FormErrorMessage>{form.errors.membership}</FormErrorMessage>
                                            </Center>
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
                                        Zamów
              </Button>
                                </Center>
                            </Form>
                        </Box>
                    )
                }}
            </Formik>

        </Flex>
    )
}

export default OrderPassForm
