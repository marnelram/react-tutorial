import { useState } from "react";
import AlertButton from "./components/AlertButton";
import Alert from "./components/alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
  };

  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>Alert!</Alert>}
      <AlertButton onClick={handleClick}>Alert!</AlertButton>
    </div>
  );
}

export default App;
