import axios from "axios";
import { showErrorModal } from "../utils";

const apiUrl = process.env.REACT_APP_API_URL;

interface RequestInterface {
  url: string;
  body?: any;
  token?: string;
  actions?: any;
}

export async function get(args: RequestInterface) {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
    });
    return request;
  } catch (error) {
    showErrorModal(error);
    if (!error.response) args.actions.logout();
    return error.request;
  }
}

export async function post(args: RequestInterface) {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
      data: args.body,
    });
    return request;
  } catch (error) {
    showErrorModal(error);
    if (!error.response) args.actions.logout();
    return error.response;
  }
}

export async function put(args: RequestInterface) {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
      data: args.body,
    });
    return request;
  } catch (error) {
    console.log(error.response);
    showErrorModal(error);
    if (!error.response) args.actions.logout();
    return error.request;
  }
}

export async function _delete(args: RequestInterface) {
  try {
    const request = await axios({
      url: `${apiUrl}${args.url}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${args.token}`,
      },
      data: args.body,
    });
    return request;
  } catch (error) {
    showErrorModal(error);
    if (!error.response) args.actions.logout();
    return error.request;
  }
}
