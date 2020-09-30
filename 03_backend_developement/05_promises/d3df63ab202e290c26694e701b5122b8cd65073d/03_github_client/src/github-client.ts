import fetch, { FetchError, Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string | void> {
    return fetch(`https://api.github.com/users/${nickname}`, {
      method: "GET",
    })
      .then((response: Response) => response.json())
      .then((json) => {
        if (json.message === "Not Found") {
          throw new Error("The user doesn't exist");
        }
        return json.repos_url;
      });
  }

  static getRepos(url: string) {
    // You code goes here
    return fetch(url, {
      method: "GET",
    }).then((response) => response.json());
  }

  static printRepos() {
    // You code goes here
  }

  static printRepository(repo: string) {
    // You code goes here
    return fetch(repo, {
      method: "GET",
    }).then((response) => response.json());
  }

  static getProjectInformations(url: string) {
    // You code goes here
    return fetch(url, {
      method: "GET",
    }).then((response) => response.json());
  }
}
