// Подключение функционала "Чертогов Фрилансера"
import { _slideDown, _slideToggle, _slideUp, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const selectsBody = document.querySelectorAll("[data-selects]");
if (selectsBody.length > 0) {
  selectsBody.forEach((body) => {
    // Инициализация базы селектов, парсера и шаблона
    const template = document.querySelector("#selects-template");
    const parser = new DOMParser();
    const templatesItems = parser.parseFromString(
      template.innerHTML,
      "text/html"
    );
    const selectItems = templatesItems.querySelectorAll("[data-select]");
    const selectTargets = body.querySelectorAll("[data-target]");

    // Активный селект для простого удаления
    const activeSelects = [];

    selectTargets.forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const targetSelect = Array.from(selectItems).find(
          (item) => item.dataset.select === e.target.dataset.target
        );

        if (!element.classList.contains("_active")) {
          body.insertBefore(targetSelect, body.children[1]);
          activeSelects.push({ targetSelect, target: e.target.dataset.target });
          const title = targetSelect.querySelector("[data-select-title]");
          const form = targetSelect.querySelector("form");
          const originText = title.textContent;
          element.classList.add("_active");
          form.addEventListener("change", (e) => {
            const checked = form.querySelectorAll("input:checked");
            if (checked.length > 0) {
              title.textContent = `${originText}: ${checked.length}`;
              const reset = document.createElement("button");
              reset.type = "reset";
              reset.classList.add("select-reset");
              title.appendChild(reset);
              title.classList.add("_has-reset");

              reset.addEventListener("click", function (e) {
                form.reset();
                reset.remove();
                title.textContent = `${originText}`;
                title.classList.remove("_has-reset");
              });
            } else {
              title.textContent = `${originText}`;
              title.classList.remove("_has-reset");
            }
          });
        } else {
          const index = activeSelects.findIndex(
            (item) => e.target.dataset.target === item.target
          );
          element.classList.remove("_active");

          if (index !== -1) {
            activeSelects.splice(index, 1);
          }
          targetSelect.remove();
        }

        // Добавляем кнопку удаления всех селектов
        const resetButton = body.querySelector(".select-remove");
        if (activeSelects.length > 0 && !resetButton) {
          const button = document.createElement("button");
          button.textContent = "Сбросить фильтр";
          button.classList.add("select-remove");
          body.insertAdjacentElement("beforeend", button);
          button.addEventListener("click", function (e) {
            selectTargets.forEach((element) => {
              element.classList.remove("_active");
            });
            activeSelects.forEach((element) => {
              element.targetSelect.remove();
            });
            activeSelects.splice(0, activeSelects.length);
            button.remove();
          });
        } else if (activeSelects.length === 0 && resetButton) {
          resetButton.remove();
        }
        console.log(activeSelects.length);
      });
    });
  });
}
const initSelects = (select = undefined) => {
  const targetSelect = select || document.querySelector("[data-select]");
  const openSelect = [];

  if (targetSelect) {
    document.addEventListener("click", (e) => {
      const title = e.target.closest("[data-select-title]");

      if (title && !e.target.classList.contains("select-reset")) {
        if (window.innerWidth > 992) {
          _slideToggle(title.nextElementSibling);

          openSelect.forEach((element, index) => {
            _slideUp(element.nextElementSibling);
            openSelect.splice(index, 1);
          });
        } else {
          title.parentElement.classList.toggle("_active");
        }

        openSelect.push(title);
      } else if (
        (!title && !e.target.closest("[data-select]")) ||
        e.target.hasAttribute("data-select-close")
      ) {
        openSelect.forEach((element, index) => {
          if (window.innerWidth > 992) {
            _slideUp(element.nextElementSibling);
          } else {
            element.parentElement.classList.add("_animate");
            setTimeout(() => {
              element.parentElement.classList.remove("_animate");
            }, 300);
            element.parentElement.classList.remove("_active");
          }
          openSelect.splice(index, 1);
        });
      }
    });
  }
};
initSelects();

const telInputs = document.querySelectorAll('input[type="tel"]');

if (telInputs) {
  telInputs.forEach((input) => {
    Inputmask({ mask: "+7 (999) 999-9999" }).mask(input);
  });
}

