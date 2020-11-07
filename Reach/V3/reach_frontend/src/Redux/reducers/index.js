import {combineReducers} from 'redux'

const messagesReducer = (messages=[], action) => {
    if(action.type === 'FETCH_MESSAGES'){
        return action.payload
    }
    return messages
}

const votersReducer = (voters=[], action) => {
    if(action.type === 'FETCH_VOTERS'){
        console.log(action.payload.data)
        return [...voters, action.payload]
    }
    return voters
}

const selectedConversationReducer = (selectedConversation = null, action) =>{
    if(action.type === 'CONVERSATION_SELECTED'){
        return action.payload
    }
    //else
    return selectedConversation
}


export default combineReducers({
    messages: messagesReducer,
    voters: votersReducer,
    selectedConversaiton: selectedConversationReducer,
})

