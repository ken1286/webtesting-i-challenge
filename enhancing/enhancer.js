module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// const result = data.reduce(accum, )

function succeed(item) {
  if(item.enhancement < 20) {
    return {...item, enhancement: item.enhancement+1}
  } else {
    return {...item}
  }
}

function fail(item) {
  let failItem = item;

  failItem = failItem.enhancement < 0 ? failItem = {...failItem, enhancement: 0 } : 
    failItem = failItem;

  failItem = failItem.enhancement > 20 ? failItem = {...failItem, enhancement: 20 } : 
    failItem = failItem;

  failitem = failItem.enhancement < 15 ? failItem = {...failItem, durability: item.durability-5} : failItem =  {...failItem, durability: item.durability-10};

  failItem = failItem.enhancement > 16 ? failItem = {...failItem, enhancement: failItem.enhancement-1} : failItem = failItem;

  return failItem;
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
