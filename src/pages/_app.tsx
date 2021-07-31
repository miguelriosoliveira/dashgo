import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';

import { Header, Sidebar } from '../components';
import { SidebarDrawerProvider } from '../contexts';
import { theme } from '../styles/theme';

import Login from '.';

export default function App({ Component, pageProps }: AppProps) {
	if (Component.name === Login.name) {
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
