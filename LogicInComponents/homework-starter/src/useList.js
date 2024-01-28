import { useState } from 'react'

export function useList() {

  const [list, useStateList] = useState([]);

  /** Создать новый элемент. */
  const createItem = () => {
    const item = {
      id: Date.now(),
      title: '',
      done: false
    }
    useStateList([item,...list]);
  };

  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        item.title = title;
      }
      return item
    })
    useStateList(updatedList);
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id) => {
    const updatedList = list.map(item => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item
    })
    useStateList(updatedList);
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    const updatedList = list.filter(item => item.id !== id)
    useStateList(updatedList);
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
