import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import RestaurantList from './RestaurantList';

const RestaurantScreen = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Restaurants</Typography>
        <RestaurantList />
      </CardContent>
    </Card>
  );
};

export default RestaurantScreen;
