import { Action, AnyAction, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import reportRedusers from './report-redusers';

let reducer = combineReducers ({
    reportsData: reportRedusers
});

export let store = configureStore({ reducer });

export type AppStore = ReturnType<typeof store.getState>;
export type AppActions<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;
export type AppThunk<A extends Action<any> = AnyAction, R = Promise<void>> = ThunkAction<R, AppStore, unknown, A>;

export default store;