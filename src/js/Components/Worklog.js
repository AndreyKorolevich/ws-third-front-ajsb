export default class Worklog {
  constructor(container) {
    this.container = container;
  }

  showWidget() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.innerHTML = `
        <h2 class="header">Worklog:</h2>
        <div class="list worklog"></div>
     `;

    this.container.appendChild(wrapper);
  }

  static showLog(elem) {
    const list = document.querySelector('.worklog');
    const inst = document.createElement('div');
    inst.classList.add('inst');
    inst.innerHTML = `
        <div class="date">${elem.date}</div>
        <div class="id">Server: ${elem.id}</div>
        <div class="info">INFO: ${elem.info}</div>
      `;
    list.appendChild(inst);
    document.querySelectorAll('.wrapper')[1].scrollTop = 9999;
  }
}
