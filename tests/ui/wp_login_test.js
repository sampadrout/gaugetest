"use strict";
const { write, click, link, text, into, textBox, button, toRightOf } = require('taiko');
const assert = require("assert");

step("Click on Log In link", async function () {
    await click(link("Log In"), {waitForEvents:['loadEventFired']}); 
});

step("Enter invalid user name as <table>", async function (table) {
    for (var row of table.rows) {
        if(row.cells[1] == process.env.gauge_environment) {
            await write(row.cells[0], into(textBox({id: "usernameOrEmail"})));
            await click(button("Continue"));
        }
    }
});

step("Verify error message displayed", async function() {
	assert.ok(await text('User does not exist').exists());
});