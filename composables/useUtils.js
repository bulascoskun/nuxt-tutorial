export const useUtils = (fromWhere) => {
  const sayHello = () => console.log(`Hello from /${fromWhere}`);
  return { sayHello };
};
