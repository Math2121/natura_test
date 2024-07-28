type Items = {
    items: {
        productId: number,
        quantity: number,
     
    }[]
}
export async function createCart(items:Items){



    await fetch('https://natura-test-server.onrender.com/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(items)
    })

    
}