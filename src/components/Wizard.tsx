import React, { Fragment } from "react";
import WizardStep1 from "./WizardStep1";
import WizardStep2 from "./WizardStep2";
import WizardStep3 from "./WizardStep3";
import { Stepper, Step, StepLabel } from "@material-ui/core";

const wizard = () => {

    const [step, setStep] = React.useState(1)
    const [stepper, setStepper] = React.useState(0)
    let view = <React.Fragment />

    switch (step) {
        case 3:
            view = <WizardStep3 />
            break;
        case 2:
            view = <WizardStep2 nextStepHandler={() => {setStep(step+1); setStepper(stepper+1)}}/>
            break;
        case 1:
            view = <WizardStep1 nextStepHandler={() => {setStep(step+1); setStepper(stepper+1)}}/>
            break;
        default:
            break;
    }

    return <React.Fragment>
        <Stepper activeStep={stepper} style={{background: "black"}}>
            <Step key={0} >
                <StepLabel>
                    <div style={{color: "white"}}>
                        Installation
                    </div>                    
                </StepLabel>
            </Step>
            <Step key={1}>
                <StepLabel>
                    <div style={{color: "white"}}>
                        Ship Data
                    </div>
                </StepLabel>
            </Step>
            <Step key={2}>
                <StepLabel>
                    <div style={{color: "white"}}>
                        Add AI
                    </div>
                </StepLabel>
            </Step>
        </Stepper>

        {view}

    </React.Fragment>

}

export default wizard