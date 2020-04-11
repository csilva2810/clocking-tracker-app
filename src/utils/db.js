export function save(data) {
  localStorage.setItem('store', JSON.stringify(data));
}

export function get() {
  const data = localStorage.getItem('store');

  if (data) {
    return JSON.parse(data);
  }

  return null;
}
