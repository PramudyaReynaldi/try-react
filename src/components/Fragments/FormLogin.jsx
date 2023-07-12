import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

export default function FormLogin() {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email !== "" && password !== "") {
      alert("Login success")
      window.location.href = "/products"
    } else {
      alert("Please enter a valid email and password")
      window.location.reload()
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          label="Email"
          type="email"
          placeholder="example@mail.com"
          name="email"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="*****"
          name="password"
        />
        <Button style="bg-blue-600 w-full" type="submit">
          Login
        </Button>
      </form>
    </>
  );
}
