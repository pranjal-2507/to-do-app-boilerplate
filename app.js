const todolist = document.getElementById("todolist")
const input = document.getElementById("input")
const addBtn = document.getElementById("button")


let arr=[]

addBtn.addEventListener('click', function(){
    arr.push(input.value);
    console.log(arr);
    input.value= "";

    ShowList()
})


function ShowList(){
    todolist.innerHTML =""
    arr.forEach(function(el,i){
        
        let listItem = document.createElement("li")
        let anchor1 =document.createElement("a")
        let anchor2 = document.createElement("a")

        listItem.innerText= el;
        console.log(el)
        anchor1.innerText="Edit Me";
        anchor1.onclick=()=>{
            EditList(i)
        }
        anchor2.innerText="Delete"
        anchor2.style.marginRight= "10px"
        anchor2.onclick=()=>{
            DeleteList(el,i)
        }    
        
        listItem.append(anchor1,anchor2)
        todolist.append(listItem)
    })
} 


function EditList(i){
console.log("edited")
let newValue =prompt("please insert a new value")
console.log(newValue)

arr.splice(i,1,newValue)
ShowList()
}


function DeleteList(el,index){
console.log(el,index)
console.log("deleted")
arr.splice(index,1)
ShowList()
}