function show(){
   const togol = document.getElementById('search-box').style.display = 'flex'
}





const deletes = document.querySelectorAll('.delete')
const lists = document.getElementsByClassName('items')
const prices = document.getElementsByClassName('price-number')

for(const delet of deletes){
 delet.addEventListener('click',function(){

   document.getElementById('list').removeChild(delet.parentNode.parentNode.parentNode.parentNode)
   // console.log(delet.parentNode.parentNode.parentNode.parentNode)

 })
}



let numbers = 0;
for(const price of prices){
  const priceValue = parseFloat(price.innerText);
  numbers = numbers + priceValue

}const productTotal = document.getElementById('prodact-total')
const subtotal =  productTotal.innerText = numbers;
const total = document.getElementById('total-price')
const totalvalue = total.innerText = subtotal


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