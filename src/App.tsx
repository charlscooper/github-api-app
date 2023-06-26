import React from 'react';
import './App.css';
import { GetRepoData, get_repo_data } from './api/get-repo-data';

const App = () => {
  const test: GetRepoData = {
    owner: 'charlscooper',
    repo_name: 'github-api-app',
  };
  const [repo_data, setRepoData] = React.useState(null);

  React.useEffect(() => {
    const update_data_stream = async () => {
      const data = await get_repo_data({ ...test });
      setRepoData(data);
    };
    console.log('update_data_stream');
    console.log('repo_data : ', repo_data);
    update_data_stream();
  }, []);


  return repo_data ? (
    <div className="text-2xl">{JSON.stringify(repo_data)}</div>
  ) : (
    <div>Loading...</div>
  );
};

export default App;
