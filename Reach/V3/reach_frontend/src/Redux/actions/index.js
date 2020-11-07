import reachBackend from '../api/reachBackend'

// Get All Messages from API
export const fetchMessages = () => {
  return async (dispatch) => {
    const response = await reachBackend.get('/messages')
    
    dispatch({type: 'FETCH_MESSAGES', payload: response})
  }
}

// Get All Voters from API
export const fetchVoters = () => {
  return async (dispatch) => {
    const response = await reachBackend.get('/voters')
    // console.log(response.data)
    dispatch({type: 'FETCH_VOTERS', payload: response.data})
  }
}

// Add a message
export const addMessage = (messages) => {
  return{
    type: "ADD_MESSAGES",
    payload: messages
  }
}

// Add a voter
export const addVoter = (voters) => {
  return{
    type: "ADD_VOTERS",
    payload: voters
  }
}

// Choose the selected conversation.
  // This conversation will be the one that is highlighted
export const selectconversation = (conversation) => {
  return{
    type: "CONVERSATION_SELECTED",
    payload: conversation
  }
}





// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import axios from 'axios'

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export const getMessages = () => {
//     return dispatch =>{
//         dispatch(getMessages())
//         axios.get('http://localhost:3000/messages')
//           .then(({data}) =>{
//             console.log(data)
//           })

//     }
//   }