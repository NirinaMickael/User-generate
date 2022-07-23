const WrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let resultat: any;
  let suspender = promise.then(
    (res) => {
      status = "success";
      resultat = res;
    },
    (err) => {
      status = "error";
      resultat = err;
    }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      else if (status === "error") throw resultat;
      else if (status === "success") return resultat;
    },
  };
};

export default WrapPromise;
