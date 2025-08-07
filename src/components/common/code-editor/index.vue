<template>
    <div ref="editorEl" class="ace-editor"></div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-monokai'; // 主题
import 'ace-builds/src-noconflict/mode-javascript'; // 语言模式
// import { formatVueCode } from '@/utils';
// import prettier from 'prettier/standalone';
// import parserHtml from 'prettier';

const props = defineProps({
    modelValue: String, // v-model 绑定
    mode: { type: String, default: 'javascript' }, // 语言模式
    theme: { type: String, default: 'monokai' }, // 主题
    readOnly: { type: Boolean, default: false }, // 只读模式
    vid: { type: [String, Number], default: '' }
});

const emit = defineEmits(['update:modelValue']);
const editorEl = ref(null);
let editor = null;

onMounted(() => {
    // 初始化编辑器
    editor = ace.edit(editorEl.value, {
        value: props.modelValue || '',
        mode: `ace/mode/${props.mode}`,
        theme: `ace/theme/${props.theme}`,
        readOnly: props.readOnly,
        fontSize: 14,
    });


    // 监听内容变化
    editor.session.on('change', () => {
        const value = editor.getValue();
        // if(props.mode === 'json'){
            if (value.trim().startsWith('{') || value.trim().startsWith('[')) {
                try {
                    const formatted = JSON.stringify(JSON.parse(value), null, 2);
                    if (value !== formatted) {
                        editor.setValue(formatted, 1); // 第二个参数 1 表示不记录历史
                    }
                } catch (e) {
                    // 忽略非 JSON 内容
                }
           }
        // }
        // else {
        //     editor.setValue(formatVueCode(value), 1);
        // }
        // else{
        //     try {
        //         // 使用 Prettier 格式化（支持 Vue SFC）
        //         const formattedCode = prettier.format(value, {
        //             parser: 'vue',
        //             // plugins: [parserHtml],
        //             semi: false, // 自定义规则
        //             singleQuote: true,
        //         });
        //         editor.setValue(formattedCode, 1); // 回显到编辑器
        //     } catch (e) {
        //         console.error('格式化失败:', e);
        //     }            
        // }
        emit('update:modelValue', value);
    });
});

// 监听外部值变化
watch(() => props.modelValue, (newVal) => {
    if (editor && newVal !== editor.getValue()) {
        editor.setValue(newVal);
    }
});

// 销毁编辑器
onUnmounted(() => {
    editor?.destroy();
});
</script>

<style scoped>
.ace-editor {
    width: 100%;
    height: 500px;
    border: 1px solid #ddd;
}
</style>