import React from "react";
import { render } from "@testing-library/react";
import App from "../App";


describe("App component", () => {
    it("renders correct heading", () => {
        const { getByRole } = render(<App />);
        expect (getByRole("heading").textContent).toMatch(/Where's That Pokemon?/i);
    })

    it("First pokemon's name is Gengar", () => {
        const { gengar } = "Gengar";
        expect (gengar).toMatch("Gengar");
    })
})