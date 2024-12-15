const { createRoot } = require("react-dom/client");
const { default: App } = require("./App");

createRoot(document.getElementById("root")).render(<App />);
