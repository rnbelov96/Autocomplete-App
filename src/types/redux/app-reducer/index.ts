export type AppInitialStateType = {
  countries: string[];
  suggestions: string[];
  inputValue: string;
};

export type AppActionConstType = {
  CHANGE_INPUT: 'CHANGE_INPUT';
  FIND_MATCH: 'FIND_MATCH';
};

export type ChangeInputActionType = {
  type: AppActionConstType['CHANGE_INPUT'];
  payload: string;
};

export type FindMatchActionType = {
  type: AppActionConstType['FIND_MATCH'];
};

export type AppActionType = FindMatchActionType | ChangeInputActionType;
