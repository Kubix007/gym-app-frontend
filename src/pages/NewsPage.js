import React, { useEffect, useState } from 'react';
import UserService from '../services/userService';
import ButtonAddNews from '../components/Buttons/ButtonAddNews';
import {
    Center,
    List,
    ListItem,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Skeleton,
} from '@chakra-ui/react';

const NewsPage = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [news, setNews] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    let showNews = null;

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
            <Center p={10} justifyContent="left">
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
                </List>
            </Center>
        ))
    }

    useEffect(() => {
        UserService.getNews().then(
            (data) => {
                console.log(data.data);
                setTimeout(() => {
                    setNews(data.data);
                    setIsLoaded(true)
                }, 1000)
            },
            (error) => {
                console.log(error);
            }
        )
    }, []);

    return (
        <div>
            <Skeleton h="5vh" w="100vh" p={5} isLoaded={isLoaded}>
                <Center minW="100%">
                    <ButtonAddNews
                        name="Dodaj wpis"
                        input={newsAddInputs}
                        color="purple"
                        buttonName="Dodaj"
                        title={title}
                        content={content}
                        setTitle={setTitle}
                        setContent={setContent}
                        setNews={setNews}
                    />
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