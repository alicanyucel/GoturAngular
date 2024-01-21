export interface IBaseEntity<T> {
	id: T;
	createdAt: Date;
	modifiedAt: Date;
}