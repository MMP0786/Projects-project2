import React from 'react'
import {AiFillDelete} from 'react-icons/Ai'

function Cart() {
  return (
    <div className='cart'>
        <main> </main>

            <aside>
                <h2>SubTotal : ${2000}</h2>
                <h2>Shipping : ${200}</h2>
                <h2>Tax : ${20}</h2>
                <h2>Total : ${1220}</h2>
            </aside>
       
    </div>
  )
}

const cartItem = ({img, name, price, qty, decreament, increament, deleteHandler, id})=>{
    <div className='cart'>
        <img src={img} alt={item}/>

        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={()=> decreament(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=> increament(id)}>+</button>
        </div>

        <AiFillDelete/>
    </div>
}
export default Cart