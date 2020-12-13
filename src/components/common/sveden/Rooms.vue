<template>
  <v-row justify="center">
    <v-col cols="12" md="8" v-for="(room, i) in rooms" :key="i" >
      <v-card>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="overline">{{room.title}}</v-list-item-title>
            <v-list-item-subtitle>{{room.subtitle}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-text>
          <v-row>
            <v-col v-for="(item, i) in room.consist" :key="i">
              <v-card>
                <v-list-item>
                  <v-list-item-avatar>
                    <v-icon>mdi-{{item.icon}}</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
          <p>
            {{room.description}}
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'rooms',
  data () {
    return {
      rooms: [
        { title: 'Лингафонный кабинет', subtitle: '101 «А»', description: 'Лингафонный кабинет Cortex LinguaMatic', consist: [{ icon: 'robot-excited-outline', title: 'автоматизированное место преподавателя' }, { icon: 'apple-airplay', title: '16 оборудованных рабочих мест студентов' }] },
        { title: 'Лекционные и учебные аудитории', subtitle: '9 аудиторий', description: '', consist: [{ icon: 'apple-airplay', title: 'интерактивные доски' }, { icon: 'projector', title: 'мультимедийные проекторы' }] },
        { title: 'Кабинет абитуриента', subtitle: '105 каб', description: '', consist: [{ icon: 'laptop-chromebook', title: '2 компьютера' }, { icon: 'printer', title: 'принтер и МФУ' }, { icon: 'alert-box-outline', title: 'интерактивным киоском с размещенной информацией о работе приемной комиссии' }] },
        { title: 'Кабинет для защиты ВКР', subtitle: '307', description: '', consist: [{ icon: 'laptop-chromebook', title: '9 ноутбуков' }, { icon: 'projector', title: 'проектор' }, { icon: 'television', title: 'телевизор' }, { icon: 'access-point', title: 'радиосистемой с пятью микрофонами' }, { icon: 'access-point', title: 'возможность трансляции видеоконференций' }] },
        { title: 'Кабинет самоподготовки', subtitle: '202 каб.', description: 'Назначение кабинета — обеспечивать условия для самостоятельной работы студентов в рамках учебных дисциплин и подготовки ВКР', consist: [{ icon: 'laptop-chromebook', title: 'девятнадцать персональных компьютеров с выходом в сеть филиала и Интернет.' }] }
      ]
    }
  }
}
</script>
