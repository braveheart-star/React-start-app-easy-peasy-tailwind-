import { UserStore } from "../interfaces";

interface RootStore {
  user: UserStore;
}

interface RootActions {}

interface RootThunks {}

export interface RootModel extends RootStore, RootActions, RootThunks {}

const rootModel: RootModel = {
  user: [],
};

export default rootModel;
