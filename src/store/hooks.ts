import { createTypedHooks } from "easy-peasy";
import { RootModel } from "./models/root.store";

const {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
  useStore,
} = createTypedHooks<RootModel>();

export { useStoreActions, useStoreState, useStoreDispatch, useStore };
