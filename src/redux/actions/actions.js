import { CHANGEINPUT, FINDMATCH } from './actionsTypes';

export function changeInput(data) {
  return {
    type: CHANGEINPUT,
    payload: data,
  };
}

export function findMatch() {
  return {
    type: FINDMATCH,
  };
}
