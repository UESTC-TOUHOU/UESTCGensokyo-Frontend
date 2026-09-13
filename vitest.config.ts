import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// vitest 专用配置：与 vite.config.ts 分开，避免测试被 gh-pages base 配置干扰。
// 双盘映射（C:\disk ↔ D:\Projects）下 Vite fs.allow 会对 /@fs/ 路径二次校验，
// 因此 setupFiles 绝对化并把两个根都放进 allow 列表。
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: false,
  },
});
