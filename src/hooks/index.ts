import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState, RootDispatch } from '../store/main'

export const useAppDispatch = () => useDispatch<RootDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
