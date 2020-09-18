import userActions from '../../actions/user';
const { types } = userActions;

const initialState = {
    users: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case types.SET_WEEKLY_REPORT:
            let { id, workedHours } = action;
            return {
                ...state,
                users: state.users.map(user => {
                    return user.id === id ? { ...user, workedHours } : user
                }) 
            }
        default:
            return state;
    }
}

export default adminReducer;