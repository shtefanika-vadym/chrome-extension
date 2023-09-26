const handleClickOutsidePopup = (element: HTMLElement, onClickOutside: () => void) => {
  const outsideClickListener = (event: any) => {
    if (event.target.classList.contains('dialog-container')) {
      onClickOutside()
      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}

export const Utils = {
  handleClickOutsidePopup,
}
