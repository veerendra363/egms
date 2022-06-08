async function getGoalsByEmployeeId({id, month, year}) {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return fetch(`/egms/goals/employee/${id}/${month}/${year}`, requestOptions)
    .then((response) => response.json())
    .catch((err)=>{
        console.log(JSON.stringify(err))
    });
  }

  async function addGoal(values) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        ...values
      }),
    };
    return fetch("/egms/goals/employee", requestOptions)
    .then((response) => response.json())
    .catch((err)=>{
        console.log(JSON.stringify(err))
    });
  }

  async function editGoal(values,id) {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        ...values
      }),
    };
    return fetch(`/egms/goals/${id}`, requestOptions)
    .then((response) => response.json())
    .catch((err)=>{
        console.log(JSON.stringify(err))
    });
  }

  async function deleteGoal(id) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    return fetch(`/egms/goals/${id}`, requestOptions)
    .then((response) => response.json())
    .catch((err)=>{
        console.log(JSON.stringify(err))
    });
    
  }
  
  
  export {addGoal, getGoalsByEmployeeId, editGoal, deleteGoal}
  