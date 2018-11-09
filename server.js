const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;


let request = global.indexedDB.open("LoginPage", 1),
            db,
            tx,
            store,
            index;

    request.onupgradeneeded = function(e) {
        db = request.result
    }

    request.onerror = function(e) {
        console.log("There was an error: "+ e.target.errorCode);
    }

    request.onsuccess = function(e) {
        db = request.result;
        tx = db.transaction("UserDataStore", "readwrite");
        store = tx.objectStore("UserDataStore");
        index = store.index("firstName");
    
        db.onerror = function(e) {
            console.log("Error: "+e.target.errorCode);
        }
    
        let q1 = store.getAll();
    
        q1.onsuccess = function() {
            console.log(q1.result);
        };
    
        tx.oncomplete = function() {
            db.close()        
        }
    }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/hello', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));