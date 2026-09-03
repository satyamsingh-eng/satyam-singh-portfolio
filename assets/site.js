(() => {
  'use strict';

  const progress = document.querySelector('.progress');
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const page = document.body.dataset.page || '';

  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
    progress.style.transform = `scaleX(${value / 100})`;
    progress.setAttribute('aria-valuenow', String(value));
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  navToggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('open') || false;
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });

  nav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', 'Open navigation');
    }
  });

  document.querySelectorAll('.nav a[data-page-link]').forEach((link) => {
    link.classList.toggle('active', link.dataset.pageLink === page);
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, current) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const filterGroups = new Map();
  document.querySelectorAll('[data-filter-group]').forEach((group) => {
    const key = group.dataset.filterGroup;
    filterGroups.set(key, 'all');
    group.querySelectorAll('[data-filter-value]').forEach((button) => {
      button.addEventListener('click', () => {
        filterGroups.set(key, button.dataset.filterValue);
        group.querySelectorAll('[data-filter-value]').forEach((item) => item.classList.toggle('active', item === button));
        applyFilters();
      });
    });
  });

  const applyFilters = () => {
    document.querySelectorAll('[data-filter-card]').forEach((card) => {
      let visible = true;
      filterGroups.forEach((value, key) => {
        if (value !== 'all' && card.dataset[key] !== value) visible = false;
      });
      card.hidden = !visible;
    });
    document.querySelectorAll('[data-filter-count]').forEach((count) => {
      count.textContent = String(document.querySelectorAll('[data-filter-card]:not([hidden])').length);
    });
  };
  applyFilters();

  let modalTrigger = null;
  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');
    modalTrigger?.focus?.();
    modalTrigger = null;
  };

  document.querySelectorAll('[data-modal-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modal = document.getElementById(trigger.dataset.modalTrigger);
      if (!modal) return;
      modalTrigger = trigger;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => modal.querySelector('.close')?.focus());
    });
  });

  document.querySelectorAll('.modal-backdrop').forEach((modal) => {
    modal.querySelectorAll('[data-close-modal]').forEach((close) => close.addEventListener('click', () => closeModal(modal)));
    modal.addEventListener('click', (event) => { if (event.target === modal) closeModal(modal); });
  });

  document.addEventListener('keydown', (event) => {
    const modal = document.querySelector('.modal-backdrop.open');
    if (!modal) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeModal(modal);
      return;
    }
    if (event.key === 'Tab') {
      const focusable = [...modal.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
        .filter((element) => !element.disabled && element.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  document.querySelectorAll('[data-checklist]').forEach((list) => {
    const storageKey = `portfolio-${list.dataset.checklist}`;
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch { saved = {}; }
    const inputs = [...list.querySelectorAll('input[type="checkbox"]')];
    inputs.forEach((input) => {
      input.checked = Boolean(saved[input.id]);
      input.addEventListener('change', () => {
        saved[input.id] = input.checked;
        try { localStorage.setItem(storageKey, JSON.stringify(saved)); } catch { /* local file storage may be blocked */ }
        updateChecklistStatus(list, inputs);
      });
    });
    updateChecklistStatus(list, inputs);
  });

  function updateChecklistStatus(list, inputs) {
    const status = list.querySelector('[data-checklist-status]');
    if (!status) return;
    const complete = inputs.filter((input) => input.checked).length;
    status.textContent = `${complete} of ${inputs.length} preparation steps complete`;
  }
})();
