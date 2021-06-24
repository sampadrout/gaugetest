"use strict";
const { click, link, text, $, waitFor } = require('taiko');
const assert = require("assert");

step("Add a comment", async function() {
    // await click($("//*[text()='Posts']/../../ancestor::li"));
    await waitFor(5000);
    await click($("//span[contains(text(), 'Posts')]"))
    await click(link("Add a new post"));
    assert.ok(await text('Add title').exists());
});

step("Go back to View Post", async function() {
    await click($("//*[@aria-label='Block editor sidebar']/parent::div"));
    await click(text("View Posts"));
});