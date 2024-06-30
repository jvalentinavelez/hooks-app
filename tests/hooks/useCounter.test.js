import { act, render, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe de generar el counter con el valor de 100", () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(initialValue);
  });

  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });

  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });

  test("Debe realizar el reset del contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, increment } = result.current;

    act(() => {
      increment(2);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
