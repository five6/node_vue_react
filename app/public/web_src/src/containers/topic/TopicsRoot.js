import React from 'react'
import { Provider } from 'react-redux'
import TopicsApp from './Topics'
import store from '../../reducers/topic';

export default class TopicsRoot extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TopicsApp />
      </Provider>
    )
  }
}