import React, { useState } from 'react';
import {
  useReactTable,
  flexRender,
  ColumnDef,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  Updater,
} from '@tanstack/react-table';
import { useGetUsersQuery } from '../../services/usersService';
import { IUser } from '../../models/IUser';

import './UsersTable.scss';

const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  },
  {
    accessorKey: 'username',
    header: 'Username',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  },
  {
    accessorKey: 'email',
    header: 'E-mail',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  },
];

const UsersTable: React.FC = () => {
  const { data: users = [], isLoading, error } = useGetUsersQuery('');
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
    onColumnFiltersChange: (updaterOrValue: Updater<ColumnFiltersState>) => {
      setColumnFilters((old) => {
        const newFilters =
          typeof updaterOrValue === 'function'
            ? updaterOrValue(old)
            : updaterOrValue;

        return newFilters;
      });
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <table className='styled-table'>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className='header-cell'>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                <div className='search-container'>
                  <input
                    type='text'
                    placeholder={`Search ${header.column.id}`}
                    // @ts-expect-error: Unreachable code error
                    value={
                      columnFilters.find(
                        (filter) => filter.id === header.column.id
                      )?.value ?? ''
                    }
                    onChange={(e) => {
                      setColumnFilters((oldFilters) => {
                        const newFilters = oldFilters.filter(
                          (filter) => filter.id !== header.column.id
                        );
                        newFilters.push({
                          id: header.column.id,
                          value: e.target.value,
                        });
                        return newFilters;
                      });
                    }}
                    className='search-input'
                  />
                </div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className='body-cell'>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
