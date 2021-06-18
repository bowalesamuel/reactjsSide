const dev = {
  API_ENDPOINT_URL: "https://swapi.dev/api/",
};

const prod = {
  API_ENDPOINT_URL:  "https://swapi.dev/api/",
};

const test = {
  API_ENDPOINT_URL: "https://swapi.dev/api/",
};

const stage = {
  API_ENDPOINT_URL:  "https://swapi.dev/api/",
                   
};

const getEnv = () => {
  if (process.env.NODE_ENV === "development") {
    return dev;
  }
  
  switch (process.env.REACT_APP_ENV) {
    case "development":
      return dev;
    case "production":
      return prod;
    case "test":
      return test;
    case "staging":
      return stage;
    default:
      break;
  }
};

export const env = getEnv();
