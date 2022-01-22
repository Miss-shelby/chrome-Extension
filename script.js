const inputBtn = document.getElementById("input-btn")
let myLeads =[]
const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")
if (leadsFromLocalStorage) {
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click",function(){
    // to grab the URL of the current tab!
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})
// Log out the items in the myLeads array using a for loop 
// Render the leads in the unordered list using ulEl.textContent
//to render out our unordered list as a list we have to replace 
//textcontent with innerhtml and add our list tag .

// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
// 1. Wrap the code below in a renderLeads() function

function render(Leads) {
    let listItems =""
     for (let i = 0; i < Leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // 2. Add the item of myleads array to the listItems variable instead of the ulEl.innerHTML
         // Wrap the lead in an anchor tag (<a>) inside the <li>
           listItems += `
             <li>
                 <a target='_blank' href='${Leads[i]}'>
                     ${Leads[i]}
                 </a>
             </li>
         `
 }
     // 3. Render the listItems inside the unordered list using ulEl.innerHTML
      ulEL.innerHTML=listItems
 }
// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})
inputBtn.addEventListener("click",function(){
   myLeads.push(inputEl.value)
   inputEl.value = "" // use to clear out the input field after saving data
   // Save the myLeads array to localStorage 
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
   render(myLeads)
})





