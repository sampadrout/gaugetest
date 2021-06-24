"use strict";
const { write, click, link, text, into, textBox, button, toRightOf } = require('taiko');
const assert = require("assert");

step("Signout user", async function() {
	await click(link(toRightOf("Write")));
    await click(button("Log out"), {waitForEvents:['loadEventFired']});
});