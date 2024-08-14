const btn=document.getElementById('btn')
const color_text=document.getElementById('color')
const bg_color=document.getElementById('back_ground')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',function()
{
    let hex_value='#'

    for(let i=1;i<=6;i++)
    {
      hex_value=hex_value+ random_Hex_Value()
    //   hex_value+=random_Hex_Value()
    }

    // console.log(hex_value)

    color_text.innerHTML=hex_value
    bg_color.style.backgroundColor=hex_value
    // console.log(hex_value)


})

function random_Hex_Value(){
  let index= Math.floor(Math.random()*16)

  return hex[index]
}

