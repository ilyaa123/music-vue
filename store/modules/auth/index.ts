import {
	ActionContext,
	ActionTree,
	GetterTree,
	MutationTree,
	Module,
	Store as VuexStore,
	CommitOptions,
	DispatchOptions,
} from 'vuex'

import { State as RootState } from '@/store'

export type State = {
	isAuthenticated: boolean
}

const state: State = {
	isAuthenticated: false,
}

export enum MutationTypes {
	SET_USER_AUTHENTICATED = 'SET_USER_AUTHENTICATED',
}

export type Mutations<S = State> = {
	[MutationTypes.SET_USER_AUTHENTICATED](state: S): void
}

const mutations: MutationTree<State> & Mutations = {
	[MutationTypes.SET_USER_AUTHENTICATED](state: State) {
		state.isAuthenticated = true
	},
}

export enum ActionTypes {
	SIGNIN = 'SIGNIN',
}

type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
	[ActionTypes.SIGNIN](
		{ commit }: AugmentedActionContext,
		payload: { username: string; password: string },
	): void
}

export const actions: ActionTree<State, RootState> & Actions = {
	async [ActionTypes.SIGNIN](
		{ commit },
		payload: { username: string; password: string },
	) {
	try {
	
	} catch (err) {
	
	}
},
}

export type Getters = {
	isAuthenticated(state: State): boolean
}

export const getters: GetterTree<State, RootState> & Getters = {
	isAuthenticated: (state) => {
		return state.isAuthenticated
	},
}

export type Store<S = State> = Omit<
	VuexStore<S>,
	'commit' | 'getters' | 'dispatch'
	> & {
	commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
		key: K,
		payload: P,
		options?: CommitOptions,
	): ReturnType<Mutations[K]>
	} & {
	getters: {
		[K in keyof Getters]: ReturnType<Getters[K]>
	}
	} & {
	dispatch<K extends keyof Actions>(
		key: K,
		payload: Parameters<Actions[K]>[1],
		options?: DispatchOptions,
	): ReturnType<Actions[K]>
}

export const AuthModule: Module<State, RootState> = {
	state,
	mutations,
	actions,
	getters,
}