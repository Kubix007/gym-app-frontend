import React, { useEffect, useState, useContext } from 'react';
import UserService from '../services/userService';
import ButtonAddNews from '../components/Buttons/ButtonAddNews';
import { LoggedUserRoleContext } from '../context/LoggedUserRoleContext';
import {
    Center,
    List,
    ListItem,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Skeleton,
    Button,
    useToast,

} from '@chakra-ui/react';



const NewsPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [news, setNews] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const { loggedUserRole, setLoggedUserRole } = useContext(LoggedUserRoleContext);
    const toastHttp = useToast()

    let showNews = null;

    const handleClick = (e) => {
        const id = e.target.id;
        deleteNewsAPI(id);
    }

    const handleOnChange = (e) => {
        const nameTarget = e.target.name
        if (nameTarget === "Tytuł") {
            setTitle(e.target.value)
        }
        else if (nameTarget === "Treść") {
            setContent(e.target.value)
        }
    }

    const formInputs = [
        { name: "Tytuł", type: "text", value: title },
        { name: "Treść", type: "text", value: content },
    ]

    const newsAddInputs = formInputs.map(input => {
        if (input.name === "Tytuł") {
            return (
                <FormControl key={input.name}>
                    <FormLabel>{input.name}: </FormLabel>
                    <Input
                        name={input.name}
                        value={input.value}
                        placeholder={input.name}
                        type={input.type}
                        onChange={handleOnChange}
                    >
                    </Input>
                </FormControl>
            )
        }
        else {
            return (
                <FormControl key={input.name}>
                    <FormLabel>{input.name}: </FormLabel>
                    <Textarea
                        name={input.name}
                        value={input.value}
                        placeholder={input.name}
                        onChange={handleOnChange}
                    />
                </FormControl>
            )
        }

    })

    if (news) {
        showNews = news.map(news => (
            <Center key={news.id} p={10} justifyContent="left">
                <List key={news.id} spacing={3}>
                    <ListItem fontWeight="bold" fontSize="5xl">
                        {news.title}
                    </ListItem>
                    <ListItem fontSize="3xl">
                        {news.creationDate.substr(0, 10)}
                    </ListItem>
                    <ListItem fontSize="2xl">
                        {news.content}
                    </ListItem>
                    {loggedUserRole === "ROLE_USER" ? null : <Button id={news.id} onClick={handleClick} colorScheme="red">Usuń</Button>}
                </List>
            </Center>
        ))
    }

    const getNewsAPI = () => {
        UserService.getNews().then(
            (data) => {
                console.log("GET NEWS");
                setTimeout(() => {
                    setNews(data.data);
                    setIsLoaded(true)
                }, 1000)
            },
            (error) => {
                console.log(error);
            }
        )
    }

    const deleteNewsAPI = (id) => {
        UserService.deleteNews(id).then(
            () => {
                console.log("DELETE NEWS");
                toastHttp({
                    title: "Aktualność usunięta",
                    description: "Aktualność została usunięta pomyślnie",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
                getNewsAPI();
            },
            (error) => {
                console.log(error);
            }
        )
    }

    useEffect(() => {
        getNewsAPI();
    }, []);

    return (
        <div>
            <Skeleton h="5vh" w="100vh" p={5} isLoaded={isLoaded}>
                <Center minW="100%">
                    {loggedUserRole === "ROLE_USER" ? null : <ButtonAddNews
                        name="Dodaj wpis"
                        input={newsAddInputs}
                        color="purple"
                        buttonName="Dodaj"
                        title={title}
                        content={content}
                        setTitle={setTitle}
                        setContent={setContent}
                        setNews={setNews}
                    />}
                </Center>
                <Center minW="100%" maxH="30vh" p={10} display="grid" >
                    {news && showNews}
                </Center>
            </Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
            <Skeleton h="5vh" w="100vh" marginTop={5} isLoaded={isLoaded}></Skeleton>
        </div>
    );
}

export default NewsPage;