import React from 'react'
import { Provider } from 'react-redux'
import TopicApp from './Topic'
import store from '../reducers/topic';

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TopicApp />
      </Provider>
    )
  }
}