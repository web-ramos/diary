export interface ILanguage {
  label: string,
  locale: string,
  key: string
}

export interface IContext {
  id: string,
  order: string,
  name: string,
  description?: string,
  icon: string
  deleted: boolean
}

export interface IProject {
  id: string,
  order: string,
  parentId: string,
  type: "idea" | "project",
  name: string,
  description?: string
}

export interface ITimeSlot {
  date: Date,
  exact: boolean | null,
  completed: boolean | null,
  description?: string
}

export interface ITask {
  id: string,
  parentId: string
  name: string,
  date: Date,
  exact: boolean | null,
  completed: boolean | null,
  repeat: boolean | null,
  slots?: ITimeSlot[],
  description?: string
}

enum Direction {
  TASK,
  PROJECT,
  CONTEXT
}

export interface IWindow {
  open: boolean | null,
  form: Direction
}

export interface IStore {
  idUser: string,
  contexts: IContext[],
  projects: IProject[],
  tasks?: ITask[],
  sprite: string[],
  windows?: IWindow
}
