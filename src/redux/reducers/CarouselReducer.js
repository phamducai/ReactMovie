import produce from "immer";

import { SET_CAROUSEL } from "../actions/types/CarouselType";
const inititalState = {
  arrImg: [],
};
export const CarouselReducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SET_CAROUSEL:
        draft.arrImg = action.arrImg;
        break;
      default:
        break;
    }
  });
};
