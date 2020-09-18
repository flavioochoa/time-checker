import userActions from '../../actions/user';
const { types } = userActions;

const initialState = {
    userInfo: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            let { id, user, name } = action;
            return {
                ...state,
                userInfo: { user, name, id }
            };
        default:
            return state;
    }
}

export default userReducer;