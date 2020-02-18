import React from "react";
import { render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import pretty from "pretty"
import AppBody from "../components/AppBody/AppBody.jsx";

let container = null;
beforeEach( () => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
    container = null
});

it ('renders tracks correctly', () => {
   act( () => {
       render(<AppBody tracks={
           [
               {singer: "Slipknot", song: "Nero Forte", genre: "Heavy Metal", year: "2019", id: 3},
               {singer: "Limp Bizkit", song: "Behind blue eyes", genre: "New Metal", year: "2003", id: 4},
               {singer: "Linkin Park", song: "Evize", genre: "Rock", year: "2002", id: 5},
           ]
       }/>, container)
   });

   expect(
       pretty(container.innerHTML)
   ).toMatchInlineSnapshot();
});