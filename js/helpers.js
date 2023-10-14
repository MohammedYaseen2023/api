/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
const el = (element) => document.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements) => document.querySelectorAll(elements);

// const tryCatch = (callbackFunction) => {
//   try {
//     console.log(typeof callbackFunction);
//     callbackFunction();
//   } catch (error) {
//     console.log("error", error);
//   } finally {
//     console.log("finally");
//   }
// };

const setStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      data: value,
    })
  );
};

const getStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data).data;

  return null;
};


   const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    // reject("reject");
   
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};



export {
  el,
  els,
  setStorage,
  getStorage,
  fileToBase64
}