function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
}

function draw() {
  var maxiterations = 500;

  loadPixels();
  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      var a = map(x, 0, width, -2, 2);
      var b = map(y, 0, height, -2, 2);

      var ca = a;
      var cb = b;

      var n = 0;

      while (n < maxiterations) {
        // find the values or iterations of the mandlebrot equation i.e z^2+c
        var aa = a * a - b * b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        if (a * a + b * b > 20) {
          break;
        }
        n++;
      }

      var bright = map(n, 0, maxiterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      if (n == maxiterations) {
        bright = 0;
      }

      // colorize the pixels in the grid
      var pix = (x + y * width) * 4; //formula for finding the location of the pixel
      pixels[pix + 0] = bright; //R value
      pixels[pix + 1] = bright; //G value
      pixels[pix + 2] = bright; //B value
      pixels[pix + 3] = 255; //A value
    }
  }
  updatePixels();
}
