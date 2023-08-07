import React, { useState } from "react";
import { IAnswers } from "../models/Answers";
import { fetchData } from "../services/FetchService";

interface IAppContextInitValue {
    answers: IAnswers | null;
    onSetAnswer: (propName: string, answer: string) => void;
    onSubmitAnswer: () => void;
}

const noop = () => {};

const initValue: IAppContextInitValue = {
    answers: null,
    onSetAnswer: noop,
    onSubmitAnswer: noop
};

const AppContext = React.createContext(initValue);

const AppProvider = ({ children }: any) => {
    const [answers, setAnswer] = useState<IAnswers | null>(null);

    const onSetAnswer = (propName: string, answer: string) => {
        setAnswer({ ...answers, [propName]: answer });
    };

    const onSubmitAnswer = async () => {
        // await fetchData("testUrl", "POST", JSON.stringify(answers));

        // console.log(answers);
    }

    return <AppContext.Provider value={{ answers, onSetAnswer, onSubmitAnswer }}>{children}</AppContext.Provider>;
};

export { AppProvider };
export default AppContext;
