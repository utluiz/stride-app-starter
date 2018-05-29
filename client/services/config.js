import "whatwg-fetch";

const defaultConfig = {};

// const host =
//   process.env.NODE_ENV === "development" ? "http://localhost:3000" : "";

export function get() {
  // static value for testing
  if (true) {
    return new Promise(res =>
      setTimeout(() => {
        res(defaultConfig);
      }, 500)
    );
  }

  // fetch from server
  // return fetch(host + "/descriptor")
  //   .catch(error => {
  //     throw new Error("Cannot load descriptor from server!");
  //   })
  //   .then(response => {
  //     if (response.status >= 200 && response.status < 300) {
  //       return response.json();
  //     }
  //     throw new Error("Cannot load descriptor from server!");
  //   })
  //   .then(descriptor => {
  //     return {
  //       descriptor,
  //       enabledModules: getEnabledModules(descriptor.modules)
  //     };
  //   });
}
