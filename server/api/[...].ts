export default defineEventHandler(async (event) => {
  // Get the runtimeconfig proxy url
  const proxyUrl = 'https://jsonplaceholder.typicode.com/';
  // Check the path
  const path = event.path.replace(/^\/api\//, ''); // /api/users -> users
  const target = proxyUrl + path;
  // Proxy it
  return proxyRequest(event, target);
});
