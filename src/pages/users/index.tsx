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

export default function UserList() {
	return (
		<Box flex="1" borderRadius={8} bg="gray.800" p="8">
			<Flex mb="8" justify="space-between" align="center">
				<Heading size="lg" fontWeight="normal">
					Usuários
				</Heading>

				<Button
					as="a"
					size="sm"
					fontSize="sm"
					colorScheme="pink"
					leftIcon={<Icon as={RiAddLine} fontSize="20" />}
				>
					Criar novo
				</Button>
			</Flex>

			<Table colorScheme="whiteAlpha">
				<Thead>
					<Tr>
						<Th px="6" color="gray.300" width="8">
							<Checkbox colorScheme="pink" />
						</Th>
						<Th>Usuário </Th>
						<Th>Data de cadastro</Th>
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
							<Text>04 de Abril, 2021</Text>
						</Td>
						<Td>
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="facebook"
								leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
							>
								Editar
							</Button>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</Box>
	);
}
