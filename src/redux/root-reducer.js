import { combineReducers } from 'redux'

import { ganttReducer } from './gantt/reducer'

export default combineReducers({
  ganttReducer: ganttReducer
})

export const mapStateToProps = state => ({ ...state })
