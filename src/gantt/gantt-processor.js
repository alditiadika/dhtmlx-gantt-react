import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gantt } from 'dhtmlx-gantt'
import { setZoom, layout, data } from './config'
import mapDispatchToProps from './actions'
class Gantt extends Component {
  componentDidMount() {
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
    this.props.loadGrid(data)
    gantt.parse(data)
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
const mapStateToProps = state => ({
  state: state
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gantt)
