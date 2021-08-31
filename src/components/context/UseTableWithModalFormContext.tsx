import { ObjectType } from '@medly-components/core/dist/es/components/Table/types';
import React, { createContext } from 'react';

export const UseTableWithModalFormContext = createContext<{
    showModal?: (defaultData: ObjectType) => void;
    setFormData?: React.Dispatch<React.SetStateAction<any>>;
}>({});
