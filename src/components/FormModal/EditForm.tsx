/* eslint-disable react/display-name */
import { Button, TableColumnConfig } from '@medly-components/core';
import { CreateIcon } from '@medly-components/icons';
import React, { useContext, useCallback } from 'react';
import { UseTableWithModalFormContext } from '../context/UseTableWithModalFormContext';

export const EditForm: TableColumnConfig['component'] = React.memo(({ rowData }) => {
    const { showModal } = useContext(UseTableWithModalFormContext);
    const onEdit = useCallback(() => {
        showModal(rowData);
    }, [rowData, showModal]);
    return (
        <Button size="S" variant="flat" onClick={onEdit}>
            <CreateIcon />
        </Button>
    );
});
