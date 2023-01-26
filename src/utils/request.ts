export const request = async <R>(url: string): Promise<R> => {
  try {
    const res = await fetch(url);
    const response = await res.json();

    return Promise.resolve(response);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
