import {
  setCurrentValue,
  setPreviousValue,
  setOperator,
  clearValue
} from "../actions/index";

export const resetStates = dispatch => {
  dispatch(clearValue());
  dispatch(setPreviousValue(null));
  dispatch(setOperator(null));
};

export const handleNumber = (dispatch, value) => {
  dispatch(setCurrentValue(value));
};
export const handleOperator = (dispatch, value, currentValue) => {
  dispatch(setOperator(value));
  dispatch(setPreviousValue(currentValue));
  dispatch(clearValue());
};
export const handleEqual = (
  dispatch,
  operator,
  currentValue,
  previousValue
) => {
  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  if (operator === "+") {
    resetStates(dispatch);
    dispatch(setCurrentValue(current + previous));
  } else if (operator === "-") {
    resetStates(dispatch);
    dispatch(setCurrentValue(previous - current));
  } else if (operator === "/") {
    resetStates(dispatch);
    dispatch(setCurrentValue(previous / current));
  } else if (operator === "x") {
    resetStates(dispatch);
    dispatch(setCurrentValue(previous * current));
  }
};
export const handlePosNeg = (dispatch, currentValue) => {
  dispatch(clearValue());
  dispatch(setCurrentValue(parseFloat(currentValue) * -1));
};
export const handlePercentage = (dispatch, currentValue) => {
  dispatch(clearValue());
  dispatch(setCurrentValue(parseFloat(currentValue) * 0.01));
};

export const calculator = props => {
  const {
    dispatch,
    currentValue,
    previousValue,
    operator,
    type,
    value
  } = props;

  switch (type) {
    case "number": {
      handleNumber(dispatch, value);
      break;
    }
    case "operator": {
      handleOperator(dispatch, value, currentValue);
      break;
    }
    case "equal": {
      handleEqual(dispatch, operator, currentValue, previousValue);
      break;
    }
    case "clear": {
      resetStates(dispatch);
      break;
    }
    case "posNeg": {
      handlePosNeg(dispatch, currentValue);
      break;
    }
    case "percentage": {
      handlePercentage(dispatch, currentValue);
      break;
    }
    default:
  }
};
