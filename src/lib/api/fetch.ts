import axios from "axios";type userRegistor = {
  profileUrl: string;
  ScreenName: string;
  address: string;
  country: string;
  street: string;
  city: string;
  state: string;
  postalCode: String;
  neigborhood: string;
  user: string;
};

export const addNewUser = async (
  fullName: string,
  email: string,
  password: string
) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/add-user`, {
    fullName,
    email,
    password,
  });
  if (response.data.message) {
    return true;
  } else {
    return false;
  }
};

export const userLogin = async (email: string, password: string) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user-login`, {
    email,
    password,
  });
  
  if (response.data.message === "admin") {
    return "admin";
  } else if (response.data.message === false) {
    return false;
  } else if (response.data){
    return response.data;
  }
};

export const addUserIdentity = async (userRegistor: userRegistor) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/add-userDetails`, {
    userRegistor,
  });

  if (response.data.message) {
    return true;
  } else {
    return false;
  }
};

export const getUserIdentity = async (id: string) => {
  const response = await axios.post(
    "http://localhost:5000/add-getUserIdentity",
    {
      id,
    }
  );

  if (response.data) {
    return response.data;
  } else {
    return false;
  }
};

export const updateRegiterProfile = async (
  id: string,
  individual: object | boolean,
  company: object | boolean,
  profileUrl: string,
  identityFileUrl: any,
  addressFileUrl: any
) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/createProfile`, {
    id,
    individual,
    company,
    profileUrl,
    identityFileUrl,
    addressFileUrl,
  });

  if (response.data.message) {
    return true;
  } else if (response.data === false) {
    return false;
  }
};

export const addNewService = async (
  userId: string,
  Title: string,
  description: string,
  rateHr: string,
  rateWeek: string,
  thumbnailUrl: string | undefined
) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/addNewService`, {
    userId,
    Title,
    description,
    rateHr,
    rateWeek,
    thumbnailUrl,
  });

  if (response.data) {
    return true;
  } else if (response.data === false) {
    throw new Error();
  }
};

export const addcard = async (userId: string, cardInfo: object) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/addcard`, {
    userId,
    cardInfo,
  });

  if (response.data) {
    return true;
  } else if (response.data === false) {
    return false;
  }
};

export const getUserRegisterInfo = async (userId: string) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userRegisterInfo`, {
    userId,
  });
  if (response.data) {
    return response.data;
  } else if (response.data === false) {
    return false;
  }
};

export const getUserCardInfo = async (userId: string) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userCardInfo`, {
    userId,
  });

  if (response.data) {
    return response.data;
  } else if (response.data === false) {
    return false;
  }
};

export const addDocToVerify = async (userId: string, docInfo: object) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/docToVerify`, {
    userId,
    docInfo,
  });
  if (response.data) {
    return response.data;
  } else if (response.data === false) {
    throw new Error();
  }
};

export const getAllUserData = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/getAllUserData`);

  if (response.data) {
    return response.data;
  } else if (response.data === false) {
    throw new Error();
  }
};

export const getAllUserDetailedData = async () => {
  const response = await axios.get(
    "http://localhost:5000/getAllUserDetailedData"
  );

  if (response.data) {
    return response.data;
  } else if (response.data === false) {
    throw new Error();
  }
};

export const getUserAllInfo = async (userId: string) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/userAllInfo`, {
    userId,
  });
  
  
  if (response.data) {
    return response.data;
  } else if (response.data === false) {
    return false
  }
};
