export const ValidData = (email, password, name) => {
  const isEmailvalid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isEmailvalid) return "Email is not valid";
  if (!isPasswordValid) return "password is not valid";

  if (name) {
    const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    if (!isNameValid) return "Enter a valid name";
  }

  return null;
};
