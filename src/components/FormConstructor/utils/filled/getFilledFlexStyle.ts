/**
 * Возвращает свойство flexGrow исходя из признака заполнения
 * @param isFilled Признак заполения
 * @returns
 */
export const getFilledFlexStyle = (isFilled: boolean) => {
  return { flexGrow: isFilled ? 1 : 0 }
}
