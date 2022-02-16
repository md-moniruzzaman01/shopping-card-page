function show(){
   const togol = document.getElementById('search-box').style.display = 'flex'
}





const deletes = document.querySelectorAll('.delete')
const lists = document.getElementsByClassName('items')


for(const delet of deletes){
 delet.addEventListener('click',function(){

   document.getElementById('list').removeChild(delet.parentNode.parentNode.parentNode.parentNode)
   // console.log(delet.parentNode.parentNode.parentNode.parentNode)
   totaladd()

 })
}



///////////////////  plus button/////////////

  let plusbtn =document.getElementsByClassName('plus-value')
for(const plus of plusbtn){
  plus.addEventListener('click',function(e){
  let inputvalue = parseFloat(e.target.parentNode.children[1].value)
  
  

 if ( inputvalue < 5) {
  //  adding item numbr
  
    inputvalue = inputvalue + 1;
 }
 e.target.parentNode.children[1].value = inputvalue
let priceBox = e.target.parentNode.parentNode.children[1].children[0]
 let priceBoxNumber = parseFloat(priceBox.innerText)
 const lists = document.getElementById('list').firstChild.parentNode.children[0]
 const listIndex = e.target.parentNode.parentNode.parentNode
  
 let totalItemPrice = 0
 if (lists== listIndex) {
  totalItemPrice = inputvalue * 180
  
 }else{
  totalItemPrice = inputvalue * 210
 
 }
 priceBox.innerText = totalItemPrice;
 totaladd()
  })
}

// negative button

  let minusbtn =document.getElementsByClassName('minus-value')
for(const plus of minusbtn){
  plus.addEventListener('click',function(e){
  let inputvalue = parseFloat(e.target.parentNode.children[1].value)
 if (inputvalue > 1 ) {

    inputvalue = inputvalue - 1;
  }
  e.target.parentNode.children[1].value = inputvalue
 let priceBox = e.target.parentNode.parentNode.children[1].children[0]
  let priceBoxNumber = parseFloat(priceBox.innerText)
  const lists = document.getElementById('list').firstChild.parentNode
  const listIndex = e.target.parentNode.parentNode.parentNode
   
  let totalItemPrice = 0
  if (lists.children[0]== listIndex) {
   totalItemPrice = inputvalue * 180
   
  }else if(lists.children[1]== listIndex){
   totalItemPrice = inputvalue * 150
  
  
  }else if(lists.children[2]== listIndex){
   totalItemPrice = inputvalue * 350
  
  
  }else if(lists.children[3]== listIndex){
   totalItemPrice = inputvalue * 200
  
  }
  priceBox.innerText = totalItemPrice;
  totaladd()
   })
 }
 



 const productTotal = document.getElementById('prodact-total')
 let subtotal
 const total = document.getElementById('total-price')
 const totalvalue = total.innerText
// total 

function totaladd(){
  
const prices = document.getElementsByClassName('price-number')

let numbers = 0;
for(const price of prices){
  const priceValue = parseFloat(price.innerText);
  numbers = numbers + priceValue

}
subtotal =  productTotal.innerText = numbers;
totalvalue = total.innerText = subtotal



}

totaladd()



document.getElementById('apply').addEventListener('click',function(){
  

  const promo = document.getElementById('input-promo').value
if (promo == 'hardwork') {
 const discunt =  parseFloat(totalvalue) *20/100
 total.innerText = subtotal - discunt
 document.getElementById('input-promo').value = ''
 alert('you have use promo code get ready to 20% discunt')
}else{
  alert('warning! promo code can not found')
}
})









  


