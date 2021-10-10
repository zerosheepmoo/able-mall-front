import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { AuthBodyProps } from "../../interfaces/props";

const steps = [
    "장애 대상자와의 관계 선택",
    "공인인증서 확인",
    "추가 필요서류 제출",
];

const AuthBody: React.VFC<AuthBodyProps> = (props) => {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState<{
        [k: number]: boolean;
    }>({});
    const { winWidth } = props;

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                  steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

    return (
        <>
            <Grid container item>
                <Box sx={{ width: "100%" }}>
                    {/* hello */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "center",
                            m: 2,
                            mb: 8,
                        }}
                    >
                        <TextField
                            inputProps={{
                                style: { fontSize: 24, maxWidth: 140 },
                            }}
                            variant="standard"
                            required
                            placeholder="성함입력.."
                        />
                        <Typography variant="h5" role="body1">
                            님, 처음 오셨나요?
                        </Typography>
                    </Box>
                    <Stepper
                        nonLinear
                        activeStep={activeStep}
                        orientation={
                            winWidth >= 600 ? "horizontal" : "vertical"
                        }
                        sx={{ alignItems: "center" }}
                    >
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepButton
                                    color="inherit"
                                    onClick={handleStep(index)}
                                >
                                    {label}
                                </StepButton>
                            </Step>
                        ))}
                    </Stepper>
                    <div>
                        {allStepsCompleted() ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        pt: 2,
                                    }}
                                >
                                    <Box sx={{ flex: "1 1 auto" }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    Step {activeStep + 1}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        pt: 2,
                                    }}
                                >
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        이전
                                    </Button>
                                    <Box sx={{ flex: "1 1 auto" }} />
                                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                                        다음
                                    </Button>
                                    {activeStep !== steps.length &&
                                        (completed[activeStep] ? (
                                            <Typography
                                                variant="caption"
                                                sx={{ display: "inline-block" }}
                                            >
                                                Step {activeStep + 1} already
                                                completed
                                            </Typography>
                                        ) : (
                                            <Button onClick={handleComplete}>
                                                {completedSteps() ===
                                                totalSteps() - 1
                                                    ? "완료"
                                                    : "제출"}
                                            </Button>
                                        ))}
                                </Box>
                            </React.Fragment>
                        )}
                    </div>
                </Box>
            </Grid>
        </>
    );
};

export default AuthBody;
