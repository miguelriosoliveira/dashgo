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
} from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import { Pagination } from '../../components';

export default function UserList() {
	return (
		<Box flex="1" borderRadius={8} bg="gray.800" p="8">
			<Flex mb="8" justify="space-between" align="center">
				<Heading size="lg" fontWeight="normal">
					Users
				</Heading>

				<Button
					as="a"
					size="sm"
					fontSize="sm"
					colorScheme="pink"
					leftIcon={<Icon as={RiAddLine} fontSize="20" />}
				>
					New
				</Button>
			</Flex>

			<Table colorScheme="whiteAlpha">
				<Thead>
					<Tr>
						<Th px="6" color="gray.300" width="8">
							<Checkbox colorScheme="pink" />
						</Th>
						<Th>User </Th>
						<Th>Created at</Th>
						<Th w="8" />
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>
							<Checkbox colorScheme="pink" />
						</Td>
						<Td>
							<Text fontWeight="bold">Miguel Rios</Text>
							<Text fontSize="sm" color="gray.300">
								miguelriosoliveira@gmail.com
							</Text>
						</Td>
						<Td>
							<Text>Apr 04, 2021</Text>
						</Td>
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
					</Tr>
				</Tbody>
			</Table>

			<Pagination />
		</Box>
	);
}
