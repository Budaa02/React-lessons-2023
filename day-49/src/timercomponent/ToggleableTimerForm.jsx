import TimerForm from "./TimerForm";
import { useEffect, useState } from "react";

export default function ToggleableTimerForm({ onFormSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleFormSubmit(timer) {
    onFormSubmit(timer);
    setIsOpen(false);
  }
  function handleFormOpen() {
    setIsOpen(true);
  }
  function handleFormClose() {
    setIsOpen(false);
  }

  return (
    <div>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <div>
          <button onClick={handleFormOpen}>Click me</button>
        </div>
      )}
    </div>
  );
}
