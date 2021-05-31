import React, { useState } from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    Icon
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import AuthService from "../services/authService";


const LoginForm = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPassword(false);
        AuthService.login(username, password).then(
            () => {
                props.history.push("/aktualnosci");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);

            }
        );
    };

    return (
        <Flex width="full" align="center" justifyContent="center">
            <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" >
                <Box textAlign="center">
                    <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired>
                            <FormLabel>Nazwa użytkownika: </FormLabel>
                            <Input
                                type="text"
                                placeholder="Username"
                                size="lg"
                                onChange={event => setUsername(event.currentTarget.value)}
                            />
                        </FormControl>
                        <FormControl isRequired mt={6}>
                            <FormLabel>Hasło: </FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="*******"
                                    size="lg"
                                    onChange={event => setPassword(event.currentTarget.value)}
                                />
                                <InputRightElement width="3rem">
                                    <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                                        {showPassword ? <Icon as={ViewOffIcon} /> : <Icon as={ViewIcon} />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            colorScheme="messenger"
                            variant="solid"
                            width="full"
                            mt={4}
                        >
                            Zaloguj się
                        </Button>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
}

export default LoginForm;