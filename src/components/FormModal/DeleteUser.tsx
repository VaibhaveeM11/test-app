import { Button, TableColumnConfig } from '@medly-components/core';
import { DeleteIcon } from '@medly-components/icons';
import { useSWRAxios, useAxios } from '@medly-components/utils';
import React, { useCallback, useContext } from 'react';
import { UseTableWithModalFormContext } from '../context/UseTableWithModalFormContext';

export const DeleteUser: TableColumnConfig['component'] = React.memo(({ rowData }) => {
    const { request: callApi } = useAxios();
    const { data, mutate } = useSWRAxios('https://6124c2b9300c540017873d63.mockapi.io/api/users', { initialData: [] });
    const onDelete = useCallback(() => {
        callApi({
            url: `https://6124c2b9300c540017873d63.mockapi.io/api/users/${rowData.id}`,
            data,
            method: 'DELETE',
            onSuccess: mutate
        });
    }, [callApi, data, mutate, rowData.id]);
    return (
        <Button size="S" variant="flat" onClick={onDelete}>
            <DeleteIcon />
        </Button>
    );
});
