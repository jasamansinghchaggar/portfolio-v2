import { createContext, useContext } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export const LocomotiveScrollContext = createContext<LocomotiveScroll | null>(null);

export const useLocomotiveScrollContext = () => {
  return useContext(LocomotiveScrollContext);
};