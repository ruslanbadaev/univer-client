<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" v-for="(ruler, i) in rulers" :key="i">
        <v-card>
          <v-row no-gutters>
            <v-col cols="4">
              <v-img :src="ruler.photo"></v-img>
            </v-col>
            <v-col cols="8">
              <v-row class="px-2">
                <v-col cols="12">
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="headline">{{ruler.name}}</v-list-item-title>
                      <v-list-item-subtitle>{{ruler.position}}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col>
                  <v-card outlined>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-icon left>mdi-cellphone-android</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{ruler.phone}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col>
                  <v-card outlined>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-icon left>mdi-cellphone-android</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{ruler.workPhone ? ruler.workPhone : 'нет рабочего телефона'}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
                <v-col cols="12">
                  <v-card outlined>
                    <v-list-item>
                      <v-list-item-avatar>
                        <v-icon left>mdi-email-outline</v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title>{{ruler.email}}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'rulers',
  data () {
    return {
      rulers: [
        { name: 'Манин Александр Анатольевич', photo: 'http://skf-mtusi.ru/images/ruk/Manin.jpg', position: 'Директор', phone: '(863) 262-33-12', workPhone: '(863) 310-69-60', email: 'mаnin@skf-mtusi.ru' },
        { name: 'Жуковский Александр Георгиевич', photo: 'http://www.skf-mtusi.ru/images/ruk/Zhukovskiy.jpg', position: 'Заместитель директора по учебно-воспитательной работе', phone: '(863) 310-69-60', workPhone: false, email: 'zhukоvskiy@skf-mtusi.ru' },
        { name: 'Демченко Лариса Юрьевна', photo: 'http://skf-mtusi.ru/images/ruk/Osipovich.jpg', position: 'Главный бухгалтер', phone: '(863) 262-29-25', workPhone: false, email: 'buhgаlteria@skf-mtusi.ru' }
      ]
    }
  },
  head() {
    return {
      title: 'Руководство',
      meta: [
        {
          hid: 'rulers',
          name: 'Руководство',
          content: 'Руководство'
        }
      ]
    }
  }
}
</script>
