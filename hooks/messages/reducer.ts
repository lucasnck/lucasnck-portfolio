const updateMessages = (state, action) => ({
  ...state,
  messages: action.payload,
});

const actions = {
  updateMessages,
};

export const reducer = (state, action) => {
  return actions[action.type](state, action);
};
