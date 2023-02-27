import ClickCounter from "./components/ClickCounter";
import Person from "./components/Person";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  const person = {
    firstName: "Pouria",
    lastName: "Khadivar",
  };

  return (
    <div className="App">
      <ErrorBoundary>
        <Person person={person} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Person person={{}} />
      </ErrorBoundary>
      <ErrorBoundary>
        <ClickCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
