const electron=require("electron")
const ipc=electron.ipcRenderer

const errorBtn=document.getElementById("errorBtn");




//Send Message from Renderer
errorBtn.addEventListener("click",function(){
    // ipc.send("open-error-dialog")

    console.log("Message 1")
    // Send Sync Message
   const reply= ipc.sendSync("sync-message")
   console.log(reply)
    console.log("Message 2")
})

ipc.on("opened-error-message",function(e,arg){
//here is the reply send by the receiver 
console.log(arg);
})