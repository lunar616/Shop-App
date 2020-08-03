<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="container-title">Shop Page</h1>
        <div class="items-wrapper">
          <shopItem :product="product" v-for="product in shopList" :key="product.id"/>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import shopItem from '@/components/ShopItem/ShopItem.vue'

export default {
  components: {
    shopItem
  },
  data() {
    return {
      shopList: null,
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
    console.log(this.shopList)
  },
};
</script>

<style lang="scss" scoped>
@import './Shop.module.scss';
</style>