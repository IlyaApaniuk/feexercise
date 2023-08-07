import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./Tab.scss";

interface ITabProps {
    label: string;
    index: number;
    tabValue: number;
    propName: string;
    value: string | undefined;
    questions: { value: string; label: string }[];
    onAnswerChange: (propName: string, value: string) => void;
}

const Tab = ({ label, index, value, tabValue, questions, propName, onAnswerChange }: ITabProps) => {
    const handleChange = (event: unknown, value: string) => {
        onAnswerChange(propName, value);
    };

    return (
        <div className="TabWrapper" role="tabpanel" style={{ display: tabValue !== index ? "none" : "flex" }}>
            <div className="TabWrapper-Label">{label}</div>
            <div className="TabWrapper-Description">We'll help you get started based on your responses</div>
            <div className="TabWrapper-Questions">
                <FormControl>
                    <RadioGroup value={value || ""} onChange={handleChange}>
                        {questions.map(q => (
                            <FormControlLabel key={q.value} value={q.value} control={<Radio />} label={q.label} />
                        ))}
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
};

export default Tab;
