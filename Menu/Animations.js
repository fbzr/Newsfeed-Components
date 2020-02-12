// Shake element animation
export function shakeElement(e) {
    gsap.to(e.target, {
        duration: 0.05,
        x: '+=10',
        yoyo: true,
        repeat: 3
    });
  }