import React from "react"
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import Selector from "../components/Selector";

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

it("renders selector correctly", () => {
    act( () => {
        render(<Selector placeholder={"Test"} opt1={"First"} opt2={"Second"} opt3={"Third"}/>, container)
    });

    expect(container.textContent).toBe("Test");
});