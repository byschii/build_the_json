import integrityJson from "./data/integrity.raw.json";
import _ from "lodash";

export var jsonManager = {
   body: integrityJson,
   
   utilities:{
      exploreObjects:{
         getInnerObjects(source){
            /*returns, an object, made only from the other objects inside the source*/
            var innerObjects =  {};
            for (var elem of _.toPairs(source)){
               if(_.isPlainObject(elem[1])){
                  _.set(innerObjects, elem[0], elem[1]);
               }
            }
            return innerObjects;
         },
         getInnerArrays(source){
            /*returs an object containing all key:arr pairs in the source object*/
            var innerArrays = {};
            for (var elem of _.toPairs(source)){
               if(_.isArray(elem[1])){
                  _.set(innerArrays, elem[0], elem[1]); 
               }
            }
            return innerArrays;
         },
         getInnerStrings(source){
            /*returs an object containing all key:arr pairs in the source object*/
            var innerStrings = {};
            for (var elem of _.toPairs(source)){
               if(_.isString(elem[1])){
                  _.set(innerStrings, elem[0], elem[1]); 
               }
            }
            return innerStrings;
         },
         splitInnerParts(source){
            var splitted = {};
            _.set(splitted, "objects", jsonManager.utilities.exploreObjects.getInnerObjects(source));
            _.set(splitted, "arrays", jsonManager.utilities.exploreObjects.getInnerArrays(source));
            _.set(splitted, "strings", jsonManager.utilities.exploreObjects.getInnerStrings(source));
            return splitted;
         }
      },
   }


};
