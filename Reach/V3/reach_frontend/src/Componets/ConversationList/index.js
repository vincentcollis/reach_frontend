import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'


import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';


import './ConversationList.css';

export default function Index(props){
  // Map value to the state this component needs access to
  const voters = useSelector(state => state.voters)
  const conversationSearch = useSelector(state => state.search)

  // Set conversations that will be rendered in conversationList
  let conversations;
  if(conversationSearch){
    conversations = voters.filter(voter =>{
      return voter.attributes.name.toUpperCase().includes(conversationSearch.toUpperCase())
    })
  } else {
    conversations = voters
  }
  
    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch />
        {
          conversations.map(voter =>
            <ConversationListItem
              key={voter.id}
              id={voter.id}
              data={voter.attributes}
            />
          )
        }
      </div>
    );
}



