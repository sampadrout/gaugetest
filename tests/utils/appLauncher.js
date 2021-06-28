"use strict";
const path = require('path');
const fs = require('fs-extra');
const { openBrowser, closeBrowser, goto, screenshot } = require('taiko');
const assert = require("assert");
const { env } = require('process');


const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })

    const srcDir = process.env.csv_file;
    const destDir = 'resources/';

    /*     fs.readdirSync(destDir, (err, files) => {
            files.filter(file => {
               if (path.extname(file) === '.csv') {
                     fs.unlinkSync(file, err => {
                         if (err) throw err;
                         console.log('deleted ' + file);  
                     });
               }
            })
          }) */

        fs.copySync(srcDir, destDir, function (err) {
            if (err) return console.error(err)
            console.log('Files copy success!')
        });

    /* fs.readdirSync(srcDir, (err, files) => {
        files.filter(file => {
            if (path.extname(file) === '.csv') {
                fs.renameSync(file, destDir, err => {
                    if (err) throw err;
                    console.log('Moving ' + file);
                });
            }
        })
    }) */
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
    if (process.env.gauge_environment == "qa") {
        await goto("https://wordpress.com/", { waitForEvents: ['loadEventFired'] });
    } else if (process.env.gauge_environment == "uat") {
        await goto("https://wordpress.com/", { waitForEvents: ['loadEventFired'] });
    } else {
        await goto("https://wordpress.com/", { waitForEvents: ['loadEventFired'] });
    }
});