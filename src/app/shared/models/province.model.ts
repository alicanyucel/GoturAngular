import { IBaseEntity } from "./base-entity.model";

export interface IProvince extends IBaseEntity<string> {
	name: string;
	code: string;
}