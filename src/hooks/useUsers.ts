import { useQuery } from 'react-query';

import { api } from '../services/api';
import { formatDate } from '../utils/formatter';

interface User {
	id: string;
	name: string;
	email: string;
	created_at: string;
}

interface UsersResponse {
	users: User[];
}

async function getUsers(page: number) {
	const { data, headers } = await api.get<UsersResponse>('/users', { params: { page } });
	const totalCount = Number(headers['x-total-count']);
	const users = data.users.map(user => ({
		...user,
		created_at: formatDate(new Date(user.created_at)),
	}));
	return { users, totalCount };
}

export function useUsers(page: number) {
	return useQuery(['users', page], () => getUsers(page), {
		staleTime: 1000 * 60 * 10, // 10 minutes
	});
}
