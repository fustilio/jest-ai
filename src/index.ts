import * as extensions from './matchers'
import { expect } from '@jest/globals';

export const matchers = extensions;

expect.extend(extensions)