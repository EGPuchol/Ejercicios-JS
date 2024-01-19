const products = [
  { name: "Gorra de rodilla", sellCount: 10 },
  { name: "Pantalón de pana", sellCount: 302 },
  { name: "Reloj de papel albal", sellCount: 23 },
  { name: "Inpar de zapatos", sellCount: 6 },
];

ventaTotal=0;

for (const venta of products){
ventaTotal += venta.sellCount
}
console.log(ventaTotal);
