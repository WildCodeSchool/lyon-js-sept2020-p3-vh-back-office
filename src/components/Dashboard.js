import * as React from 'react';
import { Resource } from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import {
  wineListDashboard,
  userListDahsboard,
} from './Dashboard/DashboardContent';

export default () => (
  <Card>
    <CardHeader title="Bienvenue sur le back-office d'Hypnose & Vins" />
    <CardContent>
      {' '}
      <Resource
        options={{ label: 'Wines' }}
        name="products"
        list={wineListDashboard}
      />
      <Resource
        options={{ label: 'Users' }}
        name="users"
        list={userListDahsboard}
      />
    </CardContent>
  </Card>
);
