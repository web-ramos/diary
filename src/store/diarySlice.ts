import { createSlice } from '@reduxjs/toolkit'
import { IStore } from '../types/types'

const diarySlice = createSlice({
    name: 'diary',
    initialState: {
        idUser: 'Ruslan',
        contexts: [],
        projects: []
    } as IStore,
    reducers: {
        addContext (state, action) {
            const id = new Date().getTime().toString();
            state.contexts.push({
                id: id,
                order: id,
                name: action.payload.data.name,
                description: action.payload.data.description,
                deleted: false
            });
        },
        editContext (state, action) {
        },
        deleteContext (state, action) {
            const index = state.contexts.findIndex((context => context.id === action.payload));
            state.contexts[index].deleted = !state.contexts[index].deleted;
        },
        deleteContextFinal (state, action) {
            state.contexts = state.contexts.filter(context => context.id !== action.payload);              
        }        
    },
});

export const {
    addContext,
    editContext,
    deleteContext,
    deleteContextFinal
} = diarySlice.actions;

export default diarySlice.reducer;