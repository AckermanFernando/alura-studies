import React from "react";
import style from './lista.module.scss'
import Item from "./item";
function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Vue.js",
      tempo: "01:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:30:10",
    },
     {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Vue.js",
      tempo: "01:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:30:10",
    }, {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "Vue.js",
      tempo: "01:00:00",
    },
    {
      tarefa: "Javascript",
      tempo: "01:30:10",
    },
  ];
  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item}/>
        ))}
        </ul>
    </aside>
  );
}

export default Lista;
