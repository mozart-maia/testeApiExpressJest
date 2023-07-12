const getFlagValue = (flag) => {
  const index = process.argv.indexOf(flag) + 1;
  return process.argv[index];
  // let name = args[3];
  // let greeting = args[5];
  // console.log(`${greeting} ${name}.`);
};

module.exports = {
  getFlagValue,
};
