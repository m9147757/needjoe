/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Yelper = require('./yelper.model');

exports.register = function(socket) {
  Yelper.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Yelper.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('yelper:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('yelper:remove', doc);
}