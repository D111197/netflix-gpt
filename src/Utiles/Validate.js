export const CheckValidata = (email, password, name) => {
    const isEmailvalid =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordvalid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   
    if(!isEmailvalid) return "Email Id is not valid"
    if(!isPasswordvalid) return "Password is not valid"

    return null;

}