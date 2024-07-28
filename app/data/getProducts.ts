export async function getData(page:number = 1) {
    const res = await fetch(`https://natura-test-server.onrender.com/products?page=${page}`, {
        cache: "no-cache",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    })
    return res.json()
}
