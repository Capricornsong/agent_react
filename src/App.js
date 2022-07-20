/*
 * @Author: Liusong He
 * @Date: 2022-07-20 15:38:48
 * @LastEditTime: 2022-07-20 21:32:27
 * @FilePath: \agent_react\src\App.js
 * @Email: lh2u21@soton.ac.uk
 * @Description: 
 */
import React from 'react'
import { act } from 'react-dom/test-utils'

function App() {
  let level
  function test(){
    /*eslint-disable no-undef */
    //look through all tabs user have and pick up.
    chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
      // Get the current tab'id.
      const activeTabId = tabs[0].id;
      //excute the script in current tab
      chrome.scripting.executeScript({
        target: {tabId: activeTabId},
        // function: ()=> document.body.innerHTML = "hello world"
        function: () =>{
          chrome.storage.sync.get("color", ({ color }) => {
            document.body.style.backgroundColor = color;
          });
        }
      })
    });
  }
  
  function high(){
    let level = 'high'
    chrome.storage.local.set({ level })
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
      const activeTabId = tabs[0].id
      chrome.scripting.executeScript({
        target:{tabId:activeTabId},
        function: () => alert("High was been selected!")
      })
    })
  }
  function mid(){
    let level = 'mid'
    chrome.storage.local.set({ level })
    chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
      const activeTabId = tabs[0].id
      chrome.scripting.executeScript({
        target:{tabId:activeTabId},
        function: () => alert("Mid was been selected!")
      })
    })
  }
  function low(){
    let level = "low"
    chrome.storage.local.get("level").then((result) =>{
      console.log(result.level);
    })     
    chrome.storage.local.get("level", ({level}) => {
      alert('Value currently is ' + level);
      console.log(level);
    });
    // chrome.tabs.query({active:true, currentWindow:true}, (tabs) => {
    //   const activeTabId = tabs[0].id
    //   chrome.scripting.executeScript({
    //     target:{tabId:activeTabId},
    //     function: alert(chrome.storage.local.get("level"))
    //   })
    // })
  }

  return (
    <div className="App">
      <h1>
        what is your Level of concern for privacy? 
      </h1>
      <button onClick={high}>Highly and fundamentalist</button>
      <button onClick={mid}>Medium and pragmatist</button>
      <button onClick={low}>Low and unconcerned</button>

    </div>
  );
}

export default App;
