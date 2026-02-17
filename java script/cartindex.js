let icon=document.querySelector('#icon');
	let cart=document.querySelector('.cart-box');
	let rem=document.querySelector('#close');
	icon.addEventListener('click',()=>{
		cart.classList.add('cart-active');
	});

	rem.addEventListener('click',()=>{
		cart.classList.remove('cart-active');
	});	

	document.addEventListener('DOMContentLoaded',loadContent);

	function loadContent(){
		// console.log('hello');
		loadItem();
	}

	function loadItem(){
		let rembtn=document.querySelectorAll('.remove');
		rembtn.forEach((btn)=>{
			btn.addEventListener('click',removebtn);
		});

		let quantity=document.querySelectorAll('.qty');
		quantity.forEach((input)=>{
			input.addEventListener('change',qtychange);
		});

		let cartbtn=document.querySelectorAll('.addcart');
		cartbtn.forEach((btn)=>{
			btn.addEventListener('click',addtocart);
		});

		updateTotal();
	}

	function removebtn(){
		let container=this.parentElement;
		let title=container.querySelector('.cart-title').innerHTML;
		arrList=arrList.filter(e=>e.title!=title);
		this.parentElement.remove();
	}

	function qtychange(){
		if(this.value<1){
			this.value=1;
		}
	}

	let arrList=[];
	function addtocart(){
		let item=this.parentElement;
		// console.log(item);
		let title=item.querySelector('.food-title').innerHTML;
		let price=item.querySelector('.food-price').innerHTML;
		let imgsrc=item.querySelector('.img').src;
		// console.log(title,price,imgsrc);
		let check={title,price,imgsrc};
		if(arrList.find(e=>e.title==check.title)){
			alert("duplicate product");
			return;
		}else{
			arrList.push(check);
		}

		let createProduct=newProduct(title,price,imgsrc);
		let cartbox=document.querySelector('.cart-box');
		let div=document.createElement('div');
		div.innerHTML=createProduct;
		cartbox.append(div);
		loadItem();
	}

	function newProduct(title,price,imgsrc){
		return `
			<div class="cart-content1">
			<img src="${imgsrc}">
		<div class="cart-details">
			<div class="cart-title">${title}</div>
			<div class="cart-price">
				<div class="price">${price}</div>
				<div class="total-amt">${price}</div>
			</div>
			<input type="number" name="" value="1" class="qty">
		</div>
		<i class="fa-solid fa-trash remove" style="font-size: 40px; cursor: pointer;"></i>
	</div>
		`
	}

	function updateTotal(){
		let cartbox=document.querySelectorAll('.cart-content1');
		let totalval=document.querySelector('.total-price');
		let total=0;
		cartbox.forEach(product=>{
			let price=product.querySelector('.price').innerHTML;
			console.log(price);
			let pricetotal=parseInt(price.replace("Rs.",""));
			console.log(pricetotal);
			let quantity=product.querySelector('.qty').value;
			total+=(pricetotal*quantity);
			console.log(total);
				document.querySelector('.total-amt').innerHTML=(pricetotal*quantity);
		});

 	totalval.innerHTML="Rs."+total;

	}