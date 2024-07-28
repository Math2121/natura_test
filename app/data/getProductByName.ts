export async function getDataByName(name:string) {
    const res = await fetch(`https://natura-test-server.onrender.com/products?name=${name}`, {
        cache: "no-cache",
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    })
    return res.json()
}
