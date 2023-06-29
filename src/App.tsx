import './App.css';
import { Structure } from './components/Structure';
import { AppProvider } from './data/context/AppContext';

const App = () => {
  return (
    <div
      id="App"
      aria-label="App"
      className=" text-base grid grid-rows-[0.1fr_auto_0.1fr] h-full"
    >
      <AppProvider>
        <header id="App-Header" aria-label="App-Header" className="App-Header">
          <div className="">Header</div>
        </header>
        <main id="App-Content" aria-label="App-Content">
          <Structure />
        </main>
        <footer id="App-Footer" aria-label="App-Footer" className="App-Footer">
          <div className="">Footer</div>
        </footer>
      </AppProvider>
    </div>
  );
};

export default App;
