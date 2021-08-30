import { FormFieldSchema } from '@medly-components/forms';

export const FieldSchema: FormFieldSchema = {
    firstName: {
        type: 'text',
        variant: 'outlined',
        label: 'First Name'
    },
    lastName: {
        type: 'text',
        variant: 'outlined',
        label: 'Last Name'
    },
    Email: {
        type: 'text',
        variant: 'outlined',
        label: 'E-mail'
    }
};
