function render(reactElement, containerDOMElement) {
  /* Your code here! */
  // 1. Create a DOM element
  const domElement = document.createElement(reactElement.type);

  // 2. Update the properties of the element
  domElement.innerText = reactElement.children;
  // 3. Add the attributes
  for (const key in reactElement.props) {
    const value = reactElement.props[key];
    domElement.setAttribute(key, value);
  }

  // 4. put the new element inside the container
  containerDOMElement.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://wikipedia.org/',
  },
  children: 'Read more on Wikipedia',
};

const containerDOMElement =
  document.querySelector('#root');

render(reactElement, containerDOMElement);