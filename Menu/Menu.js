/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Shake element animation
const shakeElement = e => {
  gsap.to(e.target, {
      duration: 0.05,
      x: '+=10',
      yoyo: true,
      repeat: 3
  });
}

const createMenu = menuItems => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const ul = document.createElement('ul');  
  menu.appendChild(ul);

  menuItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    // Add shake animation to li
    li.addEventListener('mouseenter', shakeElement)
    ul.appendChild(li);
  });

  document.querySelector('.menu-button').addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    // Add gsap animation when menu opens
    if (menu.classList.contains('menu--open')) {
      gsap.from(".menu--open", {opacity: 0, duration: 0.5});
    }
  });

  return menu;
}

document.body.appendChild(createMenu(menuItems));

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
