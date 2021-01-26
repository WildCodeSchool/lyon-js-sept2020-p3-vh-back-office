/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:5000';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({
      Accept: 'application/json',
    });
  }
  options.credentials = 'include';
  return fetchUtils.fetchJson(url, options);
};

export default {
  getList: (resource) => {
    const url = `${apiUrl}/${resource}`;

    return httpClient(url).then(({ /* headers, */ json }) => ({
      data: json,
      total: json.length,
    }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json,
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(headers.get('content-range').split('/').pop(), 10),
    }));
  },

  update: (resource, params) => {
    if (
      resource !== 'sponsors' &&
      resource !== 'events' &&
      resource !== 'users'
    ) {
      return httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }
    const formData = new FormData();
    for (const [key, value] of Object.entries(params.data)) {
      if (value === null) {
        formData.append(key, '');
      } else if (value !== null) {
        formData.append(key, value);
      }
    }
    if (params.data.image) {
      formData.delete('image');
      if (params.data.image.rawFile) {
        formData.append('image', params.data.image.rawFile);
      } else {
        formData.append('image', params.data.image);
      }
    }
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) => {
    if (
      resource !== 'sponsors' &&
      resource !== 'events' &&
      resource !== 'users'
    ) {
      return httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(params.data),
      }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
      }));
    }
    const formData = new FormData();
    for (const [key, value] of Object.entries(params.data)) {
      formData.append(key, value);
    }
    if (formData.get('image')) {
      formData.delete('image');
      formData.append('image', params.data.image.rawFile);
    }

    return httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },

  delete: (resource, params) => {
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then((res) => ({ data: res.status }));
  },

  deleteMany: async (resource, params) => {
    await params.ids.map((id) => {
      return httpClient(`${apiUrl}/${resource}/${id}`, {
        method: 'DELETE',
      });
    });
    return { data: ['datas deleted'] };
  },
};
