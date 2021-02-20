import { IKeyValueMap } from "../../Utils/collections/Map";

export interface ITDTargetAttributes {
  className: string;
}

export interface ITDAttributes {
  className: IKeyValueMap<string, string>;
}
