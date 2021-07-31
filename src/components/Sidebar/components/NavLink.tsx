import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ElementType } from 'react';

export interface NavLinkProps extends LinkProps {
	icon: ElementType;
	href: string;
	children: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
	return (
		<Link href={href} passHref>
			<ChakraLink display="flex" alignItems="center" {...rest}>
				<Icon as={icon} fontSize="20" />
				<Text ml="4" fontWeight="medium">
					{children}
				</Text>
			</ChakraLink>
		</Link>
	);
}
