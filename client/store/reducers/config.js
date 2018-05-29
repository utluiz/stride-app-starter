import { handleActions } from "redux-actions";

import actions from "../../store/actions";

export const initialState = {};

export default handleActions(
  {
    [actions.config.get.ok](state, action) {
      return action.payload;
    }
  },
  initialState
);
