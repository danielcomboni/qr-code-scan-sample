// import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk, { ThunkMiddleware } from "redux-thunk";
// import { AppActions } from "../actions/appActions";
// import { switchComponentReducer } from "../redux/reducers/reducerMainBody";
// // import { switchComponentReducer } from "../reducers/main/mainBodyReducer";
// // import { rootReducer } from "../reducers/reducers";

// export const rootReducer = combineReducers({
//   componentName: switchComponentReducer,
// });

// export type AppState = ReturnType<typeof rootReducer>;

// export const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>));

export const t = () => 1