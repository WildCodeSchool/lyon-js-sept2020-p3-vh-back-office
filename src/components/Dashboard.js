import * as React from 'react';
import { Resource } from 'react-admin';
import { Card, CardContent, CardHeader } from '@material-ui/core';
import {
  userListDahsboard,
  reviewsListDashboard,
  messageListDashboard,
} from './Dashboard/DashboardContent';

export default () => (
  <>
    <Card>
      <CardHeader title="Bienvenue sur le back-office d'Hypnose & Vins" />
    </Card>

    <Card>
      <CardHeader title="Nouveaux Utilisateurs" />
      <CardContent>
        {' '}
        <Resource
          options={{ label: 'Users' }}
          name="users"
          list={userListDahsboard}
        />
      </CardContent>
    </Card>

    <Card>
      <CardHeader title="Derniers Commentaires" />
      <CardContent>
        {' '}
        <Resource
          options={{ label: 'Reviews' }}
          name="reviews"
          list={reviewsListDashboard}
        />
      </CardContent>
    </Card>

    <Card>
      <CardHeader title="Derniers Messages" />
      <CardContent>
        {' '}
        <Resource
          options={{ label: 'Messages' }}
          name="contact"
          list={messageListDashboard}
        />
      </CardContent>
    </Card>
  </>
);
