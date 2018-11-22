
const API_URL = 'http://127.0.0.1:5000';

async function request(endpoint, { data = {}, method = 'GET' }) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  return response.json();
}

export function predict({ values }) {
  return request('predict', {
    method: 'POST',
    data: { values }
  });
}

export default {
  predict
};
