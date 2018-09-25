<template>
  <div id="app">
    <nav  id="nav" class="navbar is-danger">
       <div class="navbar-brand">
          <router-link class="navbar-item has-text-centered" to="/">K.D.A. - <font-awesome-icon icon="bug" /></router-link>
        </div>
      <div class="navbar-menu">
        <div class="navbar-end">
              <router-link class="navbar-item" to="/">Главная</router-link>
              <router-link class="navbar-item" to="/experience">Опыт</router-link>
              <router-link class="navbar-item" to="/blog">Блог</router-link>
          <div class="navbar-item">
            <div class="field is-grouped">
                <p class="control">
                <a class="button is-medium is-light" href="https://github.com/marquisDecarabia">
                  <span class="icon has-text-danger">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </span>
                 </a>
                </p>
                <p class="control">
                <a class="button is-medium is-light" href="https://vk.com/marquis_decarabia">
                  <span class="icon has-text-danger">
                    <font-awesome-icon :icon="['fab', 'vk']" />
                  </span>
                 </a>
                </p>
            </div>
          </div>
        </div>
      </div>
      </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
