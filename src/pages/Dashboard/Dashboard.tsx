import { PageContent } from '@components/layout';
import React from 'react';
import { DashboardProps } from './types';
import FormModal from '@components/FormModal';

export const Dashboard: React.FC<DashboardProps> = ({ isLoading }) => {
    return (
        <PageContent isLoading={isLoading}>
            <FormModal />
        </PageContent>
    );
};
Dashboard.displayName = 'Dashboard';
