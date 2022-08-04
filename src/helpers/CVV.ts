export const GenerateCVV = ():string=>{

    const D1 = Math.floor(Math.random() * (9 - 0) + 0).toString();
    const D2 = Math.floor(Math.random() * (9 - 0) + 0).toString();
    const D3 = Math.floor(Math.random() * (9 - 0) + 0).toString();
    const cvv = D1+D2+D3;
    return cvv;
}