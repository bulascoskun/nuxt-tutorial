export default defineNuxtPlugin(() => {
  return {
    provide: {
      sayHello: (msg: string) => `Hello ${msg}`,
    },
  };
});
