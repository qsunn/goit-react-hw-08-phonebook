import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

const HomePage = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  if (isLoggedIn) return <div className="text-center">Welcome to your phonebook</div>;
  return <div className="text-center">Welcome to your phonebook, log in please.</div>;
};

export default HomePage;
