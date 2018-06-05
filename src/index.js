import { getOffset } from './util';

export default class ResponsiveAutoHeight {

  constructor(elements, options) {
    this.elements = typeof elements === 'string' ? document.querySelectorAll(elements) : elements;
    this.options = options;
    window.addEventListener('resize', () => {
      this.run();
    });
    this.run();
  }

  makeGroups(elements) {
    const group = [];
    [].forEach.call(elements, (element) => {
      element.style.height = '1px';
      element.style.overflow = 'hidden';
    });
    let idx = 0;
    let height = getOffset(elements[0]).top;
    group[0] = [];
    [].forEach.call(elements, (element) => {
      if (getOffset(element).top !== height) {
        height = getOffset(element).top;
        idx += 1;
        group[idx] = [];
      }
      group[idx].push(element);
    });
    [].forEach.call(elements, (element) => {
      element.style.height = '';
      element.style.overflow = '';
    });
    return group;
  }

  alignHeight(group) {
    const heights = group.map((element) => {
      const computedStyle = getComputedStyle(element);
      const boxSizing = computedStyle.boxSizing;
      if (boxSizing === 'border-box') {
        return element.offsetHeight;
      }
      return element.offsetHeight
        - parseFloat(computedStyle.paddingTop)
        - parseFloat(computedStyle.paddingBottom);
    });
    const maxHeight = Math.max(...heights);
    group.forEach((element) => {
      element.style.height = `${maxHeight}px`;
    });
  }

  run() {
    const { elements } = this;
    const groups = this.makeGroups(elements);
    groups.forEach((group) => {
      this.alignHeight(group);
    });
  }
}
