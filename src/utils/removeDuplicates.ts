import { User } from "../models/User";

export function removeDuplicateUsers(users: User[]): User[] {
  const map: { [key: string]: User } = {};
  const res: User[] = [];
  for (const user of users) {
    if (map[user.id]) {
      continue;
    } else {
      res.push(user);
      map[user.id] = user;
    }
  }
  return res;
}
