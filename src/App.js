import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header';

import './App.css';
import LoginModal from './components/login-modal';

function App() {
  const { user, messages } = useSelector(state => state.messaging);

  return (
    <Fragment>
      <LoginModal />
      <Header />
    </Fragment>
  );
}

export default App;
