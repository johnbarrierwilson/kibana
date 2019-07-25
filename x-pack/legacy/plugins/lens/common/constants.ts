/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export const PLUGIN_ID = 'lens';

export const BASE_URL = 'app/lens';

export function getEditPath(id: string) {
  return `/${BASE_URL}#/edit/${encodeURIComponent(id)}`;
}
