import { Box, Stack, Text } from '@chakra-ui/react';

import { NavLink, NavLinkProps } from './NavLink';

interface NavSectionProps {
	title: string;
	navLinks: NavLinkProps[];
}

export function NavSection({ title, navLinks }: NavSectionProps) {
	return (
		<Box>
			<Text fontWeight="bold" color="gray.400" fontSize="small">
				{title}
			</Text>

			<Stack spacing="4" mt="8" align="stretch">
				{navLinks.map(navLink => (
					<NavLink {...navLink} />
				))}
			</Stack>
		</Box>
	);
}
