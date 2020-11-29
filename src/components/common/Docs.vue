<template>
  <v-row justify="center">
    <v-col cols="12" md="5">
      <v-row  >
        <v-col cols="12" class="text-center mb-4">
          <span class="title">Подача по электронной почте</span>
        </v-col>
        <v-col v-for="(s, i) in stepsByEL" :key="i" cols="12" :md="(i + 1) % 2 === 0 ? 12 : 10" class="pa-1">
          <div class="wrapper_el">
            <div class="text" :style="{background: s.color}">{{s.text}}</div>
            <div class="step"><v-avatar color="white" size="62" class="step__shadow">
              <span class="title" :style="{color: s.color}">0{{i+1}}</span>
            </v-avatar></div>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12" class="text-center mb-4">
          <span class="title">Подача через личный кабинет</span>
        </v-col>
        <v-col cols="12" v-for="(s, i) in stepsByLK" :key="i" class="pa-2">
          <v-card :color="s.color">
            <v-avatar color="default" class="title" size="32" tile>{{i+1}}</v-avatar>
            <v-card-text class="white--text">{{s.text}}</v-card-text>
          </v-card>
        </v-col>
        <v-col cols class="text-center">
          <v-btn href="https://abitur.mtuci.ru/#!register_skf" color="pink" class="white--text">Личный кабинет</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'docs',
  data: () => ({
    stepsByEL: [
      { text: 'Скачать заявление, заполнить и заверить подписями', color: '#D81B60' },
      { text: 'Отсканировать или сфотографировать страницы 2-5 паспорта, все страницы документа об образовании, включая приложение', color: '#8E24AA' },
      { text: 'Прикрепить личную фотографию (только для сдающих вступительные испытания)', color: '#5E35B1' },
      { text: 'Отсканировать или сфотографировать документы, подтверждающие особые правва и индивидуальные достижения (при наличии)', color: '#3949AB' },
      { text: 'Для участия в конкурсе на зчисление скачать и заполнить согласие на зачисление, заверить подписями', color: '#1E88E5' },
      { text: 'Отправить фото/сканы заявления и всех документов на электронный адрес приемной комиссии priem@skf-mtusi.ru', color: '#039BE5' }
    ],
    stepsByLK: [
      { text: 'На первом шаге регистрации вам необходимо заполнить приведенную анкету, указать свою электронную почту и придумать пароль, с помощью которых вы сможете редактировать анкету, пока сотрудник университета не подтвердит её. На втором шаге регистрации после заполнения данных об образовании и выбора формы обучения вам откроется форма для выбора напрвалений подготовки', color: '#8E24AA' },
      { text: 'На тетьем шаге регистрации вам будет необходимо распечатать заполненное заявление, подписать предложенные поля синей шариковой ручкой, отсканировать заявление и подтверждающие документы, выгрузить сканы в личный кабинет. Абитурьенты, сдающие вступительные испытания, должны загрузить свое фото для экзаменационного листа.', color: '#3949AB' },
      { text: 'Получив анкету, сотрудник приемной комиссии проверит её и, в случае ошибок, сообщит вам о них через систему сообщений. Используя свою почту и пароль, вы сможете отредактировать анкету в личном кабинете. В случае если анкета заполнена правильно, вы будете включены в списки подавших документы.', color: '#039BE5' }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .wrapper_el {
    width: 100%;
    min-height: 62px;
    display: flex;
    .text {
      width: calc(100% - 62px);
      color: #fff;
      padding: 10px 15px;
      border-radius: .25rem;
    }
    .step {
      position: relative;
      left: -25px;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.534);
      &__shadow {
        box-shadow: 2px 1px 3px rgba(0, 0, 0, 0.336);
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 960px) {
    .wrapper_el {
      .step {
        left: -16px;
      }
    }
  }

  .wrapper_lk {
    width: 70%;
    display: flex;
    .step {
      font-size: 3em;
      font-weight: bold;
    }
    .text {
      width: 100%;
      border-radius: .25rem;
      padding-left: 10px;
    }
  }
</style>
