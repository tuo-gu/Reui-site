function classes(...names: (string | undefined)[]) {
  let [prefix,name,types]=names
  // return name.filter(Boolean).join('-');
  prefix=(prefix===''?'':prefix)
  types=(types?'re-'+types:'')
  if(name){
    const arr=name.split(' ').filter(Boolean).map(item=>prefix+'-'+item)
   return [...arr,types].filter(Boolean).join(' ')
 }
  return [prefix,types].filter(Boolean).join(' ')
}
export default classes;

interface Options {
  extra: string | undefined
}

interface ClassToggles {
  [K: string]: boolean
}

const scopedClassMaker = (prefix: string) =>
  (name: string | ClassToggles, options?: Options) =>
  Object
    .entries(name instanceof Object ? name : {[name]: name})
    .filter(kv => kv[1] !== false)
    .map(kv => kv[0])
    .map(name => [prefix, name]
      .filter(Boolean)
      .join('-'))
    .concat(options && options.extra || [])
    .join(' ');

export {scopedClassMaker};