import { ControlItem, Item } from "app/models/frontend";

export interface Dictionary {
  items: Item[],
  controlItems: ControlItem[]
}


export interface Dictionaries {
  roles: Dictionary;
  specializations: Dictionary;
  qualifications: Dictionary;
  skills: Dictionary;
  contries: Dictionary;
}
