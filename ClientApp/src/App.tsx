import { useState } from 'react';
import FetchData from './components/FetchData';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1>.Net + React</h1>
      <FetchData />
    </>
  );
}

export default App;
