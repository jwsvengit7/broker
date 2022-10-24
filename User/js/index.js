
  var header=document.getElementById("sec-header");
          window.onscroll = function() {
              myFunctionr()
          };
          var stickyr = header.offsetTop;
          function myFunctionr() {
          if (window.pageYOffset < stickyr) {
         header.style.background="#00005d"
          header.classList.remove("stickyr");
        
          } else {
          	 header.classList.add("stickyr");
          header.style.background="#f8f8f8"
       
          
          }
          // if (stickyr>header.offsetTop) {
          // 	alert(1)
          // }
          }
          

document.querySelector("#clickSide").addEventListener("click",()=>{
	document.querySelector("#sidebar-left").style.display="flex"
	// document.querySelector(".sidediv").style.transitionDuration="2px"					
	document.querySelector(".sidediv").style.right="0%"						

})
document.querySelector("#outClick").addEventListener("click",()=>{
	document.querySelector("#sidebar-left").style.display="none"
	// document.querySelector(".sidediv").style.transitionDuration="2px"					
	document.querySelector(".sidediv").style.right="-50%"						

})

var url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
fetch(url,{}).then(res=>{
	return res.json()
}).then(data=>{
	console.log(data)
	data.forEach((item, index) => {
		document.getElementById("length").innerHTML+=`
			<div class=" onhover" style="margin:5px">
			<img src="${item.image}" style="width:100%;height:100%;border-radius:600px;">
			</div>`
	});
}).then(error=>{
	console.log(error)
})
							var x=0
							document.getElementById("right").addEventListener("click",()=>{
								x--;

								document.getElementById("loopin").style.left=20*x+"%";
								if (x==-3) {
									x=1
								}

							})
							var x2=0
							document.getElementById("left").addEventListener("click",()=>{
								x2++;
								document.getElementById("loopin").style.left=x2+"%";
								if (x2==1) {
									x2=0
								}

							})

$(()=>{


})