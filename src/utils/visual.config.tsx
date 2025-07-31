import baseWidgets from '@/components/base-widgets'
import { createVisualEditorConfig } from './visual-editor'

export const visualConfig = createVisualEditorConfig()
// 注册基础控件
Object.entries(baseWidgets).forEach(([name, widget]) =>
  visualConfig.registry('baseWidgets', name, widget as any),
)
// 注册容器组件
// Object.entries(containerComponent).forEach(([name, widget]) =>
//   visualConfig.registry('containerComponents', name, widget),
// );
