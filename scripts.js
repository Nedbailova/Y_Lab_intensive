const email_ = document.getElementById("input_email");
const password_ = document.getElementById("input_password");

email_.addEventListener("focus", () => {
  email_.classList.remove("error");
});
password_.addEventListener("focus", () => {
  password_.classList.remove("error");
});

document.getElementById("login").addEventListener("click", () => {
  const email = email_.value;
  const password = password_.value;

  if (email && password) {
    const Data = {
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:5500", {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("User:", data);
        alert("Status: OK!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert(`${error}!`);
      });

    document.getElementById("input_email").value = "";
    document.getElementById("input_password").value = "";
  } else {
    if (!email) {
      email_.classList.add("error");
    }
    if (!password) {
      password_.classList.add("error");
    }
  }
});
