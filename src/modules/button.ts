const SET_SELECTED_BUTTON = 'button/SET_SELECTED_BUTTON' as const;
const IS_CLICKED = 'button/IS_CLICKED' as const;

export const setSelectedButton = (num: number) => ({
  type: SET_SELECTED_BUTTON,
  payload: num
});

export const toggleIsClicked = () => ({
  type: IS_CLICKED
})


type DataAction =
  | ReturnType<typeof setSelectedButton>
  | ReturnType<typeof toggleIsClicked>;


type DataState = {
  isClicked: boolean;
  selectedButton: number;
};


const initialState: DataState = {
  isClicked: false,
  selectedButton: -1
};

function buttonReducer(
  state: DataState = initialState,
  action: DataAction
): DataState {
  switch (action.type) {
    case SET_SELECTED_BUTTON:
      return { ...state, selectedButton: action.payload };
    case IS_CLICKED:
      return { ...state, isClicked: !state.isClicked };
    default:
      return state;
  }
}

export default buttonReducer;
