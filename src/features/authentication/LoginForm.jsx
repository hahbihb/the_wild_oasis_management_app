import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form type="regular" onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          disabled={isPending}
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormRow>
      <FormRow label="Password" orientation="vertical">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button variation="primary" size="large" disabled={isPending}>
          {isPending ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
