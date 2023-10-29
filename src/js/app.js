/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например import "files/script.js";
Неиспользуемый (не вызванный)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его расскоментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css  */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();

/*
Модуль работы со спойлерами
Документация:
Сниппет (HTML): spollers
*/
// flsFunctions.spollers();

/*
Модуль работы с табами
Документация:
Сниппет (HTML): tabs
*/
flsFunctions.tabs();

/*
Модуль "показать еще"
Документация по работе в шаблоне:
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Попапы
Документация по работе в шаблоне:
Сниппет (HTML): pl
*/
import "./libs/popup.js";

/*
Модуль параллакса мышью
Документация по работе в шаблоне:
Сниппет (HTML): 
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы: добавление классов, работа с placeholder. */
flsForms.formFieldsInit();

/* Oтправка формы со встроенной валидацией полей. false - отключит валидацию */
flsForms.formSubmit(true);

/* Модуль формы "колличество" */
flsForms.formQuantity();

/* Модуль формы "показать пароль" */
flsForms.formViewpass();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы с select. */
// import './libs/select.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройка выполняется в файле js/files/tippy.js
Документация по работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сниппет (HTML): tip (добавляет атрибут с подсказкой для html тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа со слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация по работе в шаблоне:
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули работы с прокруткой страницы ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем к блоку атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML): 
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация по работе в шаблоне: В HTML добавляем img, video, audio, iframe но вместо src пишем src="./img/alt.png" data-src
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
import "./files/scroll/lazyload.js";

// Наблюдатель за объектами c атрибутом data-watch
// Документация по работе в шаблоне: js/libs/watcher.js
// Сниппет(HTML):
// import './libs/watcher.js'

// Функции работы скроллом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру при прокрутке
// flsScroll.headerScroll();

// Функционал липкого блока
// flsScroll.stickyBlock();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация по работе в шаблоне: https://www.lightgalleryjs.com/docs/
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Прочие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамический адаптив */
import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Прочее ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Подключаем файлы со своим кодом */
import "./files/script.js";
import AirDatepicker from "air-datepicker";
//============================================================================================================================================================================================================================================

const catalogLinks = document.querySelectorAll("[data-sublist]");
const catalogBodys = document.querySelectorAll("[data-subid]");
const catalogLinksTwo = document.querySelectorAll("[data-list]");
const catalogBodysTwo = document.querySelectorAll("[data-id]");
const contentCategoryBack = document.querySelectorAll(
  ".content-category__back"
);

if (catalogLinks && catalogBodys && catalogLinksTwo && contentCategoryBack) {
  if (window.innerWidth > 992) {
    catalogLinks.forEach((link) => {
      if (link.getAttribute("data-sublist") === "1") {
        link.classList.add("_active");
      }
    });

    catalogBodys.forEach((body) => {
      if (body.getAttribute("data-subid") === "1") {
        body.classList.add("_active");
      }
    });

    catalogLinksTwo.forEach((link) => {
      if (link.getAttribute("data-list") === "1") {
        link.classList.add("_active");
      }
    });

    catalogBodysTwo.forEach((body) => {
      if (body.getAttribute("data-id") === "1") {
        body.classList.add("_active");
      }
    });
  }

  catalogLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sublistIndex = this.getAttribute("data-sublist");

      catalogLinks.forEach((link) => {
        link.classList.remove("_active");
      });
      this.classList.add("_active");

      catalogBodys.forEach((body) => {
        const subidIndex = body.getAttribute("data-subid");
        if (subidIndex === sublistIndex) {
          body.classList.add("_active");
        } else {
          body.classList.remove("_active");
        }
      });
    });
  });

  catalogBodys.forEach((body) => {
    body.addEventListener("click", function (e) {
      e.preventDefault();

      const subidIndex = this.getAttribute("data-subid");

      catalogBodys.forEach((body) => {
        body.classList.remove("_active");
      });
      this.classList.add("_active");

      catalogLinks.forEach((link) => {
        const sublistIndex = link.getAttribute("data-sublist");
        if (subidIndex === sublistIndex) {
          link.classList.add("_active");
        } else {
          link.classList.remove("_active");
        }
      });
    });
  });

  catalogLinksTwo.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sublistIndexTwo = this.getAttribute("data-list");

      catalogLinksTwo.forEach((link) => {
        link.classList.remove("_active");
      });
      this.classList.add("_active");

      catalogBodysTwo.forEach((body) => {
        const subidIndex = body.getAttribute("data-id");
        if (subidIndex === sublistIndexTwo) {
          body.classList.add("_active");
        } else {
          body.classList.remove("_active");
        }
      });
    });
  });
}

