<template>
<section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Я - Крюкова Дарья Алексеевна
      </h1>
      <h2 class="subtitle">
        Начинающий Javascript разработчик
      </h2>
         <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Мне почти 22 </p>
          <p class="subtitle">Пытаюсь в программирование с 15 лет. Увлечение программированием началось ещё в школьные годы, но было низкоуровневым. <br><br> ba dum tss</p>
        </article>
        <article class="tile is-child notification is-black">
          <p class="title">Любимый цвет - чёрный</p>
          <p class="subtitle">Но я искусственно ограничиваю его использование в дизайне чего-либо. 
        В целом имею специфичное чувство вкуса и хочу как-нибудь пройти крутой курс по UI/UX дизайну. 
        <br></p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-info has-text-white">
          <p class="title"> Люблю животных</p>
          <p class="subtitle">Особенно котов и собак.<br>
            Меню красное потому что я люблю божьих коровок. <font-awesome-icon icon="bug" />
          </p>
          <figure class="image">
            <img src="https://sun1-12.userapi.com/c7004/v7004148/4f05d/XWrYqmQKMWs.jpg">
          </figure>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
       <a href="/blog"><article class="tile is-child notification is-warning">
        <p class="title">Не пишу статьи</p>
        <p class="subtitle">Пока что. Но для примера здесь можно посмотреть на их выгрузку из News API. Совсем чуть-чуть.
          <br>
        </p>
      </article></a>
    </div>
  </div>
  <div class="tile is-parent">
   <article class="tile is-child notification is-danger">
      <div class="content">
        <p class="title">Не кусаюсь</p>
        <p class="subtitle">Вообще никогда.<br>
        Честно.<br><br>Положительные качества:<br>
        <ul>
          <li v-for="(good, index) in goodBoys" :key="index">{{good}}</li>
        </ul>
        <br>Недостатки:<br>
        <ul>
          <li> <span style="font-family: kurbanistika">kurbanistika (шрифт)</span><font-awesome-icon icon="heart" /></li>
          <li v-for="(bad, index) in badBoys" :key="index">{{bad}}</li>
        </ul>
        </p>
      </div>
    </article>
  </div>
</div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      goodBoys: [
        'Живой ум',
        'Старательность',
        'Ответственность',
        'Неконфликтность',
        'Желание учиться новому',
        'Любовь к решению задач'
      ],
      badBoys: [
          'Проблемы с тайм-менеджментом',
          'Заниженная самооценка',
          'Слабое чувство юмора',
          'Не умею пить воду',
          'Плохо коммичу'
      ]
    }
  },
  components: {
    
  }
}
</script>

<style>
@font-face {
    font-family: kurbanistika;
    src: url('../assets/kurban.otf');
}

/* .container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
} */
</style>
