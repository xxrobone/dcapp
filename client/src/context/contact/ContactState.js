import { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Rupert von code',
        email: 'rupert@code.com',
        phone: '0751011111',
        type: 'teacher',
      },
      {
        id: 2,
        name: 'George Dupont',
        email: 'dupont@code.com',
        phone: '0732221111',
        type: 'student',
      },
      {
        id: 3,
        name: 'Anne Smith',
        email: 'anne@smith.com',
        phone: '0103313131',
        type: 'student',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add contact

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