contentCategoryBack.forEach((back) => {
  back.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.stopPropagation();

      const catalogBodysActive = Array.from(catalogBodys).some((body) =>
        body.classList.contains("_active")
      );
      const catalogBodysTwoActive = Array.from(catalogBodysTwo).some((body) =>
        body.classList.contains("_active")
      );

      if (catalogBodysActive && catalogBodysTwoActive) {
        catalogBodysTwo.forEach((body) => {
          body.classList.remove("_active");
        });
      } else if (catalogBodysActive) {
        catalogBodys.forEach((body) => {
          body.classList.remove("_active");
        });
      }
    }
  });
});

const textareaAutoResize = () => {
  const textareas = document.querySelectorAll(".form__textarea");
  if (textareas.length) {
    textareas.forEach((textarea) => {
      textarea.addEventListener("input", () => {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      });
    });
  }
};

window.addEventListener("DOMContentLoaded", textareaAutoResize);

// const catalogLinks = document.querySelectorAll("[data-sublist]");
// const catalogBodys = document.querySelectorAll("[data-subid]");
// const catalogLinksTwo = document.querySelectorAll("[data-list]");
// const catalogBodysTwo = document.querySelectorAll("[data-id]");
// const contentCategoryBack = document.querySelectorAll(
//   ".content-category__back"
// );

// if (window.innerWidth > 992) {
//   catalogLinks.forEach((link) => {
//     if (link.getAttribute("data-sublist") === "1") {
//       link.classList.add("_active");
//     }
//   });

//   // Установить активный класс для элементов с атрибутом data-subid="1"
//   catalogBodys.forEach((body) => {
//     if (body.getAttribute("data-subid") === "1") {
//       body.classList.add("_active");
//     }
//   });

//   // Установить активный класс для элементов с атрибутом data-list="1"
//   catalogLinksTwo.forEach((link) => {
//     if (link.getAttribute("data-list") === "1") {
//       link.classList.add("_active");
//     }
//   });

//   // Установить активный класс для элементов с атрибутом data-id="1"
//   catalogBodysTwo.forEach((body) => {
//     if (body.getAttribute("data-id") === "1") {
//       body.classList.add("_active");
//     }
//   });
// }

// catalogLinks.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const sublistIndex = this.getAttribute("data-sublist");

//     catalogLinks.forEach((link) => {
//       link.classList.remove("_active");
//     });
//     this.classList.add("_active");

//     catalogBodys.forEach((body) => {
//       const subidIndex = body.getAttribute("data-subid");
//       if (subidIndex === sublistIndex) {
//         body.classList.add("_active");
//       } else {
//         body.classList.remove("_active");
//       }
//     });
//   });
// });

// catalogBodys.forEach((body) => {
//   body.addEventListener("click", function (e) {
//     e.preventDefault();
//     // if (e.target.classList.contains("content-category__back")) return;

//     const subidIndex = this.getAttribute("data-subid");

//     catalogBodys.forEach((body) => {
//       body.classList.remove("_active");
//     });
//     this.classList.add("_active");

//     catalogLinks.forEach((link) => {
//       const sublistIndex = link.getAttribute("data-sublist");
//       if (subidIndex === sublistIndex) {
//         link.classList.add("_active");
//       } else {
//         link.classList.remove("_active");
//       }
//     });
//   });
// });

// catalogLinksTwo.forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const sublistIndexTwo = this.getAttribute("data-list");

//     catalogLinksTwo.forEach((link) => {
//       link.classList.remove("_active");
//     });
//     this.classList.add("_active");

//     catalogBodysTwo.forEach((body) => {
//       const subidIndex = body.getAttribute("data-id");
//       if (subidIndex === sublistIndexTwo) {
//         body.classList.add("_active");
//       } else {
//         body.classList.remove("_active");
//       }
//     });
//   });
// });
// contentCategoryBack.addEventListener("click", function (e) {
//   if (window.innerWidth < 992) {
//     e.stopPropagation();

//     const catalogBodysActive = Array.from(catalogBodys).some((body) =>
//       body.classList.contains("_active")
//     );
//     const catalogBodysTwoActive = Array.from(catalogBodysTwo).some((body) =>
//       body.classList.contains("_active")
//     );

//     if (catalogBodysActive && catalogBodysTwoActive) {
//       catalogBodysTwo.forEach((body) => {
//         body.classList.remove("_active");
//       });
//     } else if (catalogBodysActive) {
//       catalogBodys.forEach((body) => {
//         body.classList.remove("_active");
//       });
//     }
//   }
// });

// const catalogLinks = document.querySelectorAll("[data-sublist]");
// const catalogBodys = document.querySelectorAll("[data-subid]");
// const catalogLinksTwo = document.querySelectorAll("[data-list]");
// const catalogBodysTwo = document.querySelectorAll("[data-id]");
// const contentCategoryBack = document.querySelector(".content-category__back");

// if (catalogLinks && catalogBodys && catalogLinksTwo && contentCategoryBack) {
//   catalogLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const sublistIndex = this.getAttribute("data-sublist");

