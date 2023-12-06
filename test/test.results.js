export const message = "Bienvenido a Pescar Shops"

export const NumbersArray = (ini, fin, step=1, arr = []) => {
    for (let i = ini; i <= fin; i+=step)  arr.push(i)
    return arr
}
