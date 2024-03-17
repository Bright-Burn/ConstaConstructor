import type { wellType } from './mocks'

import style from './styles.module.css'

export const InfoWindow = (activeRow: wellType) => {
  return (
    <>
      <div className={style.list}>Скважина - {activeRow.well}</div>
      <div className={style.list}>Статус - {activeRow.status}</div>
      <div className={style.list}>Состояние - {activeRow.state}</div>
      <div className={style.list}>Вид Расчёта - {activeRow.calculationType}</div>
      <div className={style.list}>Месторождение - {activeRow.oilField}</div>
      <div className={style.list}>Дата - {activeRow.date}</div>
    </>
  )
}
