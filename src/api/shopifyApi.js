import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_SHOPIFY_STORE_URL}/admin/api/2024-01`,
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_API_PASSWORD,
    'Content-Type': 'application/json',
  },
});

export default instance;
