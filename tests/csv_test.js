"use strict";
const { write, click, link, text, into, textBox, button, toRightOf } = require('taiko');
const assert = require("assert");

step("Enter csv user name <table>", async function(table) {
	for (var row of table.rows) {
        if(row.cells[2] == process.env.gauge_environment) {
            await write(row.cells[0], into(textBox({id: "usernameOrEmail"})));
            await click(button("Continue"));
        }
    }
});