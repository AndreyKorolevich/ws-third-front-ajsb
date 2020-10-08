export default class Instances {
  constructor(container, createInst, stopInst, startInst, deleteInst) {
    this.container = container;
    this.createInst = createInst;
    this.stopInst = stopInst;
    this.startInst = startInst;
    this.deleteInst = deleteInst;
  }

  showWidget() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.innerHTML = `
        <h2 class="header">Your micro instances</h2>
        <div class="list instance"></div>
        <div class="footer">Create new instance</div>  
     `;

    this.container.appendChild(wrapper);
    document.querySelector('#root').addEventListener('click', (event) => {
      if (event.target.classList.contains('footer')) {
        this.createInst();
      } else if (event.target.classList.contains('action-delete')) {
        this.deleteInst(event.target.closest('.actions').id);
      } else if (event.target.classList.contains('action-running')) {
        this.stopInst(event.target.closest('.actions').id);
      } else if (event.target.classList.contains('action-stopped')) {
        this.startInst(event.target.closest('.actions').id);
      }
    });
  }

  static showInst(elem) {
    const list = document.querySelector('.instance');
    list.classList.add('list');

    const inst = document.createElement('div');
    inst.classList.add('inst');
    let action;
    if (elem.state === 'running') {
      action = '&#9658';
    } else {
      action = '&#9616;&nbsp;&#9612;';
    }

    inst.innerHTML = `
            <div class="id">${elem.id}</div>
            <div class="status">
                Status: 
                <div class="icon-${elem.state}"></div>
                ${elem.state}
            </div>
            <div class="actions" id="${elem.id}">
                  Actions:
                  <div class="action-${elem.state}">${action}</div>
                  <div class="action-delete">&#10006</div>
            </div>
      `;
    list.appendChild(inst);
    document.querySelector('.wrapper').scrollTop = 9999;
  }

  static clearServers() {
    const list = document.querySelector('.instance');
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
}
