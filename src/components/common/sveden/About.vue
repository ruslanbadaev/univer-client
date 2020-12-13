<template>
  <v-row>
    <v-col cols="12" md="8" offset-md="2">
      <v-card>
        <v-banner sticky class="text-center">
          <span :class="!$vuetify.breakpoint.mobile ? 'display-1' : null">
            Северо-Кавказский филиал ордена Трудового Красного Знамени федерального Государственного бюджетного образоватлеьного
            учреждения высшего образования "Московский технический университет связи и информатики"
          </span>
        </v-banner>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="3" v-for="(e, i) in about" :key="i">
          <v-card min-height="180px">
            <v-card-title class="d-flex justify-center">
              <v-icon :color="e.color" size="64">mdi-{{e.icon}}</v-icon>
            </v-card-title>
            <v-card-text class="text-center text--primary">
              <div class="headline">{{e.text}}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <div class="overline text--primary">Информация об учредителе</div>
            </v-col>
            <v-col cols="12" md="3" v-for="(f, i) in founder" :key="i">
              <v-list-item three-line>
                <v-list-item-icon>
                  <v-icon>mdi-{{f.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{f.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{f.subtitle}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <div class="overline text--primary">Контактная информация СКФ МТУСИ</div>
            </v-col>
            <v-col cols="12" md="4" v-for="(info, i) in info" :key="i">
              <v-card tile>
                <v-list dense>
                  <v-list-item>
                    <v-list-item-icon><v-icon>mdi-{{info.icon}}</v-icon></v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{info.title}}</v-list-item-title>
                      <v-list-item-subtitle>{{info.text}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3245.9708746843608!2d39.71283270488586!3d47.218767400845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa80a645ed8e1ba37!2z0KHQtdCy0LXRgNC-LdCa0LDQstC60LDQt9GB0LrQuNC5INCk0LjQu9C40LDQuyDQnNCi0KPQodCY!5e0!3m2!1sru!2sru!4v1599938338555!5m2!1sru!2sru" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'edu-about',
  data () {
    return {
      about: [
        { icon: 'access-point-network', color: 'blue', text: 'Обучаем специалистов с 1967 года' },
        { icon: 'star-circle', color: 'yellow darken-4', text: 'Единственный университет связи в ЮФО' },
        { icon: 'account-convert', color: 'teal darken-1', text: 'Сотрудничаем с известными компаниями' },
        { icon: 'account-group', color: 'pink', text: 'Оптыный педагогический состав' }
      ],
      info: [
        { icon: 'map-marker', title: 'Адрес', text: '344002, г.Ростов-на-Дону, ул.Серафимовича, 62.' },
        { icon: 'phone-classic', title: 'Телефон', text: '(863) 310-69-60' },
        { icon: 'deskphone', title: 'Факс', text: '(863) 310-69-68' },
        { icon: 'phone-voip', title: 'Телекс', text: '123432 VOLT RU' },
        { icon: 'at', title: 'Email', text: 'mаil@skf-mtusi.ru' },
        { icon: 'instagram', title: 'Instagram', text: '@skf_mtusi' },
        { icon: 'account-hard-hat', title: 'График работы', text: 'С понедельника по пятницу: с 8.00 до 22.00. Суббота с 8.00 до 14.00' },
        { icon: 'sofa-single-outline', title: 'Перерыв', text: '13.00 до 14.00' },
        { icon: 'account-check-outline', title: 'Посетителям', text: 'ПН-ЧТ: с 09.00 до 11.00 и с 16.00 до 18.00. ПТ с 14.00 до 16.00. СБ с 10.00 до 12.00' }
      ],
      founder: [
        { icon: 'account-group-outline', title: 'Правительство Российской Федерации', subtitle: 'Учредитель филиала' },
        { icon: 'domain', title: 'Федеральное агенство связи', subtitle: 'Осуществляет полномочия учредителя' },
        { icon: 'account-tie', title: 'Духовницкий Олег Геннадьевич', subtitle: 'Руководитель учредителя образовательной организации' },
        { icon: 'map', title: '109289, г. Москва, Николоямский пер., 3а стр. 2', subtitle: 'Юридический адрес' },
        { icon: 'cellphone-android', title: '+7(495)986-31-60', subtitle: 'Контактный телефон справочной' },
        { icon: 'cellphone-android', title: '+7(495)986-30-02', subtitle: 'Контактный телефон руководителя' },
        { icon: 'at', title: 'mail@rossvyaz.ru', subtitle: 'Электронная почта' },
        { icon: 'earth', title: 'rossvyaz.ru', subtitle: 'Сайт учредителя' }
      ]
    }
  }
}
</script>
