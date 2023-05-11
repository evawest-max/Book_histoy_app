/*
/*var dt= [60, 30, 45]
var ts= [10, 50, 20]
var mt= []
function find(){
    for (let i = 0; i < ts.length; i++) {
        mt.push(dt[i]+ts[i]);
        
    }
    console.log(Math.min.apply(Math, mt))
}
find()

function solution(number){
    let values=[]
    let sum=[]
    for (let i=0; i<=number; i++){
        values.push(i)
        let p=i%3
        let s=i%5
        if (p===0){
            sum.push(i)
        }
        else if (s===0)
        sum.push(i)
        else sum.push(0)
        
    }
    let total=0
    for (let i=0; i<number; i++){
        total+=sum[i]
    }
    
    console.log(total)
  }
  solution(10)
  
  function solution(number){
    sum = 0
    for (i = 3; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
    console.log(sum);
  }
  solution(10)

  function spinWords(string){
    //TODO Have fun :)
    final=[]
        let newString=string.split(" ")
        
        for (let i=0; i<newString.length; i++){
            let pp=newString[i].split("");
            //let newarr=pp[i].slit("")
            
                if (pp.length>5){
                    pa=pp.reverse().join("")
                    final.push(pa)
                    
                }
                else {
                    pa=pp.join("")
                    final.push(pa)
                }   
        }
    console.log(final.join("  "))
  }
  

  function addBinary(a,b) {
      let vk=a+b
    console.log(vk.toString()) 
    }
    addBinary(1,2)



    function gradingStudents(grades) {
        // Write your code here
        for(let i=0; i<grades.length; i++){
        let nextmuliple=Math.ceil(grades[i]/5)*5
            if (grades[i]>=38 && nextmuliple-grades[i]<3){
                console.log(nextmuliple)
            }
            else if (grades[i]<38){
                console.log(grades[i])
            }
            else {
                console.log(grades[i])
            }
        }
    
    }
    gradingStudents([4,73,67,38,33])*/

/*
    function countingValleys(steps, path) {
        // Write your code here
    
        let stringpath = path.split('')
        let count = 0
        let result = 0
        for(let i=0; i<steps; i++){
            if(count == 0 && stringpath[i] == 'D'){
                count -= 1
                result += 1
            } else if(stringpath[i] == ''){
                count -= 1
            } else {
                count += 1
            }
        }
        console.log (result)
    }
    countingValleys(8, "UDDDUDUU")*/
   

   /* function findOdd(A) {
        //happy coding!
        let ans=0
        let newobj={}
        A.forEach((item)=>{
          if (newobj[item]){
            newobj[item]++
            if (newobj[item]%2> 1){
                ans=item
            }
            
          }else{
            newobj[item]=1
          }
           
        })
        console.log(newobj)
        console.log(ans)
      }
      findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])
    */



// to print out only name that are less than 4 from my friens list
   /* function friend(friends){
        let count=0
        let friendlist=[]
        let splitedfriendlist=[]
        for(let i=0; i<friends.length; i++){
            splitedfriendlist=friends[i].split("")
            if(splitedfriendlist.length===4){
                friendlist.push(splitedfriendlist.join(""))
            }
            
        }
        console.log(friendlist)
    }
    friend(["Ryan", "Kieran", "Mark", "tobi", "123"])
    */

    /*
    // code for counting the number of pairs in an array
function sockpair(n, arr) {
    //the first code will get the unique items in the arr and place them in a new array 
    let arrayOut=[]
    var count=0
    var start=false
    for (i = 0; i < n; i++) {
        for (j = 0; j < arrayOut.length; j++) {
              if ( arr[i] == arrayOut[j] ) {
                   start = true;
              }
         }
        count++;
   if (count == 1 && start == false) {
           arrayOut.push(arr[i]);
       }
       start = false;
       count = 0;
   }
   //the next code will count yhe number of pairs
        let countans= 0
        for(let i=0; i<arrayOut.length; i++){
            let ptt=arr.filter(item=>{
                return item==arrayOut[i]
            })
            countans+=Math.floor(ptt.length/2)
        
        }
        console.log(countans)
}
sockpair(9, [2,0,0,0,2,0,2,2,3])
*/

/*
function designerPdfViewer(h, word) {
    // Write your code here
    let id=[]
    let wordLength=word.length
    let wd=word.split("")
    let arr=["a","b","c","d","e","f",'g','h','i','j','k','l','m','n','o','p','k','r','s','t','u','v','w','s','y','z']
    /*let fill= arr.filter(item, index=>){
        if (w)
        id.push(index)
    }
    arr.map((item,index)=>{
        for(let element of wd){
            if (element==item){
                id.push(index)

            }
        }
        
    })
    console.log(id)

    //for(let i=0)

}
designerPdfViewer(1,"Ebun")


function catAndMouse(x, y, z) {
    
    if(Math.abs(z-x)==Math.abs(z-y)){
        console.log("mouse c")
    }
    else if (Math.abs(z-x) < Math.abs(z-y)){
        console.log("cat a")
    }else{
        console.log("cat b")
    }


}
catAndMouse(1,4,3)

function viralAdvertising(n) {
    // Write your code here
    let solution=0
    let ans=0
    for (let i=0; i<n; i++){
        ans= Math.floor(n/2)+solution
        ans=solution
    }

}
viralAdvertising(3)
function bonAppetit(bill, k, b) {
    // Write your code here
    const sum = bill.reduce((r, v) => r + v, 0);
  const result = (sum - bill[k])/2;
if(b - result === 0)
console.log('Bon Appetit');
else
console.log(b - result);

}*/

let myLibrary = [];

function Book(titles, authurs, pages) {
  // the constructor...
  this.title=titles || "God is not dead"
  this.authur=authurs ||"Chuck Konzelman; Cary Solomon"
  this.pages=pages || "284 pages"
}
function pop1(){
    myLibrary.pop()
}
pop1()

function add() {
  // do stuff here
  //pop1()
  let bookTitle=document.getElementById("title").value
  let bookAuthur=document.getElementById("authur").value
  let bookPage=document.getElementById("pages").value
  let newBook= new Book(bookTitle,bookAuthur,bookPage)
  

  myLibrary.push(newBook)
  //console.log(myLibrary)
  //alert("book has been succesfully added")

  
}
add()


function remove() {
    myLibrary.pop()
    console.log(myLibrary)
    alert("Your books has been removed from database")
}



function post(){
    for (item of myLibrary){
        const pd=item.authur
        const ps=item.title
        const pa=item.pages
       console.log(pd, ps, pa)
       
        const book_div=document.getElementById("book_div")
        const bookcontainer=document.createElement("div")
        const title_element=document.createElement("p",)
        const btn= document.createElement("button")
        btn.innerHTML = "Remove book"

        btn.addEventListener("click", removeItem)
        function removeItem(){
            book_div.removeChild(book_div.firstElementChild)
        }

       title_element.appendChild(document.createTextNode(` Title:${ps},    Authur:${pd},   page:${pa}`));
       title_element.style.cssText = 'color: red; background: white; border: solid;'

       bookcontainer.appendChild(title_element)
       bookcontainer.appendChild(btn)
       book_div.appendChild(bookcontainer)
       
    }
    
}









