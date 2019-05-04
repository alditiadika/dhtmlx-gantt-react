export const type = {
  test: "TEST_TYPE"
};
const initialState = {
  test: ""
};
export const ganttReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case type.test: {
      return {
        ...state
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
