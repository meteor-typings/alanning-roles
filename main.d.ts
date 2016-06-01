// Type definitions for alanning:roles.
// Project: https://atmospherejs.com/alanning/roles
// Definitions by:
// Dave Allen <https://github.com/fullflavedave>

interface RolesDAO {
  _id?: string;
  name?: string;
}

declare module Roles {
  function createRole(roleName: string): string;
  function deleteRole(roleName: string): void;
  function addUsersToRoles(users: any, roles: any, groups?: string): void;
  function removeUsersFromRoles(users: any, roles: any): void;
   // User can be user ID or user object.
  function userIsInRole(user: any, roles: any): boolean;
  function getRolesForUser(userId: string): string[];
  function getAllRoles(): Mongo.Cursor<RolesDAO>;
  function getUsersInRole(roleName: string): Mongo.Cursor<RolesDAO>;
  var GLOBAL_GROUP: string;
}
