import { Button } from '@chakra-ui/react';

interface PaginationItemProps {
	pageNumber: number;
	isCurrent?: boolean;
}

export function PaginationItem({ pageNumber, isCurrent = false }: PaginationItemProps) {
	const buttonCommonProps = {
		size: 'sm',
		fontSize: 'xs',
		width: '4',
	};

	const buttonNotSelectedProps = {
		...buttonCommonProps,
		bg: 'gray.700',
		_hover: { bg: 'gray.500' },
	};

	const buttonSelectedProps = {
		...buttonCommonProps,
		colorScheme: 'pink',
		disabled: true,
		_disabled: { bg: 'pink.500', cursor: 'default' },
	};

	const buttonProps = isCurrent ? buttonSelectedProps : buttonNotSelectedProps;

	return <Button {...buttonProps}>{pageNumber}</Button>;
}
