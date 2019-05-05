import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gantt } from 'dhtmlx-gantt'
import { setZoom, layout } from './config'
import mapDispatchToProps from './actions'
import { mapStateToProps } from '../redux/root-reducer'
class Gantt extends Component {
  componentDidMount() {
    const { dataGrid } = this.props.ganttReducer
    gantt.config.layout = layout
    gantt.config.order_branch = 'marker'
    gantt.config.order_branch_free = 'marker'
    gantt.init(this.ganttContainer)
    gantt.attachEvent('onTaskClick', () => {
      return false
    })
    gantt.attachEvent('onTaskDblClick', () => {
      return false
    })
    this.props.loadGrid(dataGrid)
    gantt.parse(dataGrid)
  }
  render() {
    setZoom(gantt, 'Days')
    return (
      <div
        ref={input => {
          this.ganttContainer = input
        }}
        style={{ width: '100%', height: '100%' }}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gantt)
