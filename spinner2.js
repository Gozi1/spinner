const spinnerAnimations = ['\r|   ','\r/   ','\r-   ','\r\\   '];
const spinnerAnimation = function(animations,delay,loops,initialDelay){
  if(loops >= 0){
    let index = (loops % animations.length); 
    setTimeout(() => { process.stdout.write(animations[index])}, initialDelay);
    spinnerAnimation(animations,delay,loops-1,initialDelay+delay);
  }
}
spinnerAnimation(spinnerAnimations,200,8,100);