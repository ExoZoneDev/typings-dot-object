export function move(from: string, to: string, obj: any): void;
export function copy(from: string, to: string, fromObj: any, toObj: any): void;
export function transfer(from: string, to: string, fromObj: any, toObj: any): void;
export function str(path: string, value: any, target: any): any;
export function pick(path: string, obj: any, remove?: boolean): any;
export function remove(path: string, obj: any): any;
export function del(path: string, obj: any): any;
export function transform(recipe: any, source: any, target?: any): any | void;
export function set(path: string, value: any, target: any): any;

export function object(obj: any): any;
export function dot(obj: any, target?: any): any;
