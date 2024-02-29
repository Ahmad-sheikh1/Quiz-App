"use client";
import {
    Typography,
    Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    alertTitleClasses
} from "@mui/material";
import { useEffect, useState } from "react";

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [questions, setQuestions] = useState<{ question: string, choices: string[], answer: string, }[]>([]);

    const question = [
        {
            question: "ajsjskjs  ahmad 1"
        },
        {
            question: "ajsjskjs  ahmad 2"
        },
        {
            question: "ajsjskjs  ahmad 3"
        },
        {
            question: "ajsjskjs  ahmad 4"
        }
    ];

    const quiz = [
        {
            question: "What is the most used programming language in 2021?",
            choices: ["Java", "C", "Python", "JavaScript"],
            answer: "JavaScript",
        },
        {
            question: "Who is the President of US?",
            choices: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"],
            answer: "Joe Biden",
        },
        {
            question: "What does HTML stand for?",
            choices: [
                "Hypertext Markup Language",
                "Cascading Style Sheet",
                "Jason Object Notation",
                "Helicopters Terminals Motorboats Lamborginis",
            ],
            answer: "Hypertext Markup Language",
        },
        {
            question: "What year was JavaScript launched?",
            choices: ["1996", "1995", "1994", "none of the above"],
            answer: "1995",
        },
    ];

    useEffect(() => {
        setQuestions(quiz)
    }, [])

    const [startshow, setStartshow] = useState<boolean>(true);
    function handleStart() {
        setCurrentQuestionIndex(0)
        setStartshow(false)
        setscore(0)
        setwrongQuestions(0)
    }
    const currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    const [wrongQuestions, setwrongQuestions] = useState<number>(0);
    const [isSelected, setIsSelected] = useState(-1);
    const [score, setscore] = useState<number>(0);
    const handleTableRowClick = (index: number, item: any) => {
        if (!isAnswered[currentQuestionIndex]) {
            setIsAnswered(prevState => {
                const newState = [...prevState];
                newState[currentQuestionIndex] = true;
                return newState;
            });

            setIsSelected(index);

            if (item === currentQuestion.answer) {
                const add = score + 1;
                setscore(add);
            } else {
                setwrongQuestions(wrongQuestions + 1);
            }
        }
    };
    const [nextQshow, setnextQshow] = useState<boolean>(true);
    console.log(currentQuestionIndex);
    const [isAnswered, setIsAnswered] = useState<boolean[]>(Array(quiz.length).fill(false));

    function handlenextQuestion() {
        setIsSelected(-1); // Reset selected answer
        if (isSelected !== -1) {
            setIsAnswered(prevState => {
                const newState = [...prevState];
                newState[currentQuestionIndex] = true;
                return newState;
            });

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                console.log("ok");
                alert("game end");
                setStartshow(true);
            }
        }

    }

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontFamily: 'Fascinate Inline',
                    backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgb(135, 241, 255))',
                    fontWeight: 400,
                    backgroundSize: '100%',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(rgb(0, 133, 163) 2px 2px)',
                    fontSize: '70px',
                    textAlign: 'center',
                    padding: "0px 0"
                }}>
                REACT QUIZ
            </Typography>
            <Button variant="contained" disabled={startshow === false} sx={{ margin: "auto", display: "block", visibility: startshow === false ? 'hidden' : 'visible' }} onClick={handleStart}>Start</Button>

            {
                startshow === false ? (<Box sx={{ backgroundColor: "#ebfeff", width: "45%", textAlign: "center", margin: "auto", border: "none", borderRadius: "20px", height: "auto", padding: "20px 0" }}>
                    <Typography variant="h2" sx={{ fontSize: "32px", textAlign: "center", color: "gray", fontWeight: "bold", margin: "10px 0" }}>Score : {score}</Typography>
                    <Typography variant="h2" sx={{ fontSize: "32px", textAlign: "center", color: "gray", fontWeight: "bold", margin: "10px 0" }}>wronganswers : {wrongQuestions}</Typography>
                    <Button onClick={handlenextQuestion} variant="contained" sx={{ marginLeft: "100px", position: "absolute", visibility: nextQshow === false ? 'hidden' : 'visible' }}>Next Question</Button>
                    <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Catamaran, sans-serif", fontSize: "22px", padding: "10px 0" }}>Question:{currentQuestionIndex + 1}/{questions.length}</Typography>
                    <Typography variant="h3" sx={{ fontWeight: "bold", fontFamily: "Catamaran, sans-serif", fontSize: "28px" }}>{currentQuestion?.question}</Typography>
                    <Table sx={{ margin: "5px 0", width: "100%" }}>
                        <TableBody>
                            {currentQuestion.choices.map((item, index) => (
                                <TableRow onClick={() => handleTableRowClick(index, item)} key={index} >
                                    <TableCell sx={{ width: "60%" }}>
                                        <Typography
                                            sx={{ backgroundColor: isSelected === index ? "green" : "#59c8f5", color: "white", fontWeight: "bold", padding: "10px 0", textAlign: "center" }}>
                                            {item}
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                            ))}
                        </TableBody>
                    </Table>
                </Box>) : null
            }

        </>
    );
};

export default Quiz;
