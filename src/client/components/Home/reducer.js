const defaultState = {
  List: []
}

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_LIST': {
      return {...state, List: action.list}
    }
    default: return state;
  }

}

export default todoReducer