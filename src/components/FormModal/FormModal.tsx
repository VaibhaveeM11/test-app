import { Text, Modal, Button, Table } from '@medly-components/core';
import { Form } from '@medly-components/forms';
import { useSWRAxios, useAxios } from '@medly-components/utils';
import React, { useMemo } from 'react';
import { TableColumnSchema } from './TableColumns';
import { FieldSchema } from './FormFieldSchema';
import { useFormData } from '@components/hooks/useFormData';
import { UseTableWithModalFormContext } from '../context/UseTableWithModalFormContext';

export const FormModal: React.FC = React.memo(() => {
    const { request: callApi } = useAxios();
    const { data, isValidating, mutate } = useSWRAxios('https://6124c2b9300c540017873d63.mockapi.io/api/users', { initialData: [] });
    const { formData, modalState, onAddClick, onClose, editMode, onEditClick, setFormData } = useFormData(data);
    const onAddNewUser = () => onAddClick();

    const handleOnEdit = (formData: any) => {
        callApi({
            url: `https://6124c2b9300c540017873d63.mockapi.io/api/users/${formData.id}`,
            data,
            method: 'PUT',
            onSuccess: mutate
        });
    };

    const handleOnAdd = (formData: any) => {
        callApi({
            url: `https://6124c2b9300c540017873d63.mockapi.io/api/users/${formData.id}`,
            data,
            method: 'POST',
            onSuccess: mutate
        });
    };

    const onSubmit = (userData: any) =>
        callApi({
            url: 'https://6124c2b9300c540017873d63.mockapi.io/api/users',
            data: userData,
            method: 'POST',
            onSuccess: () => {
                mutate();
                editMode ? handleOnEdit(userData) : handleOnAdd(userData);
            }
        });

    const contextValue = useMemo(() => ({ showModal: onEditClick, setFormData }), [onEditClick, setFormData]);

    return (
        <>
            <Button onClick={onAddNewUser}>open modal</Button>
            <Modal open={modalState} onCloseModal={onClose}>
                <Modal.Header>
                    <Text textVariant="h3">Add new user</Text>
                </Modal.Header>
                <Modal.Content>
                    <Form fullWidth fieldSchema={FieldSchema} onSubmit={onSubmit} actionLabel="Add user" initialState={formData} />
                </Modal.Content>
            </Modal>
            <UseTableWithModalFormContext.Provider value={contextValue}>
                <Table data={data} isLoading={isValidating} columns={TableColumnSchema} />
            </UseTableWithModalFormContext.Provider>
        </>
    );
});

FormModal.displayName = 'ModalWithForm';
