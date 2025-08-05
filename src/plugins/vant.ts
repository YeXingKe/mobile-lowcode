import { Lazyload } from 'vant';
import type { App } from 'vue';
import '@vant/touch-emulator'; // 触摸事件模拟器
import 'vant/lib/index.css';

export const setupVant = (app: App) => {
  app.use(Lazyload);
};
