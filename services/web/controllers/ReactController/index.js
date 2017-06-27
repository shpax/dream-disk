class ReactController {
  constructor({}) {

    [
      'indexPage',
      'userPage',
      'diskListPage',
      'diskPage',
    ].forEach(m => this[m] = this[m].bind(this))
  }

  indexPage(req, res) {
    res.render('index', {text: `World`, title: "base title"})
  }

  userPage(req, res) {
    res.render('index', {text: `this is the user page`, title: `My Profile`})
  }

  diskListPage(req, res) {
    res.render('index', {text: `this is the disk list page`, title: `My Disks`})
  }

  diskPage(req, res) {
    res.render('index', {text: `this is the disk ${req.params.diskId} page`, title: `Disk`})
  }
}

module.exports = ReactController;