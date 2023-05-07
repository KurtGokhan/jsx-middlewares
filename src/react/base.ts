import { createOverhaulContext } from '../context';

export const defaultOverhaulContext = createOverhaulContext();

export const addOverhaul = defaultOverhaulContext.addOverhaul;
export const removeOverhaul = defaultOverhaulContext.removeOverhaul;
export const clearOverhauls = defaultOverhaulContext.clearOverhauls;
