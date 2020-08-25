import React from 'react';
import { Provider } from 'react-redux';

import { useStore } from 'redux/store';
import { Layout } from 'components/page';

function App() {
  const store = useStore()

  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App;
