import { HttpParams } from "@angular/common/http";

export type TQueryParamObject = HttpParams | {
	[param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
};

export function toQueryParamObject(query: any): TQueryParamObject {
	const params: TQueryParamObject = {};

	Object.keys(query).forEach(k => {
		if (
			typeof query[k] === 'string' ||
			typeof query[k] === 'bigint' ||
			typeof query[k] === 'boolean' ||
			typeof query[k] === 'number'
		) {
			params[k] = query[k];
		} else {
			if (query[k] instanceof Date) {
				params[k] = String(query[k])
			}
			// more type of props can go here..
		}
	});

	console.info("QUERY:", query);
	console.info("PARAMS:", params);

	return params;
}

