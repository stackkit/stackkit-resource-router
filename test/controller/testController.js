exports.index = function(req, res){
  res.json({
    'succes': true
  });
};

exports.store = function(req, res){
  res.json({
    'succes': true
  });
};

exports.show = function(req, res){
  res.json({
    'succes': true,
    'id': req.params.id
  });
};

exports.update = function(req, res){
  res.json({
    'succes': true,
    'id': req.params.id
  });
};

exports.destroy = function(req, res){
  res.json({
    'succes': true,
    'id': req.params.id
  });
};