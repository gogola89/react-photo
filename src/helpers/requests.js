import { REQUEST_TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const ajaxRequest = async function (url, uploadData = undefined) {
  try {
    const response = uploadData
      ? await Promise.race([
          fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(uploadData),
          }),
          timeout(REQUEST_TIMEOUT_SEC),
        ])
      : await Promise.race([fetch(url), timeout(REQUEST_TIMEOUT_SEC)]);

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} (${response.status})`);

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