//       catalogLinks.forEach((link) => {
//         link.classList.remove("_active");
//       });
//       this.classList.add("_active");

//       catalogBodys.forEach((body) => {
//         const subidIndex = body.getAttribute("data-subid");
//         if (subidIndex === sublistIndex) {
//           body.classList.add("_active");
//         } else {
//           body.classList.remove("_active");
//         }
//       });
//     });
//   });

//   catalogBodys.forEach((body) => {
//     body.addEventListener("click", function (e) {
//       e.preventDefault();
//       // if (e.target.classList.contains("content-category__back")) return;

//       const subidIndex = this.getAttribute("data-subid");

//       catalogBodys.forEach((body) => {
//         body.classList.remove("_active");
//       });
//       this.classList.add("_active");

//       catalogLinks.forEach((link) => {
//         const sublistIndex = link.getAttribute("data-sublist");
//         if (subidIndex === sublistIndex) {
//           link.classList.add("_active");
//         } else {
//           link.classList.remove("_active");
//         }
//       });
//     });
//   });

//   catalogLinksTwo.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();
//       const sublistIndexTwo = this.getAttribute("data-list");

//       catalogLinksTwo.forEach((link) => {
//         link.classList.remove("_active");
//       });
//       this.classList.add("_active");

//       catalogBodysTwo.forEach((body) => {
//         const subidIndex = body.getAttribute("data-id");
//         if (subidIndex === sublistIndexTwo) {
//           body.classList.add("_active");
//         } else {
//           body.classList.remove("_active");
//         }
//       });
//     });
//   });
// }

// contentCategoryBack.addEventListener("click", function (e) {
//   if (window.innerWidth < 992) {
//     e.stopPropagation();

//     const catalogBodysActive = Array.from(catalogBodys).some((body) =>
//       body.classList.contains("_active")
//     );
//     const catalogBodysTwoActive = Array.from(catalogBodysTwo).some((body) =>
//       body.classList.contains("_active")
//     );

//     if (catalogBodysActive && catalogBodysTwoActive) {
//       catalogBodysTwo.forEach((body) => {
//         body.classList.remove("_active");
//       });
//     } else if (catalogBodysActive) {
//       catalogBodys.forEach((body) => {
//         body.classList.remove("_active");
//       });
//     }
//   }
// });

const asideLinks = document.querySelectorAll(".applications__btn");
const asideBack = document.querySelectorAll(".category__back");
const category = document.querySelector(".category");

if (category) {
  // const htmlElement = document.querySelector("html");
  asideLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      category.classList.add("_active");

      flsFunctions.bodyLock();

      // htmlElement.classList.add("lock");
    });
  });

  asideBack.forEach((back) => {
    back.addEventListener("click", function (e) {
      e.preventDefault();
      category.classList.remove("_active");

      flsFunctions.bodyUnlock();

      // htmlElement.classList.remove("lock");
    });
  });
}

const initDatePickers = () => {
  const datePickers = document.querySelectorAll("[data-datepicker]");
  if (datePickers.length) {
    let minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    datePickers.forEach((element) => {
      let opt = {
        position: "bottom left",
        startDate: new Date(),
        inline: true,
        minDate: minDate,
        buttons: [
          {
            tagName: "input",
            attrs: {
              type: "time",
              value: "Выбрать",
              id: "time",
              // placeholder: "Выберите время",
            },
          },
        ],
        dateFormat(date) {
          return date.toLocaleString("ru", {
            year: "numeric",
            day: "2-digit",
            month: "long",
          });
        },
        onSelect({ date }) {
          const time = document.querySelector("#time");
          console.log(time.value);
          if (time && time.value.length > 2) {
            element.value = element.value + " в " + time.value;
          }
        },
      };
      if (element.dataset.datepicker === "range") {
        opt.range = true;
        opt.multipleDatesSeparator = "-";
      }
      new AirDatepicker(element, opt);
      document.addEventListener("click", (e) => {
        const dateEl = e.target.closest("[data-hasdatepicker]");
        if (dateEl) {
          const input = dateEl.querySelector("[data-datepicker]");

          if (input.value.length > 2) {
            dateEl.classList.add("_active");
          }
          dateEl.querySelector(".air-datepicker").classList.add("_active");
        } else {
          document.querySelector(".air-datepicker").classList.remove("_active");
          // document
          //   .querySelector("[data-hasdatepicker]")
          //   .classList.remove("_active");
        }
      });
      document.addEventListener("input", (e) => {
        if (e.target.id === "time" && element.value.length > 8) {
          let value = element.value;
          const lastTwoChars = value.slice(-2);
          const isNumber = /\d/.test(lastTwoChars);
          console.log(isNumber);
          if (isNumber) {
            value = value.slice(0, -8);
          }
          element.value = value + " в " + e.target.value;
        }
      });
    });
  }
};
window.initDatePickers = initDatePickers;
initDatePickers();
