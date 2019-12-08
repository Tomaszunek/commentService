import { combineReducers } from 'redux'
import { commentReducer } from '../reducers/commentReducer'

export const rootReducer = combineReducers({
  comment: commentReducer,
})

export type RootState = ReturnType<typeof rootReducer>