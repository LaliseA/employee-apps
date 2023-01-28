import { useState } from "react";

const Form = () => {
  const [employeesData, setEmployeesData] = useState({
    name: "",
    occupation: "",
    callOffice: "",
    callMobile: "",
    sms: "",
    email: "",
    image: "",
  });

  function handleChange(event) {
    const updateUserData = {
      ...employeesData,
      [event.target.name]: event.target.value,
    };
    setEmployeesData(updateUserData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://lit-dusk-21328.herokuapp.com/api/employees/addemployee", {
      method: "POST",
      body: JSON.stringify(employeesData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Employee</h1>
      <form style={StyledForm} onSubmit={handleSubmit}>
        <input
          style={StyledInput}
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          style={StyledInput}
          type="text"
          placeholder="ocupation"
          name="occupation"
          onChange={handleChange}
        />
        <input
          style={StyledInput}
          type="text"
          placeholder="callOffice"
          name="callOffice"
          onChange={handleChange}
        />
        <input
          style={StyledInput}
          type="text"
          placeholder="callMobile"
          name="callMobile"
          onChange={handleChange}
        />
        <input
          style={StyledInput}
          type="text"
          placeholder="sms"
          name="sms"
          onChange={handleChange}
        />
        <input
          style={StyledInput}
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          style={StyledInput}
          type="text"
          placeholder="image url"
          name="image"
          onChange={handleChange}
        />
        <button style={styledButton}>Submit</button>
      </form>
    </div>
  );
};

const StyledForm = {
  marginLeft: "250px",
  marginRight: "250px",
};
const StyledInput = {
  display: "block",
  width: "100%",
  marginTop: "10px",
  padding: "5px",
};
const styledButton = {
  background: "gray",
  width: "100%",
  marginTop: "10px",
  padding: "10px",
};

export default Form;
