// import React, { Component } from 'react';
// import { Route } from 'react-router';
// import { Layout } from './components/Layout';
// import { Home } from './components/Home';
// import FetchData from './components/FetchData';
// import { Counter } from './components/Counter';

// export default class App extends Component {
//   static displayName = App.name;

//   render () {
//     return (
//       <Layout>
//         <Route exact path='/' component={Home} />
//         <Route path='/counter' component={Counter} />
//         <Route path='/fetch-data' component={FetchData} />
//       </Layout>
//     );
//   }
// }

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>.Net + React</h1>
    </>
  )
}

export default App
