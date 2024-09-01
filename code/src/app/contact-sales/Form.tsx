"use client";

import { useState, useMemo } from "react";

import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/checkbox";

export function ContactSalesForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    acceptTerms: "",
  });

  const validateName = (value: string) => value.length > 0;

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const validateTerms = (value: boolean) => value;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameIsInvalid = !validateName(form.name);
    const emailIsInvalid = !validateEmail(form.email);
    const termsAreInvalid = !validateTerms(form.acceptTerms);

    setErrors({
      name: nameIsInvalid ? "El nombre es obligatorio" : "",
      email: emailIsInvalid ? "El email es obligatorio" : "",
      message: "",
      acceptTerms: termsAreInvalid
        ? "Debes aceptar las condiciones y política de privacidad"
        : "",
    });

    if (nameIsInvalid || emailIsInvalid || termsAreInvalid) {
      return;
    }

    console.log(form);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-96 border border-white rounded-md shadow-md shadow-white py-12 px-4 gap-4 flex flex-col text-center"
      >
        <h1 className="text-2xl font-bold">Contacta con ventas</h1>
        <Input
          type="text"
          label="Nombre"
          placeholder="¿Cómo te llamas?"
          isRequired
          name="name"
          value={form.name}
          onChange={handleChange}
          errorMessage={errors?.name}
          isInvalid={Boolean(errors?.name)}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Introduce tu email para que podamos contestarte"
          isRequired
          name="email"
          value={form.email}
          onChange={handleChange}
          errorMessage={errors?.email}
          isInvalid={Boolean(errors?.email)}
        />
        <Textarea
          label="Mensaje"
          placeholder="Introduce tu mensaje"
          isRequired
          name="message"
          value={form.message}
          onChange={handleChange}
        />
        <Checkbox
          classNames={{
            label: "text-xs text-white text-left",
          }}
          name="acceptTerms"
          checked={form.acceptTerms}
          onChange={handleCheckboxChange}
          isInvalid={Boolean(errors.acceptTerms)}
          isRequired
        >
          He leído y acepto las condiciones y política de privacidad
        </Checkbox>
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
