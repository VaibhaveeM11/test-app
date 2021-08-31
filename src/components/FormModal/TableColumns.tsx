import { TableColumnConfig } from '@medly-components/core';
import { DeleteUser } from './DeleteUser';
import { EditForm } from './EditForm';

export const TableColumnSchema: Array<TableColumnConfig> = [
    {
        field: 'firstName',
        title: 'First Name'
    },
    {
        field: 'lastName',
        title: 'Last Name'
    },
    {
        field: 'email',
        title: 'email'
    },
    {
        field: 'Edit',
        title: 'Edit',
        component: EditForm
    },
    {
        field: 'Delete',
        title: 'Delete',
        component: DeleteUser
    }
];
