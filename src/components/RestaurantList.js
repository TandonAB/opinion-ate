import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({
  loadRestaurants,
  restaurants,
  loading,
  loadError,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      {/* {console.log(restaurants)} */}
      {loading && <CircularProgress data-testid="loading-indicator" />}
      {loadError && (
        <Alert severity="error">Restaurants could not be loaded.</Alert>
      )}
      <List>
        {loadError &&
          restaurants.map(restaurant => (
            <ListItem key={restaurant.id}>
              <ListItemText>{restaurant.name}</ListItemText>
            </ListItem>
          ))}
      </List>
    </>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loading: state.restaurants.loading,
  loadError: state.restaurants.loadError,
});

const mapDispatchToProps = {loadRestaurants};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
