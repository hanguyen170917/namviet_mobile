<template>
  <div>
    <section-breadcrumb></section-breadcrumb>
    <section class="products-section-2 section">
      <div class="container">
        <div class="bill-info">
          <h1 class="title">THÔNG TIN ĐẶT HÀNG</h1>
          <div class="bill-info_content">
            <div class="bill-info_content_orderInfo">
              <p class="bill-info_content_title">Thông tin đặt hàng</p>
              <div class="bill-info_content_orderStatus">
                <p>Số lượng: x2</p>
                <p>Tình trạng đơn hàng: Đang giao</p>
              </div>
            </div>
            <div class="bill-info_content_addressDelivery">
              <p class="bill-info_content_title">Địa chỉ giao hàng</p>
              <div class="bill-info_content_infoUser">
                <p class="bill-info_content_name">abc</p>
                <p class="bill-info_content_email">abc@gmail.com</p>
                <p class="bill-info_content_address">
                  71/9, đường số 14, Phường 8, Gò Vấp, TP.HCM
                </p>
              </div>
            </div>
            <div class="bill-info_content_productInfo">
              <p class="bill-info_content_title">Sản phẩm</p>
              <div class="cart-item" v-for="item in data" :key="item.id">
                <div class="cart-item_left">
                  <img
                    :src="getImageUrl(item.img)"
                    alt=""
                    class="cart-item_left_img"
                  />
                </div>
                <div class="cart-item_right">
                  <p class="cart-item_right_name_product">{{ item.name }}</p>
                  <p>Số lượng: x{{ item.quantity }}</p>
                  <p class="cart-item_right_color">
                    Màu:
                    <img :src="getImageUrl(item.color)" alt="" />
                  </p>
                  <p class="cart-item_right_price">
                    Giá: {{ formatCurrency(item.price) }}
                  </p>
                </div>
              </div>
            </div>
            <div class="bill-info_content_paymentInfo">
              <div
                class="bill-info_content_paymentInfo_item"
                v-for="item in paymentInfoList"
                :key="item"
              >
                <div class="bill-info_content_paymentInfo_item_left">
                  {{ item.itemLeft }}
                </div>
                <div class="bill-info_content_paymentInfo_item_right">
                  {{ item.itemRight }}
                </div>
              </div>
            </div>
            <div class="bill-info_content_totalBill">
              <div class="bill-info_content_totalBill_left">Tổng cộng:</div>
              <div class="bill-info_content_totalBill_right">15.000.000đ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, h } from "vue";
import SectionBreadcrumb from "@/components/sections/SectionBreadcrumb.vue";
import { getImageUrl } from "@/helpers/url.js";
import { formatCurrency } from "@/helpers/format.js";

const data = ref([
  {
    id: "1",
    no: "http:dasdasd",
    name: "Don't Look Back in Anger",
    price: 35000000,
    color: "product-cart-color-1.png",
    quantity: 5,
    img: "bill-info-1.png",
  },
  {
    id: "2",
    no: "",
    name: "Don't Look Back in Anger",
    price: 35000000,
    color: "product-cart-color-1.png",
    quantity: 5,
    img: "bill-info-1.png",
  },
  {
    id: "3",
    no: "",
    name: "Don't Look Back in Anger",
    price: 35000000,
    color: "product-cart-color-1.png",
    quantity: 5,
    img: "bill-info-1.png",
  },
]);

const totalPrice = computed(() => {
  let total = 0;
  for (let i = 0; i < data.value.length; i++) {
    const item = data.value[i];
    total += item.price * item.quantity;
  }
  return formatCurrency(total);
});

const paymentInfoList = ref([
  {
    itemLeft: "Mã đơn hàng:",
    itemRight: "#001294746",
  },
  {
    itemLeft: "Tạm tính:",
    itemRight: totalPrice,
  },
  {
    itemLeft: "Thuế VAT (10%):",
    itemRight: "2.000.000đ",
  },
  {
    itemLeft: "Phí vận chuyển:",
    itemRight: "120.000đ",
  },
  {
    itemLeft: "Phương thức thanh toán:",
    itemRight: "Tiền mặt",
  },
  {
    itemLeft: "Mã giảm giá:",
    itemRight: "Namvietmobile30%",
  },
]);
</script>

<style scoped></style>
