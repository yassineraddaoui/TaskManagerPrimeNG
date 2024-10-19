export class Task {
  id!: number;
  title!: string;
  description!: string;
  status!: 'Completed' | 'Pending' | 'In Progress';
}
