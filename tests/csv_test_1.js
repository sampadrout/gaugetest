"use strict";
const { write, click, link, text, into, textBox, button, toRightOf } = require('taiko');
const assert = require("assert");

step("Enter <username>", async function(username) {
    await write(username, into(textBox({id: "usernameOrEmail"})));
    await click(button("Continue"));
});