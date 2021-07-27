<template lang="pug">
  div
    .h-screen.justify-center.items-center.flex.bg-gradient-to-r.from-primary.to-secondary.text-white.relative
      .flex.flex-col.justify-center.gap-2
        img.self-center.response-img(src="/1.png")
        .response-text.font-extrabold Shaft.CC
        .flex.justify-center.absolute.bottom-1.left-0.w-full.animate-bounce
          img(src="/keyboard_arrow_down_white_24dp.svg" height="65" width="68")
    //- .sticky.top-0.p-4.border-b.z-20
      .max-w-7xl.mx-auto
        .text-center sticky header
        //- trigger(v-model="dark")
    .max-w-xl.mx-auto
      .py-16
        .text-center.text-xl.font-bold.p-2 Навигация
        .grid.grid-cols-3
          .p-2.hover_underline.text-center.cursor-pointer(v-for="(data, key) in navigation" :key="key")
            a(:href="data.link") {{ data.label }}
    .max-w-7xl.mx-auto.px-8(id="description")
      .text-2xl
        span.text-gray-600.hover_underline.cursor-pointer(@click="copyLink('description')") #
        span.font-bold.ml-2 Описание
      .mt-6 Shaft.CC - комплекс игровых режимов, работающих на базе игры Garry`s mod. Проект стартовал в 01.12.2017 и был в эксплуатации до 01.08.2021. Весь исходный код доступен на github.com, исключая некоторую часть логики экосистемы, и предоставляется "КАК ЕСТЬ" под лицензией GNU GPL.
      .mt-6 Обратите внимание, что исходный код был разработан для узкого круга задач и не предназначен для работы со момента инициализации проекта - исходники рекомендуется использовать как ознакомительный материал или как стартовый скелет для собственных работ. Разрешается свободное и бесплатное использование программного продукта.
      .text-2xl.mt-12(id="github")
        span.text-gray-600.hover_underline.cursor-pointer(@click="copyLink('github')") #
        span.font-bold.ml-2 Github проект
      .mt-6
        | Развитие проекта автором не предполагается, весь исходный код размещен "как есть". Если будут обнаружены какие-то ошибки или уязвимости - рекомендуется создать Pull request и исправить это.
        b &nbsp;Нет никаких гарантий, что фреймворк или логика кода не содержит багов кода или уязвимостей - используйте на свой страх и риск!
      .mt-4
        .mt-2
          b Бекенд&nbsp;
          span - Laravel 7&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-backend" target="_blank") totor13x/shaft-cc-backend
        .mt-2
          b Фронтенд&nbsp;
          span - NuxtJS&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-frontend" target="_blank") totor13x/shaft-cc-frontend
        .mt-2
          b Websocket сервер&nbsp;
          span - AdonisJS 4&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-wsserver" target="_blank") totor13x/shaft-cc-wsserver
        .mt-6
          b Сборка сервера в докере&nbsp;
          span -&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-gmod-docker" target="_blank") totor13x/shaft-cc-gmod-docker
        .mt-2
          b Режим Deathrun&nbsp;
          span - За основу взят режим&nbsp;
          a.hover_underline.text-blue-600.cursor-pointer(href="https://github.com/Arizard/deathrun" target="_blank") arizard/deathrun
          span , разрешено&nbsp;
          a.hover_underline.text-blue-600.cursor-pointer(href="#deathrun-maps") пользоваться картами
        .mt-2
          b Режим Murder&nbsp;
          span - написан в 2017&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-gmod-murder" target="_blank") totor13x/shaft-cc-gmod-murder
          span &nbsp;рабочий режим, много мусора в коде и сильно отличается от оригинального мардера
        .mt-2
          b Режим Prophunt&nbsp;
          span - написан в 2017&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-gmod-prophunt" target="_blank") totor13x/shaft-cc-gmod-prophunt
          span &nbsp;рабочий режим, отличается от оригинального пропханта более удобным управлением пропом и хантером
        .mt-2
          b Режим Star Wars RP&nbsp;
          span - написан в 2019&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-gmod-starwarsrp" target="_blank") totor13x/shaft-cc-gmod-starwarsrp
          span &nbsp;основная идея - иммерсивное управление, минусы: не сильно модульный, то есть заточен именно под Star Wars RP
        .mt-2
          b Режим YandereRP&nbsp;
          span - сборка maxmol&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-gmod-yandererp" target="_blank") totor13x/shaft-cc-gmod-yandererp
          span &nbsp;преставляет собой дамп после покупки, лучше к нему подходить с определенными знаниями в lua
        .mt-2
          b Режим Minigames&nbsp;
          span - написан в 2016&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-gmod-minigames" target="_blank") totor13x/shaft-cc-gmod-minigames
          span &nbsp;остался на уровне концепции, никаких уникальных особенностей, просто набор скриптов
        .mt-2
          b Режим Cinema&nbsp;
          span - написан в 2018&nbsp;
          a.text-blue-600.hover_underline.cursor-pointer(href="https://github.com/totor13x/shaft-cc-gmod-cinema" target="_blank") totor13x/shaft-cc-gmod-cinema
          span &nbsp;раньше был актуален, много разных сервисов. Главное отличие - возможность просмотра сериалов, ночной клуб, и возможность развивать мини-игры внутри режима
      .text-2xl.mt-12(id="stats")
        span.text-gray-600.hover_underline.cursor-pointer(@click="copyLink('stats')") #
        span.font-bold.ml-2 Статистика за все время
      .mt-6
        div Посетителей - 145,440
        div Блокировок - 22,220
        div Сообщений в глобальный чат - 81,232
        div Сделаных фотографий - 9,589
        div Наборов в администрацию - 30
        div Донатов - 1,093,350.21
        div Расходов на сервера - 664,000
      .text-2xl.mt-12(id="discord")
        span.text-gray-600.hover_underline.cursor-pointer(@click="copyLink('discord')") #
        span.font-bold.ml-2 Discord
      .mt-6
        span От проекта остается один дискорд канал, разработка прекращена, а канал не будет обновляться. Если есть желание зайти, пообщаться, присоединяйтесь.&nbsp;
        a.text-blue-600.hover_underline.cursor-pointer(href="https://discord.gg/J6W3cFU" target="_blank") Discord Shaft.cc
      .text-2xl.mt-12(id="deathrun-maps")
        span.text-gray-600.hover_underline.cursor-pointer(@click="copyLink('deathrun-maps')") #
        span.font-bold.ml-2 Deathrun карты
      .mt-6.grid.md_grid-cols-3.grid-cols-1
        a.p-2.hover_underline.text-blue-600(
          v-for="(map, key) in deathrunMaps"
          :key="`map-${key}`"
          :href="map.link"
        ) {{ map.name }}
</template>
<script>
import Trigger from '~/components/Trigger.vue'
import _ from 'lodash'
export default {
  components: {
    Trigger
  },
  data: () => ({
    dark: false,
    navigation: [
      {
        label: 'Описание',
        link: '#description'
      },
      {
        label: 'Github проект',
        link: '#github'
      },
      {
        label: 'Статистика',
        link: '#stats'
      },
      {
        label: 'Discord',
        link: '#discord'
      },
      {
        label: 'Deathrun карты',
        link: '#deathrun-maps'
      }
    ],
    deathrunMaps: [
      {
        name: 'deathrun_undertale_v1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554554875'
      },
      {
        name: 'deathrun_texture_extreme_v3',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554554669'
      },
      {
        name: 'deathrun_synchronicity_x11',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554554547'
      },
      {
        name: 'deathrun_stone_extended_v1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554554379'
      },
      {
        name: 'deathrun_steam_works_2',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554554290'
      },
      {
        name: 'deathrun_spongebob_finalfix3',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554554121'
      },
      {
        name: 'deathrun_southpark_r_fix',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554553944'
      },
      {
        name: 'deathrun_sonic_fixed3',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554553652'
      },
      {
        name: 'Deathrun_Solar_v3_1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554553425'
      },
      {
        name: 'deathrun_snowstone_v2_5',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554553105'
      },
      {
        name: 'deathrun_snowdream',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554552873'
      },
      {
        name: 'deathrun_re_zerochance_v1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554552595'
      },
      {
        name: 'deathrun_prisonbreak_v2',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554552493'
      },
      {
        name: 'deathrun_pool_final1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554552319'
      },
      {
        name: 'deathrun_poker_final6',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554552120'
      },
      {
        name: 'dr_minecraft_v1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554551974'
      },
      {
        name: 'deathrun_helix_d8',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554551455'
      },
      {
        name: 'deathrun_goldfever_1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554551140'
      },
      {
        name: 'deathrun_drop_v3',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554551023'
      },
      {
        name: 'deathrun_docks_v1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554550932'
      },
      {
        name: 'deathrun_deluxe_v7_1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554550769'
      },
      {
        name: 'dr_dekt_v2_fix',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554550621'
      },
      {
        name: 'dr_combine_c1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554550493'
      },
      {
        name: 'deathrun_crash_medievil_1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554534108'
      },
      {
        name: 'deathrun_challenging_v1',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554531820'
      },
      {
        name: 'deathrun_aztecan_v5_evening',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554529642'
      },
      {
        name: 'deathrun_akai_5up3r_f1n4l',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554526501'
      },
      {
        name: 'deathrun_no_stone_retextured',
        link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2554395347'
      }
    ],
    donate: []
  }),
  mounted () {
    // console.log(this.donate)
    // this.donate.associate.sort(function (a, b) {
    //   if (a.cost > b.cost) {
    //     return 1
    //   }
    //   if (a.cost < b.cost) {
    //     return -1
    //   }
    //   // a должно быть равным b
    //   return 0
    // })
  },
  methods: {
    copyLink (id) {
      this.$toast.success('Линк скопирован', {
        position: 'bottom',
        duration: 3000
      })
      const oInput = document.createElement('input')
      oInput.value = `https://shaft.cc/#${id}`
      document.body.appendChild(oInput)
      oInput.select()
      document.execCommand('Copy')
      oInput.className = 'oInput'
      oInput.style.display = 'none'
      this.$router.push(`#${id}`)
    }
  },
  computed: {
    donators () {
      return _.forEachRight(this.donate.associate)
    }
  }
}
</script>
<style scoped>
  .response-text {
    font-size: 8vw;
  }
  .response-img {
    width: 22vw;
  }
</style>
