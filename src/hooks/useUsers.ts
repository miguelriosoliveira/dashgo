import { useQuery } from 'react-query';

import { api } from '../services/api';
import { formatDate } from '../utils/formatter';

export interface User {
	id: string;
	name: string;
	email: string;
	created_at: string;
}

export interface UsersResponse {
	users: User[];
	totalCount: number;
}

export async function getUsers(page: number) {
	try {
		const { data, headers } = await api.get<UsersResponse>('/users', { params: { page } });

		console.log({ data });

		const totalCount = Number(headers['x-total-count']);
		const users = data.users.map(user => ({
			...user,
			created_at: formatDate(new Date(user.created_at)),
		}));
		return { users, totalCount };
	} catch (error) {
		if (error.response) {
			// The request was made and the server responded with a status code
			// that falls out of the range of 2xx
			// console.log(error.response.data);
			console.log('error.response.status ->', error.response.status);
			console.log('error.response.headers ->', error.response.headers);
		} else if (error.request) {
			// The request was made but no response was received
			// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
			// http.ClientRequest in node.js
			console.log('error.request ->', error.request);
		} else {
			// Something happened in setting up the request that triggered an Error
			console.log('error.message ->', error.message);
		}
		console.log('error.config ->', error.config);
	}
}

export function useUsers(page: number, initialData?: UsersResponse) {
	return useQuery<UsersResponse>(['users', page], () => getUsers(page), {
		staleTime: 1000 * 60 * 10, // 10 minutes
		initialData,
	});
}
