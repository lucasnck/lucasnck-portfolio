const save = (state, action) => ({
  ...state,
  ...action.payload,
});

const actions = {
  save,
};

export const reducer = (state, action) => {
  return actions[action.type](state, action);
};
