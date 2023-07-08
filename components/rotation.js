AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
    },
  });  

AFRAME.registerComponent("diver-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var diverRotation = this.data.speedOfRotation;      
        var diverPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (diverRotation.x < 20) {
            diverRotation.x += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (diverRotation.x > -5) {
            diverRotation.x -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (diverRotation.z < 0) {
            diverRotation.z += 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y < 2) {
            diverPosition.y += 0.01;
            this.el.setAttribute("position", diverPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (diverRotation.z > -40) {
            diverRotation.z -= 0.5;
            this.el.setAttribute("rotation", diverRotation);
          }
          if (diverPosition.y > -2) {
            diverPosition.y -= 0.01;
            this.el.setAttribute("position", diverPosition);
          }
        }
      });
    }
  });

  AFRAME.registerComponent("bubbles-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var bubblesRotation = this.data.speedOfRotation;      
        var bubblesPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (bubblesRotation.x < 20) {
            bubblesRotation.x += 0.5;
            this.el.setAttribute("rotation", bubblesRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (bubblesRotation.x > -5) {
            bubblesRotation.x -= 0.5;
            this.el.setAttribute("rotation", bubblesRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (bubblesPosition.y < 10) {
            bubblesPosition.y += 0.1;
            bubblesPosition.z += 0.1;
            this.el.setAttribute("position", bubblesPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (bubblesPosition.y > 2) {
            bubblesPosition.y -= 0.1;
            bubblesPosition.z -= 0.1;
            this.el.setAttribute("position", bubblesPosition);
          }
        }
      });
    }
  });