export const fetchJsonData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Fetch Failed!");
  }
  return await res.json();
};
