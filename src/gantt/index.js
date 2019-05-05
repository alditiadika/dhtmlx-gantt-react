import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
import './style.css'
import Gantt from './gantt-processor'
import mapDispatchToProps from './actions'
import { mapStateToProps } from '../redux/root-reducer'
class EntryGantt extends Component {
  componentWillMount() {
    window.addEventListener('click', rootE => {
      //do something here
      if (rootE.target.className === 'special-test') {
        this.props.selectData({
          id: parseInt(rootE.target.id),
          checked: rootE.target.checked
        })
      }
    })
  }
  render() {
    return !this.props.ganttReducer.onLoad && <Gantt />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryGantt)
