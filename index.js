const display=document.getElementById("display")
const message=document.getElementById("message")
const button=document.getElementById("button")


button.addEventListener("click",async (value)=>{
    
const url=`https://www.googleapis.com/youtube/v3/search?key=${"AIzaSyCkphnK_6qS7STBudMfcicCADMsv0_0wlk"}&part=snippet&type=video&regionCode=IN&maxResults=2&order=viewCount&q=${message.value}`
let response=await fetch(url).then(resp=>{
    if(resp.ok) return resp.json()
    throw new Error("html status"+response.status)
 })
 console.log(response)
for (let index = 0; index < response.items.length; index++) {
    const element = response.items[index].snippet.title
    console.log(element)
    const newChild=document.createElement('div')
    newChild.innerText=element
    display.appendChild(newChild)
    
}

})