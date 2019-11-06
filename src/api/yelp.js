import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
        'Bearer ar9T_MRAkwfaipbUdPr_7XTZUkszoZ1qg7gWUBJqXwZ7KJhEJjn3lJ0PMRuEewNMUQo9fkoxWhhTZKjiyCtCoLrINT2fdqJHt03lrfvvK044phf1oTZ3qVqXUR3DXXYx'
    }
});