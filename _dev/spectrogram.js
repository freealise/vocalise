(function () {
  function Spectrogram(audioContext, canvasElement) {
    this.analyserNode = audioContext.createAnalyser();
    this.analyserNode.fftSize = 2048;
    this.fftData = new Uint8Array(this.analyserNode.frequencyBinCount);

    this.graphicWidth = parseInt(getComputedStyle(canvasElement).width, 10);
    this.graphicHeight = parseInt(getComputedStyle(canvasElement).height, 10);

    var gc = this.graphicContext = canvasElement.getContext("2d");
    gc.fillStyle = '#ffffff';

    this.pixel = gc.createImageData(1,1);
    this.pixel.data[3] = 255;

    this.stopping = false;

    this.draw();
  }

  Spectrogram.prototype.acceptConnection = function (connectedNode) {
    connectedNode.connect(this.analyserNode);
    this.connectedNode = connectedNode;
  };

  Spectrogram.prototype.draw = function () {
    if (this.stopping) {
      this.stopping = false;
      return;
    }

    var gc = this.graphicContext;
    var gw = this.graphicWidth;
    var gh = this.graphicHeight;

    if (!this.connectedNode) {
      gc.fillRect(0, 0, gw, gh);
    }
    else {
      var slideImage = gc.getImageData(0, 1, gw, gh);
      gc.putImageData(slideImage, 0, 0);

      var i, y, n;

      this.analyserNode.getByteFrequencyData(this.fftData);

      for (i = 0; i < gw; ++i) {
        n = 255 - this.fftData[i];
        this.pixel.data[0] = n;
        this.pixel.data[1] = n;
        this.pixel.data[2] = n;
        gc.putImageData(this.pixel, i, gh - 1);
      }
    }

    this.animationHandle = requestAnimationFrame(function () { this.draw(); }.bind(this));
  };

  Spectrogram.prototype.releaseConnection = function () {
    this.connectedNode.disconnect(this.analyserNode);
    delete this.connectedNode;
  };

  Spectrogram.prototype.stop = function () {
    this.stopping = true;
  };

  window.App = window.App || {};
  window.App.Spectrogram = Spectrogram;
})();
