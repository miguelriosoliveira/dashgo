import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';
import { useQuery } from 'react-query';

import { Pagination } from '../../components';
import { api } from '../../services/api';
import { formatDate } from '../../utils/formatter';

interface User {
	id: string;
	name: string;
	email: string;
	createdAt: string;
}

interface UsersResponse {
	users: User[];
}

export default function UserList() {
	const { data, isLoading, isFetching, error } = useQuery<User[]>(
		'users',
		async () => {
			const response = await api.get<UsersResponse>('/users');
			const users = response.data.users.map(user => ({
				...user,
				createdAt: formatDate(new Date(user.createdAt)),
			}));
			return users;
		},
		{
			staleTime: 1000 * 5, // five seconds
		},
	);

	const isWideScreen = useBreakpointValue({ base: false, lg: true });

	return (
		<Box flex="1" borderRadius={8} bg="gray.800" p="8">
			<Flex mb="8" justify="space-between" align="center">
				<Heading size="lg" fontWeight="normal">
					Users
					{!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4" />}
				</Heading>

				<Link href="/users/create" passHref>
					<Button
						as="a"
						size="sm"
						fontSize="sm"
						colorScheme="pink"
						leftIcon={<Icon as={RiAddLine} fontSize="20" />}
					>
						New
					</Button>
				</Link>
			</Flex>

			{/* eslint-disable-next-line no-nested-ternary */}
			{isLoading ? (
				<Flex justify="center">
					<Spinner />
				</Flex>
			) : error ? (
				<Flex justify="center">
					<Text>Failed to recover users data</Text>
				</Flex>
			) : (
				<>
					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px={['1', '4', '6']} color="gray.300" width="8">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>User</Th>
								{isWideScreen && <Th>Created at</Th>}
								{isWideScreen && <Th w="8" />}
							</Tr>
						</Thead>
						<Tbody>
							{data.map(user => (
								<Tr key={user.id}>
									<Td px={['1', '4', '6']}>
										<Checkbox colorScheme="pink" />
									</Td>
									<Td>
										<Text fontWeight="bold">{user.name}</Text>
										<Text fontSize="sm" color="gray.300">
											{user.email}
										</Text>
									</Td>
									{isWideScreen && (
										<Td>
											<Text>{user.createdAt}</Text>
										</Td>
									)}
									{isWideScreen && (
										<Td>
											<Button
												as="a"
												size="sm"
												fontSize="sm"
												colorScheme="facebook"
												leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
											>
												Edit
											</Button>
										</Td>
									)}
								</Tr>
							))}
						</Tbody>
					</Table>

					<Pagination currentPage={1} pageSize={10} totalItems={45} />
				</>
			)}
		</Box>
	);
}
