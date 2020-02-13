/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'Creative title',
    date: 'Feb 12th, 2020',
    firstParagraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Sagittis vitae et leo duis ut. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Urna nec tincidunt praesent semper. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Nec feugiat nisl pretium fusce id. Neque volutpat ac tincidunt vitae semper quis lectus nulla. Sit amet nulla facilisi morbi tempus iaculis. Luctus venenatis lectus magna fringilla urna. Quis blandit turpis cursus in hac habitasse.`,

    secondParagraph: `Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Donec massa sapien faucibus et molestie. Laoreet sit amet cursus sit amet dictum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Diam quis enim lobortis scelerisque fermentum dui faucibus in. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Donec massa sapien faucibus et molestie. Laoreet sit amet cursus sit amet dictum.`,

    thirdParagraph: `Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Ac tortor vitae purus faucibus. Vivamus at augue eget arcu dictum varius duis at. Pellentesque habitant morbi tristique senectus et netus et. Ipsum a arcu cursus vitae. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Pellentesque id nibh tortor id aliquet lectus. Vitae elementum curabitur vitae nunc. In arcu cursus euismod quis viverra nibh cras. Massa eget egestas purus viverra accumsan. Amet commodo nulla facilisi nullam.`
  }
];


function Article(props) {
  this.title = props.title;
  this.date = props.date;
  this.firstParagraph = props.firstParagraph;
  this.secondParagraph = props.secondParagraph;
  this.thirdParagraph = props.thirdParagraph;
  this.createComponent = () => {
    const articleDiv = document.createElement('div');
    const title = document.createElement('h2');
    const date = document.createElement('p');
    const paragraph = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    const expandButton = document.createElement('span');
    const removeButton = document.createElement('span');
    const expandIcon = document.createElement('i');
    const removeIcon = document.createElement('i');


  
    articleDiv.classList.value = 'article';
    title.textContent = this.title;
    date.textContent = this.date;
    paragraph.textContent = this.firstParagraph;
    paragraph2.textContent = this.secondParagraph;
    paragraph3.textContent = this.thirdParagraph;
  
    date.classList.add('date');
    expandButton.classList.add('expandButton');
    expandIcon.classList.value = 'fas fa-chevron-down fa-2x';
    removeButton.classList.add('removeButton');
    removeIcon.classList.value = 'fas fa-trash-alt';

    articleDiv.appendChild(title);
    articleDiv.appendChild(date);
    articleDiv.appendChild(paragraph);
    articleDiv.appendChild(paragraph2);
    articleDiv.appendChild(paragraph3);
    articleDiv.appendChild(expandButton);
    expandButton.appendChild(expandIcon);
    title.appendChild(removeButton);
    removeButton.appendChild(removeIcon);
  
    // add event listener to expand button
    expandButton.addEventListener('click', e => {

    });

    // add event listener to remove button
    removeButton.addEventListener('click', e => {
      e.stopPropagation();
      gsap.to(articleDiv, {
        duration: 0.5,
        x: -1200,
        opacity: 0,
        onComplete: () => {
          document.querySelector('.articles').removeChild(articleDiv);
        }
      });
    });
    // mouse over to remove button
    removeButton.addEventListener('mouseenter', e => {
      e.stopPropagation();
      gsap.to(removeIcon, {
        duration: 0.1,
        transform: 'scale(1.2)'
      });
    });
    removeButton.addEventListener('mouseleave', e => {
      gsap.to(removeIcon, {
        duration: 0.1,
        transform: 'scale(1)'
      });
    });

    // add click to article - expand and collapse
    articleDiv.addEventListener('click', (e) => {
      if (!articleDiv.classList.contains('expanded')) {
        gsap.to(articleDiv, {
          duration: 0.5,
          height: 'auto'
        });
        articleDiv.classList.add('expanded');
        expandIcon.classList.remove('fa-chevron-down');
        expandIcon.classList.add('fa-chevron-up');
      } else {
        gsap.to(articleDiv, {
          duration: 0.5,
          height: 50
        });
        articleDiv.classList.remove('expanded');
        expandIcon.classList.remove('fa-chevron-up');
        expandIcon.classList.add('fa-chevron-down');
      }

    });
  
    return articleDiv;
  }  
}

// loop through the data array
// create an article for each data obj
// append the article to .articles div
data.forEach(article => {
  const newArticle = new Article(article);
  document.querySelector('.articles').appendChild(newArticle.createComponent());
});

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
