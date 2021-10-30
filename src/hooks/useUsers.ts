import { useQuery } from 'react-query';

import { api } from '../services/api';
import { formatDate } from '../utils/formatter';

interface User {
	id: string;
	name: string;
	email: string;
	createdAt: string;
}

interface UsersResponse {
	users: User[];
}

async function getUsers(page: number) {
	const { data, headers } = await api.get<UsersResponse>('/users', { params: { page } });
	const totalCount = Number(headers['x-total-count']);
	const users = data.users.map(user => ({
		...user,
		createdAt: formatDate(new Date(user.createdAt)),
	}));
	return { users, totalCount };
}

export function useUsers(page: number) {
	return useQuery(['users', page], () => getUsers(page), {
		staleTime: 5 * 1000, // five seconds
	});
}
