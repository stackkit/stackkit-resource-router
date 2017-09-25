exports.index = function(req, res){
  res.json({
    'name': 'index',
    'succes': true
  });
};

exports.store = function(req, res){
  res.json({
    'name': 'store',
    'succes': true
  });
};

exports.show = function(req, res){
  res.json({
    'name': 'show',
    'succes': true,
    'id': req.params.id
  });
};

exports.update = function(req, res){
  res.json({
    'name': 'update',
    'succes': true,
    'id': req.params.id
  });
};

exports.destroy = function(req, res){
  res.json({
    'name': 'destroy',
    'succes': true,
    'id': req.params.id
  });
};