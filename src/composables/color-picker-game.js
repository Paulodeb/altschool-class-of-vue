import {ref, onMounted, onUnmounted } from 'vue'

export function usePicker(){
    const message = ref("Pick a color...")
    const colors = ['green', 'red', 'blue', 'purple'];

    const matchColor = (value) => {
       
        const randomNumber = Math.floor(Math.random() * 3) + 1; 
  
        if (colors[randomNumber] === value) {
          message.value = `You win... [answer: ${colors[randomNumber]}]`;
          return;
        }
  
        message.value = `You lose [answer: ${colors[randomNumber]}]`;
      };
  
      return { colors, message, matchColor };
    };