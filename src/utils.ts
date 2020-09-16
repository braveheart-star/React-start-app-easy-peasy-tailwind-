import React from "react";
import { AxiosError } from "axios";
import swal from "sweetalert";

export function showErrorModal(error: AxiosError) {
  if (!error.response) {
    return swal({
      text: "Can't connect to server, please contact the team",
      icon: "error",
    });
  }

  if (error.response.status !== 201 && error.response.status !== 200) {
    console.log(
      "error.response.status !== 201 && error.response.status !== 200"
    );
    let { message } = error.response.data;
    if (Array.isArray(message)) {
      message = message.join("\n");
    }
    return swal({
      text: message,
      icon: "error",
    });
  }
}

export function findSelectOptionByValue(value: any, selectOptions: any[]) {
  const res = selectOptions.find((option) => option.value === value);
  return res;
}

/**
 *
 * @param content textarea unformatted text
 */
export function formatText(content?: string) {
  let text = [];
  if (content) {
    const parsedContent = content.split("\n");

    for (let i in parsedContent) {
      text.push(parsedContent[i]);
      text.push(React.createElement("br", { key: i }));
    }

    return text;
  }
  return "";
}
