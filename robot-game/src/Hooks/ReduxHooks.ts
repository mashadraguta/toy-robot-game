import { AppDispatch, RootState } from "../Store";

import {TypedUseSelectorHook, useDispatch,useSelector} from "react-redux";


//custom hooks will take care of the type automatically 

export const useAppDispatch =()=>useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

