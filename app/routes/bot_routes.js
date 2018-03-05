var botslist = require('../../config/lists.js').bots;
//var gpio = require('pi-gpio');

module.exports = function(app, db) {
    
    //GET request for querying the states of bots
    app.get('/bots/', (req, res) => {
        res.status(200).send(botslist);
    });
    app.get('/bots/:bot', (req, res) => {
        const bot = req.params.bot;
        for (var bots in botslist) if (botslist[bots][bot]) {
            var resp = {};
            resp[bot] = botslist[bots][bot];
            return res.status(200).send(resp);
        }
        res.status(404).send({'error': 'Invalid bot: ' + bot});
    });
    
    //POST request for adding new bot designations (not sure if wanted...)
    app.post('/bots', (req, res) => {
        const pin = parseInt(req.body.pin);
        if (!(pin && pin < 40 && pin > 0)) return res.status(404).send({'error': 'Invalid pin assignment: ' + pin});
        for (var device in botslist) for (var bot in botslist[device]) {
            if (botslist[device][bot]['pin'] == pin) return res.status(404).send({'error': 'Pin ' + pin + ' is already assigned to ' + bot});
        }
        const state = {
            bot: req.body.bot,
            state: req.body.state
        };
        
        db.collection('bots').insert(state, (err, result) => {
            if (err) res.status(404).send({'error': 'An error has occured'});
            else {
                res.status(200).send(result.ops[0]);
            }
        });
    });
    
    //DELETE request for removing bots (almost definitely do not want this functionality available)
    app.delete('/bots/:bot', (req, res) => {
        res.status(503).send({'error': 'You are not authorized to perform this action'});
        //db.collection('bots').remove();
    });
    
    //PUT request for updating the state of a bot
    app.put('/bots/:bot/:state', (req, res) => {
        const bot = req.params.bot;
        const target = {'bot': bot};
        const s = req.params.state;
        if (s !== '0' && s !== '1') {
            res.status(404).send({'error': 'Invalid state designation: ' + s}); 
            return console.log('Invalid state: ' + s);
        }
        const state = {
            bot: bot,
            state: s
        };
        db.collection('bots').update(target, state, (err, result) => {
            if (err) res.status(404).send({'error': 'An error has occured'});
            else res.status(200).send(state);
        });
    });
}