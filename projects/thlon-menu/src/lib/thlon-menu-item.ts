export enum EThlonMenuItemType {
  Branch = "Branch",
  Route = "Route",
  ServiceMethod = "ServiceMethod"
}

export interface ThlonMenuItem {
  menuItemType: EThlonMenuItemType;
  translation: string;
  disabled?: boolean;
  iconName: string;
}

export interface ThlonMenuItem_Branch extends ThlonMenuItem {
  children?: ThlonMenuItemList;
}

export interface ThlonMenuItem_Route extends ThlonMenuItem {
  route?: string;
}

export interface ThlonMenuItem_ServiceMethod extends ThlonMenuItem {
  serviceType: any;
  methodName: string;
  methodParameterArray?: any[];
}

export interface ThlonMenuItemList extends Array<ThlonMenuItem_Branch|ThlonMenuItem_Route|ThlonMenuItem_ServiceMethod> {}
