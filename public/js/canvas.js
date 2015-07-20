// Main canvas and context references
    var canvas;
    var ctx;

    // Frames per second
    var fps = 60.0;

    // Animations
    var animations = [ new cloud1Path(), new cloud2Path(), new cloud3Path(), new cloud4Path() ];

    function cloud1Path() {

      // Control and anchor points
      this.points = [
                    [ [-239.0, 319.0], [261.9, 319.0], [762.9, 319.0], [1279.0, 319.0] ]
                    ];

      // Linear motion index
      this.linear = [
                    [0, 0.00, 0.00], [0, 0.03, 0.03], [0, 0.07, 0.07], [0, 0.10, 0.10], 
                    [0, 0.13, 0.13], [0, 0.17, 0.17], [0, 0.20, 0.20], [0, 0.24, 0.23], 
                    [0, 0.27, 0.27], [0, 0.30, 0.30], [0, 0.34, 0.33], [0, 0.37, 0.37], 
                    [0, 0.40, 0.40], [0, 0.44, 0.43], [0, 0.47, 0.47], [0, 0.50, 0.50], 
                    [0, 0.54, 0.53], [0, 0.57, 0.57], [0, 0.60, 0.60], [0, 0.64, 0.63], 
                    [0, 0.67, 0.67], [0, 0.70, 0.70], [0, 0.74, 0.73], [0, 0.77, 0.77], 
                    [0, 0.80, 0.80], [0, 0.84, 0.83], [0, 0.87, 0.87], [0, 0.90, 0.90], 
                    [0, 0.93, 0.93], [0, 0.97, 0.97], [0, 1.00, 1.00]
                    ];

      // Segment T boundaries
      this.segmentT = [1.00];

      this.lastValue = -1.0;
      this.x = 0;
      this.y = 0;
      this.orientation = 0.0;
      this.pathClock = new clock(30.00, 0.00, 1, false, 0, linear, this.linear.length - 1, 1.00, 0.0000);

      // Update function
      this.update = updatePath;
    }

    function cloud2Path() {

      // Control and anchor points
      this.points = [
                    [ [-261.0, 165.0], [239.9, 165.0], [740.9, 165.0], [1257.0, 165.0] ]
                    ];

      // Linear motion index
      this.linear = [
                    [0, 0.00, 0.00], [0, 0.03, 0.03], [0, 0.07, 0.07], [0, 0.10, 0.10], 
                    [0, 0.13, 0.13], [0, 0.17, 0.17], [0, 0.20, 0.20], [0, 0.24, 0.23], 
                    [0, 0.27, 0.27], [0, 0.30, 0.30], [0, 0.34, 0.33], [0, 0.37, 0.37], 
                    [0, 0.40, 0.40], [0, 0.44, 0.43], [0, 0.47, 0.47], [0, 0.50, 0.50], 
                    [0, 0.54, 0.53], [0, 0.57, 0.57], [0, 0.60, 0.60], [0, 0.64, 0.63], 
                    [0, 0.67, 0.67], [0, 0.70, 0.70], [0, 0.74, 0.73], [0, 0.77, 0.77], 
                    [0, 0.80, 0.80], [0, 0.84, 0.83], [0, 0.87, 0.87], [0, 0.90, 0.90], 
                    [0, 0.93, 0.93], [0, 0.97, 0.97], [0, 1.00, 1.00]
                    ];

      // Segment T boundaries
      this.segmentT = [1.00];

      this.lastValue = -1.0;
      this.x = 0;
      this.y = 0;
      this.orientation = 0.0;
      this.pathClock = new clock(60.00, 0.00, 1, false, 0, linear, this.linear.length - 1, 1.00, 0.0000);

      // Update function
      this.update = updatePath;
    }

    function cloud3Path() {

      // Control and anchor points
      this.points = [
                    [ [211.0, 473.0], [548.9, 473.0], [886.8, 473.0], [1235.0, 473.0] ]
                    ];

      // Linear motion index
      this.linear = [
                    [0, 0.00, 0.00], [0, 0.05, 0.05], [0, 0.10, 0.10], [0, 0.15, 0.15], 
                    [0, 0.20, 0.20], [0, 0.25, 0.25], [0, 0.30, 0.30], [0, 0.35, 0.35], 
                    [0, 0.40, 0.40], [0, 0.45, 0.45], [0, 0.50, 0.50], [0, 0.55, 0.55], 
                    [0, 0.60, 0.60], [0, 0.65, 0.65], [0, 0.70, 0.70], [0, 0.75, 0.75], 
                    [0, 0.80, 0.80], [0, 0.85, 0.85], [0, 0.90, 0.90], [0, 0.95, 0.95], 
                    [0, 1.00, 1.00]
                    ];

      // Segment T boundaries
      this.segmentT = [1.00];

      this.lastValue = -1.0;
      this.x = 0;
      this.y = 0;
      this.orientation = 0.0;
      this.pathClock = new clock(60.00, 0.00, 1, false, 1, linear, this.linear.length - 1, 1.00, 0.0000);

      // Update function
      this.update = updatePath;
    }

    function cloud4Path() {

      // Control and anchor points
      this.points = [
                    [ [-233.0, 633.0], [198.6, 633.0], [630.3, 633.0], [1075.0, 633.0] ]
                    ];

      // Linear motion index
      this.linear = [
                    [0, 0.00, 0.00], [0, 0.04, 0.04], [0, 0.08, 0.08], [0, 0.12, 0.12], 
                    [0, 0.16, 0.15], [0, 0.19, 0.19], [0, 0.23, 0.23], [0, 0.27, 0.27], 
                    [0, 0.31, 0.31], [0, 0.35, 0.35], [0, 0.39, 0.38], [0, 0.43, 0.42], 
                    [0, 0.47, 0.46], [0, 0.50, 0.50], [0, 0.54, 0.54], [0, 0.58, 0.58], 
                    [0, 0.62, 0.62], [0, 0.66, 0.65], [0, 0.70, 0.69], [0, 0.73, 0.73], 
                    [0, 0.77, 0.77], [0, 0.81, 0.81], [0, 0.85, 0.85], [0, 0.89, 0.88], 
                    [0, 0.92, 0.92], [0, 0.96, 0.96], [0, 1.00, 1.00]
                    ];

      // Segment T boundaries
      this.segmentT = [1.00];

      this.lastValue = -1.0;
      this.x = 0;
      this.y = 0;
      this.orientation = 0.0;
      this.pathClock = new clock(60.00, 0.00, 1, false, 0, linear, this.linear.length - 1, 1.00, 0.0000);

      // Update function
      this.update = updatePath;
    }

    function init() {

      // Set main canvas and context references
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");

      // Start animation clocks
      animations[0].pathClock.start();
      animations[1].pathClock.start();
      animations[2].pathClock.start();
      animations[3].pathClock.start();

      // Set animation timer
      setInterval(drawFrame, (1000 / fps));
    }

    function updateAnimations() {

      // Update animation paths  
      var animationCount = animations.length;
      for (var i = 0; i < animationCount; i++) {
        animations[i].update();
      }
    }

    function drawFrame() {

      // Update animations
      updateAnimations();

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bg(ctx);

      ctx.save();
      ctx.translate(animations[0].x, animations[0].y);
      cloud1(ctx);
      ctx.restore();

      ctx.save();
      ctx.translate(animations[1].x, animations[1].y);
      cloud2(ctx);
      ctx.restore();

      ctx.save();
      ctx.translate(animations[2].x, animations[2].y);
      cloud3(ctx);
      ctx.restore();

      ctx.save();
      ctx.translate(animations[3].x, animations[3].y);
      cloud4(ctx);
      ctx.restore();

      draw(ctx);
    }

    function bg(ctx) {

      var gradient;

      // bg/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(1024.0, 768.0);
      ctx.lineTo(0.0, 768.0);
      ctx.lineTo(0.0, 0.0);
      ctx.lineTo(1024.0, 0.0);
      ctx.lineTo(1024.0, 768.0);
      ctx.closePath();
      gradient = ctx.createLinearGradient(512.0, 768.0, 512.0, 0.0);
      gradient.addColorStop(0.00, "rgb(100, 44, 143)");
      gradient.addColorStop(1.00, "rgb(37, 33, 96)");
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.restore();
    }

    function cloud1(ctx) {

      var alpha = ctx.globalAlpha;

      // cloud1/Compound Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.40;
      ctx.beginPath();

      // cloud1/Compound Path/Path
      ctx.moveTo(35.8, -33.7);
      ctx.bezierCurveTo(35.6, -43.2, 27.3, -50.7, 17.3, -50.5);
      ctx.bezierCurveTo(15.9, -50.5, 14.5, -50.3, 13.2, -50.0);
      ctx.bezierCurveTo(13.9, -51.4, 14.4, -53.0, 14.3, -54.7);
      ctx.bezierCurveTo(14.2, -60.5, 9.2, -65.1, 3.1, -64.9);
      ctx.bezierCurveTo(-0.9, -64.9, -4.3, -62.8, -6.2, -59.7);
      ctx.bezierCurveTo(-9.2, -65.6, -15.6, -69.6, -22.9, -69.5);
      ctx.bezierCurveTo(-33.0, -69.2, -41.0, -61.4, -40.8, -51.9);
      ctx.bezierCurveTo(-40.8, -50.2, -40.5, -48.7, -40.0, -47.2);
      ctx.bezierCurveTo(-40.6, -47.3, -41.2, -47.3, -41.7, -47.3);
      ctx.bezierCurveTo(-49.6, -47.1, -55.8, -41.0, -55.7, -33.5);
      ctx.bezierCurveTo(-55.6, -28.2, -52.2, -23.7, -47.4, -21.6);
      ctx.bezierCurveTo(-52.7, -20.7, -56.6, -16.3, -56.5, -11.1);
      ctx.bezierCurveTo(-56.4, -5.3, -51.4, -0.8, -45.3, -0.9);
      ctx.bezierCurveTo(-43.5, -0.9, -41.9, -1.4, -40.4, -2.1);
      ctx.bezierCurveTo(-40.5, -1.4, -40.6, -0.7, -40.6, 0.0);
      ctx.bezierCurveTo(-40.5, 5.8, -35.5, 10.3, -29.4, 10.2);
      ctx.bezierCurveTo(-27.1, 10.2, -25.0, 9.5, -23.3, 8.3);
      ctx.bezierCurveTo(-20.2, 13.8, -14.0, 17.5, -6.9, 17.4);
      ctx.bezierCurveTo(2.9, 17.2, 10.8, 9.6, 11.0, 0.4);
      ctx.bezierCurveTo(12.2, 0.8, 13.6, 1.1, 15.1, 1.0);
      ctx.bezierCurveTo(21.2, 0.9, 26.0, -3.8, 25.9, -9.6);
      ctx.bezierCurveTo(25.9, -12.4, 24.6, -15.0, 22.7, -16.8);
      ctx.bezierCurveTo(30.4, -18.9, 36.0, -25.7, 35.8, -33.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(37, 33, 96)";
      ctx.fill();

      // cloud1/Path
      ctx.beginPath();
      ctx.moveTo(-56.0, 4.9);
      ctx.bezierCurveTo(-52.1, -3.3, -43.8, -9.0, -34.1, -9.0);
      ctx.bezierCurveTo(-31.2, -9.0, -28.5, -8.4, -26.0, -7.6);
      ctx.bezierCurveTo(-24.2, -15.5, -17.2, -21.4, -8.7, -21.4);
      ctx.bezierCurveTo(-6.9, -21.4, -5.2, -21.2, -3.6, -20.7);
      ctx.bezierCurveTo(2.0, -30.2, 12.4, -36.6, 24.2, -36.6);
      ctx.bezierCurveTo(36.0, -36.6, 46.3, -30.2, 51.9, -20.8);
      ctx.bezierCurveTo(56.0, -22.8, 60.7, -23.9, 65.6, -23.9);
      ctx.bezierCurveTo(77.3, -23.9, 87.6, -17.6, 93.2, -8.2);
      ctx.bezierCurveTo(95.0, -9.1, 97.0, -9.6, 99.1, -9.6);
      ctx.bezierCurveTo(106.4, -9.6, 112.2, -3.7, 112.2, 3.5);
      ctx.bezierCurveTo(112.2, 4.7, 112.1, 5.8, 111.8, 6.9);
      ctx.bezierCurveTo(112.4, 6.9, 113.1, 6.8, 113.8, 6.8);
      ctx.bezierCurveTo(123.9, 6.8, 132.2, 15.0, 132.2, 25.2);
      ctx.bezierCurveTo(132.2, 35.4, 123.9, 43.6, 113.8, 43.6);
      ctx.bezierCurveTo(110.7, 43.6, 107.8, 42.8, 105.3, 41.5);
      ctx.bezierCurveTo(100.9, 54.2, 88.9, 63.3, 74.8, 63.3);
      ctx.bezierCurveTo(68.4, 63.3, 62.5, 61.5, 57.5, 58.3);
      ctx.bezierCurveTo(51.6, 65.1, 42.9, 69.5, 33.2, 69.5);
      ctx.bezierCurveTo(19.7, 69.5, 8.2, 61.3, 3.4, 49.6);
      ctx.bezierCurveTo(0.2, 54.3, -5.2, 57.4, -11.3, 57.4);
      ctx.bezierCurveTo(-21.1, 57.4, -29.0, 49.5, -29.0, 39.7);
      ctx.bezierCurveTo(-29.0, 39.5, -29.0, 39.3, -29.0, 39.1);
      ctx.bezierCurveTo(-30.7, 39.5, -32.4, 39.7, -34.1, 39.7);
      ctx.bezierCurveTo(-41.6, 39.7, -48.3, 36.3, -52.8, 30.9);
      ctx.bezierCurveTo(-53.5, 31.0, -54.3, 31.1, -55.1, 31.1);
      ctx.bezierCurveTo(-62.4, 31.1, -68.3, 25.2, -68.3, 18.0);
      ctx.bezierCurveTo(-68.3, 11.0, -62.8, 5.3, -56.0, 4.9);
      ctx.closePath();
      ctx.fill("evenodd");

      // cloud1/Path
      ctx.beginPath();
      ctx.moveTo(-122.1, 12.0);
      ctx.bezierCurveTo(-118.9, 5.3, -112.1, 0.7, -104.2, 0.7);
      ctx.bezierCurveTo(-101.9, 0.7, -99.6, 1.1, -97.6, 1.8);
      ctx.bezierCurveTo(-96.1, -4.7, -90.3, -9.5, -83.4, -9.5);
      ctx.bezierCurveTo(-81.9, -9.5, -80.5, -9.3, -79.2, -8.9);
      ctx.bezierCurveTo(-74.6, -16.7, -66.2, -21.9, -56.5, -21.9);
      ctx.bezierCurveTo(-46.8, -21.9, -38.4, -16.7, -33.8, -9.0);
      ctx.bezierCurveTo(-30.4, -10.6, -26.6, -11.5, -22.6, -11.5);
      ctx.bezierCurveTo(-13.0, -11.5, -4.6, -6.4, 0.0, 1.3);
      ctx.bezierCurveTo(1.5, 0.6, 3.1, 0.2, 4.9, 0.2);
      ctx.bezierCurveTo(10.8, 0.2, 15.6, 5.0, 15.6, 10.9);
      ctx.bezierCurveTo(15.6, 11.9, 15.5, 12.8, 15.3, 13.7);
      ctx.bezierCurveTo(15.8, 13.6, 16.3, 13.6, 16.9, 13.6);
      ctx.bezierCurveTo(25.2, 13.6, 32.0, 20.3, 32.0, 28.7);
      ctx.bezierCurveTo(32.0, 37.0, 25.2, 43.7, 16.9, 43.7);
      ctx.bezierCurveTo(14.4, 43.7, 12.0, 43.1, 9.9, 42.0);
      ctx.bezierCurveTo(6.4, 52.4, -3.5, 59.9, -15.0, 59.9);
      ctx.bezierCurveTo(-20.2, 59.9, -25.1, 58.4, -29.2, 55.8);
      ctx.bezierCurveTo(-34.0, 61.4, -41.1, 64.9, -49.1, 64.9);
      ctx.bezierCurveTo(-60.1, 64.9, -69.5, 58.2, -73.5, 48.6);
      ctx.bezierCurveTo(-76.1, 52.5, -80.5, 55.0, -85.5, 55.0);
      ctx.bezierCurveTo(-93.6, 55.0, -100.1, 48.5, -100.1, 40.5);
      ctx.bezierCurveTo(-100.1, 40.4, -100.0, 40.2, -100.0, 40.1);
      ctx.bezierCurveTo(-101.4, 40.4, -102.8, 40.5, -104.2, 40.5);
      ctx.bezierCurveTo(-110.3, 40.5, -115.8, 37.7, -119.5, 33.3);
      ctx.bezierCurveTo(-120.1, 33.4, -120.8, 33.5, -121.4, 33.5);
      ctx.bezierCurveTo(-127.4, 33.5, -132.2, 28.7, -132.2, 22.8);
      ctx.bezierCurveTo(-132.2, 17.1, -127.7, 12.4, -122.1, 12.0);
      ctx.closePath();
      ctx.fill("evenodd");
      ctx.restore();
    }

    function cloud2(ctx) {

      var alpha = ctx.globalAlpha;

      // cloud2/Compound Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.40;
      ctx.beginPath();

      // cloud2/Compound Path/Path
      ctx.moveTo(26.5, -24.9);
      ctx.bezierCurveTo(26.3, -31.9, 20.2, -37.5, 12.8, -37.3);
      ctx.bezierCurveTo(11.7, -37.3, 10.7, -37.2, 9.8, -36.9);
      ctx.bezierCurveTo(10.3, -38.0, 10.6, -39.2, 10.6, -40.4);
      ctx.bezierCurveTo(10.5, -44.7, 6.8, -48.1, 2.3, -48.0);
      ctx.bezierCurveTo(-0.7, -47.9, -3.2, -46.4, -4.6, -44.1);
      ctx.bezierCurveTo(-6.8, -48.5, -11.5, -51.4, -16.9, -51.3);
      ctx.bezierCurveTo(-24.4, -51.1, -30.3, -45.3, -30.1, -38.3);
      ctx.bezierCurveTo(-30.1, -37.1, -29.9, -36.0, -29.6, -34.9);
      ctx.bezierCurveTo(-30.0, -34.9, -30.4, -34.9, -30.8, -34.9);
      ctx.bezierCurveTo(-36.6, -34.8, -41.2, -30.3, -41.1, -24.8);
      ctx.bezierCurveTo(-41.0, -20.8, -38.5, -17.5, -35.0, -15.9);
      ctx.bezierCurveTo(-38.9, -15.3, -41.8, -12.1, -41.8, -8.2);
      ctx.bezierCurveTo(-41.7, -3.9, -38.0, -0.6, -33.5, -0.7);
      ctx.bezierCurveTo(-32.2, -0.7, -30.9, -1.0, -29.8, -1.6);
      ctx.bezierCurveTo(-29.9, -1.1, -30.0, -0.5, -30.0, 0.0);
      ctx.bezierCurveTo(-29.9, 4.3, -26.2, 7.6, -21.7, 7.5);
      ctx.bezierCurveTo(-20.0, 7.5, -18.5, 7.0, -17.2, 6.1);
      ctx.bezierCurveTo(-14.9, 10.2, -10.3, 12.9, -5.1, 12.8);
      ctx.bezierCurveTo(2.2, 12.7, 8.0, 7.1, 8.1, 0.3);
      ctx.bezierCurveTo(9.0, 0.6, 10.1, 0.8, 11.2, 0.8);
      ctx.bezierCurveTo(15.7, 0.7, 19.2, -2.8, 19.1, -7.1);
      ctx.bezierCurveTo(19.1, -9.2, 18.2, -11.0, 16.8, -12.4);
      ctx.bezierCurveTo(22.5, -14.0, 26.6, -19.0, 26.5, -24.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(37, 33, 96)";
      ctx.fill();

      // cloud2/Path
      ctx.beginPath();
      ctx.moveTo(-41.4, 3.6);
      ctx.bezierCurveTo(-38.5, -2.4, -32.3, -6.6, -25.2, -6.6);
      ctx.bezierCurveTo(-23.1, -6.6, -21.1, -6.2, -19.2, -5.6);
      ctx.bezierCurveTo(-17.9, -11.4, -12.7, -15.8, -6.4, -15.8);
      ctx.bezierCurveTo(-5.1, -15.8, -3.8, -15.6, -2.6, -15.3);
      ctx.bezierCurveTo(1.5, -22.3, 9.1, -27.0, 17.9, -27.0);
      ctx.bezierCurveTo(26.6, -27.0, 34.2, -22.3, 38.3, -15.4);
      ctx.bezierCurveTo(41.4, -16.8, 44.8, -17.6, 48.4, -17.6);
      ctx.bezierCurveTo(57.1, -17.6, 64.7, -13.0, 68.8, -6.1);
      ctx.bezierCurveTo(70.1, -6.7, 71.6, -7.1, 73.2, -7.1);
      ctx.bezierCurveTo(78.5, -7.1, 82.9, -2.8, 82.9, 2.6);
      ctx.bezierCurveTo(82.9, 3.5, 82.8, 4.3, 82.6, 5.1);
      ctx.bezierCurveTo(83.0, 5.1, 83.5, 5.0, 84.0, 5.0);
      ctx.bezierCurveTo(91.5, 5.0, 97.6, 11.1, 97.6, 18.6);
      ctx.bezierCurveTo(97.6, 26.1, 91.5, 32.2, 84.0, 32.2);
      ctx.bezierCurveTo(81.8, 32.2, 79.6, 31.6, 77.7, 30.7);
      ctx.bezierCurveTo(74.5, 40.0, 65.7, 46.8, 55.2, 46.8);
      ctx.bezierCurveTo(50.5, 46.8, 46.2, 45.4, 42.5, 43.1);
      ctx.bezierCurveTo(38.1, 48.1, 31.7, 51.3, 24.5, 51.3);
      ctx.bezierCurveTo(14.6, 51.3, 6.1, 45.2, 2.5, 36.6);
      ctx.bezierCurveTo(0.2, 40.1, -3.8, 42.4, -8.4, 42.4);
      ctx.bezierCurveTo(-15.6, 42.4, -21.5, 36.5, -21.5, 29.3);
      ctx.bezierCurveTo(-21.5, 29.2, -21.4, 29.0, -21.4, 28.9);
      ctx.bezierCurveTo(-22.6, 29.2, -23.9, 29.3, -25.2, 29.3);
      ctx.bezierCurveTo(-30.7, 29.3, -35.7, 26.8, -39.0, 22.8);
      ctx.bezierCurveTo(-39.5, 22.9, -40.1, 23.0, -40.7, 23.0);
      ctx.bezierCurveTo(-46.1, 23.0, -50.4, 18.6, -50.4, 13.3);
      ctx.bezierCurveTo(-50.4, 8.1, -46.4, 3.9, -41.4, 3.6);
      ctx.closePath();
      ctx.fill("evenodd");

      // cloud2/Path
      ctx.beginPath();
      ctx.moveTo(-90.2, 8.9);
      ctx.bezierCurveTo(-87.8, 3.9, -82.8, 0.5, -77.0, 0.5);
      ctx.bezierCurveTo(-75.2, 0.5, -73.6, 0.8, -72.1, 1.4);
      ctx.bezierCurveTo(-71.0, -3.4, -66.7, -7.0, -61.6, -7.0);
      ctx.bezierCurveTo(-60.5, -7.0, -59.5, -6.9, -58.5, -6.6);
      ctx.bezierCurveTo(-55.1, -12.3, -48.9, -16.2, -41.7, -16.2);
      ctx.bezierCurveTo(-34.6, -16.2, -28.4, -12.4, -25.0, -6.6);
      ctx.bezierCurveTo(-22.4, -7.8, -19.6, -8.5, -16.7, -8.5);
      ctx.bezierCurveTo(-9.6, -8.5, -3.4, -4.7, 0.0, 1.0);
      ctx.bezierCurveTo(1.1, 0.4, 2.3, 0.1, 3.6, 0.1);
      ctx.bezierCurveTo(8.0, 0.1, 11.5, 3.7, 11.5, 8.1);
      ctx.bezierCurveTo(11.5, 8.8, 11.4, 9.5, 11.3, 10.1);
      ctx.bezierCurveTo(11.7, 10.1, 12.1, 10.0, 12.5, 10.0);
      ctx.bezierCurveTo(18.6, 10.0, 23.6, 15.0, 23.6, 21.2);
      ctx.bezierCurveTo(23.6, 27.3, 18.6, 32.3, 12.5, 32.3);
      ctx.bezierCurveTo(10.6, 32.3, 8.9, 31.8, 7.3, 31.0);
      ctx.bezierCurveTo(4.7, 38.7, -2.6, 44.2, -11.1, 44.2);
      ctx.bezierCurveTo(-14.9, 44.2, -18.5, 43.1, -21.5, 41.2);
      ctx.bezierCurveTo(-25.1, 45.3, -30.4, 47.9, -36.3, 47.9);
      ctx.bezierCurveTo(-44.4, 47.9, -51.3, 43.0, -54.3, 35.9);
      ctx.bezierCurveTo(-56.2, 38.8, -59.5, 40.6, -63.2, 40.6);
      ctx.bezierCurveTo(-69.1, 40.6, -73.9, 35.8, -73.9, 29.9);
      ctx.bezierCurveTo(-73.9, 29.8, -73.9, 29.7, -73.9, 29.6);
      ctx.bezierCurveTo(-74.9, 29.8, -75.9, 29.9, -77.0, 29.9);
      ctx.bezierCurveTo(-81.5, 29.9, -85.6, 27.9, -88.2, 24.6);
      ctx.bezierCurveTo(-88.7, 24.7, -89.2, 24.8, -89.7, 24.8);
      ctx.bezierCurveTo(-94.1, 24.8, -97.6, 21.2, -97.6, 16.8);
      ctx.bezierCurveTo(-97.6, 12.6, -94.3, 9.2, -90.2, 8.9);
      ctx.closePath();
      ctx.fill("evenodd");
      ctx.restore();
    }

    function cloud3(ctx) {

      var alpha = ctx.globalAlpha;

      // cloud3/Compound Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.40;
      ctx.beginPath();

      // cloud3/Compound Path/Path
      ctx.moveTo(-35.7, -26.4);
      ctx.bezierCurveTo(-38.8, -23.5, -40.7, -19.6, -40.8, -15.1);
      ctx.bezierCurveTo(-41.0, -6.1, -33.4, 1.4, -23.8, 1.6);
      ctx.bezierCurveTo(-21.5, 1.7, -19.3, 1.3, -17.3, 0.6);
      ctx.bezierCurveTo(-17.0, 15.1, -4.6, 27.0, 10.9, 27.3);
      ctx.bezierCurveTo(22.0, 27.6, 31.7, 21.8, 36.7, 13.1);
      ctx.bezierCurveTo(39.4, 14.9, 42.7, 16.0, 46.3, 16.1);
      ctx.bezierCurveTo(55.8, 16.3, 63.8, 9.1, 63.9, 0.0);
      ctx.bezierCurveTo(64.0, -1.1, 63.9, -2.2, 63.6, -3.3);
      ctx.bezierCurveTo(66.0, -2.2, 68.6, -1.5, 71.4, -1.4);
      ctx.bezierCurveTo(81.0, -1.2, 88.9, -8.4, 89.0, -17.5);
      ctx.bezierCurveTo(89.2, -25.7, 82.9, -32.6, 74.6, -34.0);
      ctx.bezierCurveTo(82.2, -37.3, 87.5, -44.4, 87.7, -52.8);
      ctx.bezierCurveTo(87.9, -64.5, 78.1, -74.2, 65.7, -74.5);
      ctx.bezierCurveTo(64.8, -74.5, 63.9, -74.4, 63.1, -74.3);
      ctx.bezierCurveTo(63.8, -76.7, 64.2, -79.1, 64.3, -81.7);
      ctx.bezierCurveTo(64.6, -96.7, 52.0, -109.1, 36.1, -109.4);
      ctx.bezierCurveTo(24.6, -109.6, 14.5, -103.3, 9.8, -94.1);
      ctx.bezierCurveTo(6.8, -98.9, 1.4, -102.2, -4.9, -102.3);
      ctx.bezierCurveTo(-14.5, -102.5, -22.4, -95.3, -22.5, -86.2);
      ctx.bezierCurveTo(-22.6, -83.5, -22.0, -81.0, -20.8, -78.8);
      ctx.bezierCurveTo(-22.9, -79.3, -25.0, -79.5, -27.2, -79.6);
      ctx.bezierCurveTo(-43.1, -79.9, -56.1, -68.0, -56.4, -53.1);
      ctx.bezierCurveTo(-56.7, -40.5, -47.9, -29.8, -35.7, -26.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(37, 33, 96)";
      ctx.fill();

      // cloud3/Path
      ctx.beginPath();
      ctx.moveTo(88.2, 7.7);
      ctx.bezierCurveTo(82.0, -5.2, 68.9, -14.1, 53.7, -14.1);
      ctx.bezierCurveTo(49.2, -14.1, 44.9, -13.3, 40.9, -11.9);
      ctx.bezierCurveTo(38.2, -24.4, 27.0, -33.8, 13.7, -33.8);
      ctx.bezierCurveTo(10.9, -33.8, 8.2, -33.4, 5.6, -32.6);
      ctx.bezierCurveTo(-3.2, -47.5, -19.5, -57.6, -38.1, -57.6);
      ctx.bezierCurveTo(-56.6, -57.6, -72.9, -47.6, -81.7, -32.7);
      ctx.bezierCurveTo(-88.2, -35.8, -95.6, -37.6, -103.3, -37.6);
      ctx.bezierCurveTo(-121.8, -37.6, -137.9, -27.7, -146.8, -12.9);
      ctx.bezierCurveTo(-149.6, -14.3, -152.7, -15.1, -156.1, -15.1);
      ctx.bezierCurveTo(-167.5, -15.1, -176.8, -5.9, -176.8, 5.6);
      ctx.bezierCurveTo(-176.8, 7.4, -176.5, 9.2, -176.1, 10.9);
      ctx.bezierCurveTo(-177.1, 10.8, -178.1, 10.7, -179.2, 10.7);
      ctx.bezierCurveTo(-195.2, 10.7, -208.2, 23.7, -208.2, 39.7);
      ctx.bezierCurveTo(-208.2, 55.7, -195.2, 68.7, -179.2, 68.7);
      ctx.bezierCurveTo(-174.3, 68.7, -169.8, 67.5, -165.8, 65.4);
      ctx.bezierCurveTo(-159.0, 85.4, -140.1, 99.7, -117.8, 99.7);
      ctx.bezierCurveTo(-107.8, 99.7, -98.5, 96.8, -90.6, 91.8);
      ctx.bezierCurveTo(-81.3, 102.6, -67.6, 109.4, -52.2, 109.4);
      ctx.bezierCurveTo(-31.1, 109.4, -13.0, 96.5, -5.4, 78.1);
      ctx.bezierCurveTo(-0.3, 85.5, 8.2, 90.4, 17.8, 90.4);
      ctx.bezierCurveTo(33.2, 90.4, 45.8, 77.9, 45.8, 62.5);
      ctx.bezierCurveTo(45.8, 62.2, 45.7, 61.9, 45.7, 61.6);
      ctx.bezierCurveTo(48.3, 62.2, 51.0, 62.5, 53.7, 62.5);
      ctx.bezierCurveTo(65.5, 62.5, 76.1, 57.1, 83.1, 48.7);
      ctx.bezierCurveTo(84.3, 48.9, 85.5, 49.0, 86.8, 49.0);
      ctx.bezierCurveTo(98.2, 49.0, 107.5, 39.8, 107.5, 28.3);
      ctx.bezierCurveTo(107.5, 17.4, 99.0, 8.4, 88.2, 7.7);
      ctx.closePath();
      ctx.fill("evenodd");

      // cloud3/Path
      ctx.beginPath();
      ctx.moveTo(192.4, 18.9);
      ctx.bezierCurveTo(187.3, 8.4, 176.6, 1.1, 164.1, 1.1);
      ctx.bezierCurveTo(160.4, 1.1, 156.9, 1.7, 153.7, 2.9);
      ctx.bezierCurveTo(151.4, -7.3, 142.3, -15.0, 131.3, -15.0);
      ctx.bezierCurveTo(129.0, -15.0, 126.8, -14.7, 124.7, -14.0);
      ctx.bezierCurveTo(117.5, -26.3, 104.2, -34.5, 89.0, -34.5);
      ctx.bezierCurveTo(73.8, -34.5, 60.5, -26.4, 53.2, -14.2);
      ctx.bezierCurveTo(47.9, -16.7, 41.9, -18.1, 35.6, -18.1);
      ctx.bezierCurveTo(20.4, -18.1, 7.2, -10.0, -0.1, 2.1);
      ctx.bezierCurveTo(-2.4, 0.9, -4.9, 0.2, -7.7, 0.2);
      ctx.bezierCurveTo(-17.0, 0.2, -24.6, 7.8, -24.6, 17.2);
      ctx.bezierCurveTo(-24.6, 18.7, -24.4, 20.2, -24.0, 21.6);
      ctx.bezierCurveTo(-24.9, 21.5, -25.7, 21.4, -26.6, 21.4);
      ctx.bezierCurveTo(-39.7, 21.4, -50.3, 32.1, -50.3, 45.2);
      ctx.bezierCurveTo(-50.3, 58.3, -39.7, 68.9, -26.6, 68.9);
      ctx.bezierCurveTo(-22.6, 68.9, -18.9, 67.9, -15.6, 66.2);
      ctx.bezierCurveTo(-10.0, 82.5, 5.4, 94.3, 23.7, 94.3);
      ctx.bezierCurveTo(31.9, 94.3, 39.5, 91.9, 45.9, 87.8);
      ctx.bezierCurveTo(53.6, 96.6, 64.8, 102.2, 77.4, 102.2);
      ctx.bezierCurveTo(94.7, 102.2, 109.5, 91.6, 115.7, 76.6);
      ctx.bezierCurveTo(119.9, 82.7, 126.8, 86.7, 134.7, 86.7);
      ctx.bezierCurveTo(147.4, 86.7, 157.6, 76.4, 157.6, 63.8);
      ctx.bezierCurveTo(157.6, 63.6, 157.6, 63.3, 157.6, 63.1);
      ctx.bezierCurveTo(159.7, 63.6, 161.9, 63.8, 164.1, 63.8);
      ctx.bezierCurveTo(173.8, 63.8, 182.4, 59.4, 188.2, 52.5);
      ctx.bezierCurveTo(189.2, 52.7, 190.2, 52.8, 191.2, 52.8);
      ctx.bezierCurveTo(200.6, 52.8, 208.2, 45.2, 208.2, 35.8);
      ctx.bezierCurveTo(208.2, 26.9, 201.2, 19.5, 192.4, 18.9);
      ctx.closePath();
      ctx.fill("evenodd");
      ctx.restore();
    }

    function cloud4(ctx) {

      var alpha = ctx.globalAlpha;

      // cloud4/Path
      ctx.save();
      ctx.globalAlpha = alpha * 0.40;
      ctx.beginPath();
      ctx.moveTo(-212.4, -27.9);
      ctx.bezierCurveTo(-203.0, -47.7, -182.8, -61.4, -159.5, -61.4);
      ctx.bezierCurveTo(-152.6, -61.4, -146.1, -60.1, -139.9, -58.0);
      ctx.bezierCurveTo(-135.7, -77.1, -118.6, -91.5, -98.1, -91.5);
      ctx.bezierCurveTo(-93.8, -91.5, -89.7, -90.9, -85.8, -89.7);
      ctx.bezierCurveTo(-72.3, -112.6, -47.3, -128.0, -18.8, -128.0);
      ctx.bezierCurveTo(9.7, -128.0, 34.5, -112.7, 48.1, -89.9);
      ctx.bezierCurveTo(58.1, -94.7, 69.4, -97.3, 81.2, -97.3);
      ctx.bezierCurveTo(109.5, -97.3, 134.3, -82.2, 147.9, -59.5);
      ctx.bezierCurveTo(152.2, -61.7, 157.0, -62.9, 162.1, -62.9);
      ctx.bezierCurveTo(179.7, -62.9, 193.9, -48.7, 193.9, -31.2);
      ctx.bezierCurveTo(193.9, -28.4, 193.5, -25.6, 192.8, -23.0);
      ctx.bezierCurveTo(194.3, -23.2, 195.9, -23.3, 197.6, -23.3);
      ctx.bezierCurveTo(222.1, -23.3, 242.0, -3.4, 242.0, 21.2);
      ctx.bezierCurveTo(242.0, 45.7, 222.1, 65.6, 197.6, 65.6);
      ctx.bezierCurveTo(190.1, 65.6, 183.2, 63.7, 177.0, 60.5);
      ctx.bezierCurveTo(166.6, 91.2, 137.6, 113.2, 103.4, 113.2);
      ctx.bezierCurveTo(88.1, 113.2, 73.8, 108.7, 61.7, 101.1);
      ctx.bezierCurveTo(47.5, 117.6, 26.4, 128.0, 2.9, 128.0);
      ctx.bezierCurveTo(-29.5, 128.0, -57.2, 108.2, -68.9, 80.0);
      ctx.bezierCurveTo(-76.6, 91.4, -89.7, 98.9, -104.5, 98.9);
      ctx.bezierCurveTo(-128.1, 98.9, -147.3, 79.7, -147.3, 56.1);
      ctx.bezierCurveTo(-147.3, 55.6, -147.3, 55.2, -147.2, 54.8);
      ctx.bezierCurveTo(-151.2, 55.6, -155.3, 56.1, -159.5, 56.1);
      ctx.bezierCurveTo(-177.6, 56.1, -193.8, 47.8, -204.6, 34.9);
      ctx.bezierCurveTo(-206.4, 35.2, -208.3, 35.4, -210.3, 35.4);
      ctx.bezierCurveTo(-227.8, 35.4, -242.0, 21.2, -242.0, 3.7);
      ctx.bezierCurveTo(-242.0, -13.1, -228.9, -26.8, -212.4, -27.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(37, 33, 96)";
      ctx.fill("evenodd");
      ctx.restore();
    }

    function draw(ctx) {

      // robot/Group
      ctx.save();

      // robot/Group/Group
      ctx.save();

      // robot/Group/Group/Group
      ctx.save();

      // robot/Group/Group/Group/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(517.4, 528.5);
      ctx.bezierCurveTo(518.2, 528.6, 518.9, 528.0, 519.0, 527.2);
      ctx.lineTo(523.1, 493.0);
      ctx.bezierCurveTo(523.2, 492.2, 522.6, 491.4, 521.8, 491.3);
      ctx.bezierCurveTo(521.0, 491.2, 520.2, 491.8, 520.1, 492.6);
      ctx.lineTo(516.1, 526.8);
      ctx.bezierCurveTo(516.0, 527.7, 516.5, 528.4, 517.4, 528.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(246, 178, 23)";
      ctx.fill();

      // robot/Group/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(515.2, 513.0);
      ctx.bezierCurveTo(514.9, 515.2, 516.5, 517.2, 518.7, 517.5);
      ctx.bezierCurveTo(520.9, 517.7, 522.9, 516.2, 523.1, 514.0);
      ctx.bezierCurveTo(523.4, 511.8, 521.8, 509.8, 519.6, 509.5);
      ctx.bezierCurveTo(517.4, 509.3, 515.5, 510.8, 515.2, 513.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 130, 132)";
      ctx.fill();

      // robot/Group/Group/Path
      ctx.beginPath();
      ctx.moveTo(508.4, 534.0);
      ctx.bezierCurveTo(509.1, 529.6, 513.1, 526.5, 517.5, 527.0);
      ctx.bezierCurveTo(522.0, 527.5, 525.2, 531.5, 524.8, 535.9);
      ctx.lineTo(508.4, 534.0);
      ctx.closePath();
      ctx.fill();

      // robot/Group/Path
      ctx.restore();
      ctx.beginPath();
      ctx.moveTo(580.3, 705.7);
      ctx.bezierCurveTo(580.3, 712.9, 574.5, 718.7, 567.3, 718.7);
      ctx.lineTo(445.3, 718.7);
      ctx.bezierCurveTo(438.1, 718.7, 432.2, 712.9, 432.2, 705.7);
      ctx.lineTo(432.2, 656.9);
      ctx.bezierCurveTo(432.2, 649.7, 438.1, 643.8, 445.3, 643.8);
      ctx.lineTo(567.3, 643.8);
      ctx.bezierCurveTo(574.5, 643.8, 580.3, 649.7, 580.3, 656.9);
      ctx.lineTo(580.3, 705.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 174, 176)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(565.5, 754.4);
      ctx.bezierCurveTo(565.5, 761.7, 559.7, 767.5, 552.4, 767.5);
      ctx.lineTo(467.9, 767.5);
      ctx.bezierCurveTo(460.7, 767.5, 454.9, 761.7, 454.9, 754.4);
      ctx.lineTo(454.9, 745.3);
      ctx.bezierCurveTo(454.9, 738.1, 460.7, 732.2, 467.9, 732.2);
      ctx.lineTo(552.4, 732.2);
      ctx.bezierCurveTo(559.7, 732.2, 565.5, 738.1, 565.5, 745.3);
      ctx.lineTo(565.5, 754.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(246, 178, 23)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(484.9, 749.9);
      ctx.bezierCurveTo(484.9, 754.9, 480.8, 759.0, 475.8, 759.0);
      ctx.bezierCurveTo(470.7, 759.0, 466.6, 754.9, 466.6, 749.9);
      ctx.bezierCurveTo(466.6, 744.8, 470.7, 740.7, 475.8, 740.7);
      ctx.bezierCurveTo(480.8, 740.7, 484.9, 744.8, 484.9, 749.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(32, 30, 30)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(519.3, 749.9);
      ctx.bezierCurveTo(519.3, 754.9, 515.2, 759.0, 510.2, 759.0);
      ctx.bezierCurveTo(505.1, 759.0, 501.0, 754.9, 501.0, 749.9);
      ctx.bezierCurveTo(501.0, 744.8, 505.1, 740.7, 510.2, 740.7);
      ctx.bezierCurveTo(515.2, 740.7, 519.3, 744.8, 519.3, 749.9);
      ctx.closePath();
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(553.8, 749.9);
      ctx.bezierCurveTo(553.8, 754.9, 549.7, 759.0, 544.6, 759.0);
      ctx.bezierCurveTo(539.6, 759.0, 535.5, 754.9, 535.5, 749.9);
      ctx.bezierCurveTo(535.5, 744.8, 539.6, 740.7, 544.6, 740.7);
      ctx.bezierCurveTo(549.7, 740.7, 553.8, 744.8, 553.8, 749.9);
      ctx.closePath();
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(535.9, 694.6);
      ctx.bezierCurveTo(535.9, 698.2, 533.0, 701.1, 529.4, 701.1);
      ctx.lineTo(483.2, 701.1);
      ctx.bezierCurveTo(479.6, 701.1, 476.6, 698.2, 476.6, 694.6);
      ctx.lineTo(476.6, 668.0);
      ctx.bezierCurveTo(476.6, 664.4, 479.6, 661.4, 483.2, 661.4);
      ctx.lineTo(529.4, 661.4);
      ctx.bezierCurveTo(533.0, 661.4, 535.9, 664.4, 535.9, 668.0);
      ctx.lineTo(535.9, 694.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(246, 178, 23)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(547.3, 618.8);
      ctx.lineTo(547.3, 575.1);
      ctx.bezierCurveTo(547.3, 553.9, 530.1, 536.6, 508.8, 536.6);
      ctx.lineTo(503.7, 536.6);
      ctx.bezierCurveTo(482.4, 536.6, 465.2, 553.9, 465.2, 575.1);
      ctx.lineTo(465.2, 618.8);
      ctx.lineTo(547.3, 618.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 174, 176)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(534.5, 638.8);
      ctx.lineTo(478.1, 638.8);
      ctx.lineTo(478.1, 625.1);
      ctx.lineTo(534.5, 625.1);
      ctx.lineTo(534.5, 638.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 130, 132)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(496.5, 577.7);
      ctx.bezierCurveTo(496.5, 585.5, 490.1, 591.9, 482.3, 591.9);
      ctx.bezierCurveTo(474.5, 591.9, 468.2, 585.5, 468.2, 577.7);
      ctx.bezierCurveTo(468.2, 569.9, 474.5, 563.6, 482.3, 563.6);
      ctx.bezierCurveTo(490.1, 563.6, 496.5, 569.9, 496.5, 577.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(32, 30, 30)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(533.6, 583.0);
      ctx.bezierCurveTo(533.6, 592.4, 526.0, 600.0, 516.6, 600.0);
      ctx.bezierCurveTo(507.2, 600.0, 499.6, 592.4, 499.6, 583.0);
      ctx.bezierCurveTo(499.6, 573.6, 507.2, 566.0, 516.6, 566.0);
      ctx.bezierCurveTo(526.0, 566.0, 533.6, 573.6, 533.6, 583.0);
      ctx.closePath();
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(461.1, 575.7);
      ctx.bezierCurveTo(455.3, 576.7, 450.9, 581.7, 450.9, 587.8);
      ctx.lineTo(450.9, 595.9);
      ctx.bezierCurveTo(450.9, 602.0, 455.3, 607.0, 461.1, 608.0);
      ctx.lineTo(461.1, 575.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(246, 178, 23)";
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(550.6, 575.7);
      ctx.bezierCurveTo(556.3, 576.7, 560.7, 581.7, 560.7, 587.8);
      ctx.lineTo(560.7, 595.9);
      ctx.bezierCurveTo(560.7, 602.0, 556.3, 607.0, 550.6, 608.0);
      ctx.lineTo(550.6, 575.7);
      ctx.closePath();
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(487.0, 575.7);
      ctx.bezierCurveTo(487.0, 578.3, 484.9, 580.5, 482.3, 580.5);
      ctx.bezierCurveTo(479.7, 580.5, 477.6, 578.3, 477.6, 575.7);
      ctx.bezierCurveTo(477.6, 573.1, 479.7, 571.0, 482.3, 571.0);
      ctx.bezierCurveTo(484.9, 571.0, 487.0, 573.1, 487.0, 575.7);
      ctx.closePath();
      ctx.fill();

      // robot/Group/Path
      ctx.beginPath();
      ctx.moveTo(523.2, 583.0);
      ctx.bezierCurveTo(523.2, 586.5, 520.3, 589.4, 516.8, 589.4);
      ctx.bezierCurveTo(513.3, 589.4, 510.4, 586.5, 510.4, 583.0);
      ctx.bezierCurveTo(510.4, 579.5, 513.3, 576.7, 516.8, 576.7);
      ctx.bezierCurveTo(520.3, 576.7, 523.2, 579.5, 523.2, 583.0);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }