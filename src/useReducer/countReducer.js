export const initialState = {
  count1: 5,
  count2: 0,
};

export const reducer = (state, action) => {
  switch (action) {
    case "incrementFive":
      return { ...state, count1: state.count1 + 5 };

    case "decrementFive":
      return { ...state, count1: state.count1 - 5 };
    case "incrementOne":
      return { ...state, count2: state.count2 + 1 };

    case "decrementOne":
      return { ...state, count2: state.count2 - 1 };

    default:
      break;
  }
};

// export const { count, dispatch } = useReducer(reducer, initialState);
