import View from './';
import sprite from 'url:../../assets/svg/sprite.svg';

class SidebarView extends View {
  _wrapper;
  _parentElement = document.getElementById('sidebar-overlay');

  constructor() {
    super();
  }

  toggleSidebar() {
    this._wrapper = document.querySelector('.sidebar-wrapper');

    this._wrapper.classList.remove('open');
    this._wrapper.classList.add('close');
  }

  addRenderHandler(handler) {
    document.body.addEventListener('click', e => {
      const btn = e.target.closest('.btn--menu');

      if (!btn) return;

      this._parentElement.classList.add('sidebar');

      handler();

      document.body.style.overflow = 'hidden';

      this._parentElement.addEventListener('click', e => {
        const btn = e.target.closest('.sidebar__btn');

        if (!btn && e.target.id !== 'sidebar-overlay') return;

        this._parentElement.classList.remove('sidebar');

        this.toggleSidebar();

        document.body.style.overflow = 'auto';
      });
    });
  }

  _generateMarkup() {
    return `
            <div class="sidebar-wrapper open">
            <button class="sidebar__btn">
                <svg xmlns="http://www.w3.org/2000/svg">
                    <use href="${sprite}#x" />
                </svg>
            </button>
            <nav role="navigation" class="sidebar__menu">
            <ul class="sidebar__menu-list">
                <li class="sidebar__menu-item"><a href="#">Collections</a></li>
                <li class="sidebar__menu-item"><a href="#">Men</a></li>
                <li class="sidebar__menu-item"><a href="#">Women</a></li>
                <li class="sidebar__menu-item"><a href="#">About</a></li>
                <li class="sidebar__menu-item"><a href="#">Contact</a></li>
            </ul>
            </nav>
        </div>
           `;
  }
}

export default new SidebarView();
