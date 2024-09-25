import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  // const [test, setTest] = useState({ name: "Kai" });
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // if (step > 1) setStep(step - 1);
    // It't not good thing to change state based on current state instead use call back funcation and call with parameter
    if (step > 1) setStep((currStep) => currStep - 1); // you can name parameter anything
  }
  function handleNext() {
    // if (step < 3) setStep(step + 1);
    // if (step < 3) setStep(step + 1); it won't work with current state
    if (step < 3) setStep((s) => s + 1);
    // step = step + 1; we can't mannualy update function in React we have to use setter(setStep) function from useState
    // test.name = "K1ng";  BAD PRACTICE
    // setTest({ name: "K1ng" }); USE SET FUCNCTION
  }

  return (
    <>
      <button
        className="close"
        onClick={() =>
          // (isOpen ? setIsOpen(false) : setIsOpen(true))
          // setIsOpen(!isOpen)
          setIsOpen((open) => !open)
        }
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMassage step={step}>{messages[step - 1]}</StepMassage>

          <div className="buttons">
            <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
              <span>👈</span>Previous
            </Button>{" "}
            <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMassage({ step, children }) {
  return (
    <div className="message">
      <span>Step {step}</span>
      {children}
    </div>
  );
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
