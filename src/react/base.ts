import { createOverhaulContext } from '../context';

export const baseContext = createOverhaulContext();

export const setDefaultFragment = baseContext.setDefaultFragment;
export const setDefaultJsx = baseContext.setDefaultJsx;
export const addOverhaul = baseContext.addOverhaul;
export const removeOverhaul = baseContext.removeOverhaul;
export const clearOverhauls = baseContext.clearOverhauls;
