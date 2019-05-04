export const type = {
  test: "TEST_TYPE",
  loadGrid: "LOAD_GANTT",
  selectData: "GANTT_GRID_SELECT_DATA"
}
const initialState = {
  onLoad: false,
  gantt: null,
  dataGrid: []
}
export const ganttReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case type.loadGrid: {
      return {
        ...state,
        dataGrid: action.payload
      }
    }
    case type.selectData: {
      let dataSelected = state.dataGrid.data.filter(
        item => item.id === action.payload.id
      )[0]
      return {
        ...state,
        dataGrid: {
          ...state.dataGrid,
          data: state.dataGrid.data.map(e =>
            e.id === dataSelected.id
              ? { ...dataSelected, status: action.payload.checked }
              : { ...e }
          )
        }
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
