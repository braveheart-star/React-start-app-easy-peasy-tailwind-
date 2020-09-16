import { createStore, persist } from "easy-peasy";
import model from "./models";

const store = createStore(
  persist(model, {
    storage: "localStorage",
  })
);

// Wrapping dev only code like this normally gets stripped out by bundlers
// such as Webpack when creating a production build.
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./models/index.ts", () => {
      store.reconfigure(model); // 👈 Here is the magic
    });
  }
}

export default store;
