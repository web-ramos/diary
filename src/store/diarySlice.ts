import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContext, IStore } from '../types/types'

const diarySlice = createSlice({
    name: 'diary',
    initialState: {
        idUser: 'Ruslan',
        contexts: [],
        projects: [],
        sprite: []
    } as IStore,
    reducers: {
        addContext (state, action: PayloadAction<IContext>) {
            const id = new Date().getTime().toString()
            state.contexts.push({
                id: id,
                order: id,
                name: action.payload.name,
                description: action.payload.description,
                deleted: false,
                icon: action.payload.icon
            });
        },
        editContext (state, action) {
            const index = state.contexts.findIndex((context => context.id === action.payload))
            state.contexts[index] = action.payload
        },
        deleteContext (state, action: PayloadAction<string>) {
            const index = state.contexts.findIndex((context => context.id === action.payload))
            state.contexts[index].deleted = !state.contexts[index].deleted;
        },
        deleteContextFinal (state, action) {
            state.contexts = state.contexts.filter(context => context.id !== action.payload)
        },
        setIconSprite (state, action) {
            state.sprite = [...action.payload]
        },
        clearIconSprite (state,action) {
            if (action.payload) {
                state.sprite = [];
            }
            state.sprite = [];
        }
    },
});

export const {
    addContext,
    editContext,
    deleteContext,
    deleteContextFinal,
    setIconSprite,
    clearIconSprite
} = diarySlice.actions;

export default diarySlice.reducer;