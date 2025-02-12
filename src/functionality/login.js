
export const authenticateUser = (username, password) => {  // can be used in multiple files due to export
    const validUsername = "admin";
    const validPassword = "4481";

    if (username === validUsername && password === validPassword) {
        return { success: true };
    } else {
        return { success: false, error: "Invalid credentials. Try again." };
    }
};
