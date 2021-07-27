import { Box, Stack } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

import { NavSection } from './NavSection';

export function Sidebar() {
	return (
		<Box as="aside" w="64" mr="8">
			<Stack spacing="12" align="flex-start">
				<NavSection
					title="GENERAL"
					navLinks={[
						{ icon: RiDashboardLine, title: 'Dashboard' },
						{ icon: RiContactsLine, title: 'Users' },
					]}
				/>

				<NavSection
					title="AUTOMATION"
					navLinks={[
						{ icon: RiInputMethodLine, title: 'Forms' },
						{ icon: RiGitMergeLine, title: 'Automation' },
					]}
				/>
			</Stack>
		</Box>
	);
}
