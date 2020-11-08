import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {composeMessage} from '../../Redux/actions'

import './Compose.css';

export default function Compose(props) {
  const dispatch = useDispatch()

  // Set to 1 to represent the only user in the data base
    // Edit this once login is implemented
  const USER_ID = '1'
  
  // receive Voter who is being messaged from the selected conversation state
  const voter_id = useSelector(state => state.conversation)

  
  
  const sendMessage = (event) => {


    let payload = {
      // payload structure is mapped from data base for Message.create
      voter_id: parseInt(voter_id),
      user_id: USER_ID,
      body: event.target.value,
      origin: true
    }
    
    return event.keyCode === 13 ? 
      dispatch(composeMessage(payload)) : null
  }

    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
          onKeyDown={sendMessage}
        />

        {
          props.rightItems
        }
      </div>
    );
}