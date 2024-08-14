// let button=document.querySelector('button')
// let result=document.createElement('div')
// result.id='result'
// document.getElementById('wrapper').appendChild(result)




// button.addEventListener('click',()=>{
//     let na=document.getElementById("name").value
//     let i=document.getElementById("n1")
//     na=i.innerHTML;
//     let mo=document.getElementById("phone").value
//     let j=document.getElementById("n2")
//     mo=j.innerHTML;
//     let dob1=document.getElementById("dob").value
//     let k=document.getElementById("n3")
//     dob1=k.innerHTML;
//     let inc=document.querySelector('#nationality')
//     let country=inc.options[inc.selectedIndex].value
//     let l=document.getElementById("n4")
//     country=l.innerHTML;
//     // console.log(country)
//     return false;
// })


function view(){
    let a=document.getElementsById("hello")
    let b=a.getElementsByTagName("input")
    let c=document.getElementsByTagName("p")

    for(i=1;i<a.length;i++){
        c[i].innerHTML=b[i].value;
    }
    return false;
}