import { IBaseEntity } from "./base-entity.model";
import { IProvince } from "./province.model";

export interface IDistrict extends IBaseEntity<string> {
	name: string
	province: IProvince
}