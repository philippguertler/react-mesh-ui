export interface LoginRequest {
  username: string;
  password: string;
  newPassword?: string;
}

export function login(loginRequest: LoginRequest) {
  return post(`/auth/login`, loginRequest);
}

type HttpMethod = "GET" | "POST" | "DELETE";

function post(url: string, body?: any) {
  return request("POST", url, body);
}

function request(method: HttpMethod, url: string, body?: any) {
  return fetch(`/api/v2${url}`, {
    body: JSON.stringify(body),
    method,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response.json().then(json => {
      if (response.ok) {
        return json;
      } else {
        throw json;
      }
    })
  });
}
