"use strict";
const path = require('path');
const { click, link, write, button, into, textBox, text } = require('taiko');
const assert = require("assert");

step("Set environment", async function(table) {
    gauge.dataStore.specStore.put("env", process.env.gauge_environment);
});