function StopWatch() {
  // Varaibles names;
  let startTime,
    endTime,
    running,
    duration = 0;

  this.start = function () {
    if (running) throw new Error("The timer is already running");

    running = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!running) throw new Error("StopWatch is not started");
    running = false;
    endTime = new Date();

    let second = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += second;
  };

  this.reset = function () {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();
sw.start();
sw.stop();
