/*
 * @Author: Liusong He
 * @Date: 2022-07-20 17:59:16
 * @LastEditTime: 2022-07-20 21:01:36
 * @FilePath: \agent_react\public\background\background.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */
let color = "#3aa757"
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color })
    console.log('Default background color set to %cgreen',`color: ${color}`)
})


