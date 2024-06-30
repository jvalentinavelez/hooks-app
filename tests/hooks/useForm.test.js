import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "User1",
    email: "user1@google.com",
  };
  test("Debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("Debe de cambiar el nombre del formulario", () => {
    const newInputValue = "User2";
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: "User2",
        },
      });
    });
    expect(result.current.name).toBe(newInputValue);
    expect(result.current.formState.name).toBe(newInputValue);
  });
});
