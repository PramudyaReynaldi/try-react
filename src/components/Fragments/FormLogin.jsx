import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

export default function FormLogin() {
  return (
    <>
      <form action="">
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
        <Button style="bg-blue-600 w-full">Login</Button>
      </form>
    </>
  );
}
