var seqs = require('../../config/lists.js').sequences;

module.exports = function(app, db) {
    
    //GET request for querying available sequences/required parameters
    app.get('/sequences/', (req, res) => {
        res.status(200).send(seqs);
    });
    app.get('/sequences/:name', (req, res) => {
        const seq = req.params.name;
        if (!(seq in seqs)) return res.status(404).send({'error': 'Invalid sequence: ' + seq + '\nValid sequences: ' + seqs});
        res.status(200).send('Required parameters for ' + seq + ' sequence: ' + seqs[seq]);
    });
    
    //POST request for calling sequences
    app.post('/sequences/:name', (req, res) => {
        var seq = req.params.name;
        if (!(seq in seqs)) return res.status(404).send({'error': 'Invalid sequence: ' + seq + '\nValid sequences: ' + seqs});
        var details = {};
        for (var p in seqs[seq]) {
            if (!(req.body[p])) return res.status(404).send({'error': 'Missing parameter: ' + p});
            details[p] = req.body[p];
            res.status(200).send('Sequence initiated');
        }
        // call function to initiate sequence
//        db.collection('bots').insert(state, (err, result) => {
//            if (err) res.status(404).send({'error': 'An error has occured'});
//            else {
//                res.status(200).send(result.ops[0]);
//            }
//        });
    });
    
    //DELETE request for removing sequences (almost definitely do not want this functionality available) (stop current sequence instead?)
    app.delete('/sequences/:name', (req, res) => {
        res.status(503).send({'error': 'You are not authorized to perform this action'});
        //db.collection('bots').remove();
    });
    
    //PUT request for updating the state of a bot
    
}