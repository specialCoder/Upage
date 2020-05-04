export const items = Array.from({length:25},(v,i)=>{
  return {
    name:`name_${i}`,
    desc:`desc_${i}`,
    index:i
  };
});