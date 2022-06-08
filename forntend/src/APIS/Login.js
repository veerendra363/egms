async function login(values) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values
      }),
    };
    return fetch("/egms/login", requestOptions)
    .then((response) => response.json())
    .catch((err)=>{
        console.log(JSON.stringify(err))
    });
  }
  
  export default login;
  