export function handleResponse(response) {
  const { data, status } = response;

  if (status === 200) {
    return data.results;
  }
}

export function handleError(error) {
  if (error.data) {
    return error.data;
  }
  return error;
}
