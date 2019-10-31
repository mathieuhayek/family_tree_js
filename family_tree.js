var family = {
    "Jack": {"name":"Jack", "age": 90, "sex": "m", "parent":null},
    "Olivier": {"name":"Olivier", "age": 60, "sex": "m", "parent":"Jack"},
    "Pascal": {"name":"Pascal", "age": 60, "sex": "m", "parent":"Jack"},
    "Angélique": {"name":"Angélique", "age": 18, "sex": "f", "parent":"Olivier"},
    "Charlotte": {"name":"Charlotte", "age": 24, "sex": "f", "parent":"Olivier"},
    "Julien": {"name":"Julien", "age": 34, "sex": "m", "parent":"Pascal"},
    "Caroline": {"name":"Caroline", "age": 31, "sex": "f", "parent":"Pascal"},
    "Barnabé": {"name":"Barnabé", "age": 2, "sex": "m", "parent":"Julien"},
    "Constance": {"name":"Constance", "age": 0, "sex": "f", "parent":"Caroline"},
    "Jeff": {"name":"Jeff", "age": -2, "sex": "m", "parent":"Caroline"},
  };

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
  
  // store family as a real tree
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
  
  function find_and_give_ascendance(family_tree, person){
    // TODO
  }