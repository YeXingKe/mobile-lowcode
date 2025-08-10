import { Field, Popup, TimePicker } from 'vant';
import { useGlobalProperties } from '@/hooks/useGlobalProperties';
import type { VisualEditorComponent } from '@/utils';
import { reactive, useAttrs } from 'vue';

import { dayjs } from 'element-plus';
import { createTimePickerProps } from './createTimePickerProps';


export default {
    key: 'time-picker',
    moduleName: 'baseWidgets',
    label: '表单项-时间',
    preview: () => (
        <Field
            label="时间"
            placeholder="点击选择"
        />
    ),
    render: ({ styles, block, props }) => {
        const { registerRef } = useGlobalProperties();

        const attrs = useAttrs()

        const state = reactive({
            showPicker: false,
            text: '',
            currentTime: ['12', '00', '00'],
        });

        const onConfirm = (value) => {
            const {selectedValues} = value
            if(selectedValues && selectedValues.length){
                state.text = `${selectedValues[0]}:${selectedValues[1]}:${selectedValues[2]}`
            }
            state.currentTime = value.selectedValues
            state.showPicker = false;
        };


        return () => {
            if (props.modelValue) {
                state.text = `${props.modelValue[0]}:${props.modelValue[1]}:${props.modelValue[2]}`
            }

            return (
                <div style={styles}>
                    <Field
                        {...props}
                        readonly
                        clickable
                        onClick={() => (state.showPicker = true)}
                        name={Array.isArray(props.name) ? [...props.name].pop() : props.name}
                    >
                        {{
                            input: () =>
                                state.text?.trim() == '' ? (
                                    <span class={'placeholder'}>{props.placeholder}</span>
                                ) : (
                                    state.text
                                ),
                        }}
                    </Field>
                    {/* 相当于v-model:show="state.showPicker" */}
                    <Popup v-model={[state.showPicker, 'show']} position={'bottom'}>
                        <TimePicker
                            ref={(el) => registerRef(el, block._vid)}
                            v-model:modelValue={state.currentTime}
                            // filter={filter}
                            {...props}
                            {...attrs}
                            onConfirm={onConfirm}
                            onCancel={() => (state.showPicker = false)}
                        />
                    </Popup>
                </div>
            )
        };
    },
    props: {
        ...createTimePickerProps()
    },
    events: [
        { label: '点击完成按钮时触发', value: 'confirm' },
        { label: '点击取消按钮时触发', value: 'cancel' },
        { label: '选项改变时触发', value: 'change' },
    ],
    resize: {
        width: true,
    },
    model: {
        default: '绑定字段',
    },
} as VisualEditorComponent;
