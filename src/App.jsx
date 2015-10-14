/**
 * This mounts the React app, with a unique ID for your session
 * (specifically, for as long as you don't clear localStorage).
 *
 * We're using the next version of JavaScript, ECMAScript 6.
 */

import React from 'react';

import ChatHandler from './ChatHandler.jsx';


const ID_KEY = '__HACKDAYS_USER_ID__';
let id = window.localStorage.getItem(ID_KEY);

if (!id) {
  id = Math.random().toString(36).substring(7);  // Simple random ID.
  window.localStorage.setItem(ID_KEY, id);
}


React.render(
  <ChatHandler mID={id} />,
  document.getElementById('root')
);
