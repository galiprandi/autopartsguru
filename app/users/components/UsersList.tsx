'use client'

import { Table } from '@/app/components/ui/Table'
import { createColumnHelper } from '@tanstack/react-table'
import { UsersDataType } from '../page'
import { IconButton } from '@/app/components/ui/IconButton'
import Link from 'next/link'

const columnHelper = createColumnHelper<UsersDataType>()

const columns = [
  columnHelper.accessor('alias', {
    id: 'alias',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('email', {
    id: 'email',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor('role', {
    header: () => 'Role',
    cell: info => info.renderValue(),
  }),
  columnHelper.display({
    id: 'options',
    header: '',
    cell: info => (
      <Link href={`/users/${info.row.original.email}`}>
        <IconButton
          icon="gear"
          data-tooltip="User Settings"
          data-placement="left"
        />
      </Link>
    ),
  }),
]

export const UsersList = ({ data }: { data: UsersDataType[] }) => {
  return <Table data={data} columns={columns} />
}
