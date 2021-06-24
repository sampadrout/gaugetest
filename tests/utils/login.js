"use strict";
const path = require('path');
const { click, link, write, button, into, textBox, text } = require('taiko');
const assert = require("assert");

step("Login with username and password <table>", async function(table) {
    for (var row of table.rows) {
        await click(link("Log In"), {waitForEvents:['loadEventFired']}); 
        await write(row.cells[0], into(textBox({id: "usernameOrEmail"})));
        await click(button("Continue"));
        await write(row.cells[1], into(textBox({id: "password"})));
        await click(button("Log In"));
    }
});

step("Verify My Home page displayed", async function() {
	assert.ok(await text('My Home').exists());
});