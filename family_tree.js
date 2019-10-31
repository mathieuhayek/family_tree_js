var family = [
  {"name":"Jack", "age": 90, "sex": "m", "parent":null},
  {"name":"Olivier", "age": 60, "sex": "m", "parent":"Jack"},
  {"name":"Pascal", "age": 60, "sex": "m", "parent":"Jack"},
  {"name":"Angélique", "age": 18, "sex": "f", "parent":"Olivier"},
  {"name":"Charlotte", "age": 24, "sex": "f", "parent":"Olivier"},
  {"name":"Julien", "age": 34, "sex": "m", "parent":"Pascal"},
  {"name":"Caroline", "age": 31, "sex": "f", "parent":"Pascal"},
  {"name":"Barnabé", "age": 2, "sex": "m", "parent":"Julien"},
  {"name":"Constance", "age": 0, "sex": "f", "parent":"Caroline"},
  {"name":"Jeff", "age": -2, "sex": "m", "parent":"Caroline"},
];

function find_person(family_tree, name){
  for(p in family_tree){
    if(family_tree[p].name == name){
      return family_tree[p];
    }
  }
  return false;
}

function give_ascendance(family_tree, name){
  var ascendance = [];
  do{
    var person = find_person(family_tree, name);
    var parent_name = person.parent; //"Pascal"

    if(parent_name === null) break;

    var parent = find_person(family_tree, parent_name);
    ascendance.push(parent);
    name = parent.name;
  }while(parent !== null)
  
  return ascendance;
}

var asc = give_ascendance(family, "Caroline");
console.log(asc);

// AS TREE
var family_as_tree =
           {"name":"Jack", "age": 90, "sex": "m", 
              "children": [
                {"name":"Olivier", "age": 60, "sex": "m", 
                  "children": [
                    {"name":"Angélique", "age": 18, "sex": "f", "children": []},
                    {"name":"Charlotte", "age": 18, "sex": "f", "children": []},
                  ]},
                {"name":"Pascal",  "age": 60, "sex": "m", 
                  "children": [
                      {"name":"Julien", "age": 34, "sex": "m", 
                        "children": [
                          {"name":"Barnabé", "age": 2, "sex": "m", "children": []},
                        ]},
                      {"name":"Caroline", "age": 34, "sex": "m", 
                        "children": [
                          {"name":"Constance", "age": 0, "sex": "f", "children": []},
                          {"name":"Jeff", "age": -2, "sex": "m", "children": []},
                      ]},
                  ]},
              ]
            };


//HELPER CLASS
function Tree(rootNode){
  this._root = rootNode;

  Tree.prototype.traverse = function(callback){

    (function recursive(currentNode, accu){
      for(var i = 0; i < currentNode.children.length; i++){
        recursive(currentNode.children[i],
                  [currentNode].concat(accu)
          );
      }
      callback(currentNode, accu);
      })(this._root, [])
  }
}

var zamor = new Tree(family_as_tree);

function find_and_give_ascendance(family_as_tree, search){

  var result = [];

  family_as_tree.traverse(function(person, ascendance){
    console.log("i");
    if(person.name == search){
      result = [person].concat(ascendance);
    }
  });

  return result.map(function(p){
    return {name: p.name}
  })
}

var asc = find_and_give_ascendance(zamor, "Barnabé");
console.log(asc)
//[{"name": "Barnabé"},{"name": "Julien"},{"name": "Pascal"}, {"name": "Jack"}]

