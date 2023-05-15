import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
    name: 'car',
    initialState: {
       cars: [],
    },
    reducers: {
        add: (state, action) => {
            state.cars.push(action.payload)
        },
        deletion: (state, action) => {
            state.cars.splice(action.payload, 1)
        }
    }
})

export const { add, deletion } = carSlice.actions

export default carSlice.reducer