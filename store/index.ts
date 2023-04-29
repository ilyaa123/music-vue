import { createStore } from 'vuex'

import {
  AuthModule,
  Store as AuthStore,
  State as AuthState,
} from './modules/auth/'

export type State = {
  auth: AuthState
}

export type Store = AuthStore<Pick<State, 'auth'>> 

export const store = createStore({
  modules: { AuthModule },
})

export const useStore = (): Store => {
  return store as Store
}

export default store