export type JsonPrimitive = number | string | boolean | null;
export type JsonObject = { [key in string]?: JsonValue };
export interface JsonArray extends Array<JsonValue> {}
export type JsonValue = JsonObject | JsonArray | JsonPrimitive;


export type Config = {
  has(key: string): boolean;

  keys(): string[];

  get<T = JsonValue>(key?: string): T;
  getOptional<T = JsonValue>(key?: string): T | undefined;

  getConfig(key: string): Config;
  getOptionalConfig(key: string): Config | undefined;

  getConfigArray(key: string): Config[];
  getOptionalConfigArray(key: string): Config[] | undefined;

  getNumber(key: string): number;
  getOptionalNumber(key: string): number | undefined;

  getBoolean(key: string): boolean;
  getOptionalBoolean(key: string): boolean | undefined;

  getString(key: string): string;
  getOptionalString(key: string): string | undefined;

  getStringArray(key: string): string[];
  getOptionalStringArray(key: string): string[] | undefined;
};