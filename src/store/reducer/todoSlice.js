import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todoApp",
    initialState: {
        value: '',
        // set Arr if LocalStorage.length 
        arr: JSON.parse(localStorage.getItem("data")) || []
    },
    reducers: {
        // prevent Default 
        handleSubmit: (state, action) => {
            action.payload.e.preventDefault();
        },
        // Add inputs Value TO our data
        handleValues: (state, action) => {
            state.value = action.payload.e;
        },
        // Add Item To Array
        addItem: (state) => {
            if (state.value != "") {
                state.arr = [...state.arr, { val: state.value, id: state.arr.length }];
            };
            // Set LocalStorage
            localStorage.setItem("data", JSON.stringify(state.arr));
            // Evacuation state.value 
            state.value = '';

        },
        // handle Delete Item
        deleteItem: (state, action) => {
            let cloneArr = state.arr.filter(item => {
                return item.id != action.payload.item.id
            });
            // Remove item From LoacalStorage
            localStorage.setItem('data', JSON.stringify(cloneArr))
            state.arr = cloneArr;
        }
    }
})

export const { handleValues, addItem, deleteItem, handleSubmit } = todoSlice.actions;

export default todoSlice.reducer;