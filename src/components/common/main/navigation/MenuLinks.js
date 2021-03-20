export default [
  {
    title: 'Структура и органы управления',
    icon: 'account-group-outline',
    hasSubmenu: true,
    submenu: [
      {
        title: 'Ученый совет',
        path: {
          name: 'sveden',
          params: 'academic-council'
        },
        hasSubmenu: false
      },
      {
        title: 'Факультет инфокоммуникаций',
        path: {
          name: 'sveden',
          params: 'faculty-infocommunication'
        },
        hasSubmenu: false
      },
      {
        title: 'Кафедра инфокоммуникационных технологий и систем связи',
        path: {
          name: 'sveden',
          params: 'faculty-itss'
        },
        hasSubmenu: false
      },
      {
        title: 'Кафедра информатики и вычислительной техники',
        path: {
          name: 'sveden',
          params: 'faculty-ivt'
        },
        hasSubmenu: false
      },
      {
        title: 'Кафедра общенаучной подготовки',
        path: {
          name: 'sveden',
          params: 'faculty-general'
        },
        hasSubmenu: false
      }
    ]
  }, {
    title: 'Документы',
    path: {
      name: 'sveden',
      params: 'docs'
    },
    icon: 'book-open-page-variant',
    hasSubmenu: false
  }, {
    title: 'Образовательные стандарты',
    path: {
      name: 'sveden',
      params: 'standarts'
    },
    icon: 'book-variant-multiple',
    hasSubmenu: false
  }, {
    title: 'Руководство. Научно-педагогический состав',
    icon: 'account-tie-outline',
    hasSubmenu: true,
    submenu: [
      {
        title: 'Руководство',
        path: {
          name: 'sveden',
          params: 'rulers'
        },
        hasSubmenu: false
      },
      {
        title: 'Научно-педагогический состав',
        hasSubmenu: true,
        submenu: [
          {
            title: 'Коллективы кафедры инфокоммуникационных технологий и систем связи',
            hasSubmenu: true,
            submenu: [
              {
                title: 'Болдырихин Николай Вячеславович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'Qm9sZGlyaWhpbiBOaWtvbGFpIFZ5YWNoZXNsYXZvdmljaA=='
                }
              },
              {
                title: 'Борисов Борис Петрович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'Qm9yaXNvdiBCb3JpcyBQZXRyb3ZpY2g='
                }
              },
              {
                title: 'Боярчук Андрей Эдуардович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'Qm95YXJjaHVrIGFuZHJlaSBFZHVhcmRvdmljaA=='
                }
              },
              {
                title: 'Герасимов Игорь Николаевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'R2VyYXNpbW92IElnb3InIE5pa29sYWV2aWNo'
                }
              },
              {
                title: 'Елисеев Александр Вячеславович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'RWxpc2VldiBhbGVrc2FuZHIgVnlhY2hlc2xhdm92aWNo'
                }
              },
              {
                title: 'Енгибарян Ирина Алешаевна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'RW5naWJhcnlhbiBJcmluYSBhbGVzaGFldm5h'
                }
              },
              {
                title: 'Ершов Валерий Васильевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'RXJzaG92IFZhbGVyaWkgVmFzaWwnZXZpY2g='
                }
              },
              {
                title: 'Жуковский Александр Георгиевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'Wkh1a292c2tpaSBhbGVrc2FuZHIgR2VvcmdpZXZpY2g='
                }
              },
              {
                title: 'Лабунько Олег Степанович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'TGFidW4na28gT2xlZyBTdGVwYW5vdmljaA=='
                }
              },
              {
                title: 'Манин Александр Анатольевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'TWFuaW4gYWxla3NhbmRyIGFuYXRvbCdldmljaA=='
                }
              },
              {
                title: 'Нерсесянц Альфред Аванесович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'TmVyc2VzeWFudHMgYWwnZnJlZCBhdmFuZXNvdmljaA=='
                }
              },
              {
                title: 'Панков Геннадий Климович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'UGFua292IEdlbm5hZGlpIEtsaW1vdmljaA=='
                }
              },
              {
                title: 'Решетникова Ирина Витальевна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'UmVzaGV0bmlrb3ZhIElyaW5hIFZpdGFsJ2V2bmE='
                }
              },
              {
                title: 'Рыбалко Игорь Петрович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'UmliYWxrbyBJZ29yJyBQZXRyb3ZpY2g='
                }
              },
              {
                title: 'Сосновский Иван Александрович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'U29zbm92c2tpaSBJdmFuIGFsZWtzYW5kcm92aWNo'
                }
              },
              {
                title: 'Юхнов Василий Иванович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'itss',
                  uid: 'WVVobm92IFZhc2lsaWkgSXZhbm92aWNo'
                }
              }
            ]
          },
          {
            title: 'Коллективы кафедры информатики и вычислительной техники',
            hasSubmenu: true,
            submenu: [
              {
                title: 'Конева Светлана Ивановна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'S29uZXZhIFN2ZXRsYW5hIEl2YW5vdm5h'
                }
              },
              {
                title: 'Лобзенко Павел Владимирович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'TG9iemVua28gUGF2ZWwgVmxhZGltaXJvdmljaA=='
                }
              },
              {
                title: 'Погорелов Вадим Алексеевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'UG9nb3JlbG92IFZhZGltIGFsZWtzZWV2aWNo'
                }
              },
              {
                title: 'Полянский Сергей Алексеевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'UG9seWFuc2tpaSBTZXJnZWkgYWxla3NlZXZpY2g='
                }
              },
              {
                title: 'Соколов Сергей Викторович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'U29rb2xvdiBTZXJnZWkgVmlrdG9yb3ZpY2g='
                }
              },
              {
                title: 'Ткачук Евгений Остапович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'VGthY2h1ayBFdmdlbmlpIE9zdGFwb3ZpY2g='
                }
              },
              {
                title: 'Чикалов Андрей Николаевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'Q0hpa2Fsb3YgYW5kcmVpIE5pa29sYWV2aWNo'
                }
              },
              {
                title: 'Швидченко Светлана Александровна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'ivt',
                  uid: 'U0h2aWRjaGVua28gU3ZldGxhbmEgYWxla3NhbmRyb3ZuYQ=='
                }
              }
            ]
          },
          {
            title: 'Коллектив кафедры общенаучной подготовки',
            hasSubmenu: true,
            submenu: [
              {
                title: 'Бинеев Энвер Абдулхакович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'QmluZWV2IEVudmVyIGFiZHVsaGFrb3ZpY2g='
                }
              },
              {
                title: 'Бородин Алексей Викторович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'Qm9yb2RpbiBhbGVrc2VpIFZpa3Rvcm92aWNo'
                }
              },
              {
                title: 'Гаевская Любовь Александровна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'R2FldnNrYXlhIEx5dWJvdicgYWxla3NhbmRyb3ZuYQ=='
                }
              },
              {
                title: 'Головина Ирина Витальевна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'R29sb3ZpbmEgSXJpbmEgVml0YWwnZXZuYQ=='
                }
              },
              {
                title: 'Докучаев Сергей Аркадьевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'RG9rdWNoYWV2IFNlcmdlaSBhcmthZCdldmljaA=='
                }
              },
              {
                title: 'Ефимов Сергей Викторович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'RWZpbW92IFNlcmdlaSBWaWt0b3JvdmljaA=='
                }
              },
              {
                title: 'Жуковский Денис Александрович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'Wkh1a292c2tpaSBEZW5pcyBhbGVrc2FuZHJvdmljaA=='
                }
              },
              {
                title: 'Колдынская Лариса Михайловна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'S29sZGluc2theWEgTGFyaXNhIE1paGFpbG92bmE='
                }
              },
              {
                title: 'Конкин Борис Борисович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'S29ua2luIEJvcmlzIEJvcmlzb3ZpY2g='
                }
              },
              {
                title: 'Константинова Яна Борисовна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'S29uc3RhbnRpbm92YSBZYW5hIEJvcmlzb3ZuYQ=='
                }
              },
              {
                title: 'Коршун Анна Михайловна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'S29yc2h1biBhbm5hIE1paGFpbG92bmE='
                }
              },
              {
                title: 'Костецкая Галина Сергеевна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'S29zdGV0c2theWEgR2FsaW5hIFNlcmdlZXZuYQ=='
                }
              },
              {
                title: 'Светличная Наталия Олеговна',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'U3ZldGxpY2huYXlhIE5hdGFsaXlhIE9sZWdvdm5h'
                }
              },
              {
                title: 'Устименко Дмитрий Леонидович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'gse',
                  uid: 'VXN0aW1lbmtvIERtaXRyaWkgTGVvbmlkb3ZpY2g='
                }
              }
            ]
          },
          {
            title: 'Коллектив отдела научно-исследовательской работы',
            hasSubmenu: true,
            submenu: [
              {
                title: 'Головской Василий Андреевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'dsr',
                  uid: 'R29sb3Zza29pIFZhc2lsaWkgYW5kcmVldmljaA=='
                }
              },
              {
                title: 'Мозоль Александр Анатольевич',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'dsr',
                  uid: 'TW96b2wnIGFsZWtzYW5kciBhbmF0b2wnZXZpY2g='
                }
              },
              {
                title: 'Рыбалко Игорь Петрович',
                path: {
                  name: 'sveden',
                  params: 'lecturers',
                  chair: 'dsr',
                  uid: 'UmliYWxrbyBJZ29yJyBQZXRyb3ZpY2g='
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
    icon: 'cog-outline',
    hasSubmenu: true,
    submenu: [
      {
        title: 'Учебные кабинеты',
        path: {
          name: 'sveden',
          params: 'rooms'
        },
        hasSubmenu: false
      },
      {
        title: 'Объекты для проведения практических занятий',
        hasSubmenu: true,
        submenu: [
          {
            title: 'Лаборатория Общей физики и БЖД',
            path: {
              name: 'sveden',
              params: 'lab-general-phisics-n-bjd'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Вычислительной техники и информатики',
            path: {
              name: 'sveden',
              params: 'lab-ivt'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Основ теории цепей и линий связи',
            path: {
              name: 'sveden',
              params: 'lab-line'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Теории электрической связи, метрологии и электроники',
            path: {
              name: 'sveden',
              params: 'lab-electricity'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Систем радиосвязи и телевещания',
            path: {
              name: 'sveden',
              params: 'lab-radio'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Цифровых систем коммутации и сетей связи',
            path: {
              name: 'sveden',
              params: 'lab-css'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Передачи дискретных сообщений и документальной электросвязи',
            path: {
              name: 'sveden',
              params: 'lab-relation'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Многоканальных телекоммуникационных систем',
            path: {
              name: 'sveden',
              params: 'lab-mts'
            },
            hasSubmenu: false
          },
          {
            title: 'Лаборатория Современных методов управления',
            path: {
              name: 'sveden',
              params: 'lab-rule'
            },
            hasSubmenu: false
          }
        ]
      },
      {
        title: 'Сектор библиотечного обслуживания',
        path: {
          name: 'sveden',
          params: 'library'
        },
        hasSubmenu: false
      }
    ]
  },
  {
    title: 'Приемная комиссия',
    path: {
      name: 'sveden',
      params: 'join-commission'
    },
    icon: 'account-group-outline',
    hasSubmenu: false
  },
  {
    title: 'Стипендии и иные виды материальной помощи',
    path: {
      name: 'sveden',
      params: 'grants'
    },
    icon: 'account-cash-outline',
    hasSubmenu: false
  },
  {
    title: 'Платные образовательные услуги',
    icon: 'cart-outline',
    hasSubmenu: true,
    submenu: [
      {
        title: 'Основная образовательная деятельность',
        path: {
          name: 'sveden',
          params: 'main-activity-paid'
        },
        hasSubmenu: false
      },
      {
        title: 'Дополнительная образовательная деятельность',
        hasSubmenu: true,
        submenu: [
          {
            title: 'Информация обновляется.....',
            path: {
              name: '404',
              params: ''
            },
            hasSubmenu: false
          }
        ]
      }
    ]
  },
  {
    title: 'Финансово-хозяйственная деятельность',
    path: {
      name: 'sveden',
      params: 'cash-activity'
    },
    icon: 'cash-multiple',
    hasSubmenu: false
  },
  {
    title: 'Вакантные места для приема (перевода)',
    path: {
      name: 'vacant', /* aaa */
      params: 'vacant'
    },
    icon: 'arrow-decision-outline',
    hasSubmenu: false
  },
  {
    title: 'Доступная среда',
    path: {
      name: 'ovz', /* aaa */
      params: 'ovz'
    },
    icon: 'share',
    hasSubmenu: false
  },
  {
    title: 'Международное сотрудничество',
    path: {
      name: 'inter', /* aaa */
      params: 'inter'
    },
    icon: 'earth',
    hasSubmenu: false
  }]
