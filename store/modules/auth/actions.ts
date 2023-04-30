import { State as RootState } from '@/store';

import { State } from './state';

import { Mutations, MutationTypes } from './mutations';
import { ActionContext, ActionTree } from 'vuex';
import { Login } from '~/api/auth';

export enum ActionTypes {
	AUTH__SIGNIN = 'SIGNIN',
}

type AugmentedActionContext = {
	commit<K extends keyof Mutations>(
		key: K,
		payload: Parameters<Mutations[K]>[1],
	): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export interface Actions {
	[ActionTypes.AUTH__SIGNIN]({ commit }: AugmentedActionContext, payload: {code: string, redirect_uri: string}): void
}

export const actions: ActionTree<State, RootState> & Actions = {
	async [ActionTypes.AUTH__SIGNIN]({ commit }, payload) {
		try {
			const data = {
				client_id: process.env.NUXT_CLIENT_ID!,
				client_secret: process.env.NUXT_CLIENT_SECRET!,
				code: payload.code,
				redirect_uri: payload.redirect_uri,
				grant_type: 'authorization_code'
			};
			const res = await Login(data);
			commit(MutationTypes.AUTH__SET_USER_AUTHENTICATED, undefined)
			console.log('res', res.data)
		} catch (err) {
			console.log('err', err)
		}
	},
}