import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Greeting } from "../components/Greeting";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
  it("render a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Merhaba, Dünya")).toBeInTheDocument();
  });

  it("render greeting with a name", () => {
    render(<Greeting name={"Tarık"} />);
    expect(screen.getByText("Merhaba, Tarık")).toBeInTheDocument();
  });
});