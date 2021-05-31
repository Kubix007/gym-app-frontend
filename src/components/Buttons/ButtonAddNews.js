import React, { useRef, useState } from 'react';
import UserService from '../../services/userService';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useToast,
} from "@chakra-ui/react"

const ButtonAddNews = ({ name, input, color, buttonName, title, content, setTitle, setContent, setNews }) => {

    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const onOpen = () => setIsOpen(true)

    const initialRef = useRef()
    const finalRef = useRef()

    const toastHttp = useToast()

    const handleOnClick = () => {
        UserService.postNews(title, content).then(
            () => {
                console.log("POST NEWS");
                toastHttp({
                    title: "Aktualność dodana",
                    description: "Wpis został dodany poprawnie",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
                setTitle("")
                setContent("")
                UserService.getNews().then(
                    (data) => {
                        console.log(data.data);
                        setTimeout(() => {
                            setNews(data.data);
                        }, 1000)
                    },
                    (error) => {
                        console.log(error);
                    }
                )
            },
            (error) => {
                console.log(error);
            }
        )
        onClose()
    }

    return (
        <>
            <Button colorScheme={color} onClick={onOpen} size="lg">{name}</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        {input}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="purple" mr={3} onClick={handleOnClick}>
                            {buttonName}
                        </Button>
                        <Button onClick={onClose}>Anuluj</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ButtonAddNews;