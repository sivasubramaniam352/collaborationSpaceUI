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
      response = await fetch(`${CONFIG.serverUrl}/user/signIn`, {
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
