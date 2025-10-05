export function formValidationSignup(name, email, password) {
  const name1 = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/.test(name);
  if (!name1) return "Name is invalid";

  const email1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  if (!email1) return "Email is invalid";

  const password1 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=]).{8,}$/.test(
      password
    );
  if (!password1) return "Password is invalid";

  if (name1 && email1 && password1) return null;
}

export function formValidationLogIn(email, password) {
  const email1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  if (!email1) return "Email is invalid";

  const password1 =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_+=]).{8,}$/.test(
      password
    );
  if (!password1) return "Password is invalid";

  if (email1 && password1) return null;
}
