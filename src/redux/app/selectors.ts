import { FullStateType } from '@/types/general-types';

export const getSuggestions = (state: FullStateType) => state.app.suggestions;

export const getInputValue = (state: FullStateType) => state.app.inputValue;
