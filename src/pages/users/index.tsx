import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
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

import { Pagination } from '../../components';

export default function UserList() {
	const isWideScreen = useBreakpointValue({ base: false, lg: true });

	return (
		<Box flex="1" borderRadius={8} bg="gray.800" p="8">
			<Flex mb="8" justify="space-between" align="center">
				<Heading size="lg" fontWeight="normal">
					Users
				</Heading>

				<Link href="/users/create">
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
					<Tr>
						<Td px={['1', '4', '6']}>
							<Checkbox colorScheme="pink" />
						</Td>
						<Td>
							<Text fontWeight="bold">Miguel Rios</Text>
							<Text fontSize="sm" color="gray.300">
								miguelriosoliveira@gmail.com
							</Text>
						</Td>
						{isWideScreen && (
							<Td>
								<Text>Apr 04, 2021</Text>
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
				</Tbody>
			</Table>

			<Pagination currentPage={1} pageSize={10} totalItems={45} />
		</Box>
	);
}
