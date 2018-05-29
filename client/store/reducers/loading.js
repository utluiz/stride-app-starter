import { handleActions } from "redux-actions";
import * as R from "ramda";

import actions from "../../store/actions";

export const initialState = {
  config: false
};

function createLoader(actionGroup, prop) {
  return {
    [actionGroup.start]: R.assoc(prop, true),
    [actionGroup.ok]: R.assoc(prop, false),
    [actionGroup.fail]: R.assoc(prop, false)
  };
}

export default handleActions(
  {
    ...createLoader(actions.config.get, "config")
  },
  initialState
);
