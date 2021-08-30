import { Text, Modal, Button, Table } from '@medly-components/core';
import { Form } from '@medly-components/forms';
import { useSWRAxios, useAxios } from '@medly-components/utils';
import React, { useState } from 'react';
import { FieldSchema } from './FormFieldSchema';

export const FormModal: React.FC = React.memo(() => {
    const { request: callApi, isLoading } = useAxios();
    const [openModal, setOpenModal] = useState(false);
    const { data, isValidating, mutate } = useSWRAxios('https://6124c2b9300c540017873d63.mockapi.io/api/users', { initialData: [] });
    const onSubmit = (userData: any) =>
        callApi({
            url: 'https://6124c2b9300c540017873d63.mockapi.io/api/users',
            data: userData,
            method: 'POST',
            onSuccess: () => mutate()
        });
    const handleOnModal = () => setOpenModal(prevState => !prevState);
    const onClose = () => setOpenModal(false);

    return (
        <>
            <Button onClick={handleOnModal}>open modal</Button>
            <Modal open={openModal} onCloseModal={onClose}>
                <Modal.Header>
                    <Text textVariant="h3">Add New user</Text>
                </Modal.Header>
                <Modal.Content>
                    <Form fullWidth fieldSchema={FieldSchema} onSubmit={onSubmit} actionLabel="Add user" />
                </Modal.Content>
            </Modal>
            <Table
                data={data}
                isLoading={isValidating}
                columns={[
                    { title: 'first Name', field: 'firstName' },
                    { title: 'last Name', field: 'lastName' },
                    { title: 'email', field: 'email' }
                ]}
            />
        </>
    );
});

FormModal.displayName = 'ModalWithForm';
