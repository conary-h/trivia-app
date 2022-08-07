export function handleResponse(response) {
  const { status } = response;

  if (status === 200) {
    return response;
  }
}

export function handleError(error) {
  if (error.data) {
    return error.data;
  }
  return error;
}
