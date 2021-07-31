import { Box, Stack, HStack } from '@chakra-ui/react';

import { clamp } from '../../utils';

import { PaginationItem } from './components';

interface PaginationProps {
	currentPage: number;
	pageSize: number;
	totalItems: number;
}

export function Pagination({ currentPage, pageSize, totalItems }: PaginationProps) {
	const totalPages = Math.ceil(totalItems / pageSize);
	const currentPageSafe = clamp(currentPage, 1, 10);
	const to = Math.min(currentPageSafe * pageSize, totalItems);
	const from = to - pageSize + 1;

	return (
		<Stack direction={['column', 'row']} mt="8" align="center" justify="space-between" spacing="6">
			<Box>
				<strong>{from}</strong> - <strong>{to}</strong> of <strong>{totalItems}</strong>
			</Box>

			<HStack spacing="2">
				{[...Array(totalPages).keys()].map(pageNumber => (
					<PaginationItem
						key={pageNumber}
						pageNumber={pageNumber + 1}
						isCurrent={pageNumber + 1 === currentPageSafe}
					/>
				))}
			</HStack>
		</Stack>
	);
}
