import React from 'react';
import './App.css';
import { GetRepoData, get_repo_data } from './api/get-repo-data';
import { Structure } from './components/Structure';

const App = () => {
  //   const test: GetRepoData = {
  //     owner: 'charlscooper',
  //     repo_name: 'github-api-app',
  //   };
  //   const [repo_data, setRepoData] = React.useState(null);

  //   React.useEffect(() => {
  //     const update_data_stream = async () => {
  //       const data = await get_repo_data({ ...test });
  //       setRepoData(data);
  //     };
  //     console.log('update_data_stream');
  //     console.log('repo_data : ', repo_data);
  //     update_data_stream();
  //   }, []);

  //   return repo_data ? (
  //     <div className="text-2xl">{JSON.stringify(repo_data)}</div>
  //   ) : (
  //     <div>Loading...</div>
  //   );
  return (
    <div
      id="App"
      aria-label="App"
      className=" text-base grid grid-rows-[0.1fr_auto_0.1fr] h-full"
    >
      <header id="App-Header" aria-label="App-Header" className="App-Header">
        <div className="">Header</div>
      </header>
      <main id="App-Content" aria-label="App-Content">
        <Structure />
      </main>
      <footer id="App-Footer" aria-label="App-Footer" className="App-Footer">
        <div className="">Footer</div>
      </footer>
    </div>
  );
};

export default App;
