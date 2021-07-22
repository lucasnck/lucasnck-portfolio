const updateMessages = (state, action) => ({
  ...state,
  messages: action.payload,
});

const add = (state, action) => ({
  ...state,
  messages: [...state.messages, action.payload],
});

const toggleSendMessage = (state, action) => ({
  ...state,
  showSendMessage: action.payload ?? !state.showSendMessage,
});

const mousePos = (state, action) => ({
  ...state,
  mousePos: action.payload,
});

const actions = {
  updateMessages,
  add,
  toggleSendMessage,
  mousePos,
};

export const reducer = (state, action) => {
  return actions[action.type](state, action);
};
