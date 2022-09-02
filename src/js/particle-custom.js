const options = {
  background: {
    color: "transparent", // the canvas background color
  },
  interactivity: {
    events: {
      onClick: {
        // this handles the mouse click event
        enable: true,
        mode: "push", // this adds particles
      },
      onHover: {
        // this handles the mouse hover event
        enable: true,
        mode: "repulse", // this make particles move away from the mouse
      },
    },
    modes: {
      push: {
        quantity: 2, // number of particles to add
      },
      repulse: {
        distance: 50, // the distance of the particles from the mouse
      },
    },
  },
  particles: {
    links: {
      enable: false, // this enables links between particles
      opacity: 0.3,
      distance: 100,
    },
    move: {
      enable: true, // this makes particles move
      speed: { min: 1, max: 1.5 }, // this is the speed of the particles
    },
    opacity: {
      value: { min: 0.3, max: 0.7 }, // this sets the opacity of the particles
    },
    size: {
      value: { min: 1, max: 3 }, // this sets the size of the particles
    },
  },
};

// tsParticles.load has two parameters, the first one is the id of the container, the second one is an object with the options
tsParticles.load("particles-js", options)