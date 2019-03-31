/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { render, h } from 'preact';
import SassModulesInclusion from './SassModulesInclusion';

describe('sass modules inclusion', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<SassModulesInclusion />, div);
  });
});
