function Television(screenSize, resolution, brand, inventory) {
  this.screenSize = screenSize || 32;
  this.resolution = resolution || '1360x768';
  this.brand = brand || {make: 'generic', model: 'generic'};
  this.inventory = inventory || 10;
};
Television.prototype = {
  buyTV: function(quantityBought) {
    quantityBought = quantityBought || 1;
    this.inventory += Number(quantityBought);
  },
  sellTV: function(quantitySold) {
    quantitySold = quantitySold || 1;
    if(this.inventory <= 0) {
      return 'Out of Stock';
    } else {
      this.inventory -= Number(quantitySold);  
    }
  }
};
var panasonic4K = new Television(65, '3840 x 2160', {make: 'Panasonic', model: 'TX-65CZ952'}, 20);
var sony75 = new Television(75, '3840 x 2160', {make: 'Sony', model: 'KD-75X9405C'});
var defaultTV = new Television();

panasonic4K.buyTV(10);
panasonic4K.sellTV(5);

