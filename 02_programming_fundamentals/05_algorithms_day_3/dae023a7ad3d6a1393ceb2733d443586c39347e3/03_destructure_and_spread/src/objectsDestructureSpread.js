const userConfig = {
  user: {
    name: "John",
    password: "123123",
    admin: true,
  },
  hardware: {
    CPUThreads: 2,
  },
};

function getConfig(config = {}) {
  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
    },
  };

  const result = {
    user: {...defaultConfig.user, ...config.user},
    hardware: {...defaultConfig.hardware, ...config.hardware}
  };

  return result;/** Complete here */;
}
console.log(getConfig());

const test = {
  firstName: "John",
  // lastName: "Rambo",
  address: {
    city: "Hope",
    // country: "Canada",
  }
};

function logInfos(user = {}) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  const userIdentity = {
    ...redactedUser,
    ...user,
    address: {
      ...redactedUser.address,
      ...user.address,
    },
  };

  const {firstName, lastName, address: { city, country }, } = userIdentity;

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}

logInfos(test);

module.exports = {
  getConfig,
  logInfos,
};
