import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import combinedFeatureReducers from './nodes/features';

export const makeStore = () => configureStore({
  reducer: {
    features: combinedFeatureReducers,
  },
});

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const useAppStore = useStore;
