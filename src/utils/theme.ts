// 获取 CSS 变量
export const getCssVariable = (name) => {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
};

// 修改主题
export const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
};

// 监听主题变化（可选）
export const watchThemeChange = (callback) => {
    const observer = new MutationObserver(() => {
      // 当 data-theme 变化时，执行回调并传递当前主题名
      callback(document.documentElement.getAttribute('data-theme'));
    });
  
    // 监听 documentElement 的 data-theme 属性变化
    observer.observe(document.documentElement, {
      attributes: true,          // 监听属性变化
      attributeFilter: ['data-theme'], // 只监听 data-theme 属性
    });
  
    // 返回 observer 实例，便于后续断开监听
    return observer;
  };