const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const itemButton = item.querySelector('button');

        itemButton.addEventListener('click', (e) => {
            const targetId = itemButton.getAttribute('data-ac-target');
            const itemCollapsible = item.querySelector('div.accordion-collapse' + targetId);
        
            toggleAccordionItem(itemButton, itemCollapsible);
            accordionItems.forEach(ac => ac !== item && closeOtherAccordionItem(ac));
    });
})

function toggleAccordionItem(buttonEl, collapsibleEl) {
    const isExpanded = buttonEl.getAttribute('aria-expanded');

    buttonEl.setAttribute('aria-expanded', isExpanded === 'true' ? 'false' : 'true');
    collapsibleEl.classList.toggle('show');
    collapsibleEl.classList.toggle('hide');
    
    const buttonIcon = buttonEl.querySelector('span.icon img');
    buttonIcon.setAttribute('src', `./assets/images/icon-${isExpanded === 'true' ? 'plus' : 'minus'}.svg`)
}

function closeOtherAccordionItem(item) {
    const buttonEl = item.querySelector('button');
    const targetId = buttonEl.getAttribute('data-ac-target');
    const collapsibleEl = item.querySelector('div.accordion-collapse' + targetId);

    buttonEl.setAttribute('aria-expanded', 'false');
    collapsibleEl.classList.remove('show');
    collapsibleEl.classList.add('hide');

    const buttonIcon = buttonEl.querySelector('span.icon img');
    buttonIcon.setAttribute('src', `./assets/images/icon-plus.svg`)
}