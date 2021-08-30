import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { Header, Sidebar } from '../components';
import { SidebarDrawerProvider } from '../contexts';
import { makeServer } from '../services/mirage';
import { theme } from '../styles/theme';

import SignIn from '.';

if (process.env.NODE_ENV === 'development') {
	makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
	if (Component.name === SignIn.name) {
		return (
			<ChakraProvider theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		);
	}

	return (
		<ChakraProvider theme={theme}>
			<SidebarDrawerProvider>
				<Flex direction="column" h="100vh">
					<Header />

					<Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
						<Sidebar />

						<Component {...pageProps} />
					</Flex>
				</Flex>
			</SidebarDrawerProvider>
		</ChakraProvider>
	);
}
