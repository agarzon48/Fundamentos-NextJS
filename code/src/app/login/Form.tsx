"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginStore } from "@/stores/login";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

export function LoginForm() {
  const [form, setForm] = useState({
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });
  const { login, isLoggedIn } = useLoginStore();
  const router = useRouter();

  const validatePassword = (value: string) => value.length > 0;

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passwordIsInvalid = !validatePassword(form.password);
    const emailIsInvalid = !validateEmail(form.email);

    setErrors({
      password: passwordIsInvalid ? "La contraseña es obligatoria" : "",
      email: emailIsInvalid ? "El email es obligatorio" : "",
    });

    if (passwordIsInvalid || emailIsInvalid) {
      return;
    }

    login(form.email);
    router.push("/dashboard");
  };

  if (isLoggedIn) {
    router.push("/dashboard");
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 border border-white rounded-md shadow-md shadow-white py-12 px-4 gap-4 flex flex-col text-center"
      >
        <h1 className="text-2xl font-bold">Bienvenid@ de nuevo!</h1>
        <Input
          type="email"
          label="Email"
          isRequired
          name="email"
          value={form.email}
          onChange={handleChange}
          errorMessage={errors?.email}
          isInvalid={Boolean(errors?.email)}
        />
        <Input
          type="password"
          label="Contraseña"
          isRequired
          name="password"
          value={form.password}
          onChange={handleChange}
          errorMessage={errors?.password}
          isInvalid={Boolean(errors?.password)}
        />
        <Button
          className="w-full"
          color="primary"
          variant="solid"
          type="submit"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
}
