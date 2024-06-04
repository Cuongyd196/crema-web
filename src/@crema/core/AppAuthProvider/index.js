import React from 'react';
import JWTAuthProvider from '@crema/services/auth/jwt-auth/JWTAuthProvider';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {
  FETCH_START,
  FETCH_ERROR,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
} from '@crema/constants/ActionTypes';

const AppAuthProvider = ({children}) => {
  const dispatch = useDispatch();

  const fetchStart = () => {
    dispatch({type: FETCH_START});
  };
  const fetchError = (message) => {
    dispatch({type: FETCH_ERROR, payload: message});
  };
  const fetchSuccess = () => {
    dispatch({type: FETCH_SUCCESS});
  };
  const showMessage = (message) => {
    dispatch({type: SHOW_MESSAGE, payload: message});
  };
  return (
    <JWTAuthProvider
      fetchStart={fetchStart}
      fetchError={fetchError}
      fetchSuccess={fetchSuccess}
      showMessage={showMessage}
    >
      {children}
    </JWTAuthProvider>
  );
};

AppAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppAuthProvider;
