import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './App.css';
const App1 = () => {
    const [count, setCount] = useState(0);
    return (_jsxs("div", { className: "App", children: [_jsx("h1", { children: "Application 1" }), _jsx("div", { className: "card", children: _jsxs("button", { onClick: () => setCount((count) => count + 1), children: ["count is ", count] }) })] }));
};
export default App1;
