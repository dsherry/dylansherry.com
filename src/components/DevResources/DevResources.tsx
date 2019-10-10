import React from 'react'
import { Box, Heading, Flex, Text } from 'rebass/styled-components'
import { Input } from '@rebass/forms'
import DataTable from 'react-data-table-component';

interface Props {
  resources: any
}

export const DevResources: React.FC<Props> = ({resources}) => {
  // Loop through GraphQL query and merge any edges of nodes together
  // Merges arrays and Filters out empty arrays
  const repos = resources.map(resource => resource.node.resources.development !== null && resource.node.resources.development).flat().filter(resource => resource !== false)
  console.log('repos', repos)
  const columns = [
    {
      name: 'Name',
      selector: 'name',
      sortable: true,
      cell: row => <Heading variant="label" p={2}><a href={row.link}>{row.name}</a></Heading>,
    },
    {
      name: 'Software',
      selector: 'software',
      sortable: true,
      cell: row => row.software.map(software => <Box p={2} mr={2} sx={{ border: '1px solid black' }}><Text variant="label">{software}</Text></Box>),
    },
    {
      name: 'Category',
      selector: 'categories',
      sortable: true,
      cell: row => <Flex flexWrap="wrap" py={3}>{row.categories.map(software => <Box minWidth="100%" p={2} mr={2} sx={{ border: '1px solid black', '&:not(:last-child)': { borderBottom: 0 } }}><Text variant="label">{software}</Text></Box>)}</Flex>,
    },
    {
      name: 'Quick Start',
      selector: 'install',
      cell: row => <Input type="text" disabled value={row.install} />,
    },
  ];

  return (
    <section className="DevResources">
      <Box py={4} sx={{ borderBottom: '1px solid black' }}>
        <DataTable
          columns={columns}
          data={repos}
          defaultSortField="title"
          noHeader
        />
      </Box>
    </section>
  );
}

export default DevResources