const defaultPrices={USD:{buy:.062,sell:.062},EUR:{buy:.056,sell:.056},CAD:{buy:.08,sell:.08},AUD:{buy:.092,sell:.092},INR:{buy:10.05,sell:10.05}};function updatePrices(){let e=document.getElementById("currency").value;document.getElementById("buyPrice").value=defaultPrices[e].buy,document.getElementById("sellPrice").value=defaultPrices[e].sell}document.getElementById("currency").addEventListener("change",updatePrices),document.getElementById("calculator-form").addEventListener("submit",function(e){e.preventDefault();let t=document.getElementById("currency").value,l=parseFloat(document.getElementById("investment").value),n=parseFloat(document.getElementById("buyPrice").value),s=parseFloat(document.getElementById("sellPrice").value),u=parseFloat(document.getElementById("investmentFee").value)/100,r=parseFloat(document.getElementById("exitFee").value)/100,y=l*(1+u),a=l/n*s*(1-r),c=a-y,d=e=>new Intl.NumberFormat("en-US",{style:"currency",currency:t}).format(e),$=document.getElementById("profitLoss");$.textContent=`${d(c)} (${(c/y*100).toFixed(2)}%)`,$.classList.remove("profit","loss"),$.classList.add(c>=0?"profit":"loss"),document.getElementById("totalInvestment").textContent=d(y),document.getElementById("totalTakeHome").textContent=d(a),document.getElementById("result").style.display="block"}),updatePrices();
