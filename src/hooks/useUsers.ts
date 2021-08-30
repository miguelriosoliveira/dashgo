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

async function getUsers() {
	const response = await api.get<UsersResponse>('/users');
	const users = response.data.users.map(user => ({
		...user,
		createdAt: formatDate(new Date(user.createdAt)),
	}));
	return users;
}

export function useUsers() {
	return useQuery('users', getUsers, {
		staleTime: 1000 * 5, // five seconds
	});
}
