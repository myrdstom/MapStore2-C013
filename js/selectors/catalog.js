/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { get } from 'lodash';
/**
 * gets the values of the Catalog records
 */
export const catalogRecordsSelector = state => get(state, "catalog.result.records", []);
