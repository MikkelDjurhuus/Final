'use strict'

const nedb = require('nedb');

class DatabaseAPI {

  constructor() {
    this.fortegnelser = null;
    this.fortegnelsekategorier = null;
    this.dokumenter = null;
    this.dokumentkategorier = null;
    this.kontroller = null;
    this.kontrolkategorier = null;
    this.hændelser = null;
    this.hændelsekategorier = null;
    this.henvendelser = null;
    this.henvendelsekategorier = null;
    this.procedurer = null;
    this.procedurekategorier = null;
    this.ansvarlige = null;
    this.databehandlere = null;
    this.systemer = null;
    this.indstillinger = null;
  }

  LoadIndstillinger() {
    var p = new Promise((resolve, reject) => {
      this.indstillinger = new nedb({
        filename: app_path + "/data/indstillinger.db"
      })
      this.indstillinger.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    return Promise.all([p])
  }

  LoadDatabase(path) {
    var i = new Promise((resolve, reject) => {
      this.indstillinger = new nedb({
        filename: path + "/indstillinger.db"
      })
      this.indstillinger.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var b = new Promise((resolve, reject) => {
      this.fortegnelser = new nedb({
        filename: path + '/fortegnelser.db'
      })
      this.fortegnelser.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var bk = new Promise((resolve, reject) => {
      this.fortegnelsekategorier = new nedb({
        filename: path + '/fortegnelsekategorier.db'
      })
      this.fortegnelsekategorier.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })

    var d = new Promise((resolve, reject) => {
      this.dokumenter = new nedb({
        filename: path + '/dokumenter.db'
      })
      this.dokumenter.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var dk = new Promise((resolve, reject) => {
      this.dokumentkategorier = new nedb({
        filename: path + '/dokumentkategorier.db'
      })
      this.dokumentkategorier.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })

    var k = new Promise((resolve, reject) => {
      this.kontroller = new nedb({
        filename: path + '/kontroller.db'
      })
      this.kontroller.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var kk = new Promise((resolve, reject) => {
      this.kontrolkategorier = new nedb({
        filename: path + '/kontrolkategorier.db'
      })
      this.kontrolkategorier.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })

    var h = new Promise((resolve, reject) => {
      this.henvendelser = new nedb({
        filename: path + '/henvendelser.db'
      })
      this.henvendelser.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var hk = new Promise((resolve, reject) => {
      this.henvendelsekategorier = new nedb({
        filename: path + '/henvendelsekategorier.db'
      })
      this.henvendelsekategorier.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })

    var p = new Promise((resolve, reject) => {
      this.procedurer = new nedb({
        filename: path + '/procedurer.db'
      })
      this.procedurer.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var pk = new Promise((resolve, reject) => {
      this.procedurekategorier = new nedb({
        filename: path + '/procedurekategorier.db'
      })
      this.procedurekategorier.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })

    var a = new Promise((resolve, reject) => {
      this.ansvarlige = new nedb({
        filename: path + '/ansvarlige.db'
      })
      this.ansvarlige.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var db = new Promise((resolve, reject) => {
      this.databehandlere = new nedb({
        filename: path + '/databehandlere.db'
      })
      this.databehandlere.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var s = new Promise((resolve, reject) => {
      this.systemer = new nedb({
        filename: path + '/systemer.db'
      })
      this.systemer.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var hv = new Promise((resolve, reject) => {
      this.hændelser = new nedb({
        filename: path + '/hændelser.db'
      })
      this.hændelser.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })
    var hvk = new Promise((resolve, reject) => {
      this.hændelsekategorier = new nedb({
        filename: path + '/hændelsekategorier.db'
      })
      this.hændelsekategorier.loadDatabase(function (err) {
        if (err) {
          reject(err)
        } else {
          resolve(true)
        }
      })
    })

    return Promise.all([i,b, bk, d, dk, k, kk, h, hk, p, pk, a, db, s, hv, hvk])
  }

  GetDatabaseByName(name) {
    switch (name) {
      case 'fortegnelser':
        return this.fortegnelser;
      case 'fortegnelsekategorier':
        return this.fortegnelsekategorier;
      case 'dokumenter':
        return this.dokumenter;
      case 'dokumentkategorier':
        return this.dokumentkategorier;
      case 'kontroller':
        return this.kontroller;
      case 'kontrolkategorier':
        return this.kontrolkategorier;
      case 'henvendelser':
        return this.henvendelser;
      case 'henvendelsekategorier':
        return this.henvendelsekategorier;
      case 'hændelser':
        return this.hændelser;
      case 'hændelsekategorier':
        return this.hændelsekategorier;
      case 'procedurer':
        return this.procedurer;
      case 'procedurekategorier':
        return this.procedurekategorier;
      case 'ansvarlige':
        return this.ansvarlige;
      case 'databehandlere':
        return this.databehandlere;
      case 'systemer':
        return this.systemer;
      case 'indstillinger':
        return this.indstillinger;
      default:
        return null;
    }
  }

  FindAll(navn) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.find({}, (err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  FindID(navn, id) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.findOne({
          _id: id
        }, (err, doc) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  Find(navn, query) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.find(query, (err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }
  FindOne(navn, query) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.findOne(query, (err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  Count(navn, query) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.count(query, (err, count) => {
          if (err) {
            reject(err);
          } else {
            resolve(count);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  FindAndSelect(navn, query, select) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.find(query, select, (err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  FindAndSort(navn, query, sort) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.find(query).sort(sort).exec((err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  FindAndGroup(navn, query, group) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.find(query).group(group).exec((err, docs) => {
          if (err) {
            reject(err);
          } else {
            resolve(docs);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  Insert(navn, doc) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.insert(doc, (err, newDoc) => {
          if (err) {
            reject(err);
          } else {
            resolve(newDoc);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  Remove(navn, id) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn)
      if (database != null) {
        database.remove({ _id: id }, {}, (err, numRemoved) => {
          if (err) {
            reject(err);
          } else {
            resolve(numRemoved);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn')
      }
    })
  }

  Delete(navn, doc) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn)
      if (database != null) {
        database.remove(doc, {}, (err, numRemoved) => {
          if (err) {
            reject(err);
          } else {
            resolve(numRemoved);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn')
      }
    })
  }

  Update(navn, id, doc) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      doc.dateEdited = Date.now();
      if (database != null) {
        database.update({
          _id: id
        }, doc, {}, (err, numReplaced) => {
          if (err) {
            reject(err);
          } else {
            resolve(doc);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }

  Upsert(navn, id, doc) {
    return new Promise((resolve, reject) => {
      var database = this.GetDatabaseByName(navn);
      if (database != null) {
        database.update({ _id: id }, doc, { upsert: true }, (err, numReplaced, upsert) => {
          if (err) {
            reject(err);
          } else {
            resolve(upsert);
          }
        })
      } else {
        reject('Der findes ikke en database med det navn');
      }
    })
  }
}
const db = new DatabaseAPI();
export default db;