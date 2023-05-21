import { PureAbility, type SubjectRawRule } from '@casl/ability';

export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';
export type Subjects = 'all' | 'test' | 'other';
export type Rules = SubjectRawRule<Actions, Subjects, unknown>[];

export const ability = new PureAbility<[Actions, Subjects]>([
  // Default Ability here
]);
