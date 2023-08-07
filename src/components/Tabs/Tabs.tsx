import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import CustomTab from "./Tab/Tab";
import AppContext from "../../context/context";
import { PropName } from "../../models/Answers";

import "./Tabs.scss";
import { useNavigate } from "react-router-dom";

const QuestionTabs = () => {
    const navigate = useNavigate();
    const { answers, onSetAnswer, onSubmitAnswer } = useContext(AppContext);

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTabIndex(newValue);
    };

    const handleOnSubmit = async () => {
        // await onSubmitAnswer();
        navigate("/");
    };

    return (
        <div className="TabsWrapper">
            <Tabs value={currentTabIndex} onChange={handleTabChange}>
                <Tab label="Company size" value={0} />
                <Tab label="Idea to build application" value={1} />
                <Tab label="Role" value={2} />
            </Tabs>
            <CustomTab
                index={0}
                tabValue={currentTabIndex}
                value={answers?.companySize}
                propName={PropName.CompanySize.toString()}
                questions={[
                    { value: "1-50 employees", label: "1-50 employees" },
                    { value: "51-200 employees", label: "51-200 employees" },
                    { value: "201-1000 employees", label: "201-1000 employees" },
                    { value: "1001+ employees", label: "1001+ employees" }
                ]}
                onAnswerChange={onSetAnswer}
                label="What's the size of the company you work for?"
            />
            <CustomTab
                index={1}
                tabValue={currentTabIndex}
                value={answers?.applicationIdeaToBuild}
                propName={PropName.ApplicationIdeaToBuild.toString()}
                questions={[
                    { value: "Business site", label: "Business site" },
                    { value: "Ecommerce store", label: "Ecommerce store" },
                    { value: "Portfolio", label: "Portfolio" },
                    { value: "Blog", label: "Blog" },
                    { value: "Other", label: "Other" },
                    { value: "I'm just testing Webflow out", label: "I'm just testing Webflow out" }
                ]}
                onAnswerChange={onSetAnswer}
                label="What do you want to build today?"
            />
            <CustomTab
                index={2}
                tabValue={currentTabIndex}
                value={answers?.role}
                propName={PropName.Role.toString()}
                questions={[
                    { value: "Web designer", label: "Web designer" },
                    { value: "Product designer", label: "Product designer" },
                    { value: "Developer", label: "Developer" },
                    { value: "Marketer", label: "Marketer" },
                    { value: "Entrepreneur", label: "Entrepreneur" },
                    { value: "Other", label: "Other" }
                ]}
                onAnswerChange={onSetAnswer}
                label="What best describes your role?"
            />
            {currentTabIndex === 2 && (
                <Button variant="contained" onClick={handleOnSubmit}>
                    Submit
                </Button>
            )}
        </div>
    );
};

export default QuestionTabs;
