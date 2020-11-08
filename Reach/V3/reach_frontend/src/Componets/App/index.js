import React, {useEffect } from 'react';
import {useDispatch} from 'react-redux'
import Messenger from '../Messenger'

import {fetchMessages, fetchVoters} from '../../Redux/actions'


export default function Index() {
  const dispatch = useDispatch()
  useEffect(() => {dispatch(fetchVoters())},[])
  useEffect(() => {dispatch(fetchMessages())},[])
  
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchVoters())
      dispatch(fetchMessages())
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Messenger />
    </div>
  )
}


