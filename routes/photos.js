const Photo = require('../models/Photo');
const path = require('path');
const fs = require('fs');
const join = path.join;


let photos = [];

photos.push({
  name: "Node.js logo",
  path: "https://nodejs.org/static/images/logos/nodejs-green.png"
});

photos.push({
  name: "Ryan przemawia",
  path: "https://nodejs.org/static/legacy/images/ryan-speaker.jpg"
})

exports.list = (req, res, next) => {
  // res.render('photos', {
  //   title: "Zdjęcia",
  //   photos: photos
  // })

  Photo.find({}, (err, photos) => {
    if (err) return next(err);

    res.render('photos', {
      title: 'Zdjęcia',
      photos: photos
    })
  })
}

exports.form = (req, res) => {
  res.render('photos/upload', {
    title: 'Przekaż zdjęcie'
  });
}


exports.submit = (dir) => {
  // console.log(dir);
  return (req, res, next) => {

    console.log('req.files', req.files.photo.name);
    console.log('**********************************************');

    // console.log(req.files.photo[image].name);

    if(!req.files) {
      res.send('File was not found')
      return
    }
    // console.log(dir);

    const img = req.files.photo;
    const name = img.name;
    console.log(img);
    console.log('name', name);
    const path = join('public/images', name);

    console.log('path', path);

    
    
    fs.rename('', path, function(err){

      if (err) return next(err);

      Photo.create({
        name: name,
        path: img.name
      }, (err) => {
        if (err) return next(err);

        res.redirect('/');
      });
    });
  };
};