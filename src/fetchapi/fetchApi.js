import axios from "axios";

export const fetchApi = async (language, code, input) => {
  const options = {
    method: "POST",
    url: "https://online-code-compiler.p.rapidapi.com/v1/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "47929a282dmsha42c1a0c013cc1ap1ceafejsn878db518fd71",
      "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
    },
    data: {
      language: language,
      version: "latest",
      code: code,
      input: input,
    },
  };

  const { data } = await axios.post(options.url, options.data, options);
  return data;
};
