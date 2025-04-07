export interface Task {
  id: string;
  title: string;
  time: string;
  price: string;
  location: string;
  description?: string;
  date: string; //Дата хранится в виде строки в формате ISO (YYYY-MM-DD).
}

export interface Calendar {
  tasks: Task[];
}