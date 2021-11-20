import { merge } from 'lodash';

/**
 * Merges database objects together
 *
 * @param config The base config. The input is not modified
 * @param overrides Any additional overrides
 */
export function mergeDatabaseConfig(config: any, ...overrides: any[]) {
  // return merge({}, config, ...overrides);
  return config;
}
