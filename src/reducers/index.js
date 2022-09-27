/* eslint-disable arrow-body-style */

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_DIRECTION': {
      const newState = {
        ...state,
        direction: action.direction,
      };

      return newState;
    }
    case 'CHANGE_DIRECTION_TO_RIGHT': {
      return {
        ...state,
        direction: '90deg',
      };
    }
    case 'CHANGE_DIRECTION_TO_45_deg': {
      return {
        ...state,
        direction: '45deg',
      };
    }
    case 'CHANGE_FIRST_COLOR':
      return {
        ...state,
        firstColor: action.color,
        nbColors: state.nbColors + 1,
      };
    case 'CHANGE_LAST_COLOR':
      return {
        ...state,
        lastColor: action.color,
        nbColors: state.nbColors + 1,
      };
    default:
      return state;
  }
};

export default reducer;
