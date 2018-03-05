var sensors = require('../../config/lists.js').sensors;
//var gpio = require('pi-gpio');

module.exports = function(app, db) {
    
    app.get('/sensors/:sensor', (req, res) => {
        const sensor = req.params.sensor;
        const target = {'sensor': sensor};
        db.collection('sensors').findOne(target, (err, item) => {
            if (err) res.status(404).send({'error': 'An error has occured'});
            else res.status(200).send(item);
        });
    });
    
//    app.post('/sensors', (req, res) => {
//        const pin = parseInt(req.body.pin);
//        if (!(pin && pin < 40 && pin > 0)) return res.status(404).send({'error': 'Invalid pin assignment:' + pin});
//        for (var device in botslist) for (var bot in botslist[device]) {
//            if (botslist[device][bot]['pin'] == pin) return res.status(404).send({'error': 'Pin ' + pin + ' is already assigned to ' + bot});
//        }
//        const state = {
//            bot: req.body.bot,
//            state: req.body.state
//        };
//        db.collection('sensors').insert(state, (err, result) => {
//            if (err) res.status(404).send({'error': 'An error has occured'});
//            else {
//                res.status(200).send(result.ops[0]);
//            }
//        });
//    });
    
    app.delete('/sensors/:sensor', (req, res) => {
        res.status(503).send({'error': 'You are not authorized to perform this action'});
        //db.collection('sensors').remove();
    });
    
//    app.put('/sensors/:sensor/:state', (req, res) => {
//        const bot = req.params.bot;
//        const target = {'bot': bot};
//        const s = req.params.state;
//        if (s !== '0' && s !== '1') {
//            res.status(404).send({'error': 'Invalid state designation: ' + s}); 
//            return console.log('Invalid state: ' + s);
//        }
//        const state = {
//            bot: bot,
//            state: s
//        };
//        db.collection('sensors').update(target, state, (err, result) => {
//            if (err) res.status(404).send({'error': 'An error has occured'});
//            else res.status(200).send(state);
//        });
//    });
}