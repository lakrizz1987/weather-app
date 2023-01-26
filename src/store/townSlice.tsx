import { createSlice } from '@reduxjs/toolkit'

export const townSlice = createSlice({
    name: 'town',
    initialState: {
        value: {
            town: '---',
            temp: '---',
            icon: '---',
            items:[{maxTemp: '---'},
            {minTemp: '---'},
            {wind: '---'},
            {seaLevel:'---'}
        ]
            
        },
    },
    reducers: {
        setTown: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setTown } = townSlice.actions;

export default townSlice.reducer;