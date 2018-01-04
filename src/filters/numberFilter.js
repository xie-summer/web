/**
 * Created by zm on 2017-12-20.
 */
 let numToFixed=value=>{if(value==""){return 0}else{return value.toFixed(2)}}

let numWipe=value=>{if(value==0){return 0}else{return value}}
export { numToFixed,numWipe }
