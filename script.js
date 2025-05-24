window.addEventListener('DOMContentLoaded', () => {
  // Get all layers in order (from bottom to top)
  const layers = [
    document.querySelector('.layer5'),
    document.querySelector('.layer4'),
    document.querySelector('.layer3'),
    document.querySelector('.layer2'),
    document.querySelector('.layer1'),
  ];
  const cakeTop = document.querySelector('.cake-top');
  const candle = document.querySelector('.candle');

  // Animate cake layers one by one from bottom to top with delay
  layers.forEach((layer, index) => {
    setTimeout(() => {
      layer.style.animation = 'dropIn 0.7s forwards ease';
    }, index * 700); // 700ms delay between layers
  });

  // Animate cake top after all layers have dropped
  setTimeout(() => {
    cakeTop.style.animation = 'fadeInUp 0.8s forwards ease';
  }, layers.length * 700 + 200);

  // Animate candle after cake top
  setTimeout(() => {
    candle.style.animation = 'fadeInUp 0.8s forwards ease';
  }, layers.length * 700 + 1000);

  // Animate flame flicker infinitely
  const flame = candle.querySelector('.flame');
  flame.style.animation = 'flicker 1.3s infinite ease-in-out alternate';
});
