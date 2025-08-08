import { Image } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import type { VisualEditorComponent } from '@/utils';
import { computed } from 'vue';
import { Picture } from '@element-plus/icons-vue';
import { createImageProps } from './createImageProps';


export default {
  key: 'image',
  moduleName: 'baseWidgets',
  label: '图片',
  preview: () => (
    <div style="text-align:center;">
      <div style="font-size:20px;background-color:#f2f2f2;color:#ccc;display:inline-flex;width:100px;height:50px;align-items:center;justify-content:center">
        <el-icon>
          <Picture></Picture>
        </el-icon>
      </div>
    </div>
  ),
  render: ({ styles, block, props }) => {
    const { registerRef } = useGlobalProperties();
      return () => (
        <div style={styles}>
          <Image ref={(el) => registerRef(el, block._vid)} {...props}></Image>
        </div>
      );
  },
  props: {
    ...createImageProps()
  },
  events: [
    { label: '点击图片时触发', value: 'click' },
    { label: '图片加载完毕时触发', value: 'load' },
    { label: '图片加载失败时触发', value: 'error' },
  ],
  resize: {
    width: true,
  },
  model: {
    default: '绑定字段',
  },
} as VisualEditorComponent;