class Venta {
  constructor(producto, cantidad, precio) {
    this.producto = producto; //Asignación
    this.cantidad = cantidad;
    this.precio = precio;
  }
  
  getProducto(){
   	return this.producto; 
  }
  
  getCantidad(){
   	return this.cantidad; 
  }
  
  getPrecio(){
   	return this.precio; 
  }
  getCosto(){
  	return (this.cantidad * this.precio);  
  }
  
  getGanancia(){
    return ( this.getCosto() * 0.1 );
  }
}
    
const venta1 = new Venta("1kg de Azucar", 1, 2);
const venta2 = new Venta("Aceite", 3, 4);

	
console.log(`   Nombre 					  Cantidad  				PU  					Total  				   Ganancia 
	${venta1.getProducto()}  			 ${venta1.getCantidad()} 							  ${venta1.getPrecio()} 					  ${venta1.getCosto()} 							 ${venta1.getGanancia()}
	${venta2.getProducto()}  			 ${venta2.getCantidad()} 							  ${venta2.getPrecio()} 					  ${venta2.getCosto()} 							 ${venta2.getGanancia()}`)
;

console.log(`La cantidad total de productos vendidos es: ${venta1.getCantidad() + venta2.getCantidad()}`);

console.log(`La cantidad total de dinero entrado a caja es: ${venta1.getCosto() + venta2.getCosto()}`);