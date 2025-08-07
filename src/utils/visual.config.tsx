import baseWidgets from '@/components/widgets/base-widgets'
import { createVisualEditorConfig } from './visual-editor'
import containerWidgets from '@/components/widgets/container-widgets';

export const visualConfig = createVisualEditorConfig()
// 注册基础控件
Object.entries(baseWidgets).forEach(([name, widget]) =>
  visualConfig.registry('baseWidgets', name, widget as any),
)
// 注册容器组件
Object.entries(containerWidgets).forEach(([name, widget]) =>
  visualConfig.registry('containerWidgets',name, widget as any),
);
