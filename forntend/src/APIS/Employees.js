async function getEmployees(id) {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return fetch(`/egms/employees/${id}`, requestOptions)
    .then((response) => response.json())
    .catch((err)=>{
        console.log(JSON.stringify(err))
    });
  }

  async function getAdmins() {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return fetch(`/egms/admins`, requestOptions)
    .then((response) => response.json())
    .catch((err)=>{
        console.log(JSON.stringify(err))
    });
  }
  
  export {getEmployees, getAdmins}
  