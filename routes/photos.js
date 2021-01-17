let photos = [];

photos.push({
  name: "Node.js logo",
  path: "https://nodejs.org/static/images/logos/nodejs-green.png"
});

photos.push({
  name: "Ryan przemawia",
  path: "https://nodejs.org/static/legacy/images/ryan-speaker.jpg"
})

exports.list = (req, res) => {
  res.render('photos', {
    title: "Zdjęcia",
    photos: photos
  })
}