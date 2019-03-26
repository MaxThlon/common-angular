import {ThlonGroup} from './thlon-group';

export enum ThlonDataType {
    Text = "Text",
    Link = "Link"
}

export interface ThlonData {
  id: number
  dataType: ThlonDataType;
  data?: string;
}

export interface ThlonGroupDialogData {
  thlonGroup: ThlonGroup;
}
