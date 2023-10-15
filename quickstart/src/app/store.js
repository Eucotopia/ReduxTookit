import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../featrues/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})