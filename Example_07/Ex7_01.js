var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
  };
  Rectangle.prototype.getArea = function() {
    return this.width * this.height;
  };
  Rectangle.isRectangle = function(instance) {
    return (
      instance instanceof Rectangle && instance.width > 0 && instance.height > 0
    );
  };