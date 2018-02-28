const photos = [
  'photobooth.jpg',
  'alie-new-makeup.jpg',
  'griffin.jpg',
  'the-Os.jpg',
  'alie-and-kristen.jpg',
  'engagement-ring.jpg',
  'alie-in-plaid.jpg',
  'bald-mike.jpg',
  'ferris-wheel.jpg',
  'umass-hockey-game.jpg',
  'dinner-in-nyc.jpg',
  'the-comet.jpg',
  'my-dad-made-me-wear-it.jpg',
  'at-a-concert.jpg',
  'guster-concert-on-the-common.jpg',
  'bass-with-griffin.jpg',
  'cow-pajamas.jpg',
  'at-wildcat-pub.jpg',
  'cow.jpg',
  'harry-on-the-beach.jpg',
  'grilling-in-the-rain.jpg',
  'alie-shades.jpg',
  'pandemic.jpg',
  'polaroids.jpg',
  'chewy.jpg',
  'skeleton-makeup.jpg',
  'mike-toddler.jpg',
  'pool-pong.jpg',
  'aquarium.jpg',
  'smoothies-in-nh.jpg',
  'first-photo-of-mike.jpg',
  'seven-wonders-with-anna.jpg',
  'swings-with-kristen.jpg',
  'alie-natural-hair.jpg',
  'mike-in-middle-school.jpg',
  'mike-and-kristen.jpg',
  'mike-and-alie-nh.jpg',
  'alie-loves-griffin.jpg',
  'zombie-makeup.jpg',
  'mike-graduation.jpg',
  'harry-potter.jpg',
  'camping.jpg',
  'mike-and-alie-camping.jpg',
  'food-expo.jpg',
  'mike-cow-apron.jpg',
  'with-chip-and-shannon-at-camp.jpg',
  'at-kayleighs-wedding.jpg',
  'haircut.jpg',
  'and-we-never-used-the-glass-again.jpg',
  'alie-graduation.jpg',
  'reading-in-the-park.jpg',
  'very-warm-hats.jpg',
  'alie-in-costume.jpg',
  'mike-in-his-happy-place.jpg',
  'wildcat-pub-with-dad.jpg',
  'love-in-nyc.jpg',
  'alie-with-snake.jpg',
  'anna-is-just-jealous-of-our-shades.jpg',
  'mike-with-sargeant.jpg',
  'alie-kisses.jpg',
  'mike-teenager.jpg',
  'mt-sugarloaf.jpg',
  'top-of-the-ferris-wheel.jpg',
  'rick-and-morty-blanket.jpg',
  'alie-kayleigh-and-shannon-1999.jpg',
  'at-the-carnival.jpg',
  'griffin-has-too-much-hair.jpg',
  'laughing-by-the-fire.jpg',
  'alie-and-shannon-1.jpg',
];

export default photos.map(filename => ({
  original: `img/gallery/${filename}`,
  thumbnail: `img/gallery/thumbs/${filename}`
}));