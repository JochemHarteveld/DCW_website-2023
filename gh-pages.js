import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/JochemHarteveld/DCW_website-2023.git', 
  user: {
   name: 'Jochem harteveld', 
   email: 'jochemh83@gmail.com' 
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);