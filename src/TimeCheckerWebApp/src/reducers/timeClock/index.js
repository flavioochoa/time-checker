import timeClockActions from '../../actions/timeClock';
const { types } = timeClockActions;

const initialState = {
    availableOptions: [],
};

const timeClockReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_AVAILABLE_OPTIONS:
            let { availableOptions } = action;
            return {
                ...state,
                availableOptions
            }
        default:
            return state;
    }
}

export default timeClockReducer;