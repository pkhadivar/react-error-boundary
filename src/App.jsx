import ClickCounter from "./components/ClickCounter";
import Person from "./components/Person";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from './components/Fallback';
function App() {
  const person = {
    firstName: "Pouria",
    lastName: "Khadivar",
  };
  const errorHandler = (error, errorInfo) => {
    console.log("Loging", error, errorInfo);
  }

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <Person person={person} />
        {/* <Person person={{}} /> */}
        <ClickCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
