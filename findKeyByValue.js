
const findKeyByValue = function(obj,value) {
    found=false;
  
    for (const key in obj) {
      
      if (obj[key] === value) {
        return(key);
        found=true;
        }
      
    }
    if(found) {
      return "undefined";
    }
};

module.exports = findKeyByValue;