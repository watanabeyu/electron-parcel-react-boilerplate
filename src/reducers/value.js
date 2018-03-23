const initialState = 0;

export default (state = initialState, action) => {
  const { type, payload = {} } = action;
  const { value } = payload;

  switch (type) {
    case 'VALUE_INCREMENT':
      return value ? state + value : state + 1;
    case 'VALUE_DECREMENT':
      return value ? state - value : state - 1;
    case 'VALUE_RESET':
      return 0;
    default:
      return state;
  }
};
