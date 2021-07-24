import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { Header, Sidebar } from '../components';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Flex direction="column" h="100vh">
				<Header />

				<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
					<Sidebar />

					<Component {...pageProps} />
				</Flex>
			</Flex>
		</ChakraProvider>
	);
}

export default MyApp;
