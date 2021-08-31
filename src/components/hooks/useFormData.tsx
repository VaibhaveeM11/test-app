import { ObjectType } from '@medly-components/core/dist/es/components/Table/types';
import { useCallback, useState } from 'react';

export const useFormData = (val: ObjectType) => {
    const [formData, setFormData] = useState(val),
        [modalState, setModalState] = useState(false),
        [editMode, setEditMode] = useState(false);

    const onEditClick = useCallback((rowData: ObjectType) => {
        setFormData(rowData);
        setModalState(true);
        setEditMode(true);
    }, []);

    const onAddClick = useCallback(() => {
        setModalState(true);
        setEditMode(false);
    }, []);

    const onClose = useCallback(() => {
        setModalState(false);
        setFormData({});
    }, []);

    return { formData, modalState, editMode, onEditClick, onClose, setFormData, onAddClick };
};
