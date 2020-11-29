<template>
  <div>
    <v-chip v-if="weather" color="success" label>{{weather.day}}, {{weather.min}} &#8451; - {{weather.max}} &#8451;</v-chip>
  </div>
</template>

<script>
export default {
  name: 'Weather',
  data: () => ({
    citykey: 295146,
    apikey: 'mcmd4dH4jrNEZa57ZHfTDLL2Qiu0FwLQ',
    weather: null
  }),
  methods: {
    async getWeather () {
      await fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${this.citykey}?apikey=${this.apikey}&language=ru-ru`, {
        method: 'GET'
      }).then(data => data.json().then(r => {
        this.weather = {
          min: Math.round((r.DailyForecasts[0].Temperature.Minimum.Value - 32) * (5 / 9)),
          max: Math.round((r.DailyForecasts[0].Temperature.Maximum.Value - 32) * (5 / 9)),
          day: r.DailyForecasts[0].Day.IconPhrase
        }
      }))
    }
  },
  beforeMount () {
    this.getWeather()
  }
}
</script>
