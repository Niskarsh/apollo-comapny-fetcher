const axios = require('axios');
require('dotenv').config();

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'X-Api-Key': process.env.APPOLO_API_KEY,
  }
};

const data = {
  page: 1,
  per_page: 10,
  organization_num_employees_ranges: ["1,100", "1,1000"],
  organization_locations: ["United States"],
  q_organization_keyword_tags: ["sales strategy", "lead"],
  q_organization_name: "Apollo.io"
};

axios.post('https://api.apollo.io/api/v1/mixed_companies/search', data, config)
  .then(response => {
    console.log(response.data?.breadcrumbs);
  })
  .catch(error => {
    console.error(error);
  });
