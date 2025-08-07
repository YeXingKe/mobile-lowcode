import { Tabbar, TabbarItem } from 'vant'
import { useGlobalProperties } from '@/hooks/useGlobalProperties'
import { createNewBlock, type VisualEditorComponent } from '@/utils/visual-editor'
import { createTabbarProps } from './createTabbarProps'
import { onBeforeUnmount, onMounted } from 'vue';
import { createEditorCrossSortableProp } from '@/utils/visual-editor-props';
import { getTabbarItem } from './tabbar-item';
import { BASE_URL } from '@/utils';

const defaultTabbarItems = [
    {
        icon: 'home-o',
        title: '首页',
    },
    {
        icon: 'apps-o',
        title: '导航',
    },
    {
        icon: 'user-o',
        title: '我的',
    },
];

export default {
    key: 'tabbar',
    moduleName: 'containerWidgets',
    label: '底部导航栏',
    preview: () => (
        <Tabbar>
            {defaultTabbarItems.map((item) => (
                <TabbarItem icon={item.icon}>{item.title}</TabbarItem>
            ))}
        </Tabbar>
    ),
    render: ({ styles, block, props }) => {
        const { registerRef } = useGlobalProperties()
        onMounted(() => {
            const compEl = window.$$refs[block._vid]?.$el;
            const draggableEl = compEl?.closest('div[data-draggable]');
            const dragArea: HTMLDivElement = document.querySelector(
                '.simulator-editor-content > .dragArea ',
            )!;
            const tabbarEl = draggableEl?.querySelector('.van-tabbar') as HTMLDivElement;
            if (draggableEl && tabbarEl && dragArea) {
                tabbarEl.style.position = 'unset';
                draggableEl.style.position = 'fixed';
                draggableEl.style.bottom = '0';
                draggableEl.style.left = '0';
                draggableEl.style.width = '100%';
                draggableEl.style.zIndex = '1000';
                dragArea.style.paddingBottom = '56px';
            } else {
                document.body.style.paddingBottom = '50px';
                const slotEl = compEl?.closest('__slot-item'); // 用于从当前元素开始向上遍历 DOM 树，返回第一个匹配指定选择器的祖先元素
                if (slotEl) {
                    slotEl.style.position = 'fixed';
                    slotEl.style.bottom = '0';
                }
            }
        });

        onBeforeUnmount(() => {
            const dragArea: HTMLDivElement = document.querySelector(
                '.simulator-editor-content > .dragArea ',
            )!;
            if (dragArea) {
                dragArea.style.paddingBottom = '';
            }
        });

        return () => (
            <div style={styles}>
                <Tabbar ref={(el) => registerRef(el, block._vid)} v-model={props.modelValue} {...props}>
                    {props.tabs?.map((item) => {
                        const itemProps = item.block?.props;
                        const url = `${BASE_URL}${props.baseUrl}${itemProps.url}`.replace(/\/{2,}/g, '/');
                        return (
                            <TabbarItem name={item.value} key={item.value} {...itemProps} url={url}>
                                {item.label}
                            </TabbarItem>
                        );
                    })}
                </Tabbar>
            </div>
        )
    },
    events: [
        { label: '切换标签时触发', value: 'change' },
    ],
    props: {
        tabs: createEditorCrossSortableProp({
            label: '默认选项',
            labelPosition: 'top',
            multiple: false,
            showItemPropsConfig: true,
            defaultValue: defaultTabbarItems.map((item) => {
                const block = createNewBlock(getTabbarItem());
                block.props.icon = item.icon;
                return { label: item.title, value: item.icon, component: getTabbarItem(), block };
            }),
        }),
        ...createTabbarProps()
    },
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
} as VisualEditorComponent
