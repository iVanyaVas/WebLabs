class FormReader {
  getData(form) {
    console.log(Object.fromEntries(new FormData(form)));
    return Object.fromEntries(new FormData(form));
  }
}

export default new FormReader();
