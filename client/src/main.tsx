import { BrowserRouter } from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster />
        <App />
      </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
