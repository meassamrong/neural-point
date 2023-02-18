// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
  };
  
  // create a simple feed forward neural network with backpropagation
  const net = new brain.NeuralNetwork(config);
  
  net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ]);
  
  const output = net.run([1, 0]); // [0.987]
  //console.log(output);

const boxPointheight = 400;
const boxPointWidth = 650;

for(let i = 1; i < 100; i++){
const pointsPosTop = Math.floor(Math.random() * boxPointheight)
const pointsPosWidth = Math.floor(Math.random() * boxPointWidth)
const pointsPosTop1 = Math.floor(Math.random() * boxPointheight)
const pointsPosWidth1 = Math.floor(Math.random() * boxPointWidth)
    setInterval(()=> {
        $('.point').css({
            'top': `${pointsPosTop}px`,
            'left': `${pointsPosWidth}px`,
            'transition': `all ${1000}ms`
        });
        
    },i * 1000)
    setInterval(()=> {
        $('.point1').css({
            'top': `${pointsPosTop1}px`,
            'left': `${pointsPosWidth1}px`,
            'transition': `all ${2000}ms`
        });
    },i*2000)
    if($('.point').offset().top == $('.point1').offset().top){
        $('.point1').css('color', 'red')
    }else{
        $('.point1').css('color', 'initial')
    }
}

