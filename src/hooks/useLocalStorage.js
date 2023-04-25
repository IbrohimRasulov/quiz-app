function useLocalStorage(key) {
  const dataInStorage = localStorage.getItem(key);
  if (dataInStorage) {
    console.log('there is data in LS')
    return JSON.parse(dataInStorage)
  }
  console.log('there is no data in LS')
  return null;
}

export default useLocalStorage
