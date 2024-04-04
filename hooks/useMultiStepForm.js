import { useState } from "react";

export const useMultiStepForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Get the next step from the array
  const next = () => {
    setCurrentStep((prev) => {
      if (prev < steps.length - 1) return prev + 1;
      return prev;
    });
  };

  // Get the previous step in the steps array
  const back = () => {
    setCurrentStep((prev) => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  };

  // Go to any step
  const goTo = (index) => {
    setCurrentStep(index);
  };

  return {
    next,
    back,
    goTo,
    Step: steps[currentStep],
    currentStep,
    isLastStep: currentStep === steps.length - 1,
    isFirstStep: currentStep === 0
  };
};

export default useMultiStepForm;
