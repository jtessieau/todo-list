import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        name: '',
        email: '',
        token: '',
    },
    reducers: {
        storeUser: (state, action) => {
            state.id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
    },
});

export const { storeUser } = userSlice.actions;

export default userSlice.reducer;
