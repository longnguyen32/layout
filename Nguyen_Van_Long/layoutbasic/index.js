const cart = {}//object rong

function addToCart(event){
    // console.log(event)
    const btn = event.target//lấy chính cái thẻ mà ta target
    // console.log(btn)
    const cartbody = btn.parentNode//lấy thẻ cha của nó
    // console.log(cartbody)
    const name = cartbody.querySelector('h5').innerText//lấy text thẻ h5 trong thẻ cha chứa nó
    let price = cartbody.querySelector('p').innerText
    price = price.replace(/[.]/g,'') //vì dấu chấm và dấu * là kí tự đặc biêt => cho vào trong[] , ký tự khác thì không
    .replace(' vnđ','')
    price = Number(price)
    const id = btn.getAttribute("DataId")
    const product = {
        id:id,
        name:name,
        // price:price.replace(',',''),//chi xoa duoc dau , dau tien
        price:price,//g= global sử dụng regex để xóa nhiều ký tự
        total:1,
    }
    // console.log(cart)
    //ktra sản phẩm có trong giỏ hàng hay chưa
    if(cart[id]){//nếu spham có trong giỏ hàng thì 
        const currentProduct = cart[id]
        currentProduct.total++
    }
    else{//spham chưa có trong giỏ hang
        cart[id] = product
    }

    //hiển thị vào ol
    // const ol = document.getElementById('cart-list')
    // let html = ''
    // for(let key in cart){
    //     if(cart.hasOwnProperty(key)){
    //         const currentProduct = cart[key]
    //         html += '<li>' + currentProduct.name + '</li>'
    //     }
    // }
    // ol.innerHTML = html
    render()
    console.log(cart)
}

function render(){
        //hiển thị vào ol
        const ol = document.getElementById('cart-list')
        let html = ''
        for(let key in cart){
            if(cart.hasOwnProperty(key)){
                const currentProduct = cart[key]
                // html += '<li>' + currentProduct.name + '</li>' c1
                html +=`
                <li>
                    <p>id:${currentProduct.id}</p>
                    <p>Ten:${currentProduct.name}</p>
                    <p>Gia:${currentProduct.price}</p>
                    <p>So luong:${currentProduct.total}</p>
                    <button>Tang</button>
                    <button onclick = "addProduct('${currentProduct.id}')">Giam</button>
                    <button onclick="deleteProduct('${currentProduct.id}')">Xoa</button>
                    <input onchange="upDateProduct(event,'${currentProduct.id}')" type = "number">
                    <p>Tongtien :${currentProduct.price*currentProduct.total}</p>
                    <hr>
                </li>
                `
            }
        }
        ol.innerHTML = html
}

function deleteProduct(id){
    if(cart[id]){
        const result = confirm("ban co chac chan muon xoa khong")
        if(result){
            //xóa
            delete cart[id]
        }
    }
    render()
}

function addProduct(id){
    if(cart[id]){
        const result = confirm("ban co chac chan muon them khong")
        if(result){
            cart[id].total++
        }
    }
    render()
}

function upDateProduct(event ,id ){
    const value = event.target.value
    cart[id].total = value
    render()
}
