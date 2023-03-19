const log = (...args) => {
  console.log("\n");
  console.table({ "log-beauty": args });
};

export default log;
