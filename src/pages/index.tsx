import { Button, Flex, Stack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Input } from '../components';

interface SignInFormData {
	email: string;
	password: string;
}

export default function SignIn() {
	const { register, handleSubmit, formState } = useForm();

	const handleSignIn: SubmitHandler<SignInFormData> = values => {
		console.log(values, formState);
	};

	return (
		<Flex w="100vw" h="100vh" align="center" justify="center">
			<Flex
				as="form"
				w="100%"
				maxW={360}
				bg="gray.800"
				p="8"
				borderRadius={8}
				flexDir="column"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input label="E-mail" name="email" type="email" {...register('email')} />
					<Input label="Senha" name="password" type="password" {...register('password')} />
				</Stack>

				<Button
					type="submit"
					mt="6"
					colorScheme="pink"
					size="lg"
					isLoading={formState.isSubmitting}
				>
					Login
				</Button>
			</Flex>
		</Flex>
	);
}
