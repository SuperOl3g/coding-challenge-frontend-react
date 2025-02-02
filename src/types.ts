import { ActionType } from './actions/ActionType';

export type Incident = {
  id: number;
  title: string;
  description?: string;
  reportDate?: number;
  incidentDate?: number;
  updateDate?: number;
  address?: string;
  coordinates?: Coordinates;
  imageUrl?: string;
  imageUrlThumb?: string;
};

export type Incidents = {
  [id: number]: Incident;
};

export interface Coordinates {
  lng: number;
  lat: number;
}

export interface Action {
  type: ActionType;
  payload: {
    [key: string]: any;
  };
}

export enum RequestStatus {
  UNINITED = 'UNINITED',
  FETCHING = 'FETCHING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}
