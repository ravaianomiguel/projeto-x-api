const AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const TOKEN_URL = "https://github.com/login/oauth/access_token";
const USER_URL = "https://api.github.com/user";

export function buildAuthorizeUrl(state) {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID,
    redirect_uri: process.env.GITHUB_REDIRECT_URI,
    scope: "read:user",
    state,
  });

  return `${AUTHORIZE_URL}?${params}`;
}

export async function exchangeCodeForToken(code) {
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json", 
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: process.env.GITHUB_REDIRECT_URI,
    }),
  });

  const data = await response.json();

  
  if (data.error) {
    throw new Error(data.error_description || data.error);
  }

  return data.access_token;
}

export async function fetchGithubUser(accessToken) {
  const response = await fetch(USER_URL, {
    headers: {
      "User-Agent": "oauth-github-api", 
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/vnd.github+json"
    },
  });

  if (!response.ok) {
    throw new Error(`Falha ao buscar usuário no GitHub (${response.status})`);
  }

  return response.json();
}
