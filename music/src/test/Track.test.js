import React from "react"
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Track from "../components/track/Track";

let container = null;
beforeEach( () => {
    container = document.createElement("div");
    document.body.appendChild(container)
});

afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders track correctly", () => {
    act( () => {
        render(<Track song={"All hope has gone"} singer={"Slipknot"} genre={"Heavy Metal"} year={"2008"}/>, container)
    });

    expect(container.textContent).toBe("SlipknotAll hope has goneHeavy Metal2008");

    act( () => {
        render(<Track song={"Behind Blue Eyes"} singer={"Limp Bizkit"} genre={"New Metal"} year={"2003"}/>, container)
    });

    expect(container.textContent).toBe("Limp BizkitBehind Blue EyesNew Metal2003")
});