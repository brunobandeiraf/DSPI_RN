const fetchLogin = async (email: string, password: string) => {
  try {
    const response = await fetch(
      'https://slim-dodo-56-74hqqwt062y1.deno.dev/auth/email/login/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          email,
          password,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.message;
  } catch (error: any) {
    return `error: ${error.message}`;
  }
};

export default fetchLogin;
