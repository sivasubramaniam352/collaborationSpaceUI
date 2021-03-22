import { CONFIG } from "Global/GlobalCreds";

export const getUser = async (token) => {
    let response;
    try {
      response = await fetch(`${CONFIG.serverUrl}/user/getUserInfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        
   
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error)
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  };

  export const signIn = async (creds) => {
    let response;
    try {
      response = await fetch(`${CONFIG.serverUrl}/user/simple/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  };

  export const signUp = async (creds) => {
    let response;
    try {
      response = await fetch(`${CONFIG.serverUrl}/user/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  };

  export const inviteUser = async(bod, token) =>{
    let response;
    try {
      response = await fetch(`${CONFIG.serverUrl}/workspace/user/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:token
        },
         body:JSON.stringify(bod)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  }
  export const addtoWs = async(creds) =>{
    let response;
    try {
      response = await fetch(`${CONFIG.serverUrl}/workspace/add/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  } 

  export const createWs = async(creds) =>{
    let response;
    try {
      response = await fetch(`${CONFIG.serverUrl}/workspace/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  } 

  export const verifyOtp = async(otp, token) => {
    let response;
    try {
      response = await fetch(`${CONFIG.serverUrl}/user/verifyCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:token
        },
        
        body:JSON.stringify(otp)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  }
  
export const createChannel = async(bod) =>{
  let response;
  try {
    response = await fetch(`${CONFIG.serverUrl}/channel/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const getWorkSpaceInfo = async(wsId)=>{
  let response;
  try {
    response = await fetch(`${CONFIG.serverUrl}/workspace/getInfo?wsId=${wsId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}
export const getInfoWsUsers = async(wsId) =>{
  let response;
  try {
    response = await fetch(`${CONFIG.serverUrl}/workspace/getAll/users/${wsId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const kickout = async(bod) =>{
  let response;
  try {
    response = await fetch(`${CONFIG.serverUrl}/workspace/kickout/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const updateUserDesignation = async(bod) =>{
  let response;
  try {
    response = await fetch(`${CONFIG.serverUrl}/workspace/user/designation/update`, 
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const channelController = async(bod) =>{

}


