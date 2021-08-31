import { FormFieldSchema } from '@medly-components/forms';

export const FieldSchema: FormFieldSchema = {
    firstName: {
        type: 'text',
        required: true,
        variant: 'outlined',
        label: 'First Name'
    },
    lastName: {
        type: 'text',
        required: true,
        variant: 'outlined',
        label: 'Last Name'
    },
    email: {
        type: 'text',
        required: true,
        variant: 'outlined',
        label: 'E-mail'
    }
};
