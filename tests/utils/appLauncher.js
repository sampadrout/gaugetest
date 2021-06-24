"use strict";
const path = require('path');
const { openBrowser, closeBrowser, goto, screenshot } = require('taiko');
const assert = require("assert");

const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("Open Wordpress application", async function () {
    await goto("https://wordpress.com/", {waitForEvents:['loadEventFired']});
});