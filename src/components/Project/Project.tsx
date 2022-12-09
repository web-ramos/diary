import { useState } from 'react'
import styles from './project.module.css'

export interface Iproject {
  id: any;
  name: string;
  desc: string;
  order: number | null;
  dateStart?: Date ;
  dateFinish?: Date;
  spentTime: number
} 

const myProjects: Iproject[] = [
  { id: 1, name: 'Найти работу', desc: 'Найти работу не позже 15.12 (magento)', order: null, spentTime: 0 },
  { id: 2, name: 'Изучить React', desc: 'Изучить React', order: 2, spentTime: 0 },
]

export const ListProject = () => {
  const [projects, setProjects] = useState(myProjects)
  return (
    <ul className={styles.list}>
      { projects.map((project: Iproject) => {
          return (
            <Project key={project.id} item = { project } />  
          )
      }) }
    </ul>
  )
}

export const Project = (props: { item: Iproject }) => {
  return (
    <div className={styles.item}>{props.item.name}</div>
  )
}
