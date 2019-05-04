import { type } from "../redux/gantt/reducer"

export default dispatch => ({
  loadGrid: payload => dispatch({ payload: payload, type: type.loadGrid }),
  selectData: payload => dispatch({ type: type.selectData, payload: payload })
})
