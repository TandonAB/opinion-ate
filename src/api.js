import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/eEMGQxWX1ZhFJfhy0zjyh1O9u6wiyvOt',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
