import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

export default function FormRegister() {
  return (
    <>
      <form action="">
        <InputForm
          label="Fullname"
          type="name"
          placeholder="Insert your name here...."
          name="fullname"
        />
        <InputForm
          label="Password"
          type="password"
          placeholder="*****"
          name="password"
        />
        <InputForm
          label="Confirm Password"
          type="password"
          placeholder="*****"
          name="confirmPassword"
        />

        <Button style="bg-blue-600 w-full">Register</Button>
      </form>
    </>
  );
}
