import logo from './logo.svg';
import './App.css';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';


function App() {
  return (
    <div className="App">
      {/* <h1>Simulation1</h1>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}

      {/* <h1>Simulation2</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary> */}


      <h1>Simulation3</h1>
      <BuggyCounter />
    </div>
  );
}
export default App;
