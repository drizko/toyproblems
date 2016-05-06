var Tree = function(name){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child){
  var args = Array.prototype.slice.call(arguments);
  var node = this;
  var result = null;

  if(child === node){
    return node
  }

  (function recurse(node){
    for(var i = 0; i < node.children.length; i++){
      if(node.children.indexOf(args) !== -1){
        result = node;
      }

      recurse(node.children[i]);
    }
  })(node);

  return result;
}

Tree.prototype.getAncestorPath = function(target){
  if(this === target) return [this];
  for(var i = 0; i < this.children.length; i++){
    var pathFromChild = this.children[i].getAncestorPath(target);
    if(pathFromChild){
      return [this].concat(pathFromChild);
    }
  }

  return null;
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
