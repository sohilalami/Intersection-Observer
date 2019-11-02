let alleLinks    = document.querySelectorAll('nav a');
let alleSections = document.querySelectorAll('section');

const options    = {
  treshold  : 1.0
};

const callback = (entries, observer) => {
  entries.forEach( entry => {
    if ( entry.isIntersecting ) {
      let link = zoekLink('#' + entry.target.parentNode.id);
      maakGeselecteerd(link);
    }
  });
}

let observer = new IntersectionObserver(callback, options);

alleSections.forEach( section => {
  observer.observe(section.getElementsByTagName('p')[0]);
});

const verwijderGeselecteerd = () => {
  alleLinks.forEach( (link) => {
    if (link.classList = 'geselecteerd') {
      link.classList.remove('geselecteerd');
    }
  });
}

const maakGeselecteerd = (elem) => {
  verwijderGeselecteerd();
  elem.classList.add('geselecteerd');
}

alleLinks.forEach( (link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    maakGeselecteerd(e.target);
    window.location = e.target.href;
  })
});

const zoekLink = (id) => {
  let link = document.querySelector('nav a[href="' + id + '"]');
  return link;
}