//========================================================================================================================================================

const initInputFiles = () => {
  const loaders = document.querySelectorAll(".file-loader");

  loaders.forEach((loader) => {
    const dropBox = loader.querySelector(".file-loader__row");
    const input = loader.querySelector(".file-loader__input");
    const files = loader.querySelector(".file-loader__files");
    const errors = loader.querySelector(".file-loader__error");
    const errorsTextEl = document.querySelector("#errors-code");
    const maxSize = errorsTextEl.getAttribute("data-size");
    const maxFilesLenghtError = errorsTextEl.getAttribute("data-fileMax");
    const fileTypeError = errorsTextEl.getAttribute("data-fileType");
    const maxSizeError = errorsTextEl.getAttribute("data-fileSize");
    const maxFiles = errorsTextEl.getAttribute("data-max");

    const dt = new DataTransfer();
    let errorsArr = [];
    const imageType = /image.*/;
    const videoType = /video.*/;
    const fileType = /application.*/;

    const previewFile = (fileList) => {
      const filesArr = [...fileList];

      filesArr.forEach((file) => {
        const fReader = new FileReader();

        fReader.readAsDataURL(file);
        fReader.onloadend = () => {
          const wrap = document.createElement("div");
          wrap.setAttribute("class", "file-result");
          const close = document.createElement("button");
          const name = document.createElement("p");
          close.classList.add("close");
          name.textContent = file.name;
          wrap.appendChild(name);
          wrap.appendChild(close);
          files.appendChild(wrap);
          if (navigator.userAgent.toLowerCase().indexOf("firefox") === -1) {
            files.appendChild(wrap).appendChild(close);
            close.addEventListener("click", (e) => {
              // eslint-disable-next-line no-use-before-define
              deleteFile(e.target.parentNode);
              e.preventDefault();
              e.stopPropagation();
            });
          }
        };
      });
    };

    const createError = () => {
      if (errorsArr.length) {
        errors.classList.add("active");

        errorsArr.forEach((string) => {
          const p = document.createElement("p");
          p.textContent = string;
          errors.appendChild(p);
        });
      }
      errorsArr = [];
    };

    const checkErrors = () => {
      if (errorsArr[0]) {
        createError();
      } else {
        errors.classList.remove("active");

        errors.innerHTML = "";
      }
    };

    const refreshFiles = () => {
      // Clear files
      files.innerHTML = "";

      // Make all files

      Array.from(input.files).forEach((file) => {
        if (dt.files.length > maxFiles - 1) {
          errorsArr.push(`$ ${maxFilesLenghtError}`);
          return;
        }
        if (file.size > maxSize) {
          errorsArr.push(`${file.name} ${maxSizeError}`);
          return;
        }

        if (file.type.match(imageType)) {
          dt.items.add(file);
          return;
        }
        if (file.type.match(fileType)) {
          dt.items.add(file);
          return;
        }
        if (file.type.match(videoType)) {
          dt.items.add(file);
          return;
        }
        errorsArr.push(`${file.name} ${fileTypeError}`);
      });
      input.files = dt.files;

      previewFile(dt.files);

      if (input.files.length > 0) {
        loader.classList.add("field");
      } else {
        loader.classList.remove("field");
      }
      checkErrors();
    };

    function getChildElementIndex(element) {
      return Array.prototype.indexOf.call(element.parentNode.children, element);
    }
    const deleteFile = (element, elIndex) => {
      const newDt = new DataTransfer();

      const index = elIndex || getChildElementIndex(element);
      // Copy all besides deleted
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= input.files.length - 1; i++) {
        if (i !== index) newDt.items.add(input.files[i]);
      }

      // Replace
      dt.clearData();

      input.files = newDt.files;

      refreshFiles();
    };

    dropBox.addEventListener("drop", (e) => {
      input.files = e.dataTransfer.files;
      refreshFiles();
      e.preventDefault();
    });

    input.addEventListener("change", (e) => {
      if (input.files.length === 0) {
        input.files = dt.files;
        return;
      }
      refreshFiles();
      e.preventDefault();
    });
  });
};
initInputFiles();
window.initInputFiles = initInputFiles;
