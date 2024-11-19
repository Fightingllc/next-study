import { createContext, useContext, useState } from "react";

// 创建一个context对象
const ThemeContext = createContext("light");

function App() {
    const [theme, setTheme] = useState('light');
    // 用上下文 provider 包裹组件，以为里面所有的组件指定一个上下文的值：
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <Toolbar />
            </ThemeContext.Provider>
        </div>
    );
}

function Toolbar() {
    return <Button />
}


function Button() {
    // ✅ 推荐方式 使用usecontext Hook来消费context的值
    const theme = useContext(ThemeContext);
    return <button className={theme} />;
}