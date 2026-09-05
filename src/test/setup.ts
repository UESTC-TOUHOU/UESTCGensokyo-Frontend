import { expect, afterEach } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup } from '@testing-library/react';

// vitest 5 下 jest-dom 的 /vitest 入口偶发不挂载全局 expect，这里显式扩展。
expect.extend(matchers);

// 每个测试后卸载 React 树，避免 DOM 污染影响后续用例。
afterEach(() => cleanup());
