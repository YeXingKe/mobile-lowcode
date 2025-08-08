import { Cell, CellGroup } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import { createEditorInputProp, createEditorSwitchProp } from '@/utils/visual-editor-props';
import type { VisualEditorComponent } from '@/utils';
import _ from 'lodash-es'
import { createCellProps } from './createCellProps';


export default {
    key: 'cell',
    moduleName: 'baseWidgets',
    label: '单元格',
    preview: () => (
        <Cell title="单元格" value="内容"></Cell>
    ),
    render: ({ styles, block, props }) => {
        const { registerRef } = useGlobalProperties();
        const pickedProps = _.mapKeys(
            _.pick(props, ['groupTitle', 'inset', 'outBorder']),
            (value, key) => {
                if (key === 'groupTitle') return 'title';
                if (key === 'outBorder') return 'border';
                return key;
            }
        );

        return () => (
            <div style={styles}>
               <CellGroup
                    ref={(el) => registerRef(el, block._vid)}
                    {...pickedProps}
                    style="width:100%"
                >
                    {/* 读除了这三元素的其他元素 */}
                    <Cell {..._.omit(props, ['groupTitle', 'inset', 'outBorder'])} style="width:100%"></Cell>
                </CellGroup>
                {/* {!props.isGroup &&
                    <Cell {..._.omit(props, ['groupTitle', 'inset', 'outBorder'])} ref={(el) => registerRef(el, block._vid)}></Cell>
                } */}
            </div>
        );
    },
    props: {
        // isGroup: createEditorSwitchProp({ label: '是否包含CellGroup', defaultValue: true }),
        groupTitle: createEditorInputProp({ label: '分组标题', defaultValue: '' }),
        inset: createEditorSwitchProp({ label: '是否展示为圆角卡片风格', defaultValue: false }),
        outBorder: createEditorSwitchProp({ label: '是否显示外边框', defaultValue: true }),
        ...createCellProps()
    },
    events: [
        { label: '点击时触发', value: 'click' },
    ],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
} as VisualEditorComponent;
