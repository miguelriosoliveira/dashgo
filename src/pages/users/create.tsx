import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from '@chakra-ui/react';

import { Input } from '../../components';

export default function UserList() {
	return (
		<Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
			<Heading size="lg" fontWeight="normal">
				Create user
			</Heading>

			<Divider my="6" borderColor="gray.700" />

			<Stack spacing={['6', '8']}>
				<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
					<Input name="name" label="Full name" />
					<Input name="email" type="email" label="E-mail" />
				</SimpleGrid>

				<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
					<Input name="password" type="password" label="Password" />
					<Input name="passwordConfirmation" type="password" label="Password confirmation" />
				</SimpleGrid>
			</Stack>

			<Flex mt="8" justify="flex-end">
				<HStack spacing="4">
					<Button colorScheme="whiteAlpha">Cancelar</Button>
					<Button colorScheme="pink">Salvar</Button>
				</HStack>
			</Flex>
		</Box>
	);
}
