import { PageContent } from '@components/layout';
import { Table, Text, Button } from '@medly-components/core';
import React from 'react';
import { useSWRAxios } from '@medly-components/utils';
import { DashboardProps } from './types';

export const Dashboard: React.FC<DashboardProps> = ({ isLoading }) => {
    const { data, isValidating } = useSWRAxios('https://6124c2b9300c540017873d63.mockapi.io/api/users', { initialData: [] });
    return (
        <PageContent isLoading={isLoading}>
            <Button>open modal</Button>
            <Table
                data={data}
                isLoading={isValidating}
                columns={[
                    { title: 'first Name', field: 'firstName' },
                    { title: 'last Name', field: 'lastName' },
                    { title: 'email', field: 'email' }
                ]}
            />
        </PageContent>
    );
};
Dashboard.displayName = 'Dashboard';
